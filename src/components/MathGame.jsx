import React, { useState, useEffect } from 'react';
import { speak, stop } from '../utils/textToSpeech';
import useDataStore from '../store/dataStore';
import { Progress } from '../models/Progress';
import { useNavigate } from 'react-router-dom';

// Lesson configurations for math games
const LESSON_CONFIGS = {
  1: {
    type: 'counting-to-10',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: 'Counting to 10',
    emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
  },
  2: {
    type: 'counting-to-20',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    title: 'Counting to 20',
    emojis: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '1️⃣1️⃣', '1️⃣2️⃣', '1️⃣3️⃣', '1️⃣4️⃣', '1️⃣5️⃣', '1️⃣6️⃣', '1️⃣7️⃣', '1️⃣8️⃣', '1️⃣9️⃣', '2️⃣0️⃣'],
  },
};

// Scoring tiers
const SCORE_TIERS = {
  GOLD: { name: 'Gold', color: '#FFD700', tries: 1 },
  SILVER: { name: 'Silver', color: '#C0C0C0', tries: 2 },
  BRONZE: { name: 'Bronze', color: '#CD7F32', tries: 3 },
  FAIL: { name: 'Try Again', color: '#dc3545', tries: 0 },
};

// Number names for speech
const NUMBER_NAMES = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
  16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
};

function MathGame({ lesson }) {
  const [gameState, setGameState] = useState('activity'); // activity, validation, completed
  const [currentScore, setCurrentScore] = useState(null);
  const [validationAttempts, setValidationAttempts] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [validationOptions, setValidationOptions] = useState([]);
  const navigate = useNavigate();
  const addProgress = useDataStore(state => state.addProgress);
  const getNextLessonAfter = useDataStore(state => state.getNextLessonAfter);
  const getNextProgressId = useDataStore(state => state.getNextProgressId);
  const getUserId = useDataStore(state => state.getUserId);
  const saveData = useDataStore(state => state.saveData);

  // Map lesson number to math game
  const getMathLessonNumber = () => {
    if (lesson?.title) {
      if (lesson.title.includes('Counting to 10')) {
        return 1;
      } else if (lesson.title.includes('Counting to 20')) {
        return 2;
      }
    }
    return lesson?.lessonNumber || 1;
  };

  const mathLessonNumber = getMathLessonNumber();
  const config = LESSON_CONFIGS[mathLessonNumber] || LESSON_CONFIGS[1];

  useEffect(() => {
    return () => {
      stop();
    };
  }, [lesson?.id]);

  const handleNumberClick = async (number) => {
    // Stop any current speech first
    stop();
    const numberName = NUMBER_NAMES[number] || number.toString();
    await speak(numberName, { volume: 1.0, rate: 0.6, pitch: 1.2 });
  };

  const handleContinue = () => {
    setGameState('validation');
    setValidationAttempts(0);
    generateValidation();
  };

  const generateValidation = () => {
    // Generate a random question based on the lesson type
    let answer;
    let questionText = '';
    let options = [];

    if (config.type === 'counting-to-10') {
      // Random question types for counting to 10
      const questionType = Math.floor(Math.random() * 3);
      
      if (questionType === 0) {
        // "What number comes after X?"
        const baseNumber = Math.floor(Math.random() * 9) + 1; // 1-9
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 10);
      } else if (questionType === 1) {
        // "How many fingers on one hand?"
        answer = 5;
        questionText = 'How many fingers do you have on one hand?';
        options = [3, 4, 5, 6];
      } else {
        // "What is the biggest number?"
        answer = 10;
        questionText = 'What is the biggest number we learned?';
        options = [5, 8, 9, 10];
      }
    } else if (config.type === 'counting-to-20') {
      // Random question types for counting to 20
      const questionType = Math.floor(Math.random() * 3);
      
      if (questionType === 0) {
        // "What number comes after X?"
        const baseNumber = Math.floor(Math.random() * 19) + 1; // 1-19
        answer = baseNumber + 1;
        questionText = `What number comes after ${NUMBER_NAMES[baseNumber]}?`;
        options = [answer, baseNumber, baseNumber + 2, baseNumber - 1].filter(n => n > 0 && n <= 20);
      } else if (questionType === 1) {
        // "How many fingers and toes together?"
        answer = 20;
        questionText = 'How many fingers and toes do you have all together?';
        options = [15, 18, 20, 22];
      } else {
        // "What is the biggest number?"
        answer = 20;
        questionText = 'What is the biggest number we learned?';
        options = [15, 18, 19, 20];
      }
    }

    // Ensure we have exactly 4 options, remove duplicates, and shuffle
    const uniqueOptions = [...new Set(options)];
    while (uniqueOptions.length < 4) {
      const randomNum = Math.floor(Math.random() * config.numbers.length) + 1;
      if (!uniqueOptions.includes(randomNum) && randomNum <= config.numbers[config.numbers.length - 1]) {
        uniqueOptions.push(randomNum);
      }
    }
    options = uniqueOptions.slice(0, 4).sort(() => Math.random() - 0.5);
    
    setCorrectAnswer(answer);
    setValidationOptions(options);
    
    // Speak the question
    setTimeout(() => {
      speak(questionText, { volume: 1.0, rate: 0.6, pitch: 1.2 });
    }, 500);
  };

  const handleValidationAnswer = (option) => {
    // Prevent multiple clicks
    if (gameState === 'completed') {
      return;
    }

    const isCorrect = option === correctAnswer;
    const newAttempts = validationAttempts + 1;
    setValidationAttempts(newAttempts);

    if (isCorrect) {
      const score = getScore(newAttempts);
      completeLesson(score);
    } else {
      if (newAttempts >= 3) {
        const score = SCORE_TIERS.FAIL;
        completeLesson(score);
      } else {
        // Speak "try again" and regenerate
        speak('Try again!', { volume: 1.0, rate: 0.6, pitch: 1.2 });
        setTimeout(() => {
          generateValidation();
        }, 1000);
      }
    }
  };

  const getScore = (attempts) => {
    if (attempts === 1) return SCORE_TIERS.GOLD;
    if (attempts === 2) return SCORE_TIERS.SILVER;
    if (attempts === 3) return SCORE_TIERS.BRONZE;
    return SCORE_TIERS.FAIL;
  };

  const completeLesson = (score) => {
    setGameState('completed');
    setCurrentScore(score);
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
        score: score === SCORE_TIERS.GOLD ? 100 : score === SCORE_TIERS.SILVER ? 75 : score === SCORE_TIERS.BRONZE ? 50 : 0,
      });
      addProgress(progress).then(() => {
        saveData();
      }).catch(err => {
        console.error('Error saving progress:', err);
      });
    }
  };

  const renderActivity = () => {
    // Show numbers in a grid for tapping
    const numbersToShow = config.type === 'counting-to-10' 
      ? config.numbers.slice(0, 10)
      : config.numbers.slice(0, 20);

    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
          Tap a number to hear it! 🔢
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '20px', 
          maxWidth: '800px',
          margin: '0 auto 40px auto',
        }}>
          {numbersToShow.map((number, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(number)}
              onTouchStart={() => handleNumberClick(number)}
              style={{
                width: '120px',
                height: '120px',
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#fff',
                border: '5px solid #4CAF50',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.backgroundColor = '#e8f5e9';
                e.currentTarget.style.borderColor = '#2E7D32';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#4CAF50';
              }}
            >
              {config.emojis[index] || number}
            </button>
          ))}
        </div>
        <button
          onClick={handleContinue}
          style={{
            padding: '20px 50px',
            fontSize: '28px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#45a049';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#4CAF50';
          }}
        >
          Play Game! 🎮
        </button>
      </div>
    );
  };

  const renderValidation = () => {
    // Find the question text based on correct answer
    let questionText = 'Select the correct answer!';
    if (config.type === 'counting-to-10') {
      if (correctAnswer === 5) {
        questionText = 'How many fingers do you have on one hand?';
      } else if (correctAnswer === 10) {
        questionText = 'What is the biggest number we learned?';
      } else {
        questionText = `What number comes after ${NUMBER_NAMES[correctAnswer - 1]}?`;
      }
    } else if (config.type === 'counting-to-20') {
      if (correctAnswer === 20) {
        if (validationOptions.includes(20) && validationOptions.includes(15)) {
          questionText = 'How many fingers and toes do you have all together?';
        } else {
          questionText = 'What is the biggest number we learned?';
        }
      } else {
        questionText = `What number comes after ${NUMBER_NAMES[correctAnswer - 1]}?`;
      }
    }

    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px', color: '#333', fontWeight: 'bold' }}>
          {questionText}
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          flexWrap: 'wrap',
          marginBottom: '30px',
          maxWidth: '800px',
          margin: '0 auto 30px auto',
        }}>
          {validationOptions.map((option, index) => {
            const emojiIndex = option - 1;
            const emoji = config.emojis[emojiIndex] || option;
            return (
              <button
                key={index}
                onClick={() => handleValidationAnswer(option)}
                onTouchStart={() => handleValidationAnswer(option)}
                style={{
                  width: '150px',
                  height: '150px',
                  fontSize: '70px',
                  fontWeight: 'bold',
                  color: '#333',
                  backgroundColor: '#fff',
                  border: '5px solid #2196F3',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.backgroundColor = '#e3f2fd';
                  e.currentTarget.style.borderColor = '#1976D2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.borderColor = '#2196F3';
                }}
              >
                {emoji}
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: '24px', color: '#666', marginTop: '20px', fontWeight: 'bold' }}>
          Attempts: {validationAttempts} / 3
        </div>
      </div>
    );
  };

  if (gameState === 'completed' && currentScore) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '600px',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎉</div>
        <h2 style={{ color: currentScore.color, fontSize: '56px', marginBottom: '20px', margin: '0 0 20px 0', fontWeight: 'bold' }}>
          {currentScore.name} Medal! 🏅
        </h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => {
              navigate(`/lessons?subjectId=${lesson.subjectId}`);
            }}
            style={{
              padding: '18px 35px',
              fontSize: '22px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            }}
          >
            Back to Lessons
          </button>
          <button
            onClick={() => {
              const nextLesson = getNextLessonAfter(lesson);
              if (nextLesson && nextLesson.id) {
                navigate(`/lesson/${nextLesson.id}`);
              } else {
                navigate(`/lessons?subjectId=${lesson.subjectId}`);
              }
            }}
            style={{
              padding: '18px 40px',
              fontSize: '24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            }}
          >
            Next Lesson →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      minHeight: '600px',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {gameState === 'activity' && renderActivity()}
      {gameState === 'validation' && renderValidation()}
    </div>
  );
}

export default MathGame;
