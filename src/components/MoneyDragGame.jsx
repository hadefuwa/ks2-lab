import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

// Define UK coin characteristics for realism
const UK_COINS = {
  1: { display: '1p', value: 1, shape: 'circle', color: '#BC8A4E', size: 40, borderColor: '#A3723E', textColor: '#FFFFFF', fontSize: 16 }, // Copper
  2: { display: '2p', value: 2, shape: 'circle', color: '#BC8A4E', size: 50, borderColor: '#A3723E', textColor: '#FFFFFF', fontSize: 20 }, // Copper
  5: { display: '5p', value: 5, shape: 'circle', color: '#E0E0E0', size: 45, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 18 }, // Silver
  10: { display: '10p', value: 10, shape: 'circle', color: '#E0E0E0', size: 55, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 22 }, // Silver
  20: { display: '20p', value: 20, shape: 'heptagon', color: '#E0E0E0', size: 60, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 24 }, // Silver, heptagonal
  50: { display: '50p', value: 50, shape: 'heptagon', color: '#E0E0E0', size: 70, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 28 }, // Silver, heptagonal
  100: { display: '£1', value: 100, shape: 'circle', color: '#D4AF37', innerColor: '#E0E0E0', size: 65, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 26 }, // Bi-metallic
  200: { display: '£2', value: 200, shape: 'circle', color: '#E0E0E0', innerColor: '#D4AF37', size: 75, borderColor: '#C0C0C0', textColor: '#333333', fontSize: 30 }, // Bi-metallic
};

function MoneyDragGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextLessonAfter = useDataStore(state => state.getNextLessonAfter);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const [targetAmount, setTargetAmount] = useState(0);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [availableCoins, setAvailableCoins] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCoin, setDragCoin] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gameAreaSize, setGameAreaSize] = useState({ width: 800, height: 500 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const targetAreaRef = useRef(null);
  const gameAreaRef = useRef(null);

  const problems = [
    { target: 20, availableCoinValues: [{ value: 10, count: 2 }, { value: 5, count: 3 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 30, availableCoinValues: [{ value: 20, count: 1 }, { value: 10, count: 2 }, { value: 5, count: 2 }, { value: 2, count: 3 }, { value: 1, count: 5 }] },
    { target: 40, availableCoinValues: [{ value: 20, count: 2 }, { value: 10, count: 1 }, { value: 5, count: 2 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 50, availableCoinValues: [{ value: 50, count: 1 }, { value: 20, count: 1 }, { value: 10, count: 2 }, { value: 5, count: 2 }, { value: 2, count: 3 }, { value: 1, count: 5 }] },
    { target: 75, availableCoinValues: [{ value: 50, count: 1 }, { value: 20, count: 2 }, { value: 10, count: 1 }, { value: 5, count: 2 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 120, availableCoinValues: [{ value: 100, count: 1 }, { value: 50, count: 1 }, { value: 20, count: 2 }, { value: 10, count: 2 }, { value: 5, count: 2 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 150, availableCoinValues: [{ value: 100, count: 1 }, { value: 50, count: 1 }, { value: 20, count: 2 }, { value: 10, count: 2 }, { value: 5, count: 2 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 200, availableCoinValues: [{ value: 200, count: 1 }, { value: 100, count: 1 }, { value: 50, count: 1 }, { value: 20, count: 2 }, { value: 10, count: 2 }, { value: 5, count: 2 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
    { target: 300, availableCoinValues: [{ value: 200, count: 1 }, { value: 100, count: 2 }, { value: 50, count: 2 }, { value: 20, count: 3 }, { value: 10, count: 5 }, { value: 5, count: 5 }, { value: 2, count: 5 }, { value: 1, count: 5 }] },
  ];

  // Update game area size on resize
  React.useEffect(() => {
    const updateSize = () => {
      if (gameAreaRef.current) {
        const rect = gameAreaRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setGameAreaSize({ width: rect.width, height: rect.height });
        }
      }
    };

    setTimeout(updateSize, 100);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const startNewProblem = () => {
    const problem = problems[level - 1] || problems[0];
    setTargetAmount(problem.target);
    
    // Calculate safe area - keep coins in upper 60% of screen to avoid target area at bottom
    // Max coin size is for £2 (75px)
    const maxCoinSize = 75; 
    const safeAreaTop = 20;
    const safeAreaBottom = gameAreaSize.height * 0.6 - maxCoinSize; 
    const safeAreaLeft = 20;
    const safeAreaRight = gameAreaSize.width - maxCoinSize - 20;
    
    const coins = [];
    let coinId = 0;
    problem.availableCoinValues.forEach(coinType => {
      const ukCoin = UK_COINS[coinType.value];
      if (!ukCoin) return; // Skip if coin value not defined

      for (let i = 0; i < coinType.count; i++) {
        const x = safeAreaLeft + Math.random() * Math.max(10, safeAreaRight - safeAreaLeft);
        const y = safeAreaTop + Math.random() * Math.max(10, safeAreaBottom - safeAreaTop);
        
        coins.push({
          id: `${ukCoin.value}-${coinId++}`,
          value: ukCoin.value,
          display: ukCoin.display,
          shape: ukCoin.shape,
          color: ukCoin.color,
          innerColor: ukCoin.innerColor, // For bi-metallic
          size: ukCoin.size,
          borderColor: ukCoin.borderColor,
          textColor: ukCoin.textColor,
          fontSize: ukCoin.fontSize,
          x: Math.max(safeAreaLeft, Math.min(x, safeAreaRight)),
          y: Math.max(safeAreaTop, Math.min(y, safeAreaBottom)),
        });
      }
    });
    setAvailableCoins(coins.sort(() => Math.random() - 0.5));
    setSelectedCoins([]);
    setShowSuccess(false);
  };

  React.useEffect(() => {
    if (gameAreaSize.width > 0 && gameAreaSize.height > 0) {
      startNewProblem();
    }
  }, [level, gameAreaSize]);

  const handleMouseDown = (e, coin) => {
    e.preventDefault();
    setIsDragging(true);
    setDragCoin(coin);
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dragCoin) return;
    const gameArea = e.currentTarget;
    const rect = gameArea.getBoundingClientRect();
    const coinSize = 60;
    const x = e.clientX - rect.left - dragStartPos.current.x;
    const y = e.clientY - rect.top - dragStartPos.current.y;
    setAvailableCoins(prev => prev.map(coin =>
      coin.id === dragCoin.id ? { 
        ...coin, 
        x: Math.max(0, Math.min(x, rect.width - coinSize)), 
        y: Math.max(0, Math.min(y, rect.height - coinSize)) 
      } : coin
    ));
  };

  const handleMouseUp = (e) => {
    if (!isDragging || !dragCoin) {
      setIsDragging(false);
      setDragCoin(null);
      return;
    }

    if (targetAreaRef.current) {
      const targetRect = targetAreaRef.current.getBoundingClientRect();
      const coinRect = {
        left: e.clientX - dragStartPos.current.x,
        top: e.clientY - dragStartPos.current.y,
        right: e.clientX - dragStartPos.current.x + 60,
        bottom: e.clientY - dragStartPos.current.y + 60,
      };

      if (
        coinRect.left < targetRect.right &&
        coinRect.right > targetRect.left &&
        coinRect.top < targetRect.bottom &&
        coinRect.bottom > targetRect.top
      ) {
        const newSelectedCoins = [...selectedCoins, dragCoin];
        const newAvailableCoins = availableCoins.filter(coin => coin.id !== dragCoin.id);
        const total = newSelectedCoins.reduce((sum, c) => sum + c.value, 0);
        
        if (total === targetAmount) {
          setSelectedCoins(newSelectedCoins);
          setAvailableCoins(newAvailableCoins);
          setShowSuccess(true);
          setScore(prev => prev + 10);
          setTimeout(() => {
            if (level < problems.length) {
              setLevel(prev => prev + 1);
            } else {
              completeLesson();
            }
          }, 1500);
        } else if (total > targetAmount) {
          // Too much, don't add the coin
          // Just reset dragging state
        } else {
          // Still need more, add the coin
          setSelectedCoins(newSelectedCoins);
          setAvailableCoins(newAvailableCoins);
        }
      }
    }

    setIsDragging(false);
    setDragCoin(null);
  };

  const completeLesson = async () => {
    if (lesson) {
      const userId = getUserId();
      const progressId = getNextProgressId();
      const progress = new Progress({
        id: progressId,
        studentId: userId,
        activityType: 'Lesson',
        activityId: lesson.id,
        yearId: lesson.yearId,
        subjectId: lesson.subjectId,
        lessonNumber: lesson.lessonNumber,
        isCompleted: true,
        completedAt: new Date(),
        score: score + 50,
      });
      await addProgress(progress);
      saveData();
    }
  };

  const currentTotal = selectedCoins.reduce((sum, coin) => sum + coin.value, 0);

  return (
    <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Money Drag Game</h2>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>
          Level: {level} / {problems.length} | Score: {score}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196F3', marginBottom: '10px' }}>
          Make {targetAmount}p
        </div>
        <div style={{ fontSize: '20px', color: currentTotal === targetAmount ? '#28a745' : currentTotal > targetAmount ? '#dc3545' : '#666' }}>
          Current: {currentTotal}p
        </div>
      </div>

      <div
        ref={gameAreaRef}
        style={{
          flex: 1,
          minHeight: 0,
          position: 'relative',
          border: '3px solid #2196F3',
          borderRadius: '15px',
          backgroundColor: '#f0f8ff',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'default',
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {availableCoins.map(coin => (
          <div
            key={coin.id}
            onMouseDown={(e) => handleMouseDown(e, coin)}
            style={{
              position: 'absolute',
              left: `${coin.x}px`,
              top: `${coin.y}px`,
              width: `${coin.size}px`,
              height: `${coin.size}px`,
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: coin.color,
              borderRadius: coin.shape === 'circle' ? '50%' : '5px',
              border: `2px solid ${coin.borderColor}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging && dragCoin?.id === coin.id ? 'none' : 'all 0.2s',
              transform: isDragging && dragCoin?.id === coin.id ? 'scale(1.2)' : 'scale(1)',
              zIndex: isDragging && dragCoin?.id === coin.id ? 1000 : 1,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              // Heptagonal shape for 20p/50p
              clipPath: coin.shape === 'heptagon' ? 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' : 'none',
              WebkitClipPath: coin.shape === 'heptagon' ? 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' : 'none',
            }}
          >
            {/* Inner circle for bi-metallic coins */}
            {coin.innerColor && (
              <div
                style={{
                  width: `${coin.size * 0.6}px`,
                  height: `${coin.size * 0.6}px`,
                  backgroundColor: coin.innerColor,
                  borderRadius: '50%',
                  position: 'absolute',
                  zIndex: 2,
                  border: `1px solid ${coin.borderColor}`,
                }}
              />
            )}
            <div style={{ fontSize: `${coin.fontSize}px`, lineHeight: '1', fontWeight: 'bold', color: coin.textColor, zIndex: 3 }}>
              {coin.display}
            </div>
          </div>
        ))}

        <div
          ref={targetAreaRef}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: `min(300px, ${gameAreaSize.width * 0.8}px)`,
            minHeight: '100px',
            maxHeight: `${gameAreaSize.height * 0.25}px`,
            backgroundColor: currentTotal === targetAmount ? '#d4edda' : '#fff3cd',
            borderRadius: '15px',
            border: `4px ${currentTotal === targetAmount ? 'solid' : 'dashed'} ${currentTotal === targetAmount ? '#28a745' : '#ffc107'}`,
            padding: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            alignItems: 'flex-start',
            justifyContent: 'center', // Center coins in target area
            overflowY: 'auto',
          }}
        >
          {selectedCoins.map((coin, index) => (
            <div
              key={index}
              style={{
                width: `${coin.size * 0.7}px`, // Smaller in target
                height: `${coin.size * 0.7}px`,
                backgroundColor: coin.color,
                borderRadius: coin.shape === 'circle' ? '50%' : '5px',
                border: `1px solid ${coin.borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                clipPath: coin.shape === 'heptagon' ? 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' : 'none',
                WebkitClipPath: coin.shape === 'heptagon' ? 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' : 'none',
              }}
            >
              {coin.innerColor && (
                <div
                  style={{
                    width: `${coin.size * 0.6 * 0.7}px`, // Smaller inner circle
                    height: `${coin.size * 0.6 * 0.7}px`,
                    backgroundColor: coin.innerColor,
                    borderRadius: '50%',
                    position: 'absolute',
                    zIndex: 2,
                    border: `1px solid ${coin.borderColor}`,
                  }}
                />
              )}
              <div style={{ fontSize: `${coin.fontSize * 0.7}px`, lineHeight: '1', fontWeight: 'bold', color: coin.textColor, zIndex: 3 }}>
                {coin.display}
              </div>
            </div>
          ))}
          {selectedCoins.length === 0 && (
            <div style={{ width: '100%', textAlign: 'center', color: '#999', fontSize: '18px' }}>
              Drag coins here
            </div>
          )}
        </div>

        {showSuccess && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#28a745',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            zIndex: 2000,
          }}>
            ✓ Perfect! {targetAmount}p!
          </div>
        )}
      </div>
    </div>
  );
}

export default MoneyDragGame;
