import { Lesson } from '../../models/Lesson.js';

/**
 * Nursery Lessons
 */
export function getNurseryLessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Clicking Game",
      emoji: '🎯',
      assessmentType: 'clicking-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Keyboard Game",
      emoji: '⌨️',
      assessmentType: 'keyboard-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "WASD Game",
      emoji: '⌨️',
      assessmentType: 'wasd-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "A-Z Game",
      emoji: '🔤',
      assessmentType: 'a-z-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Numbers Game",
      emoji: '🔢',
      assessmentType: 'numbers-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Symbols Game",
      emoji: '🔣',
      assessmentType: 'symbols-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Flappy Bird Game",
      emoji: '🐦',
      assessmentType: 'flappy-bird-game',
      categoryId: null,
    }),

    // Phonics Lessons for 2-3 year olds - Lessons 1-8

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Dinosaurs - The First Animals",
      emoji: '🦕',
      content: `# Dinosaurs - The First Animals 🦕



Long, long ago, before people lived, there were dinosaurs!



## What are Dinosaurs?



Dinosaurs were huge animals that lived a very, very long time ago!



- They were bigger than elephants! 🦕

- Some were very tall

- Some were very long

- They lived millions of years ago



## Big Dinosaurs



**T-Rex** 🦖

- Very big and strong

- Had sharp teeth

- Was a meat eater

- Very scary!



**Brachiosaurus** 🦕

- Had a very long neck

- Was very tall

- Ate plants

- Was gentle



## Small Dinosaurs



- Some dinosaurs were small

- Some were as big as chickens

- They all lived together

- Long, long ago!



## Fun Activities



- Draw pictures of dinosaurs

- Make dinosaur sounds

- Learn dinosaur names

- Pretend to be a dinosaur!



## Remember



- Dinosaurs lived long ago

- They were very big animals

- They don't live anymore

- We learn about them from fossils!



## Practice Questions



<!-- QUESTION_START -->
When did dinosaurs live?
<!-- OPTIONS -->
Today|A very, very long time ago, millions of years ago|Last year|Next year
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Dinosaurs lived a very, very long time ago - millions of years ago! They were bigger than elephants!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did T-Rex eat?
<!-- OPTIONS -->
Plants|Meat|Nothing|Fruits
<!-- CORRECT -->
1
<!-- EXPLANATION -->
T-Rex was a meat eater! It was very big and strong, had sharp teeth, and was very scary!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Brachiosaurus eat?
<!-- OPTIONS -->
Meat|Plants|Nothing|Fruits
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Brachiosaurus ate plants! It had a very long neck, was very tall, and was gentle!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do we learn about dinosaurs?
<!-- OPTIONS -->
We see them|From fossils|We don't|We guess
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We learn about dinosaurs from fossils! Even though they don't live anymore, we can still learn about them!
<!-- QUESTION_END -->`,
      quizId: 31,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Adam and Eve - The First People",
      emoji: '👫',
      content: `# Adam and Eve - The First People 👫



Let's learn about the first people in the world!



## The Garden of Eden



- Adam and Eve lived in a beautiful garden 🌳

- The garden was called Eden

- It was a perfect place

- Everything was good



## Adam and Eve



- Adam was the first man 👨

- Eve was the first woman 👩

- They were the first people

- They lived in the garden together



## The First Family



- Adam and Eve were together

- They took care of the garden

- They were happy

- They were the first family!



## Fun Activities



- Draw the garden of Eden

- Talk about the first people

- Learn about the story

- Draw Adam and Eve



## Remember



- Adam and Eve were the first people

- They lived in a beautiful garden

- They were the first family

- This is a special story!



## Practice Questions



<!-- QUESTION_START -->
Who were the first people?
<!-- OPTIONS -->
No one|Adam and Eve|Moses|Noah
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Adam and Eve were the first people! Adam was the first man, and Eve was the first woman!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did Adam and Eve live?
<!-- OPTIONS -->
In a house|In a beautiful garden called Eden|In a cave|In a city
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Adam and Eve lived in a beautiful garden called Eden! It was a perfect place where everything was good!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Adam and Eve do in the garden?
<!-- OPTIONS -->
Nothing|Took care of the garden and were happy together|Only played|Only slept
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Adam and Eve were together, took care of the garden, were happy, and they were the first family!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is this story special?
<!-- OPTIONS -->
It's not|Adam and Eve were the first people and the first family|It's scary|It's boring
<!-- CORRECT -->
1
<!-- EXPLANATION -->
This is a special story because Adam and Eve were the first people, they lived in a beautiful garden, and they were the first family!
<!-- QUESTION_END -->`,
      quizId: 37,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'nursery',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Days of the Week",
      emoji: '📅',
      assessmentType: null, // Uses HTML game instead
      content: `# Days of the Week 📅



There are seven days in a week!



## The Seven Days



1. Monday - Start of the week! 🌟

2. Tuesday - Keep going! 💪

3. Wednesday - Middle of the week! 🎯

4. Thursday - Almost there! ⏰

5. Friday - Fun day! 🎉

6. Saturday - Weekend! 🎊

7. Sunday - Rest day! 😴



## What We Do Each Day



- Monday: School starts! 📚

- Tuesday: Learning new things! 🎓

- Wednesday: Mid-week fun! 🎨

- Thursday: More learning! ✏️

- Friday: End of school week! 🎈

- Saturday: Play time! 🧸

- Sunday: Family time! 👨‍👩‍👧‍👦



## Fun Activities



- Sing the days of the week song

- Point to today on a calendar

- Draw what you do each day

- Count the days until the weekend!



## Remember



- There are 7 days in a week

- Each day has a name

- Days help us know what to do!



## Practice Questions



<!-- QUESTION_START -->
How many days are in a week?
<!-- OPTIONS -->
5|7|10|12
<!-- CORRECT -->
1
<!-- EXPLANATION -->
There are 7 days in a week! Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What day is the start of the week?
<!-- OPTIONS -->
Sunday|Monday|Friday|Saturday
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Monday is the start of the week! Then comes Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What days are the weekend?
<!-- OPTIONS -->
Monday and Tuesday|Saturday and Sunday|Wednesday and Thursday|Friday and Saturday
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Saturday and Sunday are the weekend! Saturday is play time, and Sunday is rest day and family time!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why are days of the week important?
<!-- OPTIONS -->
They're not|Days help us know what to do and each day has a name|They're boring|They're scary
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Days of the week are important because they help us know what to do! Each day has a name, and we can plan our week!
<!-- QUESTION_END -->`,
      quizId: 33,
      categoryId: null,
    }),

    