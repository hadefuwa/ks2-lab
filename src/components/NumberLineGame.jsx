import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function NumberLineGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const [targetValue, setTargetValue] = useState(null);
  const [numberLine, setNumberLine] = useState({ min: 0, max: 10, step: 1 });
  const [draggedValue, setDraggedValue] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [availableValues, setAvailableValues] = useState([]);
  const [dropSlots, setDropSlots] = useState([]);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const numberLineRef = useRef(null);
  const gameAreaRef = useRef(null);

  const theme = {
    bg: 'linear-gradient(135deg, #f7efe2 0%, #e6f4ff 45%, #f7e9ff 100%)',
    card: '#ffffff',
    ink: '#2a2a2a',
    accent: '#1f7af0',
    accentSoft: '#e7f2ff',
    success: '#2aa865',
    border: '#d4e6ff',
  };

  // Check if this is a fractions lesson
  const isFractionsLesson = lesson?.title?.includes('Fractions on Number Line') || lesson?.title?.includes('fractions on number line');

  // Helper function to convert fraction to decimal
  const fractionToDecimal = (fraction) => {
    if (typeof fraction === 'number') return fraction;
    if (typeof fraction === 'string' && fraction.includes('/')) {
      const [num, den] = fraction.split('/').map(Number);
      return num / den;
    }
    return parseFloat(fraction);
  };
  const normalizeValue = (value) => Math.round(fractionToDecimal(value) * 1000) / 1000;

  // Generate problems based on lesson type
  const generateProblems = () => {
    if (isFractionsLesson) {
      return [
        { target: '1/2', min: 0, max: 1, values: ['1/4', '1/2', '3/4'], type: 'fraction' },
        { target: '1/4', min: 0, max: 1, values: ['1/4', '1/2', '3/4', '1/8'], type: 'fraction' },
        { target: '3/4', min: 0, max: 1, values: ['1/4', '1/2', '3/4', '1'], type: 'fraction' },
        { target: '1/2', min: 0, max: 1, values: ['1/3', '1/2', '2/3', '3/4'], type: 'fraction' },
        { target: '1/4', min: 0, max: 1, values: ['1/4', '1/2', '3/4', '1/8'], type: 'fraction' },
      ];
    }
    return [
      { target: 3, min: 0, max: 10, values: [1, 2, 3, 4, 5], type: 'whole' },
      { target: 7, min: 0, max: 10, values: [5, 6, 7, 8, 9], type: 'whole' },
      { target: 0.5, min: 0, max: 1, values: [0.25, 0.5, 0.75], type: 'decimal' },
      { target: 0.75, min: 0, max: 1, values: [0.25, 0.5, 0.75], type: 'decimal' },
      { target: '1/2', min: 0, max: 1, values: ['1/4', '1/2', '3/4'], type: 'fraction' },
    ];
  };

  const problems = React.useMemo(() => generateProblems(), [lesson?.title]);

  useEffect(() => {
    const problem = problems[level - 1] || problems[0];
    setTargetValue(problem.target);
    setNumberLine({ min: problem.min, max: problem.max, step: problem.step });

    const uniqueValues = Array.from(new Set([problem.target, ...(problem.values || [])]));
    const slotCount = Math.min(problem.type === 'whole' ? 3 : 4, uniqueValues.length);
    const distractors = uniqueValues.filter(val => val !== problem.target)
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.max(slotCount - 1, 0));
    const slots = [problem.target, ...distractors]
      .sort((a, b) => normalizeValue(a) - normalizeValue(b));
    setDropSlots(slots);

    const values = slots.map((val, idx) => ({
      id: `val-${idx}`,
      value: val,
      leftPercent: 18 + (idx % 4) * 20,
      topPercent: 72 + Math.floor(idx / 4) * 12,
    }));
    setAvailableValues(values);
    setShowSuccess(false);
  }, [level, problems]);

  const handleMouseDown = (e, value) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggedValue(value);
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !draggedValue) return;
    const gameArea = e.currentTarget;
    const rect = gameArea.getBoundingClientRect();
    const itemSize = 72;
    const x = e.clientX - rect.left - dragStartPos.current.x;
    const y = e.clientY - rect.top - dragStartPos.current.y;
    setAvailableValues(prev => prev.map(v =>
      v.id === draggedValue.id ? {
        ...v,
        x: Math.max(0, Math.min(x, rect.width - itemSize)),
        y: Math.max(0, Math.min(y, rect.height - itemSize)),
        isDragging: true,
      } : v
    ));
  };

  const handleMouseUp = (e) => {
    if (!isDragging || !draggedValue) {
      setIsDragging(false);
      setDraggedValue(null);
      return;
    }

    if (numberLineRef.current) {
      const rect = numberLineRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const lineWidth = rect.width - 40;
      const relativeX = Math.max(0, Math.min(clickX - 20, lineWidth));
      const ratio = relativeX / lineWidth;
      const position = numberLine.min + ratio * (numberLine.max - numberLine.min);

      const tolerance = (numberLine.max - numberLine.min) * 0.05;
      const targetDecimal = normalizeValue(targetValue);
      const draggedDecimal = normalizeValue(draggedValue.value);
      const closestSlot = dropSlots.reduce((closest, slotValue) => {
        const slotDecimal = normalizeValue(slotValue);
        const slotRatio = (slotDecimal - numberLine.min) / (numberLine.max - numberLine.min);
        const slotX = 20 + slotRatio * lineWidth;
        const distance = Math.abs(slotX - (relativeX + 20));
        if (!closest || distance < closest.distance) {
          return { value: slotValue, distance };
        }
        return closest;
      }, null);
      const isOnSlot = closestSlot && closestSlot.distance <= 28;
      const isCorrect = isOnSlot &&
        Math.abs(position - targetDecimal) < tolerance &&
        Math.abs(draggedDecimal - targetDecimal) < 0.01 &&
        Math.abs(normalizeValue(closestSlot.value) - targetDecimal) < 0.001;

      if (isCorrect) {
        setShowSuccess(true);
        setScore(prev => prev + 10);
        setAvailableValues(prev => prev.filter(v => v.id !== draggedValue.id));
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
    setDraggedValue(null);
    setAvailableValues(prev => prev.map(v => ({ ...v, isDragging: false })));
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

  const renderNumberLine = () => {
    const width = 640;
    const height = 120;
    const slotSet = new Set(dropSlots.map(val => normalizeValue(val)));
    const isZeroToOne = numberLine.min === 0 && numberLine.max === 1;

    if (isFractionsLesson && isZeroToOne) {
      const fractions = [
        { value: 0, label: '0' },
        { value: 0.25, label: '1/4' },
        { value: 0.5, label: '1/2' },
        { value: 0.75, label: '3/4' },
        { value: 1, label: '1' },
      ];

      return (
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1f7af0" />
              <stop offset="100%" stopColor="#5aa9ff" />
            </linearGradient>
          </defs>
          <line
            x1={20}
            y1={height / 2}
            x2={width - 20}
            y2={height / 2}
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx={20} cy={height / 2} r="6" fill="#1f7af0" />
          <circle cx={width - 20} cy={height / 2} r="6" fill="#5aa9ff" />
          {fractions.map((frac, i) => {
            const x = 20 + (frac.value / (numberLine.max - numberLine.min)) * (width - 40);
            const isSlot = slotSet.has(normalizeValue(frac.value));
            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={height / 2 - 10}
                  x2={x}
                  y2={height / 2 + 10}
                  stroke="#2a2a2a"
                  strokeWidth="3"
                />
                {isSlot ? (
                  <rect
                    x={x - 16}
                    y={height / 2 + 20}
                    width={32}
                    height={26}
                    rx={8}
                    fill="#ffffff"
                    stroke="#1f7af0"
                    strokeWidth="2"
                  />
                ) : (
                  <text
                    x={x}
                    y={height / 2 + 36}
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#2a2a2a"
                  >
                    {frac.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      );
    }

    if (!isFractionsLesson && isZeroToOne) {
      const decimals = [
        { value: 0, label: '0' },
        { value: 0.25, label: '0.25' },
        { value: 0.5, label: '0.5' },
        { value: 0.75, label: '0.75' },
        { value: 1, label: '1' },
      ];
      return (
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1f7af0" />
              <stop offset="100%" stopColor="#5aa9ff" />
            </linearGradient>
          </defs>
          <line
            x1={20}
            y1={height / 2}
            x2={width - 20}
            y2={height / 2}
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx={20} cy={height / 2} r="6" fill="#1f7af0" />
          <circle cx={width - 20} cy={height / 2} r="6" fill="#5aa9ff" />
          {decimals.map((dec, i) => {
            const x = 20 + (dec.value / (numberLine.max - numberLine.min)) * (width - 40);
            const isSlot = slotSet.has(normalizeValue(dec.value));
            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={height / 2 - 10}
                  x2={x}
                  y2={height / 2 + 10}
                  stroke="#2a2a2a"
                  strokeWidth="3"
                />
                {isSlot ? (
                  <rect
                    x={x - 16}
                    y={height / 2 + 20}
                    width={32}
                    height={26}
                    rx={8}
                    fill="#ffffff"
                    stroke="#1f7af0"
                    strokeWidth="2"
                  />
                ) : (
                  <text
                    x={x}
                    y={height / 2 + 36}
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#2a2a2a"
                  >
                    {dec.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      );
    }

    const tickCount = numberLine.max - numberLine.min + 1;
    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1f7af0" />
            <stop offset="100%" stopColor="#5aa9ff" />
          </linearGradient>
        </defs>
        <line
          x1={20}
          y1={height / 2}
          x2={width - 20}
          y2={height / 2}
          stroke="url(#lineGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx={20} cy={height / 2} r="6" fill="#1f7af0" />
        <circle cx={width - 20} cy={height / 2} r="6" fill="#5aa9ff" />
        {Array.from({ length: tickCount }, (_, i) => {
          const value = numberLine.min + i;
          const x = 20 + (i / (tickCount - 1)) * (width - 40);
          const isSlot = slotSet.has(normalizeValue(value));
          return (
            <g key={i}>
              <line
                x1={x}
                y1={height / 2 - 12}
                x2={x}
                y2={height / 2 + 12}
                stroke="#2a2a2a"
                strokeWidth="3"
              />
              {isSlot ? (
                <rect
                  x={x - 16}
                  y={height / 2 + 20}
                  width={32}
                  height={26}
                  rx={8}
                  fill="#ffffff"
                  stroke="#1f7af0"
                  strokeWidth="2"
                />
              ) : (
                <text
                  x={x}
                  y={height / 2 + 38}
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="700"
                  fill="#2a2a2a"
                >
                  {value}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div style={{
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: theme.bg,
      borderRadius: '20px',
      fontFamily: '"Baloo 2", "Comic Neue", "Trebuchet MS", sans-serif',
      color: theme.ink,
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '18px',
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: theme.accentSoft,
            color: theme.accent,
            fontWeight: '700',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px',
          }}>
            Number Line Challenge
          </div>
          <h2 style={{ fontSize: '30px', margin: 0 }}>
            {isFractionsLesson ? 'Fractions on the Number Line' : 'Number Line Game'}
          </h2>
          <div style={{ fontSize: '16px', marginTop: '6px', color: '#4b4b4b' }}>
            Level {level} of {problems.length} · Score {score}
          </div>
        </div>
        <div style={{
          backgroundColor: theme.card,
          border: `2px solid ${theme.border}`,
          borderRadius: '16px',
          padding: '12px 16px',
          minWidth: '200px',
          textAlign: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
        }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7a99' }}>
            Target
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: theme.accent }}>
            {targetValue}
          </div>
          <div style={{ fontSize: '14px', color: '#5b5b5b' }}>
            Drag the matching card to an empty box
          </div>
        </div>
      </div>

      <div
        ref={gameAreaRef}
        style={{
          flex: 1,
          minHeight: 0,
          position: 'relative',
          border: `3px solid ${theme.border}`,
          borderRadius: '18px',
          backgroundColor: 'rgba(255,255,255,0.7)',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'default',
          padding: '24px',
          boxShadow: '0 12px 28px rgba(31, 122, 240, 0.12)',
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div style={{
          backgroundColor: theme.card,
          borderRadius: '18px',
          padding: '20px',
          border: `2px solid ${theme.border}`,
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        }}>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>
            Place {targetValue} in the correct empty spot
          </div>
          <div ref={numberLineRef}>
            {renderNumberLine()}
          </div>
        </div>

        {availableValues.map(val => (
          <div
            key={val.id}
            onMouseDown={(e) => handleMouseDown(e, val)}
            style={{
              position: 'absolute',
              left: val.isDragging && val.x !== undefined ? `${val.x}px` : `${val.leftPercent}%`,
              top: val.isDragging && val.y !== undefined ? `${val.y}px` : `${val.topPercent}%`,
              transform: val.isDragging && val.x !== undefined ? 'scale(1.1)' : 'translate(-50%, -50%)',
              width: '88px',
              height: '64px',
              fontSize: '22px',
              fontWeight: '800',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: theme.card,
              border: `3px solid ${theme.accent}`,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging && draggedValue?.id === val.id ? 'none' : 'all 0.2s',
              zIndex: isDragging && draggedValue?.id === val.id ? 1000 : 1,
              boxShadow: '0 10px 18px rgba(31, 122, 240, 0.2)',
            }}
          >
            {val.value}
          </div>
        ))}

        {showSuccess && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '40px',
            fontWeight: '800',
            color: theme.success,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            padding: '24px 32px',
            borderRadius: '24px',
            boxShadow: '0 16px 30px rgba(0,0,0,0.2)',
            zIndex: 2000,
          }}>
            Correct!
          </div>
        )}
      </div>
    </div>
  );
}

export default NumberLineGame;
