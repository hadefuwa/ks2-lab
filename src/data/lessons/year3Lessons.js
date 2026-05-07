import { Lesson } from '../../models/Lesson.js';

/**
 * Year 3 Lessons
 */
export function getYear3Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Prehistoric Britain - Stone Age to Iron Age",
      emoji: '🪨',
      content: `# Prehistoric Britain - Stone Age to Iron Age 🪨

Welcome to a journey through 10,000 years of British history! Before the Romans arrived, Britain went through three major periods of change.

## 1. The Stone Age (Early Britain)
Technically split into the Palaeolithic, Mesolithic, and Neolithic.
- **Hunter-Gatherers**: Early humans followed herds of mammoths and deer.
- **Flint Tools**: Discovering that flint could be chipped into sharp axes and spears was a turning point.
- **First Farmers**: Eventually, people learned to plant seeds and keep animals, leading to the first permanent villages like Skara Brae.

## 2. The Bronze Age (Building and Settling)
- **Metalworking**: Around 2500 BC, people learned to mix copper and tin to make **Bronze**.
- **Roundhouses**: People lived in circular wooden homes with thatched roofs.
- **Stonehenge**: Many of the great stone monuments were completed or used during this time.

## 3. The Iron Age (Forts and Warriors)
- **Stronger Metal**: Iron was much harder than bronze, allowing for better plows and sharper weapons.
- **Hill Forts**: To protect themselves from rival tribes, people built massive earthwork forts on hills (like Maiden Castle).
- **Celtic Culture**: This was the time of the Celts, known for their beautiful jewelry (torcs) and fierce warriors.

## The Evolution of Technology
In the game, you will need to find the key inventions of each age to "evolve" your civilization to the next period!`,
      quizId: 61,
      assessmentType: 'prehistoric-britain-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Genetics and Family Trees - The First Families",
      emoji: '🧬',
      content: `# Genetics and Family Trees - The First Families 🧬

Let's learn about genetics through the story of the first families!

## The Story of Twins

In the beginning, God created the first families. Some families had twins - two children who looked very similar!

In this game, you'll learn how traits like eye color, hair color, and height are passed from parents to children.

## How to Play

1. **Match the Couples**: Drag boys to girls to create married couples
2. **Explore Genetics**: See how traits combine using Punnett squares
3. **Take a Quiz**: Answer questions about what children might look like

## What You'll Learn

- **Dominant vs Recessive**: Some traits are stronger than others
- **Genotypes and Phenotypes**: The difference between genes and appearance
- **Family Trees**: How traits are passed through generations
- **Probability**: What combinations are possible in children

## The Science

Just like the Haribo genetics meme, when twins marry twins, their children can have many different combinations of traits!

**Eye Color**: Brown eyes (B) are dominant over blue eyes (b)
**Hair Shade**: Dark hair (D) is dominant over blonde hair (d)
**Height**: Tall (T) is dominant over short (t)

## Remember

Every person is unique, created by God with special combinations of traits!`,
      quizId: null,
      assessmentType: 'genetics-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Religious History - Kings and Prophets",
      emoji: '👑',
      content: `# Biblical History - Kings and Prophets 👑



Let's learn about the kings and prophets from the Bible!



## King David



- David was a shepherd boy

- He became a great king

- He was brave and wise

- He wrote many psalms (songs)



## King Solomon



- Solomon was David's son

- He was very wise

- He built a great temple

- He was known for his wisdom



## The Temple



- Solomon built a beautiful temple

- It was in Jerusalem

- It was God's house

- It was very important



## Prophets



- Prophets were messengers

- They spoke God's words

- They warned people

- They gave hope



## The Divided Kingdom



- After Solomon, the kingdom split

- There were two kingdoms

- Israel in the north

- Judah in the south



## Fun Activities



- Learn about the kings

- Draw the temple

- Learn about prophets

- Make a timeline



## Remember



- David and Solomon were great kings

- The temple was important

- Prophets were messengers

- These are important stories!



## Practice Questions



<!-- QUESTION_START -->
What was David before he became king?
<!-- OPTIONS -->
A soldier|A shepherd boy|A prince|A farmer
<!-- CORRECT -->
1
<!-- EXPLANATION -->
David was a shepherd boy before he became a great king. He was brave and wise!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who built the great temple in Jerusalem?
<!-- OPTIONS -->
David|Solomon|Moses|Abraham
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Solomon, who was David's son, built the great temple in Jerusalem. It was God's house and very important!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were prophets?
<!-- OPTIONS -->
Kings|Soldiers|Messengers|Priests
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Prophets were messengers who spoke God's words. They warned people and gave hope!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened to the kingdom after Solomon?
<!-- OPTIONS -->
It grew bigger|It split into two kingdoms|It disappeared|It moved to a new place
<!-- CORRECT -->
1
<!-- EXPLANATION -->
After Solomon, the kingdom split into two: Israel in the north and Judah in the south!
<!-- QUESTION_END -->`,
      quizId: 61,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Ancient Greece - Gods and Heroes",
      emoji: '🏛️',
      content: `# Ancient Greece - Gods and Heroes 🏛️



Let's learn about ancient Greece!



## When Was Ancient Greece?



- Ancient Greece existed from about 800 BC to 146 BC

- That's a very long time ago!

- It was in Europe

- It was a great civilization



## Greek City-States



- Greece was made of city-states

- Athens was one city-state

- Sparta was another

- Each was independent



## Greek Gods and Goddesses



- Greeks believed in many gods

- Zeus was king of the gods ⚡

- Athena was goddess of wisdom

- Poseidon was god of the sea 🌊



## The Olympics



- The Olympics started in Greece

- They were athletic competitions

- Held every four years

- Still happen today!



## Famous Greeks



- Socrates was a philosopher

- Plato was his student

- They asked important questions

- They were very wise



## Greek Architecture



- Greeks built beautiful buildings

- They used columns

- The Parthenon is famous

- Still admired today!



## Fun Activities



- Learn about Greek gods

- Draw Greek buildings

- Learn about the Olympics

- Write about ancient Greece



## Remember



- Ancient Greece was long ago

- They had many gods

- They started the Olympics

- They influenced the world!



## Practice Questions



<!-- QUESTION_START -->
Who was the king of the Greek gods?
<!-- OPTIONS -->
Poseidon|Athena|Zeus|Apollo
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Zeus was the king of the Greek gods! He was very powerful and important in Greek mythology.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did the Olympics start?
<!-- OPTIONS -->
Rome|Egypt|Greece|China
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The Olympics started in ancient Greece! They were athletic competitions held every four years, and they still happen today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were the two famous Greek city-states?
<!-- OPTIONS -->
Athens and Sparta|Rome and Athens|Sparta and Egypt|Athens and Egypt
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Athens and Sparta were two famous Greek city-states. Each was independent and had its own way of life!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What famous building did the Greeks build using columns?
<!-- OPTIONS -->
The Colosseum|The Parthenon|The Great Wall|The Pyramids
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Parthenon is a famous Greek building that used columns. Greek architecture is still admired today!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'ancient-greece-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Ancient Greece - Daily Life",
      emoji: '🏺',
      content: `# Ancient Greece - Daily Life 🏺



Let's learn about how people lived in ancient Greece!



## Greek Homes



- Greek homes were simple

- They had courtyards

- They had few windows

- They were made of mud and stone



## Greek Schools



- Boys went to school

- Girls learned at home

- They learned reading and writing

- They learned music and sports



## Greek Democracy



- Athens created democracy

- People could vote

- Citizens had a say

- This influenced many countries



## Greek Theater



- Greeks loved theater

- They watched plays

- They had comedies and tragedies

- Theater was very important



## Greek Art and Pottery



- Greeks made beautiful pottery

- They painted scenes on vases

- They made sculptures

- Their art is still admired



## Fun Activities



- Draw Greek homes

- Learn about democracy

- Draw Greek pottery

- Write about Greek life



## Remember



- Greek homes were simple

- Boys went to school

- Athens created democracy

- Greeks loved art and theater!



## Practice Questions



<!-- QUESTION_START -->
Who went to school in ancient Greece?
<!-- OPTIONS -->
Girls|Boys|Both boys and girls|Nobody
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In ancient Greece, boys went to school while girls learned at home. They learned reading, writing, music, and sports!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Athens create that influenced many countries?
<!-- OPTIONS -->
The Olympics|Democracy|Theater|Pottery
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Athens created democracy, where people could vote and citizens had a say. This influenced many countries around the world!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Greeks love to watch?
<!-- OPTIONS -->
Gladiator fights|Plays in the theater|Chariot races|Sports games
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Greeks loved theater! They watched plays, including comedies and tragedies. Theater was very important to them!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Greeks make that is still admired today?
<!-- OPTIONS -->
Pottery|Sculptures|Beautiful art|All of the above
<!-- CORRECT -->
3
<!-- EXPLANATION -->
Greeks made beautiful pottery, sculptures, and art that is still admired today! They painted scenes on vases and created amazing works of art!
<!-- QUESTION_END -->`,
      quizId: 70,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Ancient Rome - The Empire",
      emoji: '🏛️',
      content: `# Ancient Rome - The Empire 🏛️

Rome grew from a small town in Italy into one of the largest and most powerful empires the world has ever seen. This was possible because Romans were brilliant engineers and organized leaders.

## Key Roman Innovations
- **Aqueducts**: Huge stone bridges that carried fresh water for miles from the mountains into the city. Gravity did all the work!
- **Roman Roads**: They built 50,000 miles of straight, paved roads. This allowed their armies to move quickly and merchants to trade goods easily.
- **Concrete**: Romans invented a special type of concrete that was so strong it could even set underwater! This allowed them to build massive structures like the Colosseum.

## The Roman Army
The backbone of the empire was the **Roman Legions**. These were professional, highly disciplined soldiers who wore strong armor and fought in perfect formation. They didn't just fight; they also built many of the empire's roads and bridges.

## Rule and Culture
Rome was ruled by **Emperors** who held absolute power. The official language was **Latin**, which is the ancestor of Spanish, French, Italian, and many English words!

In the game, you will take on the role of an **Empire Architect**. You must choose the right Roman innovations to solve the problems of the city and help the Emperor expand our borders!`,
      quizId: null,
      assessmentType: 'ancient-rome-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 7,
      title: "Ancient Rome - Daily Life",
      emoji: '🏺',
      content: `# Ancient Rome - Daily Life 🏺

What was it like to wake up in the city of Rome 2,000 years ago? For some it was a life of luxury, but for most, it was a busy, crowded, and exciting world.

## Roman Homes: Villas vs. Insulae
- **Rich Romans** lived in beautiful houses called **Villas**. They had inner courtyards (Atriums), floor heating (Hypocausts), and even running water!
- **Poor Romans** lived in tall apartment blocks called **Insulae**. These were often made of wood and were very crowded. There were no kitchens or toilets inside!

## The Social Heart: Public Baths
The baths were more than just a place to get clean. They were a social club. Romans went there to exercise, gossip about politics, listen to poetry, and relax in different temperature pools.

## Food and Dining
Romans didn't sit at tables to eat fancy meals; they reclined on couches! Most people ate simple food like bread, porridge, and olives. They loved a salty fish sauce called **Garum**, which they put on almost everything.

## Great Entertainment
Rome was famous for "Bread and Circuses"—food and games to keep the people happy.
- **The Colosseum**: Where gladiators fought for glory.
- **Circus Maximus**: A massive track for high-speed, dangerous chariot races.

In the game, you will explore the streets of Rome and visit these famous locations to witness daily life yourself!`,
      quizId: null,
      assessmentType: 'roman-daily-life-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 8,
      title: "The Fall of Rome",
      emoji: '⚔️',
      content: `# The Fall of Rome ⚔️

No empire lasts forever. After hundreds of years of power, the Roman Empire began to decline. It didn't happen overnight; it was a slow process caused by many different problems working together.

## Why did the Giant Fall?
1. **Size**: The empire was so large it was almost impossible to defend. News traveled slowly by horse, meaning the Emperor often didn't know about an attack until it was too late.
2. **Economic Collapse**: The army was incredibly expensive to maintain. To pay for it, Rome printed more money, but this caused **Inflation**—where money loses its value and prices go up.
3. **Invasions**: Hungry and powerful tribes from outside Rome, like the **Goths**, **Vandals**, and **Huns**, began attacking the borders.

## The Final Blow
In **AD 476**, the last Roman Emperor in the West was overthrown by a tribal leader. While the Western Empire fell into the "Dark Ages," Roman influence never truly disappeared. Their laws, buildings, and language changed the world forever.

In the game, you will handle the difficult challenges of the late empire. Can you make the choices needed to try and save Rome?`,
      quizId: null,
      assessmentType: 'fall-of-rome-game',
      categoryId: null,
    }),





    // ── English ──────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Phonics & Spelling",
      emoji: '🔤',
      content: `# Phonics & Spelling 🔤

In Year 3 we move beyond single letter sounds to spelling patterns that appear again and again in English words.

## Common spelling patterns
- **tion** — nation, station, action
- **ight** — light, night, fight
- **ough** — though, through, enough

## Rules to remember
1. **i before e** except after c: believe, receive
2. **Double the consonant** before -ing/-ed for short vowel words: running, stopped
3. **Drop the e** before a vowel suffix: make → making

## In the game
Unscramble the letters to spell each word correctly. Listen carefully to the sound clues!`,
      quizId: null,
      assessmentType: 'spelling-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 2,
      title: "Missing Vowels",
      emoji: '🔍',
      content: `# Missing Vowels 🔍

Vowels are the letters **a, e, i, o, u**. Every syllable in English needs at least one vowel.

## Why vowels matter
- Without vowels, words are impossible to read: "c_t" could be cat, cot, or cut!
- Vowels change the meaning of words completely.

## Short vs long vowels
| Short | Long |
|---|---|
| cap | cape |
| pin | pine |
| hop | hope |

## In the game
Fill in the missing vowels to complete each word. Think about the sounds you hear!`,
      quizId: null,
      assessmentType: 'missing-vowel-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 3,
      title: "Sentence Scramble",
      emoji: '🔀',
      content: `# Sentence Scramble 🔀

A sentence must make sense. Every sentence needs a **subject** (who/what) and a **verb** (action or state).

## Sentence structure
**Subject → Verb → Object**

- *The dog* **chased** *the ball.*
- *Sara* **reads** *books every evening.*

## Capital letters and full stops
- Every sentence **starts** with a capital letter.
- Every sentence **ends** with a full stop, question mark, or exclamation mark.

## In the game
Drag the words into the correct order to build a proper sentence. Watch out for capital letters — they show you where the sentence begins!`,
      quizId: null,
      assessmentType: 'sentence-scramble-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 4,
      title: "Vowel Sounds",
      emoji: '🗣️',
      content: `# Vowel Sounds 🗣️

The same sound can be spelled in different ways. Learning the patterns helps you spell unfamiliar words.

## The long 'a' sound
| Spelling | Example words |
|---|---|
| **ai** | rain, train, snail |
| **ay** | play, stay, today |

## Tips to choose the right spelling
- **ai** usually comes in the **middle** of a word: *wait, main*
- **ay** usually comes at the **end** of a word: *day, way*

## In the game
Sort each word into the correct sound group — ai or ay. Listen to how the vowel sounds in each word!`,
      quizId: null,
      assessmentType: 'vowel-sound-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 5,
      title: "Sight Words",
      emoji: '👁️',
      content: `# Sight Words 👁️

Sight words are very common words that appear in almost every piece of writing. Learning to recognise them instantly makes reading much faster.

## Why sight words?
Some words don't follow phonics rules and must simply be memorised: *said, come, some, were, there*.

## Year 3 sight word targets
because, different, important, between, something, children, through, example, thought, another

## Reading tip
When you see a sight word you don't recognise, look at the whole word shape — the height and length of letters form a unique silhouette.

## In the game
Identify the correct sight word as quickly as you can. Speed and accuracy both count!`,
      quizId: null,
      assessmentType: 'sight-word-game',
      categoryId: null,
    }),

    // ── Maths ────────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Multiplication Tables",
      emoji: '✖️',
      content: `# Multiplication Tables ✖️

Knowing your times tables off by heart is the single biggest boost you can give your maths. Every other topic — fractions, area, division — depends on it.

## Year 3 focus: 2, 5, and 10 times tables

| × | 2 | 5 | 10 |
|---|---|---|---|
| 3 | 6 | 15 | 30 |
| 4 | 8 | 20 | 40 |
| 7 | 14 | 35 | 70 |

## Patterns to spot
- **×2** — always even
- **×5** — always ends in 0 or 5
- **×10** — just add a zero

## In the game
Answer as many multiplication questions as you can. Quick recall is the goal!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Division Basics",
      emoji: '➗',
      content: `# Division Basics ➗

Division is sharing equally. It is the **inverse** (opposite) of multiplication, so knowing your times tables makes division easy.

## Division vocabulary
- **Dividend** — the number being divided (12)
- **Divisor** — the number you divide by (3)
- **Quotient** — the answer (4)

12 ÷ 3 = 4

## Using multiplication to check
If 3 × 4 = 12, then 12 ÷ 3 = 4 and 12 ÷ 4 = 3.

## In the game
Solve the division questions by thinking about your times tables in reverse.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Fractions Introduction",
      emoji: '🍕',
      content: `# Fractions Introduction 🍕

A fraction shows part of a whole. The **denominator** (bottom number) tells you how many equal parts the whole is split into. The **numerator** (top number) tells you how many parts you have.

## Common fractions
- **½** — one half (2 equal parts, take 1)
- **¼** — one quarter (4 equal parts, take 1)
- **¾** — three quarters (4 equal parts, take 3)

## Equivalent fractions
½ = 2/4 = 4/8 — these all show the same amount!

## In the game
Match fractions to their pictures and find equivalent pairs.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Place Value to 1000",
      emoji: '🏛️',
      content: `# Place Value to 1000 🏛️

Every digit in a number has a **place value** — its value depends on where it sits.

## Hundreds, Tens, Ones
| Number | Hundreds | Tens | Ones |
|---|---|---|---|
| 342 | 3 | 4 | 2 |
| 509 | 5 | 0 | 9 |
| 780 | 7 | 8 | 0 |

342 = 300 + 40 + 2

## Comparing numbers
Line the digits up in columns and compare from left to right. The digit furthest left matters most.

## In the game
Build numbers using hundreds, tens, and ones blocks. Identify the value of each digit.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Perimeter",
      emoji: '📐',
      content: `# Perimeter 📐

The **perimeter** is the total distance around the outside of a shape. Add up all the side lengths.

## Rectangle perimeter
Perimeter = length + width + length + width
= 2 × (length + width)

A rectangle 5 cm × 3 cm has perimeter = 2 × (5 + 3) = 16 cm.

## Regular shapes
A regular shape has all sides equal. Square with side 4 cm: perimeter = 4 × 4 = 16 cm.

## In the game
Calculate the perimeter of different shapes. Don't forget to add every side!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Mass and Capacity",
      emoji: '⚖️',
      content: `# Mass and Capacity ⚖️

## Mass
Mass tells us how heavy something is.
- Measured in **grams (g)** and **kilograms (kg)**
- 1 kg = 1000 g
- A bag of sugar ≈ 1 kg; a pencil ≈ 5 g

## Capacity
Capacity is how much liquid a container holds.
- Measured in **millilitres (ml)** and **litres (l)**
- 1 litre = 1000 ml
- A mug holds about 250 ml; a bathtub holds about 150 litres

## Reading scales
Find the start and end values, count the divisions, then work out what each line is worth.

## In the game
Read scales and choose the correct mass or capacity. Take your time with the scale divisions!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Rounding",
      emoji: '🎯',
      content: `# Rounding 🎯

Rounding makes numbers easier to work with when an exact answer isn't needed.

## Rules for rounding
1. Decide which place value you are rounding to (nearest 10, 100...).
2. Look at the digit **immediately to the right**.
3. If it is **5 or more**, round **up**. If it is **4 or less**, round **down**.

## Examples
- 47 rounded to the nearest 10 → **50** (7 ≥ 5, round up)
- 43 rounded to the nearest 10 → **40** (3 < 5, round down)
- 350 rounded to the nearest 100 → **400** (5 ≥ 5, round up)

## In the game
Round numbers to the nearest 10 and 100. Use the number line to help picture where numbers land.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    // ── Technology ───────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
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
      yearId: 'year3',
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
      yearId: 'year3',
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
      yearId: 'year3',
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
      yearId: 'year3',
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
      yearId: 'year3',
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
      yearId: 'year3',
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
  ];
}