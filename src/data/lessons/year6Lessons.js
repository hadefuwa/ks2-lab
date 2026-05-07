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
      subjectId: 'history',
      lessonNumber: 9,
      title: "Making History - How We Study the Past",
      emoji: '🔍',
      content: `# Making History - How We Study the Past 🔍

Historians are detectives with notebooks, microphones, and museum gloves. They question every clue, compare every story, and turn piles of evidence into explanations the rest of us can understand.

## Field Notebook
- **Primary Clues** – diaries, newspapers, maps, films, and objects created during the time period.
- **Secondary Guides** – textbooks, documentaries, and podcasts that explain what happened later.
- **Artifacts & Oral Histories** – tools, clothing, and living memories that carry the feelings of the past.

## Investigation Skills
- Ask “who created this, when, and why?” before trusting a source.
- Cross-check memories with records so that one person’s voice is balanced by others.
- Notice bias and perspective: an artist, soldier, or reporter may tell different stories about the same day.

## Writing Like a Historian
- Start with a **big question** the reader cares about.
- Stack evidence (quotes, statistics, artifacts) that truly answer the question.
- Reflect on meaning: What changed? Who benefited? Why does it matter now?

## Game Instructions – Making History Lab
1. **Source Sorting Lab** – Drag (well, tap!) each card into the right category. Decide if it is primary, secondary, an artifact, or an oral history.
2. **Source Detective** – Read real investigation cards and choose the action that keeps your history fair and reliable.
3. **History Brief Builder** – Assemble the question, evidence, and reflection pieces to craft a publish-ready summary.

Earn up to 100 points by completing every phase. A perfect score means you investigated like a pro historian who can sort sources, evaluate reliability, and craft meaningful stories.

## Learning Goals
- Distinguish between different types of sources and why each matters.
- Evaluate reliability by asking purposeful questions and comparing perspectives.
- Organize findings into a clear question → evidence → insight structure.
- Explain why history is more than memorizing dates—it is using evidence to understand people and change.

Grab your notebook, historian. The archives are open and you’re on the research team!`,
  quizId: null,
      assessmentType: 'making-history-game',
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

- Important to remember!



## Practice Questions



<!-- QUESTION_START -->
When did World War I happen?
<!-- OPTIONS -->
1910-1914|1914-1918|1918-1922|1920-1924
<!-- CORRECT -->
1
<!-- EXPLANATION -->
World War I lasted from 1914 to 1918! It was a very difficult time with many countries involved!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were soldiers' living conditions like in the trenches?
<!-- OPTIONS -->
Comfortable|Very difficult with mud, rats, and disease|Easy|Fun
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Soldiers lived in trenches (ditches) with very difficult conditions - mud, rats, and disease. It was dangerous and scary!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which countries were in the Allied Powers?
<!-- OPTIONS -->
Germany, Austria-Hungary|Britain, France, Russia, United States|Only Germany|Only Britain
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Allied Powers included Britain, France, Russia, and the United States (who joined later), plus many others!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What new weapons were used in World War I?
<!-- OPTIONS -->
Only swords|Machine guns, tanks, poison gas, airplanes, and submarines|Only guns|Only knives
<!-- CORRECT -->
1
<!-- EXPLANATION -->
New weapons included machine guns, tanks (first used), poison gas, airplanes (for war), and submarines!
<!-- QUESTION_END -->`,
      quizId: 82,
      assessmentType: 'world-war-i-game',
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

The period between the end of the Great War (1918) and the start of World War II (1939) was a time of extreme contrast: from the celebration of the "Roaring Twenties" to the desperation of the "Great Depression."

## The Roaring Twenties & Social Change
After the trauma of the war, society underwent a transformation. 
- **Suffrage**: In many countries, women campaigned for and won the right to vote.
- **Consumerism**: New technologies like the radio, cinema, and mass-produced cars (like the Model T) changed how people spent their time and money.
- **Flappers**: Young women challenged social norms with shorter hair, shorter dresses, and a new sense of independence.

## The Economic Crisis: Hard Times
The prosperity of the 1920s was fragile.
- **Hyperinflation (1923)**: In Germany, the economy collapsed so badly that money became worthless. People needed wheelbarrows of cash just to buy a loaf of bread.
- **The Wall Street Crash (1929)**: The US stock market collapsed, leading to the **Great Depression**. This wasn't just in America; it caused banks to close and unemployment to soar worldwide.

## Rise of the Dictators
Economic suffering led many people to lose faith in democracy.
- **Totalitarianism**: In countries like Germany, Italy, and the Soviet Union, dictators (Hitler, Mussolini, and Stalin) took absolute control over every part of life.
- **The League of Nations**: Created to keep peace, this international group struggled because it lacked its own army and the USA never joined.

In the game, you will act as a historical analyst. Can you navigate these global crises and understand why the world was sliding toward another conflict?`,
      quizId: null,
      assessmentType: 'between-wars-game',
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

World War II (1939–1945) was the most destructive conflict in human history, involving over 30 countries and resulting in the deaths of an estimated 70 to 85 million people.

## The Axis vs. The Allies
The war was fought between two main groups:
- **The Axis Powers**: Led by Nazi Germany (Adolf Hitler), Fascist Italy (Benito Mussolini), and Imperial Japan (Emperor Hirohito).
- **The Allied Powers**: Led by Great Britain (Winston Churchill), the Soviet Union (Joseph Stalin), the United States (Franklin D. Roosevelt), and Free France (Charles de Gaulle).

## Key Turning Points
To understand the war, we must look at the strategic moments where the tide shifted:
1. **The Battle of Britain (1940)**: The RAF's defense of the UK against the Luftwaffe, preventing a German invasion.
2. **Pearl Harbor & Pacific War (1941)**: Japan's surprise attack on the US Navy, bringing the industrial might of the USA into the war.
3. **The Battle of Stalingrad (1942-1943)**: A catastrophic defeat for Germany in Russia, marking the end of their eastward expansion.
4. **D-Day (June 6, 1944)**: Operation Overlord, the massive Allied invasion of Normandy, which began the liberation of Western Europe.

## The Holocaust: A Global Tragedy
During the war, Nazi Germany carried out the **Holocaust**—a systematic, state-sponsored genocide that murdered 6 million Jews and millions of others. It remains the most horrific example of hatred and intolerance in history.

## The End of the War
The war in Europe ended in May 1945 (V-E Day), and the war against Japan ended in August 1945 (V-J Day) after the use of atomic bombs on Hiroshima and Nagasaki. The war's end led to the creation of the **United Nations** to prevent future global conflicts.

In the game, you will evaluate these critical turning points. Can you identify the strategies and events that led to the Allied victory?`,
      quizId: null,
      assessmentType: 'world-war-2-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 4,
      title: "The Cold War - Superpower Showdown",
      emoji: '❄️',
      content: `# The Cold War - Superpower Showdown ❄️

    The Cold War (1945–1991) was a global contest between two superpowers—the United States and its democratic allies versus the Soviet Union and its communist partners. Instead of fighting directly, they used alliances, propaganda, science, spies, and occasional proxy wars to compete for influence.

    ## Quick Timeline
    - **1945** – World War II ends, Europe is divided.
    - **1948** – Berlin Blockade and Airlift prove the city will not be abandoned.
    - **1955** – NATO and the Warsaw Pact face each other across the "Iron Curtain."
    - **1962** – Cuban Missile Crisis brings the world to the brink of nuclear war.
    - **1969** – Apollo 11 moon landing becomes a soft-power victory.
    - **1989-1991** – The Berlin Wall falls and the Soviet Union dissolves.

    ## Power Blocks
    - **NATO / USA-led bloc** – Democracies that promoted elections, markets, and open media.
    - **Soviet Bloc** – One-party socialist states where the communist party controlled politics and the economy.
    - **Non-Aligned Nations** – Countries (India, Egypt, Yugoslavia, Ghana) that refused to be pulled into either camp.

    ## Flashpoints to Know
    - **Berlin** – A divided city that symbolized freedom vs. control.
    - **Korea & Vietnam** – Proxy wars where superpowers backed different sides.
    - **Cuba** – Soviet missiles on America’s doorstep triggered tense negotiations.
    - **Afghanistan** – The Soviet Union’s 1979 invasion drained resources and global support.

    ## Ideas, Science, and Space
    - Satellites, rockets, and computers were created to prove that each system produced better knowledge and better lives.
    - Cultural exchanges, Olympic games, and media broadcasts were used to win hearts and minds.
    - Nuclear weapons could destroy the planet, so diplomacy (hotlines, treaties, United Nations meetings) became as important as armies.

    ## How to Play – Cold War Strategy Lab
    1. **Map the Alliances** – Sort real countries into NATO, Soviet Bloc, or Non-Aligned and read why each choice mattered.
    2. **Crisis Room** – Recreate Berlin, Cuba, and Space Race decisions to see which responses prevented war.
    3. **Innovation Lab** – Assemble the technology kits (rockets, diplomacy tools, civil-defense plans) that kept the Cold War “cold.”
    4. Earn points in every phase. A perfect 100% means you balanced military power, science, and diplomacy.

    ## Learning Goals
    - Explain why the Cold War stayed “cold” even while nuclear weapons existed.
    - Identify alliances, crisis responses, and inventions that shifted global power.
    - Connect the Space Race, civil defense, and diplomacy to everyday life.

    ## Vocabulary
    - **Iron Curtain** – The dividing line in Europe between Soviet-controlled east and democratic west.
    - **Mutually Assured Destruction (MAD)** – The idea that nuclear war would destroy everyone.
    - **Proxy War** – When superpowers support different sides in another country’s conflict.
    - **Deterrence** – Showing enough strength to discourage an attack.

    ## Remember
    - The Cold War was a contest of systems, stories, and science, not just weapons.
    - Small countries and ordinary citizens played important roles in resisting pressure.
    - Diplomacy, technology, and critical thinking can prevent crises from turning into wars.
    - You are now the strategist—use what you learned in the game to explain how the Cold War shaped today’s world!`,
      quizId: null,
      assessmentType: 'cold-war-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 5,
      title: "The Civil Rights Movement",
      emoji: '✊',
      content: `# The Civil Rights Movement ✊

The Civil Rights Movement was a social movement and campaign in the United States from 1954 to 1968 to abolish institutional racial discrimination, disenfranchisement, and racial segregation.

## The Era of Segregation (Jim Crow Laws)
Following the end of slavery, many states (mainly in the South) passed "Jim Crow" laws. These created a system where Black and White Americans were separated in almost every area of life: schools, buses, restaurants, and even water fountains. The law said these could be "separate but equal," but in reality, facilities for Black Americans were almost always inferior.

## Landmark Legal Battles
The movement used the court system to challenge these unfair laws.
- **Brown v. Board of Education (1954)**: The Supreme Court ruled that "separate educational facilities are inherently unequal." This was a massive victory that ordered the desegregation of schools.

## The Power of Non-Violent Protest
Led by figures like **Dr. Martin Luther King Jr.**, the movement prioritized non-violent resistance.
- **Montgomery Bus Boycott (1955)**: After **Rosa Parks** was arrested for refusing to give up her bus seat, the Black community boycotted the bus system for 381 days until the law was changed.
- **The March on Washington (1963)**: 250,000 people gathered for the "I Have a Dream" speech, demanding economic rights and an end to racism.

## Legislative Victories
The courage of marchers and protesters forced the government to act:
- **Civil Rights Act of 1964**: Outlawed discrimination based on race, color, religion, sex, or national origin.
- **Voting Rights Act of 1965**: Prohibited racial discrimination in voting, such as the literacy tests used to prevent Black Americans from casting their ballots.

In the game, you will navigate these critical milestones. Can you understand the bravery required to change a nation's laws?`,
      quizId: null,
      assessmentType: 'civil-rights-game',
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

- Life changed a lot!



## Practice Questions



<!-- QUESTION_START -->
What happened in the 1960s?
<!-- OPTIONS -->
Nothing|A time of change with young people protesting, music and fashion changing|Only war|Only peace
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The 1960s were a time of change! Young people protested, music changed, fashion changed, and society changed!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What became popular in the 1990s?
<!-- OPTIONS -->
Nothing|The Internet became popular|Only TV|Only radio
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In the 1990s, the Internet became popular! Computers were everywhere, communication changed, the world became connected, and technology advanced!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What important event happened in 1989?
<!-- OPTIONS -->
Nothing|Fall of Berlin Wall|World War II|Cold War started
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Fall of Berlin Wall happened in 1989! The Cold War ended in 1991, and there was an Internet revolution!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened to technology from 1960s to 1990s?
<!-- OPTIONS -->
Nothing|Technology advanced - computers started, became common, and Internet became popular|It stayed the same|It got worse
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Technology advanced greatly! Computers started in the 1970s, became common in the 1980s, and the Internet became popular in the 1990s!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'modern-world-1960s-1990s-game',
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

- The future is ahead!



## Practice Questions



<!-- QUESTION_START -->
What became common in the 2010s?
<!-- OPTIONS -->
Nothing|Smartphones became common|Only computers|Only TV
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In the 2010s, smartphones became common! Social media grew, technology was everywhere, and the world became more connected!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What technology do we have today?
<!-- OPTIONS -->
Nothing|Smartphones, Internet, social media, and Artificial Intelligence|Only phones|Only computers
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Today we have smartphones, Internet, social media, Artificial Intelligence, and many new things! Technology is everywhere!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What recent events have happened?
<!-- OPTIONS -->
Nothing|COVID-19 pandemic, climate change awareness, technology advances, and social movements|Only good things|Only bad things
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Recent events include the COVID-19 pandemic, climate change awareness, technology advances, social movements, and world events!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to know we're making history?
<!-- OPTIONS -->
It's not important|Our actions matter, we can make a difference, and we're part of the story|It doesn't matter|We can't do anything
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We're living in history! Our actions matter, we can make a difference, we're part of the story, and history continues!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'modern-world-2000s-today-game',
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

- Sources help us understand history!



## Practice Questions



<!-- QUESTION_START -->
What are primary sources?
<!-- OPTIONS -->
Sources created later|Sources created at the time like letters, diaries, photos, and artifacts|Only books|Only videos
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Primary sources are created at the time - letters, diaries, photos, official documents, artifacts, and first-hand accounts!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are secondary sources?
<!-- OPTIONS -->
Sources from the time|Sources created later like history books, documentaries, and articles|Only photos|Only letters
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Secondary sources are created later - history books, documentaries, articles, and interpretations!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What questions should we ask about sources?
<!-- OPTIONS -->
Nothing|Who created it, when, why, is it reliable, what does it tell us|Only who|Only when
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We should ask: Who created it? When was it created? Why was it created? Is it reliable? What does it tell us? What perspective does it show?
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to evaluate sources?
<!-- OPTIONS -->
It's not important|To understand if they're reliable, what perspective they show, and what might be missing|It doesn't matter|We can't learn anything
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We evaluate sources to see if they're reliable, understand the perspective, see what's missing, compare to other sources, and check for biases!
<!-- QUESTION_END -->`,
      quizId: 96,
      assessmentType: 'historical-sources-evidence-game',
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

In Year 6, we move beyond just "what" happened to "how" and "why" things change over time. Understanding historical change is the core skill of a master historian.

## Continuity vs. Change
Not everything in history changes at the same rate.
- **Continuity**: Aspects of life that remain the same over long periods. For example, humans have always needed food, shelter, and community.
- **Change**: Aspects that transform. For example, how we communicate (from clay tablets to instant messaging) or how we travel (from walking to spaceflight).

## Causality: Cause and Effect
Every event has a reason (Cause) and a result (Effect).
- **Short-term Causes**: Immediate sparks that start an event (e.g., the assassination of Archduke Franz Ferdinand).
- **Long-term Causes**: Deep-rooted tensions that build up over years (e.g., the rise of nationalism and militarism before WWI).

## Historical Significance
Why do we remember some people and events but not others? Historians use the **5Rs** to judge significance:
1. **Remarkable**: Was it noticed at the time?
2. **Remembered**: Is it still part of our collective memory?
3. **Resonant**: Does it still impact us today?
4. **Resultful**: Did it lead to other major changes?
5. **Revealing**: Does it reveal something important about that era?

In the game, you will evaluate these concepts. Can you distinguish between long-lasting continuities and rapid historical changes?`,
      quizId: null,
      assessmentType: 'historical-change-game',
      categoryId: null,
    }),

    // ── English ──────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Sentence Building",
      emoji: '🏗️',
      content: `# Sentence Building 🏗️

By Year 6 you should be able to write complex, varied sentences that keep a reader engaged.

## Clause types
- **Main clause** — can stand alone: *The dog barked.*
- **Subordinate clause** — adds detail, depends on main clause: *because it heard a noise.*

Full sentence: "The dog barked **because it heard a noise**."

## Sentence types
| Type | Purpose | Example |
|---|---|---|
| Simple | One main clause | She ran. |
| Compound | Two main clauses joined by and/but/or | She ran **and** he followed. |
| Complex | Main + subordinate clause | She ran **although** she was tired. |

## Varying sentence length
Mix short punchy sentences with longer ones for rhythm and effect. Short sentences create tension.

## In the game
Build sentences from word tiles, choosing the right structure for each purpose.`,
      quizId: null,
      assessmentType: 'sentence-building-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'english',
      lessonNumber: 2,
      title: "Creative Writing",
      emoji: '✍️',
      content: `# Creative Writing ✍️

Great stories pull readers in from the first line and leave them thinking long after the last.

## Story structure
1. **Opening** — introduce character, setting, atmosphere
2. **Build-up** — develop character, hint at conflict
3. **Dilemma/Climax** — the main problem or crisis
4. **Resolution** — how the problem is solved
5. **Ending** — reflection or new beginning

## Show, don't tell
Instead of: *She was scared.*
Write: *Her hands trembled. She pressed herself against the cold wall, barely daring to breathe.*

## Powerful word choices
- Strong verbs: *crept, thundered, whispered* (not "went" or "said")
- Precise nouns: *mansion, hovel, cottage* (not just "house")
- Purposeful adjectives — one well-chosen adjective beats three weak ones

## In the game
Make story choices and build a narrative. Think carefully — every decision shapes what comes next!`,
      quizId: null,
      assessmentType: 'creative-writing-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'english',
      lessonNumber: 3,
      title: "Advanced Spelling Patterns",
      emoji: '🔤',
      content: `# Advanced Spelling Patterns 🔤

Year 6 spelling involves tricky patterns, homophones, and words borrowed from other languages.

## Tricky suffixes
- **-ible vs -able**: sensible / comfortable
- **-tion vs -sion**: action / decision

## Common homophones
| Word | Meaning |
|---|---|
| affect | verb: to influence |
| effect | noun: the result |
| practise | verb (UK) |
| practice | noun (UK) |
| stationary | not moving |
| stationery | paper and pens |

## Words with silent letters
knight, gnaw, pneumonia, psychology, wreck

## In the game
Spell each word correctly, choosing between commonly confused spellings.`,
      quizId: null,
      assessmentType: 'spelling-game',
      categoryId: null,
    }),

    // ── Maths ────────────────────────────────────────────────────────────────

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Algebra Introduction",
      emoji: '🔣',
      content: `# Algebra Introduction 🔣

Algebra uses letters to represent unknown numbers. It lets us write rules that work for any number.

## Key vocabulary
- **Variable** — a letter standing for an unknown: x, n, a…
- **Expression** — numbers and variables combined: 3x + 2
- **Equation** — expression with an equals sign: 3x + 2 = 11

## Solving simple equations
3x + 2 = 11
→ Subtract 2 from both sides: 3x = 9
→ Divide both sides by 3: **x = 3**

Check: 3(3) + 2 = 9 + 2 = 11 ✓

## Function machines
Input → ×3 → +2 → Output. If input = 4: answer = **14**.

## In the game
Balance equations and find the value of the unknown.`,
      quizId: null,
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

Statistics is about collecting, organising, and interpreting data to spot patterns.

## Types of chart
| Chart | Best for |
|---|---|
| Bar chart | Comparing categories |
| Pie chart | Showing proportions |
| Line graph | Change over time |

## Averages
- **Mean** = sum ÷ count
- **Median** = middle value when ordered
- **Mode** = most frequent value
- **Range** = highest − lowest

## In the game
Read and interpret different types of graph. Answer questions about the data.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Negative Numbers",
      emoji: '❄️',
      content: `# Negative Numbers ❄️

Negative numbers are less than zero. We use them for temperatures, depths, bank balances.

## The number line
← −5, −4, −3, −2, −1, 0, 1, 2, 3, 4, 5 →

Numbers increase from left to right. −1 is greater than −5.

## Calculating with negatives
- Adding a negative = subtracting: 6 + (−2) = 4
- Subtracting a negative = adding: 6 − (−2) = 8
- Two negatives multiplied = positive: (−3) × (−4) = 12

## Temperature problems
Moscow: −8°C, London: 3°C. Difference = 3 − (−8) = **11°C**

## In the game
Add, subtract, and compare negative numbers.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Ratio and Proportion",
      emoji: '⚖️',
      content: `# Ratio and Proportion ⚖️

## Ratio
A **ratio** compares two quantities. For every 2 red beads there are 3 blue → ratio **2:3**.

## Simplifying ratios
Divide both parts by their HCF. 6:9 ÷ 3 = **2:3**

## Proportion
Proportion describes a part as a fraction of the whole.
In ratio 2:3, total parts = 5. Red beads = 2/5 of total.

## Unitary method (scaling recipes)
Recipe for 4 people: 200 g flour.
For 6 people: 200 ÷ 4 × 6 = **300 g**

## In the game
Simplify ratios, find proportions, and scale quantities up and down.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Converting Fractions/Decimals/Percentages",
      emoji: '🔄',
      content: `# Converting Fractions, Decimals, and Percentages 🔄

## Conversion table
| Fraction | Decimal | Percentage |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/5 | 0.2 | 20% |
| 1/10 | 0.1 | 10% |

## Converting methods
- Fraction → Decimal: divide top by bottom (3 ÷ 4 = 0.75)
- Decimal → Percentage: × 100 (0.75 → 75%)
- Percentage → Fraction: write over 100 and simplify (75/100 = 3/4)

## In the game
Convert between all three forms and put values in order of size.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Advanced Problem Solving",
      emoji: '🧠',
      content: `# Advanced Problem Solving 🧠

Problem solving brings together all areas of maths.

## Strategy for word problems
1. Read carefully — more than once.
2. Identify what you must find.
3. Choose operations: +, −, ×, ÷, or a combination.
4. Estimate the answer before calculating.
5. Calculate and show working clearly.
6. Check the answer makes sense in context.

## Multi-step example
"A cinema sells 325 tickets at £8 and 178 at £5. Total income?"
- 325 × 8 = 2600
- 178 × 5 = 890
- 2600 + 890 = **£3490**

## In the game
Work through multi-step word problems. Show each step!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Prime and Square Numbers",
      emoji: '🔢',
      content: `# Prime and Square Numbers 🔢

## Prime numbers
Exactly two factors: 1 and itself.
First 10 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
- 1 is **not** a prime. 2 is the only **even** prime.

## Square numbers
n × n: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100…
6² = 36

## Cube numbers
n × n × n: 2³ = 8, 3³ = 27, 4³ = 64

## Prime factorisation
Every whole number > 1 = product of primes.
12 = 2² × 3

## In the game
Identify primes, square numbers, and cube numbers. Sort and classify!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Percentage Change",
      emoji: '📈',
      content: `# Percentage Change 📈

## Finding percentage change
Percentage change = (change ÷ original) × 100

Jumper: £40 → £30. Change = £10.
(10 ÷ 40) × 100 = **25% decrease**

## Percentage increase
£80 + 15%: 15% of 80 = 12 → 80 + 12 = **£92**

## Percentage decrease
£80 − 15%: 15% of 80 = 12 → 80 − 12 = **£68**

## Multiplier method
Increase 15%: × 1.15 | Decrease 15%: × 0.85

## In the game
Calculate percentage increases and decreases in real-world contexts.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "3, 4, and 8 Times Tables",
      emoji: '✖️',
      content: `# 3, 4, and 8 Times Tables ✖️

By Year 6 you should know all tables up to 12 × 12 instantly.

## 3× table
3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36
Digit sum of any multiple of 3 is always a multiple of 3.

## 4× table
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48
Always even. Double the 2× table.

## 8× table
8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96
Double the 4× table.

## Inverse relationships
8 × 7 = 56 → 56 ÷ 8 = 7 and 56 ÷ 7 = 8

## In the game
Rapid-fire questions. Speed and accuracy!`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "6, 7, 9, 11, and 12 Times Tables",
      emoji: '✖️',
      content: `# 6, 7, 9, 11, and 12 Times Tables ✖️

## 6× table
6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72 — always even.

## 7× table
7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84 — the trickiest! Use 7 × 8 = 56.

## 9× table
9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108
Digit sum always = 9.

## 11× table
Up to 9: write the digit twice (11 × 7 = 77). 11 × 11 = 121.

## 12× table
12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144

## In the game
Rapid-fire questions from all five tables.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 11,
      title: "Large Multiplication",
      emoji: '🔢',
      content: `# Large Multiplication 🔢

## Column multiplication
347 × 24:
- 347 × 4 = 1388
- 347 × 20 = 6940
- Total = **8328**

Always estimate first: 350 × 24 ≈ 8400. Close — good sign!

## In the game
Work through large multiplication problems step by step.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 12,
      title: "Large Division",
      emoji: '➗',
      content: `# Large Division ➗

## Short division (bus stop)
846 ÷ 6 = **141**

## Long division (two-digit divisor)
875 ÷ 25:
- 25 into 87 = 3 r 12
- Bring down 5 → 125 ÷ 25 = 5
- Result: **35**

## Remainders
747 ÷ 4 = 186 r 3 = 186¾ or 186.75

## In the game
Practise short and long division. Show each step clearly.`,
      quizId: null,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 13,
      title: "Bar Charts and Data",
      emoji: '📊',
      content: `# Bar Charts and Data 📊

## Reading bar charts
1. Check the title — what is being measured?
2. Check the y-axis scale — what does each division represent?
3. Read bar heights precisely.
4. Calculate differences by subtracting.

## Drawing bar charts
1. Choose a sensible scale (2s, 5s, 10s, 100s).
2. Label both axes clearly.
3. Bars same width, equal gaps.
4. Give the chart a title.

## Questions to ask about data
- Which category is most/least common?
- What is the difference between highest and lowest?
- What is the total of all bars added together?

## In the game
Read and build bar charts from data sets.`,
      quizId: null,
      assessmentType: 'graph-builder-game',
      categoryId: null,
    }),

  ];
}
