import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';

function FlappyBirdGame({ lesson }) {
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextLessonAfter = useDataStore(state => state.getNextLessonAfter);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);
  
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef(null);
  const birdRef = useRef({ x: 50, y: 200, velocity: 0, radius: 15 });
  const pipesRef = useRef([]);
  const lastPipeTimeRef = useRef(0);
  const gravityRef = useRef(0.5);
  const jumpPowerRef = useRef(-8);
  const scoreRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;

    const bird = birdRef.current;
    const pipes = pipesRef.current;

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
      ctx.fillStyle = '#228B22';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 10);

      if (!isPlaying || isPaused) {
        // Draw start/pause screen
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(isPaused ? 'Paused' : 'Press SPACE to Start', canvas.width / 2, canvas.height / 2);
        ctx.font = '16px Arial';
        ctx.fillText('Press SPACE to jump', canvas.width / 2, canvas.height / 2 + 40);
        return;
      }

      // Update bird
      bird.velocity += gravityRef.current;
      bird.y += bird.velocity;

      // Keep bird in bounds
      if (bird.y < bird.radius) {
        bird.y = bird.radius;
        bird.velocity = 0;
      }
      if (bird.y > canvas.height - 50 - bird.radius) {
        bird.y = canvas.height - 50 - bird.radius;
        endGame();
        return;
      }

      // Draw bird
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFA500';
      ctx.beginPath();
      ctx.arc(bird.x - 5, bird.y - 3, 4, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw pipes
      const currentTime = Date.now();
      if (currentTime - lastPipeTimeRef.current > 2000) {
        const gap = 150;
        const pipeHeight = Math.random() * (canvas.height - gap - 100) + 50;
        pipes.push({
          x: canvas.width,
          topHeight: pipeHeight,
          bottomY: pipeHeight + gap,
          bottomHeight: canvas.height - (pipeHeight + gap) - 50,
          passed: false
        });
        lastPipeTimeRef.current = currentTime;
      }

      for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x -= 3;

        // Check collision
        if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + 50) {
          if (bird.y - bird.radius < pipe.topHeight || bird.y + bird.radius > pipe.bottomY) {
            endGame();
            return;
          }
        }

        // Score point
        if (!pipe.passed && bird.x > pipe.x + 50) {
          pipe.passed = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }

        // Draw pipe
        ctx.fillStyle = '#228B22';
        ctx.fillRect(pipe.x, 0, 50, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.bottomY, 50, pipe.bottomHeight);

        // Remove off-screen pipes
        if (pipe.x + 50 < 0) {
          pipes.splice(i, 1);
        }
      }

      // Draw score
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${scoreRef.current}`, 10, 30);
    };

    if (isPlaying && !isGameOver) {
      gameLoopRef.current = setInterval(draw, 16);
    } else {
      draw();
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, isGameOver, isPaused, score]);

  const handleKeyPress = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (!isPlaying) {
        startGame();
      } else if (!isGameOver) {
        if (isPaused) {
          setIsPaused(false);
        } else {
          birdRef.current.velocity = jumpPowerRef.current;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isGameOver, isPaused]);

  const startGame = () => {
    birdRef.current = { x: 50, y: 200, velocity: 0, radius: 15 };
    pipesRef.current = [];
    lastPipeTimeRef.current = Date.now();
    scoreRef.current = 0;
    setScore(0);
    setIsPlaying(true);
    setIsGameOver(false);
    setIsPaused(false);
  };

  const endGame = () => {
    const finalScore = scoreRef.current;
    setIsPlaying(false);
    setIsGameOver(true);
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }

    if (lesson) {
      setTimeout(() => {
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
          score: finalScore,
        });
        addProgress(progress).then(() => {
          saveData();
        }).catch(err => {
          console.error('Error saving progress:', err);
        });
      }, 0);
    }
  };

  const getGrade = () => {
    const currentScore = isGameOver ? scoreRef.current : score;
    if (currentScore >= 15) return { name: 'Platinum', color: '#E5E4E2' };
    if (currentScore >= 10) return { name: 'Gold', color: '#FFD700' };
    if (currentScore >= 5) return { name: 'Silver', color: '#C0C0C0' };
    return { name: 'Bronze', color: '#CD7F32' };
  };

  const grade = getGrade();
  const currentScore = isGameOver ? scoreRef.current : score;
  const canProgress = currentScore >= 1; // At least bronze (1 point)

  if (isGameOver) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '40px',
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px',
        }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</h1>
          <h2 style={{ marginBottom: '10px', fontSize: '28px' }}>Game Over!</h2>
          <div style={{
            margin: '20px 0',
            padding: '20px',
            backgroundColor: grade.color,
            borderRadius: '8px',
            color: '#333',
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
              {grade.name} Medal
            </div>
            <div style={{ fontSize: '18px' }}>Score: {scoreRef.current}</div>
          </div>
          {!canProgress && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#fff3cd',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              color: '#856404',
            }}>
              ⚠️ You need at least 1 point (Bronze) to progress. Try again!
            </div>
          )}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '30px',
          }}>
            <button
              onClick={startGame}
              style={{
                padding: '12px 30px',
                fontSize: '18px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Play Again
            </button>
            {lesson && canProgress && (
              <button
                onClick={async () => {
                  await new Promise(resolve => setTimeout(resolve, 200));
                  const nextLesson = getNextLessonAfter(lesson);
                  if (nextLesson) {
                    navigate(`/lesson/${nextLesson.id}`);
                  } else {
                    navigate(`/lessons?subjectId=${lesson.subjectId}`);
                  }
                }}
                style={{
                  padding: '12px 30px',
                  fontSize: '18px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '400px',
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
          Score: {scoreRef.current}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Press SPACE to jump
        </div>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          border: '3px solid #333',
          borderRadius: '8px',
          backgroundColor: '#87CEEB',
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
}

export default FlappyBirdGame;
