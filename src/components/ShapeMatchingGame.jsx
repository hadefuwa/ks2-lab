import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function ShapeMatchingGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  const [targetShape, setTargetShape] = useState(null);
  const [availableShapes, setAvailableShapes] = useState([]);
  const [matchedShapes, setMatchedShapes] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragShape, setDragShape] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const targetAreaRef = useRef(null);
  const gameAreaRef = useRef(null);

  const shapeTypes = {
    circle: { name: 'Circle', sides: 0, vertices: 0, emoji: '⭕' },
    triangle: { name: 'Triangle', sides: 3, vertices: 3, emoji: '🔺' },
    square: { name: 'Square', sides: 4, vertices: 4, emoji: '⬜' },
    rectangle: { name: 'Rectangle', sides: 4, vertices: 4, emoji: '▭' },
    pentagon: { name: 'Pentagon', sides: 5, vertices: 5, emoji: '⬟' },
    hexagon: { name: 'Hexagon', sides: 6, vertices: 6, emoji: '⬡' },
  };

  const problems = [
    { target: 'circle', shapes: ['circle', 'triangle', 'square'], property: 'name' },
    { target: 'triangle', shapes: ['triangle', 'square', 'pentagon'], property: 'sides' },
    { target: 'square', shapes: ['square', 'rectangle', 'hexagon'], property: 'vertices' },
    { target: 'pentagon', shapes: ['pentagon', 'hexagon', 'triangle'], property: 'sides' },
    { target: 'hexagon', shapes: ['hexagon', 'pentagon', 'square'], property: 'vertices' },
  ];

  useEffect(() => {
    const problem = problems[level - 1] || problems[0];
    setTargetShape(shapeTypes[problem.target]);
    
    const shapes = problem.shapes.map((shape, idx) => ({
      id: `shape-${idx}`,
      type: shape,
      ...shapeTypes[shape],
      x: 50 + (idx % 3) * 120,
      y: 50 + Math.floor(idx / 3) * 120,
    }));
    setAvailableShapes(shapes);
    setMatchedShapes([]);
    setShowSuccess(false);
  }, [level]);

  const handleMouseDown = (e, shape) => {
    e.preventDefault();
    setIsDragging(true);
    setDragShape(shape);
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dragShape) return;
    const gameArea = e.currentTarget;
    const rect = gameArea.getBoundingClientRect();
    const shapeSize = 80;
    const x = e.clientX - rect.left - dragStartPos.current.x;
    const y = e.clientY - rect.top - dragStartPos.current.y;
    setAvailableShapes(prev => prev.map(s =>
      s.id === dragShape.id ? { ...s, x: Math.max(0, Math.min(x, rect.width - shapeSize)), y: Math.max(0, Math.min(y, rect.height - shapeSize)) } : s
    ));
  };

  const handleMouseUp = (e) => {
    if (!isDragging || !dragShape) {
      setIsDragging(false);
      setDragShape(null);
      return;
    }

    if (targetAreaRef.current) {
      const targetRect = targetAreaRef.current.getBoundingClientRect();
      const shapeRect = {
        left: e.clientX - dragStartPos.current.x,
        top: e.clientY - dragStartPos.current.y,
        right: e.clientX - dragStartPos.current.x + 80,
        bottom: e.clientY - dragStartPos.current.y + 80,
      };

      if (
        shapeRect.left < targetRect.right &&
        shapeRect.right > targetRect.left &&
        shapeRect.top < targetRect.bottom &&
        shapeRect.bottom > targetRect.top
      ) {
        // Check if shape matches target
        const problem = problems[level - 1];
        const isMatch = dragShape.type === problem.target;
        
        if (isMatch) {
          setMatchedShapes(prev => [...prev, dragShape]);
          setAvailableShapes(prev => prev.filter(s => s.id !== dragShape.id));
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
    }

    setIsDragging(false);
    setDragShape(null);
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

  const problem = problems[level - 1] || problems[0];

  return (
    <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Shape Matching Game</h2>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>
          Level: {level} / {problems.length} | Score: {score}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196F3', marginBottom: '10px' }}>
          Match the {targetShape?.name}!
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
        {/* Target Area */}
        <div
          ref={targetAreaRef}
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '150px',
            border: '4px dashed #2196F3',
            borderRadius: '15px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>
            {targetShape?.emoji}
          </div>
          <div style={{ fontSize: '16px', color: '#666', textAlign: 'center' }}>
            {targetShape?.name}
          </div>
        </div>

        {/* Available Shapes */}
        {availableShapes.map(shape => (
          <div
            key={shape.id}
            onMouseDown={(e) => handleMouseDown(e, shape)}
            style={{
              position: 'absolute',
              left: `${shape.x}px`,
              top: `${shape.y + 200}px`,
              width: '100px',
              height: '100px',
              fontSize: '48px',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: '#fff',
              border: '3px solid #2196F3',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging && dragShape?.id === shape.id ? 'none' : 'all 0.2s',
              transform: isDragging && dragShape?.id === shape.id ? 'scale(1.2)' : 'scale(1)',
              zIndex: isDragging && dragShape?.id === shape.id ? 1000 : 1,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            <div>{shape.emoji}</div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
              {shape.name}
            </div>
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
            ✓ Correct Match!
          </div>
        )}
      </div>
    </div>
  );
}

export default ShapeMatchingGame;
