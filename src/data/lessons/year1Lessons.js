import { Lesson } from '../../models/Lesson.js';

/**
 * Year 1 Lessons
 */
export function getYear1Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Counting to 10",
      emoji: '🔢',
      content: `# Counting to 10



Let's learn to count from 1 to 10!



## Numbers 1-10



1. One

2. Two

3. Three

4. Four

5. Five

6. Six

7. Seven

8. Eight

9. Nine

10. Ten



## Practice



Count your fingers! How many do you have?`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Adding Numbers",
      emoji: '➕',
      content: `# Adding Numbers



Addition means putting numbers together!



## Examples



- 2 + 3 = 5

- 1 + 4 = 5

- 3 + 2 = 5



## Practice



Try adding: 2 + 2 = ?`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'english',
      lessonNumber: 1,
      title: "The Alphabet",
      emoji: '🔤',
      content: `# The Alphabet



Let's learn the letters of the alphabet!



## A to Z



A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z



## Practice



Can you say the alphabet out loud?`,
      quizId: quizId++,
      assessmentType: 'test',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Dinosaurs - When They Lived",
      emoji: '🦕',
      content: `# Dinosaurs - When They Lived 🦕



Let's learn about when dinosaurs lived!



## When Dinosaurs Lived



- Dinosaurs lived millions of years ago

- That's a very, very long time!

- Before people existed

- Long before your grandparents were born



## Different Periods



**Triassic Period**

- The first dinosaurs

- Started about 250 million years ago

- Dinosaurs were smaller then



**Jurassic Period**

- Dinosaurs got bigger

- Famous dinosaurs like Brachiosaurus

- Many different types



**Cretaceous Period**

- Last period of dinosaurs

- T-Rex lived then

- Dinosaurs disappeared at the end



## Dinosaur Fossils



- Fossils are what's left of dinosaurs

- Bones turned to stone

- Scientists find them

- They tell us about dinosaurs



## How We Know About Dinosaurs



- Scientists study fossils

- They put bones together

- They learn how dinosaurs lived

- They teach us about the past



## Fun Activities



- Learn about different periods

- Draw dinosaurs from each period

- Make a timeline

- Learn about fossils



## Remember



- Dinosaurs lived millions of years ago

- There were different periods

- Fossils tell us about them

- We can learn from the past!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Biblical Times - Adam and Eve to Noah",
      emoji: '📖',
      content: `# Biblical Times - Adam and Eve to Noah 📖



Let's learn about stories from the Bible!



## The Story of Creation



- In the beginning, God created the world

- He made light and dark

- He made land and sea

- He made animals and people



## Adam and Eve



- Adam and Eve were the first people 👫

- They lived in the Garden of Eden

- It was a beautiful place

- They were the first family



## The First Families



- Adam and Eve had children

- Their sons were Cain and Abel

- Families grew bigger

- People spread across the world



## Noah and the Ark



- Noah was a good man

- God told him to build an ark 🚢

- Animals came in pairs

- The rainbow was a promise 🌈



## Timeline of Biblical Stories



1. Creation - The world was made

2. Adam and Eve - First people

3. First families - Children were born

4. Noah's Ark - The big boat

5. The rainbow promise - God's promise



## Fun Activities



- Draw a timeline of stories

- Act out the stories

- Learn about each story

- Write about what you learned



## Remember



- These are important stories

- They happened long ago

- They teach us lessons

- History includes these stories!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Ancient Egypt - Pyramids and Pharaohs",
      emoji: '🏺',
      content: `# Ancient Egypt - Pyramids and Pharaohs 🏺



Let's learn about ancient Egypt!



## When Was Ancient Egypt?



- Ancient Egypt existed thousands of years ago

- It was a very long time ago

- Before many other civilizations

- It was in Africa



## The River Nile



- The Nile River was very important

- It provided water for crops

- People lived along the river

- It helped Egypt grow



## Pyramids



- Pyramids were huge stone buildings

- They were tombs for pharaohs

- The Great Pyramid is still standing!

- They are amazing buildings



## Pharaohs



- Pharaohs were the rulers of Egypt 👑

- They were like kings

- Tutankhamun was a famous pharaoh

- They were very powerful



## Mummies



- Egyptians made mummies

- They preserved bodies

- They wrapped them in cloth

- They put them in pyramids



## Fun Activities



- Draw a pyramid

- Learn about pharaohs

- Make a timeline of ancient Egypt

- Write about ancient Egypt



## Remember



- Ancient Egypt was long ago

- Pyramids are amazing

- Pharaohs were powerful rulers

- We can learn from ancient Egypt!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Life Long Ago vs. Life Now",
      emoji: '🏰',
      content: `# Life Long Ago vs. Life Now 🏰



Let's compare life in the past and life today!



## Homes Then and Now



**Long Ago:**

- Smaller houses

- No electricity

- Fireplaces for warmth

- Simple furniture



**Now:**

- Bigger houses

- Electricity everywhere

- Central heating

- Modern furniture



## Transport Then and Now



**Long Ago:**

- People walked 🚶

- Used horses 🐴

- Carriages

- Very slow



**Now:**

- Cars 🚗

- Trains 🚂

- Planes ✈️

- Very fast!



## Schools Then and Now



**Long Ago:**

- Wrote on slates ✏️

- Very strict teachers

- Not all children went

- Different lessons



**Now:**

- Use computers 💻

- Friendly teachers

- All children go

- Many subjects



## Technology Changes



**Long Ago:**

- No phones

- No computers

- No TV

- Letters for communication



**Now:**

- Smartphones 📱

- Computers everywhere

- TV and internet

- Instant communication



## Fun Activities



- Compare old and new homes

- Draw "then and now" pictures

- Write about changes

- Make a comparison chart



## Remember



- Life has changed a lot

- Technology changed everything

- We can learn from the past

- History shows us change!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Famous People from History",
      emoji: '👑',
      content: `# Famous People from History 👑



Let's learn about important people from the past!



## Queen Elizabeth I



- She was Queen of England 👑

- She lived a long time ago

- She was very brave and clever

- She helped make England strong



## Florence Nightingale



- She was a nurse 🏥

- She helped sick and injured people

- She made hospitals better places

- She is called "The Lady with the Lamp"



## William Shakespeare



- He wrote amazing plays and poems 📚

- He lived in England long ago

- People still read his stories today

- He is one of the most famous writers ever



## What Made Them Special



- They did important things

- They helped others

- They changed the world

- We remember them today



## Fun Activities



- Draw pictures of famous people

- Act out stories about them

- Write about your favorite

- Make a timeline of when they lived



## Remember



- Famous people did important things

- We can learn from their stories

- History is full of interesting people

- They inspire us today!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Local History",
      emoji: '🏘️',
      content: `# Local History 🏘️



Let's learn about the history of where we live!



## Your Local Area



- Every place has a history

- Buildings tell stories

- Streets have names with meanings

- Parks and places have pasts



## What to Look For



- Old buildings 🏛️

- Statues and monuments 🗿

- Historical markers 📍

- Old photos of your area 📷



## Famous Places



- Your local library might be old 📚

- Your school might have history 🏫

- Parks might have stories 🌳

- Shops might be in old buildings 🏪



## How to Learn About Local History



- Ask grown-ups

- Visit local museums

- Look at old photos

- Read about your area



## Fun Activities



- Take a walk and look for old buildings

- Ask grown-ups about local history

- Draw a map of your area

- Write about your favorite local place



## Remember



- History is all around us

- Your local area has stories

- We can learn from the past

- History is everywhere!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Introduction to Coding",
      emoji: '💻',
      content: `# Introduction to Coding 💻



Coding is like giving instructions to a computer!



## What is Coding?



Coding is writing instructions that tell a computer what to do.



## Simple Instructions



Just like you follow instructions:

- "Put on your shoes" 👟

- "Brush your teeth" 🦷

- "Eat your breakfast" 🍳



Computers follow code instructions:

- "Move forward"

- "Turn right"

- "Say hello"



## Coding Blocks



Some coding uses blocks that you can move around:

- Move blocks

- Turn blocks

- Color blocks

- Sound blocks



## Fun Activities



- Try block-based coding games

- Give instructions to a friend

- Write simple code commands

- Play coding games online



## Remember



- Coding is giving instructions

- Computers follow code exactly

- Coding can be fun!

- Start simple and learn more!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Using a Mouse and Keyboard",
      emoji: '⌨️',
      content: `# Using a Mouse and Keyboard ⌨️



Let's learn to use computer tools properly!



## The Mouse



- **Left Click** - Select and open things

- **Right Click** - See more options

- **Scroll Wheel** - Move up and down

- **Drag** - Move things around



## The Keyboard



- **Letters** - Type words

- **Numbers** - Type numbers

- **Space Bar** - Make spaces

- **Enter** - Start a new line



## Practice



1. Click on icons

2. Type your name

3. Scroll through pages

4. Drag and drop items



## Fun Activities



- Practice clicking games

- Type simple words

- Play keyboard games

- Create a document



## Remember



- Practice makes perfect

- Be gentle with equipment

- Take your time

- Have fun learning!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Creating Digital Stories",
      emoji: '📖',
      content: `# Creating Digital Stories 📖



Let's make stories on the computer!



## What is a Digital Story?



A digital story is a story you create using technology!



## Parts of a Story



- **Beginning** - How it starts 📖

- **Middle** - What happens 📚

- **End** - How it finishes 📕



## Adding Pictures



- Draw your own pictures 🎨

- Use clip art

- Add photos

- Make it colorful!



## Adding Words



- Write your story

- Type it on the computer

- Add speech bubbles

- Make it interesting!



## Fun Activities



- Write a story about yourself

- Add pictures to your story

- Share your story with others

- Make a storybook



## Remember



- Stories have a beginning, middle, and end

- Pictures make stories more fun

- You can be creative!

- Digital stories are fun to make!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    })

  ];
}
