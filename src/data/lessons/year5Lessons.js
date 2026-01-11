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
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Percentages",
      emoji: '%',
      content: `# Percentages %



Let's learn about percentages!



## What is a Percentage?



A percentage is a way to show parts of 100.



- 50% means 50 out of 100

- 25% means 25 out of 100

- 100% means all of it



## Common Percentages



- 50% = ½ (half)

- 25% = ¼ (quarter)

- 75% = ¾ (three quarters)

- 10% = 1/10 (one tenth)



## Converting to Decimals



- 50% = 0.5

- 25% = 0.25

- 75% = 0.75

- 10% = 0.1



## Finding Percentages



To find 50% of 100:

- 50% = 50/100 = 0.5

- 0.5 × 100 = 50



To find 25% of 80:

- 25% = 25/100 = 0.25

- 0.25 × 80 = 20



## Practice



Find these percentages:

- 50% of 60 = ?

- 25% of 40 = ?

- 10% of 90 = ?

- 75% of 80 = ?



## Fun Activities



- Practice percentage problems

- Use real-life examples

- Calculate discounts

- Solve percentage word problems



## Remember



- Percentages are parts of 100

- They can be converted to decimals

- Practice finding percentages

- You're learning well!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Geometry: Shapes and Angles",
      emoji: '📐',
      content: `# Geometry: Shapes and Angles 📐



Let's learn about shapes and angles!



## Types of Angles



**Right Angle** - 90° (like a corner)

**Acute Angle** - Less than 90° (small)

**Obtuse Angle** - More than 90° but less than 180° (large)

**Straight Angle** - 180° (a straight line)



## Triangles



**Equilateral Triangle**

- All sides equal

- All angles 60°



**Isosceles Triangle**

- Two sides equal

- Two angles equal



**Scalene Triangle**

- All sides different

- All angles different



## Quadrilaterals



**Square**

- 4 equal sides

- 4 right angles



**Rectangle**

- 4 sides (opposites equal)

- 4 right angles



**Parallelogram**

- Opposite sides parallel

- Opposite sides equal



## Circles



- **Radius** - Distance from center to edge

- **Diameter** - Distance across (2 × radius)

- **Circumference** - Distance around



## Practice



Identify:

- Types of angles

- Types of triangles

- Types of quadrilaterals

- Parts of circles



## Fun Activities



- Draw different shapes

- Measure angles

- Identify shapes around you

- Solve geometry problems



## Remember



- Angles measure turns

- Shapes have properties

- Practice identifying shapes

- Geometry is everywhere!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Problem Solving",
      emoji: '🧩',
      content: `# Problem Solving 🧩



Let's learn to solve math problems!



## Problem-Solving Steps



1. **Read carefully** - Understand the problem

2. **Identify** - What do you need to find?

3. **Plan** - How will you solve it?

4. **Solve** - Work it out

5. **Check** - Does your answer make sense?



## Word Problems



Read the problem carefully:

- What information is given?

- What do you need to find?

- What operation do you need?



## Example Problem



"Sarah has 24 stickers. She gives away 8 stickers. How many does she have left?"



- Given: 24 stickers, gives away 8

- Find: How many left

- Operation: Subtraction

- Solve: 24 - 8 = 16

- Check: 16 + 8 = 24 ✓



## Strategies



- Draw a picture

- Make a list

- Use a number line

- Work backwards

- Try simpler numbers first



## Practice



Solve these problems:

- Tom has 35 marbles. He loses 12. How many left?

- A book has 120 pages. You read 45. How many left?

- You save £5 each week for 8 weeks. How much total?



## Fun Activities



- Solve word problems

- Create your own problems

- Explain your thinking

- Practice different strategies



## Remember



- Read problems carefully

- Plan your solution

- Check your work

- Practice makes perfect!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Writing Essays",
      emoji: '📝',
      content: `# Writing Essays 📝



Let's learn to write essays!



## What is an Essay?



An essay is a piece of writing that gives your opinion or explains something.



## Essay Structure



1. **Introduction** - Introduce your topic

2. **Body Paragraphs** - Develop your ideas (usually 3-5)

3. **Conclusion** - Summarize your points



## Introduction



- Hook the reader

- Introduce the topic

- State your main idea (thesis)



## Body Paragraphs



Each paragraph should have:

- Topic sentence

- Supporting details

- Examples

- Explanation



## Conclusion



- Restate main points

- Give final thoughts

- Leave reader thinking



## Types of Essays



- **Opinion** - Your view on a topic

- **Informative** - Explain something

- **Persuasive** - Convince the reader

- **Narrative** - Tell a story



## Practice



Write an essay about:

- Should children have homework?

- Why reading is important

- Your favorite hobby

- How to be a good friend



## Fun Activities



- Write essays on different topics

- Get feedback

- Edit and improve

- Share your essays



## Remember



- Plan before writing

- Use clear structure

- Support your ideas

- Edit carefully!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 2,
      title: "Literature Analysis",
      emoji: '📚',
      content: `# Literature Analysis 📚



Let's learn to analyze stories and poems!



## What is Analysis?



Analysis means looking closely at a text to understand it better.



## Elements to Analyze



**Characters**

- Who are they?

- What are they like?

- How do they change?



**Setting**

- Where does it happen?

- When does it happen?

- Why is the setting important?



**Plot**

- What happens?

- What is the conflict?

- How is it resolved?



**Theme**

- What is the main message?

- What does it teach us?

- What is the author saying?



## Reading Strategies



- Read carefully

- Take notes

- Ask questions

- Look for patterns

- Think about meaning



## Writing Analysis



- State your point

- Give evidence from the text

- Explain your evidence

- Connect to the bigger picture



## Practice



Analyze:

- A favorite story

- A poem

- A chapter from a book

- A character's journey



## Fun Activities



- Read and discuss literature

- Write analysis paragraphs

- Compare different texts

- Present your analysis



## Remember



- Look for deeper meaning

- Use evidence from the text

- Think critically

- Enjoy exploring literature!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 3,
      title: "Advanced Grammar",
      emoji: '📖',
      content: `# Advanced Grammar 📖



Let's learn more advanced grammar!



## Complex Sentences



A complex sentence has:

- One main clause (can stand alone)

- One or more subordinate clauses (can't stand alone)



Example:

"Although it was raining, we went to the park."

- Main clause: "we went to the park"

- Subordinate clause: "Although it was raining"



## Subordinating Conjunctions



Words that connect clauses:

- although, because, since, while

- if, when, after, before

- until, unless, as



## Active and Passive Voice



**Active Voice**

- Subject does the action

- "The cat chased the mouse."



**Passive Voice**

- Subject receives the action

- "The mouse was chased by the cat."



## Modal Verbs



Words that show possibility, necessity, or ability:

- can, could, may, might

- must, should, would, will



## Practice



Identify:

- Complex sentences

- Active vs passive voice

- Modal verbs

- Subordinate clauses



## Fun Activities



- Write complex sentences

- Practice active/passive

- Use modal verbs

- Edit for grammar



## Remember



- Grammar helps clarity

- Practice different structures

- Edit your writing

- You're improving!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 1,
      title: "The Tudors - Henry VIII and Elizabeth I",
      emoji: '👑',
      content: `# The Tudors - Henry VIII and Elizabeth I 👑



Let's learn about the Tudor period!



## When Were the Tudors?



- The Tudors ruled England from 1485 to 1603

- It was an important time

- Many things changed

- England became stronger



## Henry VIII



- Henry VIII was a famous king

- He had six wives

- He created the Church of England

- He built many palaces



## Elizabeth I



- Elizabeth I was a great queen

- She ruled for 45 years

- England's "Golden Age"

- She defeated the Spanish Armada



## Tudor Life



- Most people were farmers

- Towns and cities grew

- Trade increased

- Exploration expanded



## Tudor Achievements



- England became powerful

- Arts and literature flourished

- Shakespeare wrote plays

- It was a golden age



## Fun Activities



- Learn about the Tudors

- Draw Tudor palaces

- Make a timeline

- Write about Tudor life



## Remember



- Tudors ruled 1485-1603

- Henry VIII and Elizabeth I were famous

- It was a golden age

- England became powerful!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 2,
      title: "The Stuarts - James I to Charles II",
      emoji: '👑',
      content: `# The Stuarts - James I to Charles II 👑



Let's learn about the Stuart period!



## When Were the Stuarts?



- The Stuarts ruled from 1603 to 1714

- They came after the Tudors

- It was a time of conflict

- England had a civil war



## James I



- James I was the first Stuart king

- He united England and Scotland

- He believed in the divine right of kings

- He had conflicts with Parliament



## Charles I and the Civil War



- Charles I became king

- He had conflicts with Parliament

- A civil war started

- Charles I was executed



## The Commonwealth



- After the king was executed

- England became a republic

- Oliver Cromwell ruled

- It was called the Commonwealth



## Charles II



- Charles II became king

- The monarchy was restored

- He was called the "Merry Monarch"

- He brought back fun and entertainment



## Fun Activities



- Learn about the Stuarts

- Learn about the civil war

- Make a timeline

- Write about this period



## Remember



- Stuarts ruled 1603-1714

- There was a civil war

- The monarchy was restored

- It was a time of change!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 3,
      title: "The Enlightenment - New Ideas",
      emoji: '💡',
      content: `# The Enlightenment - New Ideas 💡



Let's learn about the Enlightenment!



## What Was the Enlightenment?



- The Enlightenment was a time of new ideas

- It started in the 1700s

- People questioned old ways

- They used reason and science



## New Ways of Thinking



- People used reason

- They questioned authority

- They believed in science

- They wanted freedom



## Famous Thinkers



- John Locke - Believed in natural rights

- Voltaire - Believed in freedom of speech

- They had new ideas

- They influenced the world



## Science and Discovery



- Science advanced

- People made discoveries

- They learned about nature

- They used experiments



## New Ideas About Government



- People questioned kings

- They wanted democracy

- They believed in rights

- These ideas spread



## Fun Activities



- Learn about Enlightenment thinkers

- Study their ideas

- Make a timeline

- Write about the Enlightenment



## Remember



- Enlightenment was about new ideas

- People used reason

- Science advanced

- It changed the world!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 4,
      title: "The American Revolution",
      emoji: '🇺🇸',
      content: `# The American Revolution 🇺🇸



Let's learn about the American Revolution!



## When Did It Happen?



- The American Revolution happened from 1775 to 1783

- The American colonies fought Britain

- They wanted independence

- They won their freedom



## Why Did It Start?



- The colonies were ruled by Britain

- They had to pay taxes

- They had no say in government

- They wanted independence



## The Declaration of Independence



- The colonies declared independence

- They wrote the Declaration

- It said all men are created equal

- It was very important



## George Washington



- George Washington led the army

- He was a great leader

- He became the first president

- He is remembered today



## The War



- The war lasted 8 years

- The Americans won

- Britain recognized independence

- The United States was born



## Fun Activities



- Learn about the revolution

- Study the Declaration

- Make a timeline

- Write about the war



## Remember



- Revolution was 1775-1783

- Americans won independence

- United States was created

- It was very important!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 5,
      title: "The French Revolution",
      emoji: '🇫🇷',
      content: `# The French Revolution 🇫🇷



Let's learn about the French Revolution!



## When Did It Happen?



- The French Revolution happened from 1789 to 1799

- It was a time of great change

- The people rebelled

- They wanted freedom



## Why Did It Start?



- The king had all the power

- The people were poor

- They had no rights

- They wanted change



## The Storming of the Bastille



- People stormed the Bastille

- It was a prison

- It was a symbol of power

- This started the revolution



## The Reign of Terror



- A time of violence

- Many people were executed

- It was very scary

- It was a difficult time



## Napoleon



- Napoleon became leader

- He was a great general

- He conquered many places

- He changed Europe



## Fun Activities



- Learn about the revolution

- Study Napoleon

- Make a timeline

- Write about the changes



## Remember



- Revolution was 1789-1799

- People wanted freedom

- It was a time of change

- It changed France!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 6,
      title: "The Industrial Revolution",
      emoji: '🏭',
      content: `# The Industrial Revolution 🏭



Let's learn about the Industrial Revolution!



## When Did It Happen?



The Industrial Revolution happened from about 1760 to 1840.



## What Changed?



- Machines replaced hand work

- Factories were built

- Cities grew

- Life changed dramatically



## Inventions



**Steam Engine**

- James Watt improved it

- Powered machines

- Changed transportation



**Spinning Jenny**

- Made cloth faster

- Textile industry grew

- Changed clothing production



**Railways**

- Steam trains

- Connected places

- Changed travel



## Life Changes



**Before:**

- Most people lived in countryside

- Worked on farms

- Made things by hand

- Life was slower



**After:**

- Many moved to cities

- Worked in factories

- Machines made things

- Life was faster



## Problems



- Cities were crowded

- Pollution increased

- Working conditions were hard

- Children worked in factories



## Fun Activities



- Research inventions

- Compare before and after

- Make a timeline

- Write about the changes



## Remember



- Revolution changed everything

- Machines changed work

- Cities grew

- Life changed forever!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 7,
      title: "The Victorian Era - Queen Victoria",
      emoji: '👑',
      content: `# The Victorian Era - Queen Victoria 👑



Let's learn about the Victorian era!



## When Was the Victorian Era?



- The Victorian era was from 1837 to 1901

- Queen Victoria ruled

- It was a long time

- Many things changed



## Queen Victoria



- Victoria became queen at 18

- She ruled for 63 years

- She was very popular

- The era is named after her



## The British Empire



- Britain had a huge empire

- It covered many countries

- It was very powerful

- "The sun never sets on the British Empire"



## Victorian Achievements



- Many inventions

- Railways expanded

- Science advanced

- Literature flourished



## Victorian Values



- Hard work

- Family values

- Morality

- Respectability



## Fun Activities



- Learn about Queen Victoria

- Study the empire

- Make a timeline

- Write about the era



## Remember



- Victorian era was 1837-1901

- Queen Victoria ruled

- Britain had a huge empire

- It was a time of change!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'history',
      lessonNumber: 8,
      title: "The Victorian Era - Daily Life",
      emoji: '🏘️',
      content: `# The Victorian Era - Daily Life 🏘️



Let's learn about how people lived in Victorian times!



## Rich and Poor



- There was a big difference

- Rich people: Large houses, servants

- Poor people: Small houses, hard work

- Life was very different



## Victorian Homes



- Rich: Large houses with many rooms

- Poor: Small, crowded houses

- No running water for poor

- No electricity



## Victorian Work



- Many worked in factories

- Long hours

- Hard work

- Low pay



## Victorian Children



- Rich children: Educated, played

- Poor children: Worked, no school

- Many worked in factories

- Life was hard for poor children



## Victorian Inventions



- Railways

- Telegraph

- Photography

- Many new things



## Fun Activities



- Compare rich and poor

- Draw Victorian homes

- Learn about work

- Write about daily life



## Remember



- Life was very different

- Rich and poor lived differently

- Many worked hard

- It was a time of change!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Advanced Scratch Programming",
      emoji: '🎮',
      content: `# Advanced Scratch Programming 🎮



Let's learn more advanced Scratch!



## Variables



Variables store information that can change.



**Creating Variables:**

- Click "Variables"

- Click "Make a Variable"

- Give it a name (like "score")



**Using Variables:**

- Set score to 0

- Change score by 1

- Show score on screen



## Loops



Loops repeat code.



**Forever Loop:**

- Repeats forever

- Good for continuous actions



**Repeat Loop:**

- Repeats a set number of times

- Good for specific actions



## Conditionals



Conditionals make decisions.



**If-Then:**

- If something is true, do this

- Example: If touching edge, bounce



**If-Then-Else:**

- If true, do this; else do that

- Example: If score > 10, say "Great!", else say "Keep trying"



## Broadcasting



Send messages between sprites.



- Broadcast "message"

- When I receive "message"

- Sprites can communicate



## Practice



Create programs with:

- Variables for scoring

- Loops for repetition

- Conditionals for decisions

- Broadcasting for communication



## Fun Activities



- Build interactive games

- Create animations

- Make quiz games

- Share your projects



## Remember



- Variables store data

- Loops repeat actions

- Conditionals make decisions

- Practice advanced features!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Web Development Basics",
      emoji: '🌐',
      content: `# Web Development Basics 🌐



Let's learn to make websites!



## What is HTML?



HTML (HyperText Markup Language) is the code that makes web pages.



## Basic HTML Structure



\`\`\`html

<html>

<head>

  <title>My Page</title>

</head>

<body>

  <h1>Hello World!</h1>

  <p>This is my first webpage.</p>

</body>

</html>

\`\`\`



## HTML Tags



- \`<h1>\` - Big heading

- \`<p>\` - Paragraph

- \`<img>\` - Image

- \`<a>\` - Link

- \`<div>\` - Container



## What is CSS?



CSS (Cascading Style Sheets) makes web pages look nice.



## Basic CSS



\`\`\`css

body {

background-color: lightblue;

}



h1 {

color: red;

font-size: 24px;

}

\`\`\`



## Creating a Web Page



1. Write HTML code

2. Add CSS for styling

3. Save as .html file

4. Open in browser



## Practice



Create web pages with:

- Headings and paragraphs

- Images

- Links

- Colors and styling



## Fun Activities



- Build simple websites

- Experiment with HTML

- Style with CSS

- Share your pages



## Remember



- HTML structures content

- CSS styles content

- Start simple

- Practice makes perfect!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Digital Citizenship",
      emoji: '🌐',
      content: `# Digital Citizenship 🌐



Let's learn to be good digital citizens!



## What is Digital Citizenship?



Digital citizenship means using technology responsibly, safely, and respectfully.



## Being Respectful Online



- Be kind to others

- Don't say mean things

- Respect different opinions

- Help others when you can



## Protecting Privacy



- Don't share personal information

- Use strong passwords

- Don't share passwords

- Be careful what you post



## Being Safe



- Don't talk to strangers

- Don't meet people from online

- Tell a grown-up if something's wrong

- Use trusted websites



## Creating Good Content



- Share helpful information

- Be creative

- Give credit to others

- Make positive contributions



## Dealing with Problems



- Cyberbullying - Tell a grown-up

- Inappropriate content - Close it, tell someone

- Strangers contacting you - Don't respond, tell someone

- Something scary - Get help



## Being a Good Digital Citizen



- Use technology for good

- Help others learn

- Share knowledge

- Make the internet better



## Fun Activities



- Discuss online scenarios

- Create digital citizenship posters

- Practice good online behavior

- Learn about internet safety



## Remember



- Be respectful online

- Protect your privacy

- Stay safe

- Be a good digital citizen!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    })

  ];
}
