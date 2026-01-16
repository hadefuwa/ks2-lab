import { Lesson } from '../../models/Lesson.js';

/**
 * Year 6 Lessons
 */
export function getYear6Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Algebra Introduction",
      emoji: '🔢',
      content: `# Algebra Introduction 🔢



Let's learn about algebra!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Algebra?



Algebra uses letters (like x, y) to represent unknown numbers!



## Examples



- x + 5 = 10 → x = 5

- y - 3 = 7 → y = 10



## Fun Activities



- Practice solving equations

- Play the algebra game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Statistics and Data",
      emoji: '📊',
      content: `# Statistics and Data 📊



Let's learn about statistics!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Statistics?



Statistics is collecting, organizing, and analyzing data!



## Mean, Median, Mode



- **Mean (Average)** - Add all numbers, divide by count

- **Median** - Middle number when ordered

- **Mode** - Most common number



## Fun Activities



- Calculate mean, median, mode

- Play the statistics game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Advanced Problem Solving",
      emoji: '🧩',
      content: `# Advanced Problem Solving 🧩



Let's solve more complex problems!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## Multi-Step Problems



Problems that need more than one step!



## Example



"Sarah has £20. She buys 3 books at £4 each. How much money does she have left?"



Steps:

1. Find cost: 3 × £4 = £12

2. Find remaining: £20 - £12 = £8



## Problem-Solving Strategies



- Draw a diagram

- Make a table

- Work backwards

- Try different approaches



## Fun Activities



- Solve complex problems

- Play the problem-solving game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Negative Numbers",
      emoji: '🔢',
      content: `# Negative Numbers 🔢

Let's learn about negative numbers!

## What are Negative Numbers?

Numbers less than zero!

## Examples

- -5 is less than 0
- -10 is less than -5
- 0 is neither positive nor negative

## Number Line

... -3, -2, -1, 0, 1, 2, 3 ...

## Comparing

- -5 < -2 (negative 5 is less than negative 2)
- -1 > -5 (negative 1 is greater than negative 5)

## How to Play

Drag on number line and type comparisons! 🎮`,
      quizId: quizId++,
      assessmentType: 'number-line-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "BODMAS/BIDMAS",
      emoji: '🔢',
      content: `# BODMAS/BIDMAS 🔢

Let's learn the order of operations!

## What is BODMAS?

Brackets, Orders, Division, Multiplication, Addition, Subtraction

## Order of Operations

1. Brackets first
2. Orders (powers)
3. Division and Multiplication (left to right)
4. Addition and Subtraction (left to right)

## Examples

- 2 + 3 × 4 = 2 + 12 = 14 (not 20!)
- (2 + 3) × 4 = 5 × 4 = 20
- 10 - 2 × 3 = 10 - 6 = 4

## How to Play

Type order of operations and click steps! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Ratio and Proportion",
      emoji: '⚖️',
      content: `# Ratio and Proportion ⚖️

Let's learn about ratios!

## What is a Ratio?

A ratio compares two amounts!

## Examples

- 2:3 means 2 parts to 3 parts
- If there are 4 apples and 6 oranges, the ratio is 4:6 or 2:3

## Simplifying Ratios

- 4:6 = 2:3 (divide both by 2)
- 8:12 = 2:3 (divide both by 4)

## Proportion

If 2:3 = 4:?, then ? = 6

## How to Play

Drag ratios and type proportions! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Percentages of Amounts",
      emoji: '📊',
      content: `# Percentages of Amounts 📊

Let's learn to find percentages of amounts!

## Finding Percentages

- 50% of 100 = 50
- 25% of 80 = 20
- 10% of 50 = 5

## Methods

- 10% = divide by 10
- 25% = divide by 4
- 50% = divide by 2
- 75% = 3 × 25%

## Examples

- 20% of 60 = 12
- 15% of 40 = 6

## How to Play

Type calculations and click answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Area of Rectangles/Triangles",
      emoji: '📐',
      content: `# Area of Rectangles/Triangles 📐

Let's learn area formulas!

## Area of Rectangle

Area = length × width

Example: 5 × 3 = 15 square units

## Area of Triangle

Area = (base × height) ÷ 2

Example: (6 × 4) ÷ 2 = 12 square units

## Examples

- Rectangle 8 × 5 = 40 square units
- Triangle base 10, height 6 = 30 square units

## How to Play

Type formulas and drag measurements! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "Pie Charts",
      emoji: '🥧',
      content: `# Pie Charts 🥧

Let's learn about pie charts!

## What is a Pie Chart?

A pie chart shows data as slices of a circle!

## Reading Pie Charts

- Each slice represents part of the whole
- Bigger slice = more data
- All slices add up to 100%

## Examples

- Favorite colors
- Survey results
- Data distribution

## How to Play

Click segments and drag to create charts! 🎮`,
      quizId: quizId++,
      assessmentType: 'graph-builder-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "Algebra: Solving Equations",
      emoji: '🔢',
      content: `# Algebra: Solving Equations 🔢

Let's learn to solve equations!

## What is an Equation?

An equation has an equals sign!

## Solving Equations

Find the value of the variable!

## Examples

- x + 5 = 10 → x = 5
- y - 3 = 7 → y = 10
- 2z = 8 → z = 4

## Steps

1. Do the same to both sides
2. Simplify
3. Find the answer

## How to Play

Type solutions and drag variables! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 11,
      title: "Converting Fractions/Decimals/Percentages",
      emoji: '🔄',
      content: `# Converting Fractions/Decimals/Percentages 🔄

Let's learn to convert between forms!

## Conversions

- 1/2 = 0.5 = 50%
- 1/4 = 0.25 = 25%
- 3/4 = 0.75 = 75%
- 1/10 = 0.1 = 10%

## Converting Fractions to Decimals

Divide numerator by denominator!

## Converting Decimals to Percentages

Multiply by 100!

## Examples

- 1/5 = 0.2 = 20%
- 2/5 = 0.4 = 40%

## How to Play

Drag conversions and type answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 12,
      title: "Scale and Maps",
      emoji: '🗺️',
      content: `# Scale and Maps 🗺️

Let's learn about scale!

## What is Scale?

Scale shows how much smaller a map is than real life!

## Reading Scale

- 1 cm on map = 100 m in real life
- 1:100 means 1 unit = 100 units

## Examples

- If 1 cm = 5 km, then 3 cm = 15 km
- If scale is 1:1000, then 2 cm = 2000 cm = 20 m

## Using Scale

Measure on map, then multiply by scale!

## How to Play

Click map points and type distances! 🎮`,
      quizId: quizId++,
      assessmentType: 'coordinate-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 13,
      title: "Multi-Step Word Problems",
      emoji: '🧩',
      content: `# Multi-Step Word Problems 🧩

Let's solve complex word problems!

## Multi-Step Problems

Problems that need more than one calculation!

## Steps to Solve

1. Read carefully
2. Find all the numbers
3. Decide what operations to use
4. Solve step by step
5. Check your answer

## Example

"Tom has £50. He buys 3 books at £8 each and 2 pens at £3 each. How much money does he have left?"

Steps:
1. Cost of books: 3 × £8 = £24
2. Cost of pens: 2 × £3 = £6
3. Total spent: £24 + £6 = £30
4. Money left: £50 - £30 = £20

## How to Play

Type solutions and click operations! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 1,
      title: "World War I - The Great War",
      emoji: '🌍',
      content: `# World War I - The Great War 🌍



Let's learn about World War I!



## When Did It Happen?



World War I lasted from 1914 to 1918.



## Why Did It Start?



- Tensions between countries

- Alliances between nations

- Assassination of Archduke Franz Ferdinand

- Many countries got involved



## Who Fought?



**Allied Powers:**

- Britain

- France

- Russia

- United States (joined later)

- Many others



**Central Powers:**

- Germany

- Austria-Hungary

- Ottoman Empire



## Life in the Trenches



- Soldiers lived in trenches (ditches)

- Very difficult conditions

- Mud, rats, and disease

- Dangerous and scary

- They fought for years



## New Weapons



- Machine guns

- Tanks (first used)

- Poison gas

- Airplanes (for war)

- Submarines



## The End



- War ended in 1918

- Many people died

- Countries changed

- Led to World War II

- Peace treaties were signed



## Fun Activities



- Research the war

- Make a timeline

- Write about soldiers' experiences

- Learn about the impact



## Remember



- War lasted 1914-1918

- Many countries involved

- Very difficult time

- Important to remember!`,
      quizId: 82,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Between the Wars - 1920s and 1930s",
      emoji: '📅',
      content: `# Between the Wars - 1920s and 1930s 📅



Let's learn about the time between the world wars!



## The 1920s - The Roaring Twenties



- After World War I ended

- People wanted to have fun

- New music and dancing

- Women got more rights

- Economic boom in some places



## The Great Depression



- Started in 1929

- Stock market crashed

- Many people lost jobs

- Very hard times

- Poverty increased



## Rise of Dictators



- Some countries got dictators

- They had all the power

- People lost freedoms

- This led to problems

- It caused World War II



## New Technologies



- Cars became common

- Radio became popular

- Movies became big

- Technology advanced

- Life changed



## Art and Culture



- New art styles

- Jazz music

- Literature flourished

- Culture changed

- New ideas



## Fun Activities



- Learn about the 1920s

- Study the Great Depression

- Make a timeline

- Write about this period



## Remember



- 1920s were exciting

- Great Depression was hard

- Dictators rose to power

- It led to World War II!`,
      quizId: 84,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 3,
      title: "World War II - Global Conflict",
      emoji: '🌍',
      content: `# World War II - Global Conflict 🌍



Let's learn about World War II!



## When Did It Happen?



World War II lasted from 1939 to 1945.



## Why Did It Start?



- Germany wanted more land

- Adolf Hitler and the Nazis

- Invasion of Poland

- Many countries got involved

- It became a world war



## Who Fought?



**Allied Powers:**

- Britain

- United States

- Soviet Union

- France

- Many others



**Axis Powers:**

- Germany

- Italy

- Japan



## The Holocaust



- A terrible time

- Millions of people were killed

- It was a genocide

- We must never forget

- We must learn from it



## The Blitz



- German bombing of British cities

- People hid in air raid shelters

- Many buildings destroyed

- People showed great courage

- Britain stood strong



## D-Day and Victory



- June 6, 1944 - D-Day

- Allied invasion of France

- Very important battle

- Helped end the war

- War ended in 1945



## Fun Activities



- Research the war

- Learn about the Blitz

- Write about the Home Front

- Make a timeline



## Remember



- War lasted 1939-1945

- Affected everyone

- People showed courage

- Important to remember!`,
      quizId: 83,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 4,
      title: "The Cold War",
      emoji: '❄️',
      content: `# The Cold War ❄️



Let's learn about the Cold War!



## What Was the Cold War?



- A conflict between the USA and Soviet Union

- It lasted from 1945 to 1991

- It was called "cold" because they didn't fight directly

- But there was tension



## The Two Sides



**United States and Allies**

- Believed in democracy

- Believed in capitalism

- Wanted freedom

- Western countries



**Soviet Union and Allies**

- Believed in communism

- Controlled by government

- Eastern countries

- Different system



## The Iron Curtain



- A division in Europe

- East and West separated

- Berlin Wall was built

- People couldn't travel freely

- It was a symbol of division



## The Space Race



- Both sides raced to space

- First satellite (Sputnik)

- First man in space

- First moon landing

- It was a competition



## Nuclear Weapons



- Both sides had nuclear weapons

- Very dangerous

- Could destroy the world

- People were afraid

- It was called "mutual destruction"



## The End



- The Cold War ended in 1991

- Soviet Union broke apart

- Berlin Wall came down

- People were free

- It was a time of change



## Fun Activities



- Learn about the Cold War

- Study the Space Race

- Make a timeline

- Write about the effects



## Remember



- Cold War was 1945-1991

- USA vs Soviet Union

- It was tense

- It ended peacefully!`,
      quizId: 84,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Civil Rights Movement",
      emoji: '✊',
      content: `# Civil Rights Movement ✊



Let's learn about the fight for civil rights!



## What Were Civil Rights?



- Rights for all people

- Equal treatment

- No discrimination

- Fairness for everyone

- Important freedoms



## Segregation



- People were separated by race

- Different schools

- Different places

- It was unfair

- It was wrong



## Martin Luther King Jr.



- A great leader

- Fought for civil rights

- Gave famous speeches

- Led peaceful protests

- He was assassinated



## Rosa Parks



- Refused to give up her seat

- Started a bus boycott

- She was brave

- She inspired others

- She made a difference



## The Fight for Rights



- People protested

- They marched

- They boycotted

- They fought peacefully

- They won rights



## Changes



- Laws changed

- Segregation ended

- People got equal rights

- It was progress

- But there's still work to do



## Fun Activities



- Learn about civil rights leaders

- Study the movement

- Make a timeline

- Write about the impact



## Remember



- Civil rights are important

- People fought for equality

- They made progress

- We must continue the fight!`,
      quizId: 84,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Modern World - 1960s to 1990s",
      emoji: '🌐',
      content: `# Modern World - 1960s to 1990s 🌐



Let's learn about the modern world!



## The 1960s



- A time of change

- Young people protested

- Music changed

- Fashion changed

- Society changed



## The 1970s



- More changes

- Technology advanced

- Computers started

- Space exploration continued

- World events happened



## The 1980s



- Computers became common

- Technology grew

- Music and culture changed

- World events

- Life was different



## The 1990s



- Internet became popular

- Computers everywhere

- Communication changed

- World became connected

- Technology advanced



## Important Events



- Fall of Berlin Wall (1989)

- End of Cold War (1991)

- Internet revolution

- Globalization

- Many changes



## Fun Activities



- Learn about each decade

- Study important events

- Make a timeline

- Write about changes



## Remember



- 1960s-1990s had many changes

- Technology advanced

- World became connected

- Life changed a lot!`,
      quizId: 84,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 7,
      title: "Modern World - 2000s to Today",
      emoji: '📱',
      content: `# Modern World - 2000s to Today 📱



Let's learn about recent history!



## The 2000s



- New millennium

- Technology advanced

- Internet grew

- Social media started

- World changed



## The 2010s



- Smartphones became common

- Social media grew

- Technology everywhere

- World became more connected

- Many changes



## Today (2020s)



- We live in this time!

- Technology is everywhere

- Internet connects us all

- We're making history now

- Future is ahead



## Recent Events



- COVID-19 pandemic

- Climate change awareness

- Technology advances

- Social movements

- World events



## Technology Today



- Smartphones

- Internet

- Social media

- Artificial Intelligence

- Many new things



## Making History



- We're living in history

- Our actions matter

- We can make a difference

- We're part of the story

- History continues



## Fun Activities



- Learn about recent events

- Study current issues

- Think about the future

- Write about today



## Remember



- We're living in history

- Technology changed everything

- We're making history now

- The future is ahead!`,
      quizId: 84,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 8,
      title: "Historical Sources and Evidence",
      emoji: '📜',
      content: `# Historical Sources and Evidence 📜



Let's learn about historical sources!



## What are Historical Sources?



Historical sources are evidence from the past that help us understand history.



## Types of Sources



**Primary Sources**

- Created at the time

- Letters, diaries, photos

- Official documents

- Artifacts

- First-hand accounts



**Secondary Sources**

- Created later

- History books

- Documentaries

- Articles

- Interpretations



## Primary Sources



**Written Sources**

- Letters and diaries

- Official records

- Newspapers

- Books from the time

- Speeches



**Visual Sources**

- Paintings

- Photographs

- Maps

- Drawings

- Videos



**Artifacts**

- Objects from the past

- Tools, weapons, clothing

- Buildings

- Coins

- Technology



## Using Sources



**Questions to Ask:**

- Who created it?

- When was it created?

- Why was it created?

- Is it reliable?

- What does it tell us?

- What perspective does it show?



## Evaluating Sources



- Is it primary or secondary?

- Is it reliable?

- What is the perspective?

- What is missing?

- How does it compare to other sources?

- What biases might exist?



## Fun Activities



- Examine primary sources

- Compare different sources

- Write about what sources tell us

- Create your own sources

- Evaluate sources critically



## Remember



- Sources are evidence

- Primary sources are from the time

- Evaluate sources carefully

- Sources help us understand history!`,
      quizId: 96,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 9,
      title: "Making History - How We Study the Past",
      emoji: '🔍',
      content: `# Making History - How We Study the Past 🔍



Let's learn how historians study the past!



## What Do Historians Do?



- Historians study the past

- They research events

- They analyze sources

- They write about history

- They help us understand



## Research Methods



- Read primary sources

- Study artifacts

- Visit historical places

- Talk to experts

- Compare different sources



## Historical Thinking



- Ask questions

- Look for evidence

- Consider different perspectives

- Think critically

- Make connections



## Writing History



- Organize information

- Tell a story

- Use evidence

- Explain events

- Help others understand



## Why History Matters



- Learn from the past

- Understand the present

- Prepare for the future

- Learn about people

- Understand change



## Fun Activities



- Do historical research

- Write about history

- Visit museums

- Interview people

- Create timelines



## Remember



- Historians study the past

- They use evidence

- They think critically

- History helps us understand!`,
      quizId: 96,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 10,
      title: "Understanding Historical Change",
      emoji: '🔄',
      content: `# Understanding Historical Change 🔄



Let's learn about how history changes!



## How Things Change



- History shows change

- Things change over time

- People change

- Societies change

- The world changes



## Causes of Change



- New ideas

- New inventions

- Wars and conflicts

- People's actions

- Natural events



## Patterns in History



- Some things repeat

- We can see patterns

- We can learn from them

- History helps us understand

- We can predict some things



## Continuity and Change



- Some things stay the same

- Some things change

- We see both

- History shows both

- It's interesting to study



## Learning from History



- We can learn from mistakes

- We can learn from successes

- We can understand people

- We can make better choices

- History teaches us



## Your Place in History



- You're part of history

- Your actions matter

- You can make a difference

- You're making history now

- The future is yours



## Fun Activities



- Study how things changed

- Compare different times

- Think about causes

- Write about change

- Consider the future



## Remember



- History shows change

- We can learn from it

- You're part of history

- You can make a difference!`,
      quizId: 96,
      assessmentType: 'quiz',
      categoryId: null,
    })

  ];
}
