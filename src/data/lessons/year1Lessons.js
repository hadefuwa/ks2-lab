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
      subjectId: 'history',
      lessonNumber: 1,
      title: "Dinosaurs - When They Lived",
      emoji: '🦕',
      assessmentType: 'html-game',
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

- We can learn from the past!



## Practice Questions



<!-- QUESTION_START -->
When did dinosaurs live?
<!-- OPTIONS -->
A few years ago|Hundreds of years ago|Millions of years ago|Last year
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Dinosaurs lived millions of years ago! That's a very, very long time - before people existed!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What period did T-Rex live in?
<!-- OPTIONS -->
Triassic Period|Jurassic Period|Cretaceous Period|Modern Period
<!-- CORRECT -->
2
<!-- EXPLANATION -->
T-Rex lived in the Cretaceous Period, which was the last period of dinosaurs before they disappeared!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are fossils?
<!-- OPTIONS -->
Living dinosaurs|Bones that turned to stone|Modern animals|Rocks
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Fossils are what's left of dinosaurs - bones that turned to stone! Scientists find them and learn about dinosaurs!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What do scientists do with fossils?
<!-- OPTIONS -->
Nothing|Study them and put bones together|Throw them away|Hide them
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Scientists study fossils, put bones together, and learn how dinosaurs lived. They teach us about the past!
<!-- QUESTION_END -->`,
      quizId: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Ancient Egypt - Pyramids and Pharaohs",
      emoji: '🏺',
      content: `# Ancient Egypt - Pyramids and Pharaohs 🏺

## Welcome to the Pharaoh's Tomb! 🐪

Long ago in Ancient Egypt, powerful kings called **Pharaohs** ruled the land. When they died, they were buried in magnificent **pyramids** with all their treasures!

### Your Mission:
🔍 Explore the tomb and find **3 hidden treasures**
👑 Tap on different containers to see what's inside
💎 Look for jewels, crowns, and golden artifacts
⚠️ Be careful - not everything in the tomb is treasure!

Listen carefully as each item is revealed. Can you find all the Pharaoh's treasures?

**Tap the containers below to start your adventure!**`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 3,
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

- History shows us change!



## Practice Questions



<!-- QUESTION_START -->
How did people travel long ago?
<!-- OPTIONS -->
By car|By walking and using horses|By plane|By train
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Long ago, people walked and used horses! They had carriages, but travel was very slow compared to today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did children write on in school long ago?
<!-- OPTIONS -->
Computers|Tablets|Slates|Paper
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Long ago, children wrote on slates! Now we use computers. Schools have changed a lot!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did homes have long ago for warmth?
<!-- OPTIONS -->
Central heating|Fireplaces|Electric heaters|Air conditioning
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Long ago, homes had fireplaces for warmth! There was no electricity, so they used fire to keep warm!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do we communicate now compared to long ago?
<!-- OPTIONS -->
By letters only|By instant communication with phones and internet|By shouting|By smoke signals
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Now we have instant communication with smartphones, computers, and the internet! Long ago, people sent letters which took a long time!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 4,
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

- They inspire us today!



## Practice Questions



<!-- QUESTION_START -->
Who was Queen Elizabeth I?
<!-- OPTIONS -->
A nurse|A writer|Queen of England|A scientist
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Queen Elizabeth I was Queen of England! She lived a long time ago, was very brave and clever, and helped make England strong!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was Florence Nightingale known for?
<!-- OPTIONS -->
Being a queen|Being a nurse who helped people|Being a writer|Being a soldier
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Florence Nightingale was a nurse who helped sick and injured people! She made hospitals better places and is called "The Lady with the Lamp"!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did William Shakespeare do?
<!-- OPTIONS -->
Was a king|Wrote amazing plays and poems|Was a nurse|Was a soldier
<!-- CORRECT -->
1
<!-- EXPLANATION -->
William Shakespeare wrote amazing plays and poems! He lived in England long ago, and people still read his stories today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why do we remember famous people from history?
<!-- OPTIONS -->
They were rich|They did important things and helped others|They were tall|They were old
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We remember famous people because they did important things, helped others, changed the world, and inspire us today!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 5,
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

- History is everywhere!



## Practice Questions



<!-- QUESTION_START -->
What can tell us about local history?
<!-- OPTIONS -->
Only new buildings|Old buildings, statues, monuments, and old photos|Only trees|Only cars
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Old buildings, statues, monuments, and old photos can tell us about local history! Every place has a history!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where can you learn about local history?
<!-- OPTIONS -->
Only at home|At local museums, by asking grown-ups, and looking at old photos|Only at school|Only in books
<!-- CORRECT -->
1
<!-- EXPLANATION -->
You can learn about local history at local museums, by asking grown-ups, looking at old photos, and reading about your area!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What might have history in your local area?
<!-- OPTIONS -->
Only new buildings|Your library, school, parks, and shops in old buildings|Only cars|Only trees
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Your local library, school, parks, and shops in old buildings might have history! History is all around us!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to learn about local history?
<!-- OPTIONS -->
It's not important|It helps us understand our area and learn from the past|It's boring|It's too hard
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Learning about local history helps us understand our area and learn from the past! History is everywhere and full of interesting stories!
<!-- QUESTION_END -->`,
      quizId: 45,
      assessmentType: 'local-history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Blockly Puzzle",
      emoji: '🧩',
      content: `# Blockly Puzzle 🧩

Learn to code with Blockly Games!

In Puzzle, you'll learn the basics of programming by connecting blocks together to solve puzzles.

## Instructions

- Drag blocks from the toolbox to the workspace
- Connect blocks together to create programs
- Click "Run" to see your program in action
- Complete each puzzle to move to the next level

Have fun learning to code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Blockly Maze",
      emoji: '🗺️',
      content: `# Blockly Maze 🗺️

Navigate through mazes using code!

In Maze, you'll learn to use loops and conditionals to guide a character through mazes.

## Instructions

- Use movement blocks to navigate
- Try using loops to repeat actions
- Use conditionals to make decisions
- Complete each maze to unlock the next one

Challenge yourself to use fewer blocks!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Blockly Bird",
      emoji: '🐦',
      content: `# Blockly Bird 🐦

Help the bird catch worms!

In Bird, you'll learn about conditionals and loops by helping a bird catch worms while avoiding obstacles.

## Instructions

- Use conditionals to check for worms
- Use loops to repeat actions
- Guide the bird to catch all the worms
- Avoid obstacles and complete each level

Think carefully about your code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Blockly Turtle",
      emoji: '🐢',
      content: `# Blockly Turtle 🐢

Draw pictures with code!

In Turtle, you'll learn to draw shapes and patterns by programming a turtle to move and draw.

## Instructions

- Use movement blocks to move the turtle
- Use drawing blocks to create lines
- Try using loops to create patterns
- Experiment with angles and distances

Create beautiful art with code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Blockly Movie",
      emoji: '🎬',
      content: `# Blockly Movie 🎬

Create animations with code!

In Movie, you'll learn to create animations by programming characters to move and interact.

## Instructions

- Use blocks to control character movement
- Create sequences of actions
- Use timing blocks to control speed
- Make your own animated stories

Bring your stories to life!

## Note

You may see console messages about "Pixel errors" or "Canvas2D" - these are normal! Blockly Movie checks your animation frame-by-frame to see if it matches the target. These messages don't affect the game.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Blockly Pond Tutor",
      emoji: '🦆',
      content: `# Blockly Pond Tutor 🦆

Learn JavaScript with visual blocks!

In Pond Tutor, you'll learn JavaScript programming concepts using visual blocks that translate to real code.

## Instructions

- Follow the tutorial to learn JavaScript
- See how blocks translate to code
- Complete exercises to practice
- Build your programming skills

Learn real programming concepts!

## Note

You may see console messages about "play() request was interrupted" - these are normal! Blockly Games preloads sound effects, which can trigger browser warnings. These messages don't affect the game and you can safely ignore them.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Blockly Pond",
      emoji: '🌊',
      content: `# Blockly Pond 🌊

Write JavaScript code to compete!

In Pond, you'll write JavaScript code to compete in a duck racing game.

## Instructions

- Write JavaScript code directly
- Use functions and variables
- Optimize your code for speed
- Compete with others or yourself

Master JavaScript programming!

## Note

You may see console messages about "play() request was interrupted" or "createRadialGradient" - these are normal! Blockly Games preloads sound effects and creates visual effects that can trigger browser warnings. These messages don't affect the game and you can safely ignore them.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 8,
      title: "TapTapTap: Beginner Level 1",
      emoji: '👆',
      assessmentType: 'taptaptap-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 9,
      title: "TapTapTap: Beginner Level 2",
      emoji: '👆',
      assessmentType: 'taptaptap-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 10,
      title: "Flappy Bird Game",
      emoji: '🐦',
      assessmentType: 'flappy-bird-game',
      categoryId: null,
    }),
  ];
}