import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function PlaceValueGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const [targetNumber, setTargetNumber] = useState(0);
  const [selectedDigits, setSelectedDigits] = useState([]);
  const [availableDigits, setAvailableDigits] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDigit, setDragDigit] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [maxPlace, setMaxPlace] = useState(2); // 2 = tens, 3 = hundreds, etc.
  const dragStartPos = useRef({ x: 0, y: 0 });
  const placeValueRefs = useRef({});
  const gameAreaRef = useRef(null);

  const problems = [
    { number: 24, places: 2, digits: [2, 4, 1, 3, 5, 6] },
    { number: 67, places: 2, digits: [6, 7, 2, 3, 8, 9] },
    { number: 89, places: 2, digits: [8, 9, 1, 2, 4, 5] },
    { number: 156, places: 3, digits: [1, 5, 6, 2, 3, 4] },
    { number: 234, places: 3, digits: [2, 3, 4, 1, 5, 6] },
  ];

  useEffect(() => {
    const problem = problems[level - 1] || problems[0];
    setTargetNumber(problem.number);
    setMaxPlace(problem.places);
    
    // Create place value slots
    const places = [];
    for (let i = problem.places - 1; i >= 0; i--) {
      places.push({ place: i, value: null });
    }
    setSelectedDigits(places);
    
    // Create available digits
    const digits = problem.digits.map((digit, idx) => ({
      id: `digit-${idx}`,
      value: digit,
      x: 50 + (idx % 3) * 80,
      y: 50 + Math.floor(idx / 3) * 80,
    }));
    setAvailableDigits(digits);
    setShowSuccess(false);
  }, [level]);

  const handleMouseDown = (e, digit) => {
    e.preventDefault();
    setIsDragging(true);
    setDragDigit(digit);
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dragDigit) return;
    const gameArea = e.currentTarget;
    const rect = gameArea.getBoundingClientRect();
    const digitSize = 60;
    const x = e.clientX - rect.left - dragStartPos.current.x;
    const y = e.clientY - rect.top - dragStartPos.current.y;
    setAvailableDigits(prev => prev.map(d =>
      d.id === dragDigit.id ? { ...d, x: Math.max(0, Math.min(x, rect.width - digitSize)), y: Math.max(0, Math.min(y, rect.height - digitSize)) } : d
    ));
  };

  const handleMouseUp = (e) => {
    if (!isDragging || !dragDigit) {
      setIsDragging(false);
      setDragDigit(null);
      return;
    }

    // Check if dropped on a place value slot
    let droppedOnPlace = null;
    Object.keys(placeValueRefs.current).forEach(place => {
      const ref = placeValueRefs.current[place];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const digitRect = {
          left: e.clientX - dragStartPos.current.x,
          top: e.clientY - dragStartPos.current.y,
          right: e.clientX - dragStartPos.current.x + 60,
          bottom: e.clientY - dragStartPos.current.y + 60,
        };
        if (
          digitRect.left < rect.right &&
          digitRect.right > rect.left &&
          digitRect.top < rect.bottom &&
          digitRect.bottom > rect.top
        ) {
          droppedOnPlace = parseInt(place);
        }
      }
    });

    if (droppedOnPlace !== null) {
      const newSelected = [...selectedDigits];
      const existingIndex = newSelected.findIndex(s => s.place === droppedOnPlace);
      if (existingIndex >= 0) {
        // Replace existing digit
        const oldDigit = newSelected[existingIndex].value;
        if (oldDigit !== null) {
          // Return old digit to available
          setAvailableDigits(prev => [...prev, {
            id: `digit-${Date.now()}`,
            value: oldDigit,
            x: 50 + Math.random() * 200,
            y: 50 + Math.random() * 200,
          }]);
        }
        newSelected[existingIndex].value = dragDigit.value;
      }
      setSelectedDigits(newSelected);
      setAvailableDigits(prev => prev.filter(d => d.id !== dragDigit.id));
      
      // Check if complete
      const builtNumber = newSelected.reduce((sum, slot, idx) => {
        return sum + (slot.value || 0) * Math.pow(10, slot.place);
      }, 0);
      
      if (builtNumber === targetNumber && newSelected.every(s => s.value !== null)) {
        setShowSuccess(true);
        setScore(prev => prev + 10);
        setTimeout(() => {
          if (level < problems.length) {
            setLevel(prev => prev + 1);
          } else {
            completeLesson();
          }
        }, 1500);
      }
    }

    setIsDragging(false);
    setDragDigit(null);
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

  const placeNames = ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands'];
  const builtNumber = selectedDigits.reduce((sum, slot, idx) => {
    return sum + (slot.value || 0) * Math.pow(10, slot.place);
  }, 0);

  return (
    <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Place Value Game</h2>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>
          Level: {level} / {problems.length} | Score: {score}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196F3', marginBottom: '10px' }}>
          Build the number: {targetNumber}
        </div>
        <div style={{ fontSize: '18px', color: '#666' }}>
          Drag digits to the place value boxes!
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
          padding: '20px',
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Place Value Boxes */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {selectedDigits.map((slot, idx) => (
            <div
              key={slot.place}
              ref={el => placeValueRefs.current[slot.place] = el}
              style={{
                width: '80px',
                height: '100px',
                border: '3px dashed #2196F3',
                borderRadius: '10px',
                backgroundColor: slot.value !== null ? '#d4edda' : '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                {placeNames[slot.place]}
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>
                {slot.value !== null ? slot.value : '?'}
              </div>
            </div>
          ))}
        </div>

        {/* Available Digits */}
        {availableDigits.map(digit => (
          <div
            key={digit.id}
            onMouseDown={(e) => handleMouseDown(e, digit)}
            style={{
              position: 'absolute',
              left: `${digit.x}px`,
              top: `${digit.y}px`,
              width: '60px',
              height: '60px',
              fontSize: '36px',
              fontWeight: 'bold',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: '#fff',
              border: '3px solid #2196F3',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging && dragDigit?.id === digit.id ? 'none' : 'all 0.2s',
              transform: isDragging && dragDigit?.id === digit.id ? 'scale(1.2)' : 'scale(1)',
              zIndex: isDragging && dragDigit?.id === digit.id ? 1000 : 1,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            {digit.value}
          </div>
        ))}

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
            ✓ Correct! {targetNumber}
          </div>
        )}
      </div>

      <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '18px', color: '#666' }}>
        Current number: {builtNumber}
      </div>
    </div>
  );
}

export default PlaceValueGame;
