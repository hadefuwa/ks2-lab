import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

const SHAPES = [
  { id: 'circle', name: 'Circle', emoji: '🔵', hue: '#4f8cff' },
  { id: 'square', name: 'Square', emoji: '🟨', hue: '#ffc857' },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', hue: '#ff6b6b' },
  { id: 'diamond', name: 'Diamond', emoji: '🔷', hue: '#7b5cff' },
  { id: 'star', name: 'Star', emoji: '⭐', hue: '#f7d23e' },
];

const PATTERNS = [
  { sequence: ['circle', 'square', 'circle', 'square'], next: 'circle', label: 'ABAB' },
  { sequence: ['triangle', 'triangle', 'circle', 'triangle'], next: 'triangle', label: 'AABA' },
  { sequence: ['circle', 'triangle', 'diamond', 'circle'], next: 'triangle', label: 'ABCA' },
  { sequence: ['square', 'circle', 'circle', 'square'], next: 'circle', label: 'ABBA' },
  { sequence: ['star', 'diamond', 'triangle', 'diamond'], next: 'star', label: 'ABCBA' },
];

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const getShapeById = (id) => SHAPES.find(shape => shape.id === id) || SHAPES[0];

function ShapePatternGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);
  const getNextLessonUrl = useDataStore(state => state.getNextLessonUrl);

  const [pattern, setPattern] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  useEffect(() => {
    setLevel(1);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsGameOver(false);
    setFinalScore(null);
  }, [lesson?.id]);

  useEffect(() => {
    const currentPattern = PATTERNS[level - 1] || PATTERNS[0];
    setPattern(currentPattern);

    const distractors = SHAPES.filter(shape => shape.id !== currentPattern.next)
      .map(shape => shape.id)
      .slice(0, 3);
    setOptions(shuffle([currentPattern.next, ...distractors]));
    setSelectedOption(null);
    setShowFeedback(false);
  }, [level]);

  const handleOptionClick = (optionId) => {
    if (showFeedback || isGameOver) return;
    setSelectedOption(optionId);
    const isCorrect = optionId === pattern.next;
    setShowFeedback(true);

    if (isCorrect) {
      setScore(prev => prev + 10);
      setTimeout(() => {
        if (level < PATTERNS.length) {
          setLevel(prev => prev + 1);
        } else {
          completeLesson();
        }
      }, 1200);
    } else {
      setTimeout(() => {
        setShowFeedback(false);
        setSelectedOption(null);
      }, 1200);
    }
  };

  const completeLesson = async () => {
    if (!lesson) return;
    const totalScore = Math.round((score / (PATTERNS.length * 10)) * 100);
    const progress = new Progress({
      id: getNextProgressId(),
      studentId: getUserId(),
      activityType: 'Lesson',
      activityId: lesson.id,
      yearId: lesson.yearId,
      subjectId: lesson.subjectId,
      lessonNumber: lesson.lessonNumber,
      isCompleted: true,
      completedAt: new Date(),
      score: totalScore,
    });
    await addProgress(progress);
    await saveData();
    setFinalScore(totalScore);
    setIsGameOver(true);
  };

  const getMedal = () => {
    if (finalScore >= 98 || finalScore === 100) return { type: 'Platinum', color: '#E5E4E2', emoji: '🏆' };
    if (finalScore >= 85) return { type: 'Gold', color: '#FFD700', emoji: '🥇' };
    if (finalScore >= 70) return { type: 'Silver', color: '#C0C0C0', emoji: '🥈' };
    return { type: 'Bronze', color: '#CD7F32', emoji: '🥉' };
  };

  if (isGameOver) {
    const medal = getMedal();
    return (
      <div style={styles.outer}>
        <div style={styles.gameOverCard}>
          <div style={styles.medalEmoji}>{medal.emoji}</div>
          <h2 style={{ ...styles.medalTitle, color: medal.color }}>{medal.type} Medal!</h2>
          <div style={styles.finalScore}>Well done! Accuracy: {finalScore}%</div>
          <div style={styles.buttonRow}>
            <button
              onClick={() => navigate(`/lessons?subjectId=${lesson.subjectId}`)}
              style={styles.secondaryButton}
            >
              Back to Lessons
            </button>
            <button
              onClick={() => {
                const { url } = getNextLessonUrl(lesson);
                navigate(url);
              }}
              style={styles.primaryButton}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selectedOption === pattern?.next;
  const currentBadge = `Level ${level} of ${PATTERNS.length}`;

  return (
    <div style={styles.outer}>
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div style={styles.backdropBubbleA} />
      <div style={styles.backdropBubbleB} />
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <div style={styles.badge}>{currentBadge}</div>
            <h2 style={styles.title}>{lesson?.title || 'Patterns and Sequences'}</h2>
            <p style={styles.subtitle}>Pick the shape that comes next.</p>
          </div>
          <div style={styles.scorePill}>
            <span style={styles.scoreLabel}>Score</span>
            <span style={styles.scoreValue}>{score}</span>
          </div>
        </div>

        <div style={styles.patternArea}>
          <div style={styles.patternLabel}>Pattern {pattern?.label}</div>
          <div style={styles.patternRow}>
            {pattern?.sequence.map((shapeId, index) => {
              const shape = getShapeById(shapeId);
              return (
                <div key={`${shapeId}-${index}`} style={{ ...styles.patternTile, borderColor: shape.hue }}>
                  <span style={styles.patternEmoji}>{shape.emoji}</span>
                  <span style={styles.patternName}>{shape.name}</span>
                </div>
              );
            })}
            <div style={styles.blankTile}>?</div>
          </div>
        </div>

        <div style={styles.optionsArea}>
          {options.map(optionId => {
            const option = getShapeById(optionId);
            const isSelected = selectedOption === optionId;
            const isCorrectOption = optionId === pattern?.next;
            const isWrong = showFeedback && isSelected && !isCorrectOption;
            const isRight = showFeedback && isCorrectOption;
            const outline = isRight ? '#26c281' : isWrong ? '#ff6b6b' : option.hue;

            return (
              <button
                key={optionId}
                onClick={() => handleOptionClick(optionId)}
                disabled={showFeedback}
                style={{
                  ...styles.optionCard,
                  borderColor: outline,
                  boxShadow: isSelected ? `0 12px 24px ${option.hue}55` : '0 8px 16px rgba(0,0,0,0.12)',
                  transform: isSelected ? 'translateY(-4px)' : 'translateY(0px)',
                  backgroundColor: isRight ? '#e6fff3' : isWrong ? '#fff1f1' : 'white'
                }}
              >
                <span style={styles.optionEmoji}>{option.emoji}</span>
                <span style={styles.optionName}>{option.name}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div style={{ ...styles.feedback, color: isCorrect ? '#1b8f5a' : '#d64545' }}>
            {isCorrect ? 'Nice work! Keep going!' : 'Almost! Try a different shape.'}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  outer: {
    position: 'relative',
    height: '100%',
    minHeight: '600px',
    padding: '30px',
    overflow: 'hidden',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #fff1d6 0%, #dff3ff 45%, #f6eaff 100%)',
    fontFamily: '"Comic Sans MS", "Segoe Print", "Trebuchet MS", sans-serif',
  },
  backdropBubbleA: {
    position: 'absolute',
    top: '-40px',
    right: '-60px',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #ffd36e 0%, rgba(255, 211, 110, 0) 70%)',
    opacity: 0.8,
    animation: 'floaty 8s ease-in-out infinite',
  },
  backdropBubbleB: {
    position: 'absolute',
    bottom: '-60px',
    left: '-40px',
    width: '240px',
    height: '240px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #8ae5ff 0%, rgba(138, 229, 255, 0) 70%)',
    opacity: 0.7,
    animation: 'floaty 10s ease-in-out infinite',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    background: 'rgba(255,255,255,0.92)',
    borderRadius: '24px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    boxShadow: '0 18px 40px rgba(39, 53, 117, 0.15)',
    animation: 'pop 0.35s ease-out',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    backgroundColor: '#fff0c2',
    color: '#a35a00',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
  title: {
    margin: '10px 0 6px 0',
    fontSize: '32px',
    color: '#2d2a46',
    fontWeight: '900',
  },
  subtitle: {
    margin: 0,
    color: '#4c4a6f',
    fontSize: '16px',
  },
  scorePill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14px 18px',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #fff3d6, #e9f7ff)',
    border: '2px solid #f2e2b2',
    minWidth: '120px',
  },
  scoreLabel: { fontSize: '12px', color: '#7a6b4a', textTransform: 'uppercase', letterSpacing: '1px' },
  scoreValue: { fontSize: '28px', fontWeight: '900', color: '#2f2d4a' },
  patternArea: {
    padding: '18px',
    borderRadius: '18px',
    background: '#f7fbff',
    border: '2px dashed #b7ddff',
  },
  patternLabel: {
    fontSize: '14px',
    color: '#5a5f80',
    fontWeight: '700',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  patternRow: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  patternTile: {
    width: '120px',
    minHeight: '110px',
    borderRadius: '16px',
    border: '3px solid',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
  },
  patternEmoji: { fontSize: '42px' },
  patternName: { fontSize: '13px', color: '#6b6b7b', fontWeight: '700' },
  blankTile: {
    width: '120px',
    minHeight: '110px',
    borderRadius: '16px',
    border: '3px dashed #b0b5c9',
    background: '#f8f8fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#8e8fa8',
    fontWeight: '800',
  },
  optionsArea: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '16px',
  },
  optionCard: {
    borderRadius: '18px',
    border: '3px solid',
    background: 'white',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '700',
  },
  optionEmoji: { fontSize: '36px' },
  optionName: { fontSize: '14px', color: '#4a4a6a' },
  feedback: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '800',
  },
  gameOverCard: {
    background: 'white',
    padding: '50px',
    borderRadius: '28px',
    textAlign: 'center',
    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
    maxWidth: '520px',
    width: '100%',
    margin: '0 auto',
  },
  medalEmoji: { fontSize: '110px', marginBottom: '10px' },
  medalTitle: { fontSize: '44px', margin: '10px 0', fontWeight: '900' },
  finalScore: { fontSize: '22px', color: '#666', marginBottom: '30px' },
  buttonRow: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  primaryButton: {
    padding: '12px 22px',
    fontSize: '16px',
    fontWeight: '800',
    backgroundColor: '#2f6dff',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
  },
  secondaryButton: {
    padding: '12px 22px',
    fontSize: '16px',
    fontWeight: '800',
    backgroundColor: '#f8f9fa',
    color: '#333',
    border: '2px solid #ddd',
    borderRadius: '12px',
    cursor: 'pointer',
  },
};

export default ShapePatternGame;
