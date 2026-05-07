import { Lesson } from '../../models/Lesson.js';

/**
 * Year 5 Lessons
 */
export function getYear5Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    // ── English ──────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Parts of Speech",
      emoji: '🏷️',
      content: `# Parts of Speech 🏷️

Every word in a sentence has a job. The job a word does is called its **part of speech**.

## The key parts of speech

| Part of Speech | Job | Examples |
|---|---|---|
| **Noun** | Names a person, place, thing, or idea | dog, London, happiness |
| **Verb** | Shows action or state | run, is, became |
| **Adjective** | Describes a noun | tall, blue, magnificent |
| **Adverb** | Modifies a verb, adjective, or adverb | quickly, very, never |
| **Pronoun** | Replaces a noun | he, she, it, they |
| **Preposition** | Shows position or relationship | in, on, under, between |
| **Conjunction** | Joins clauses or words | and, but, because, although |

## In the game
Identify the part of speech for each highlighted word. Read the whole sentence first!`,
      quizId: null,
      assessmentType: 'parts-of-speech-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 2,
      title: "Figurative Language",
      emoji: '🎨',
      content: `# Figurative Language 🎨

Figurative language uses words in a creative way to make writing more vivid and expressive.

## Key techniques

### Simile
Compares two things using **like** or **as**.
> "The stars shone *like* scattered diamonds."

### Metaphor
States that one thing **is** another.
> "The classroom was *a zoo*."

### Personification
Gives human qualities to non-human things.
> "The wind *whispered* through the trees."

### Alliteration
Repeating the same starting sound.
> "Peter Piper picked a peck of pickled peppers."

### Hyperbole
Exaggeration for effect.
> "I've told you a *million* times!"

## In the game
Identify which technique is being used in each example.`,
      quizId: null,
      assessmentType: 'figurative-language-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 3,
      title: "Reading Comprehension",
      emoji: '📚',
      content: `# Reading Comprehension 📚

Good readers don't just read words — they **think** about what they are reading.

## Comprehension strategies

### Literal questions
The answer is stated directly in the text. Find the key word in the question and scan for it.

### Inferential questions
The answer is not stated directly. Use clues in the text plus your own knowledge to work it out.

### Vocabulary in context
When you meet an unknown word, use the surrounding sentences to work out its meaning.

## Active reading tips
1. **Preview** — read the title and any headings first.
2. **Question** — what do you expect to find out?
3. **Read** — read carefully and look for the main idea of each paragraph.
4. **Summarise** — in your own words, what was the text about?

## In the game
Read the passage carefully, then answer questions. Go back to the text to check your answers!`,
      quizId: null,
      assessmentType: 'reading-comprehension-game',
      categoryId: null,
    }),

    // ── Maths ────────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Place Value to 1,000,000",
      emoji: '🏛️',
      content: `# Place Value to 1,000,000 🏛️

In Year 5 we work with numbers up to one million.

## The place value columns
| Millions | HTh | TTh | Th | H | T | O |
|---|---|---|---|---|---|---|
| 1 | 4 | 2 | 7 | 3 | 0 | 5 |

1,427,305 = 1,000,000 + 400,000 + 27,000 + 300 + 5

## Reading large numbers
Group digits in threes from the right: 1 427 305 → "one million, four hundred and twenty-seven thousand, three hundred and five"

## Negative numbers
Numbers below zero are **negative**. On a number line they sit to the left of zero.
−5 is less than −2 even though 5 > 2.

## In the game
Read, write, and compare numbers up to one million. Watch the place value of each digit!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Percentages",
      emoji: '%',
      content: `# Percentages %

**Per cent** means "out of 100". The symbol is **%**.

## Converting between fractions, decimals, and percentages
| Fraction | Decimal | Percentage |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/5 | 0.2 | 20% |
| 1/10 | 0.1 | 10% |

## Finding a percentage of an amount
- 10% of 80 = 80 ÷ 10 = **8**
- 25% of 80 = 80 ÷ 4 = **20**
- 5% of 80 = half of 10% = **4**

## In the game
Calculate percentages and convert between forms.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Symmetry",
      emoji: '🪞',
      content: `# Symmetry 🪞

A shape has **line symmetry** if it can be folded so that both halves match exactly. The fold line is the **line of symmetry** (or **mirror line**).

## Lines of symmetry
- Square: **4** lines
- Rectangle: **2** lines
- Equilateral triangle: **3** lines
- Circle: **infinite** lines
- Scalene triangle: **0** lines

## Reflective symmetry in coordinates
To reflect a point in the y-axis: change the sign of the x-coordinate.
(3, 2) → (−3, 2)

## Rotational symmetry
A shape has rotational symmetry if it looks the same after being rotated less than a full turn. The **order** is how many times it fits in a full 360° turn.

## In the game
Identify lines of symmetry and complete symmetrical patterns.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Volume",
      emoji: '📦',
      content: `# Volume 📦

**Volume** is the amount of 3D space a solid shape takes up. It is measured in **cubic units** (cm³, m³).

## Counting cubes
The simplest way to find volume: count every small cube that fits inside the shape.

## Volume of a cuboid
Volume = length × width × height

A box 5 cm × 3 cm × 2 cm has volume = 5 × 3 × 2 = **30 cm³**

## Capacity vs volume
- **Volume** describes a solid object (how much space it takes up).
- **Capacity** describes the inside of a container (how much liquid it holds).
1 cm³ = 1 ml, so a 500 cm³ bottle holds 500 ml = 0.5 litres.

## In the game
Calculate the volume of 3D shapes by counting cubes and using the formula.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Mean, Median, Mode",
      emoji: '📊',
      content: `# Mean, Median, Mode 📊

These are three ways to find the "average" or typical value in a data set.

## Mode
The value that appears **most often**.
Data: 3, 5, 5, 7, 9 → Mode = **5**

## Median
The **middle** value when data is arranged in order.
Data: 2, 4, 7, 9, 11 → Median = **7**
For an even number of values, average the two middle values.

## Mean
Add all values, then **divide by how many** there are.
Data: 4, 6, 8, 10 → Mean = (4+6+8+10) ÷ 4 = 28 ÷ 4 = **7**

## Which average to use?
- **Mode** — best for categories (favourite colour)
- **Median** — best when there are extreme values
- **Mean** — best when values are evenly spread

## In the game
Calculate the mean, median, and mode for different data sets.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Decimals to 3 Places",
      emoji: '🔢',
      content: `# Decimals to 3 Places 🔢

In Year 5 we extend decimals to **thousandths** (three decimal places).

## Place value
| Ones | . | Tenths | Hundredths | Thousandths |
|---|---|---|---|---|
| 3 | . | 4 | 7 | 2 |

3.472 = 3 + 4/10 + 7/100 + 2/1000

## Ordering decimals
Compare digit by digit: 3.47 vs 3.472
Both have 3 ones, 4 tenths, 7 hundredths — but 3.472 has 2 thousandths, so 3.472 > 3.47.

## Rounding decimals
- Round to 1 decimal place: look at the hundredths digit
- Round to 2 decimal places: look at the thousandths digit

3.472 rounded to 2 dp = **3.47** (2 < 5, round down)

## In the game
Order, compare, and round decimals to three decimal places.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Adding and Subtracting Fractions",
      emoji: '➕',
      content: `# Adding and Subtracting Fractions ➕

To add or subtract fractions, they must have the **same denominator** (common denominator).

## Same denominator
3/8 + 2/8 = 5/8 — just add the numerators.

## Different denominators
1/2 + 1/3 — find the lowest common denominator (6):
= 3/6 + 2/6 = **5/6**

## Mixed numbers
A mixed number has a whole part and a fraction part: 2¾

To add mixed numbers:
- Add the whole parts: 2 + 1 = 3
- Add the fractions: ¾ + ½ = 3/4 + 2/4 = 5/4 = 1¼
- Combine: 3 + 1¼ = **4¼**

## In the game
Add and subtract fractions with different denominators, including mixed numbers.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Coordinates",
      emoji: '🗺️',
      content: `# Coordinates 🗺️

Coordinates are a pair of numbers that pinpoint an exact location on a grid.

## Reading coordinates
A coordinate is written **(x, y)** — along the corridor (x-axis), then up the stairs (y-axis).

Point A at (3, 5): go 3 right, then 5 up.

## Four quadrants
When we include negative numbers, the grid has four quadrants:
- Quadrant 1: (+, +)
- Quadrant 2: (−, +)
- Quadrant 3: (−, −)
- Quadrant 4: (+, −)

## Translating shapes
Moving a shape left/right changes the **x** coordinate.
Moving a shape up/down changes the **y** coordinate.

## In the game
Plot points, read coordinates, and translate shapes on a grid.`,
      quizId: null,
      assessmentType: 'coordinate-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "2D Shape Properties",
      emoji: '🔷',
      content: `# 2D Shape Properties 🔷

## Classifying triangles
| Type | Properties |
|---|---|
| Equilateral | 3 equal sides, 3 equal angles (60°) |
| Isosceles | 2 equal sides, 2 equal base angles |
| Scalene | No equal sides or angles |
| Right-angled | One 90° angle |

## Quadrilaterals
| Shape | Properties |
|---|---|
| Square | 4 equal sides, 4 right angles |
| Rectangle | Opposite sides equal, 4 right angles |
| Rhombus | 4 equal sides, opposite angles equal |
| Parallelogram | Opposite sides parallel and equal |
| Trapezium | One pair of parallel sides |

## Angles in shapes
- Triangle: angles add up to **180°**
- Quadrilateral: angles add up to **360°**

## In the game
Sort and match shapes by their properties.`,
      quizId: null,
      assessmentType: 'shape-matching-game',
      categoryId: null,
    }),

    // ── Technology ───────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Electronics 1: Understanding Resistance",
      emoji: '🛡️',
      content: `# Electronics 1: Understanding Resistance 🛡️

## What is Resistance?

Resistance is like a **squeeze** on a water hose - it controls how much electricity can flow through a circuit.

## The Resistor

A resistor is a component that adds resistance to slow down the flow of electricity. Think of it like speed bumps on a road - they slow down traffic!

## Why Do We Need Resistors?

- **Protect components** - Too much current can break LEDs and other parts
- **Control brightness** - Change how bright an LED shines
- **Save power** - Use only the electricity you need

## Ohm's Law

The relationship between **Voltage (V)**, **Current (I)**, and **Resistance (R)** is:

**V = I × R**

- Higher resistance = Less current
- Lower resistance = More current

## Safety First!

LEDs need the right amount of resistance:
- Too much resistance → LED won't light up
- Just right (220-1000Ω) → LED glows safely
- Too little resistance → LED burns out! 💥

## The Game

In this interactive game, you'll:
1. Start with HIGH resistance (safe but dim)
2. Slowly lower resistance to make the LED brighter
3. Find the safe zone (220-1000Ω)
4. Learn what happens if you go too low!

Can you light the LED without breaking it?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Electronics 2: Understanding Voltage",
      emoji: '⚡',
      content: `# Electronics 2: Understanding Voltage ⚡

## What is Voltage?

Voltage is the **electrical push** that makes current flow. Think of it like water pressure in a pipe:
- High voltage = Strong push
- Low voltage = Weak push
- No voltage = Nothing happens

## Measuring Voltage

Voltage is measured in **Volts (V)**:
- Small devices: 3-5V (Arduino, phones)
- House appliances: 240V (lights, TV)
- Car battery: 12V
- AA battery: 1.5V

## Different Devices Need Different Voltage

Just like you wouldn't use a fire hose to water a tiny plant, different devices need different amounts of electrical push:

### Small Electronics (5V)
- Arduino boards
- USB devices
- Small LEDs
- Sensors

### Large Appliances (240V)
- House lights
- TVs and computers
- Kitchen appliances
- Power tools

## What Happens If Voltage Is Wrong?

- **Too low** → Device won't work or will be very weak
- **Just right** → Device works perfectly ✓
- **Too high** → Device breaks or burns out! 💥

## The Game

In this two-level game, you'll:

**Level 1: Tiny LED (Arduino)**
- Target: 5V
- Learn to power small electronics safely

**Level 2: Big House Lamp**
- Target: 240V  
- See how much more push big appliances need!

Can you find the perfect voltage for each device?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Electronics 3: Understanding Current",
      emoji: '🔌',
      content: `# Electronics 3: Understanding Current 🔌

## What is Current?

Current is the **flow of electricity** through a circuit. Think of it like water flowing through pipes:
- More current = More flow
- Less current = Less flow
- No current = Nothing flowing

## Measuring Current

Current is measured in **Amperes (Amps or A)**:
- Small LED: 0.02A (20 milliamps)
- Phone charger: 1-2A
- Laptop: 3-4A
- House circuits: 10-15A limit
- Electric car: 30-50A

## The Fuse - Your Safety Guardian

A **fuse** is like a safety guard that melts if too much current flows. It sacrifices itself to protect your devices and prevent fires!

When current is **too high**, the fuse wire heats up and breaks the circuit.

## Adding More Devices = More Current

When you plug in multiple devices:
- Each device draws current
- Total current = Sum of all devices
- Fuse has a LIMIT (usually 10-15A for home circuits)

## What Happens If You Exceed The Limit?

1. More devices = More total current
2. Current exceeds fuse rating
3. Fuse melts → Circuit breaks
4. Power cuts off (this is GOOD - it prevents fires!)

## The Game

In this interactive challenge, you'll:
- Have a 12V circuit with a 10A fuse
- Turn on different "toys" that draw current
- Watch electrons flow faster as current increases
- Try to stay under the 10A limit!

Each toy draws different amounts:
- 🧸 Teddy Bear: 1A
- 🏎️ RC Car: 2A  
- 🤖 Robot: 3A
- 📺 TV: 5A

Can you manage the current without blowing the fuse?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),
  ];
}
