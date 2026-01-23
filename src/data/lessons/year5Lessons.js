import { Lesson } from '../../models/Lesson.js';

/**
 * Year 5 Lessons
 */
export function getYear5Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "TapTapTap: Master Level 1",
      emoji: '👆',
      content: `# TapTapTap: Master Level 1 👆

You've reached the master level! This is very challenging - only for the best tappers!

## How to Play

- Tap targets as they appear on screen
- Targets appear every 0.8 seconds (extremely fast!)
- Targets are small and require precision
- 30 seconds to score as many points as possible!

## Scoring System

- **Bronze**: 25-49 points
- **Silver**: 50-74 points
- **Gold**: 75-99 points
- **Platinum**: 100+ points

You need at least **Bronze** (25 points) to progress!

## Tips

- This level requires excellent hand-eye coordination
- Stay focused and don't get discouraged
- Every point counts!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "TapTapTap: Master Level 2",
      emoji: '👆',
      content: `# TapTapTap: Master Level 2 👆

Continue your master-level training! Keep pushing your limits!

## How to Play

- Tap targets as they appear
- Same speed as Level 1 - keep practicing!
- 30 seconds to score points

## Scoring System

- **Bronze**: 25-49 points
- **Silver**: 50-74 points
- **Gold**: 75-99 points
- **Platinum**: 100+ points

You need at least **Bronze** (25 points) to progress!

## Challenge

Can you reach Platinum? You're almost at the top level!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    