/*
const riddles = [
    {
        question: "What has to be broken before you can use it?",
        answer: "A piece of string"
    },
    {
        question: "What has a head and a tail but no body?",
        answer: "A coin"
    },
    {
        question: "What is always in front of you but can't be seen?",
        answer: "The future"
    },
    {
        question: "What can travel around the world while staying in a corner?",
        answer: "A stamp"
    },
    {
        question: "What can you catch but never throw?",
        answer: "A bug"
    },
    {
        question: "What has a face but can't see?",
        answer: "A needle"
    },
    {
        question: "What has a head and a tail but no body?",
        answer: "A coin"
    },

{ question: "What has a face and two hands but no arms or legs?", answer: "A clock" },
{ question: "What has a neck but no head?", answer: "A bottle" },
{ question: "What gets broken without being held?", answer: "A promise" },
{ question: "What has a ring but no finger?", answer: "A telephone" },
{ question: "What has a thumb and four fingers but is not a hand?", answer: "A glove" },
{ question: "What has a face and two hands but no arms or legs?", answer: "A watch" },
{ question: "What has a head and a tail but no body?", answer: "A coin" },
{ question: "What gets wet while drying?", answer: "A towel" },
{ question: "What has a spine but no bones?", answer: "A book" },
{ question: "What has a neck but no head?", answer: "A bottle" },
{ question: "What can you catch but not throw?", answer: "A cold" },
{ question: "What has a bed but never sleeps?", answer: "A river" },
{ question: "What has a foot but no legs?", answer: "A ruler" },
{ question: "What has a cover but no pages?", answer: "A book" },
{ question: "What has lots of eyes but can't see?", answer: "A potato" },
{ question: "What has a tongue but can't talk?", answer: "A shoe" },
{ question: "What has a face and two hands but no arms or legs?", answer: "A clock" },
{ question: "What has a head and a tail but no body?", answer: "A coin" },
{ question: "What has a neck but no head?", answer: "A bottle" },
{ question: "What has a ring but no finger?", answer: "A telephone" },
{ question: "What has a spine but no bones?", answer: "A book" },
{ question: "What has lots of eyes but can't see?", answer: "A potato" },
{ question: "What has a cover but no pages?", answer: "A book" },
{ question: "What has a tongue but can't talk?", answer: "A shoe" },
{ question: "What has a foot but no legs?", answer: "A ruler" },
{ question: "What has a bed but never sleeps?", answer: "A river" },
{ question: "What has a heart that doesn't beat?", answer: "An artichoke" },
{ question: "What can travel around the world while staying in a corner?", answer: "A stamp" },
{ question: "What belongs to you, but other people use it more than you?", answer: "Your name" },
{ question: "What is always in front of you but can't be seen?", answer: "The future" }
]

const riddle_riddle =()=> {
    const randomIndex = Math.floor(Math.random() *riddles.length);
    const riddleElement = document.getElementById('riddle-text');
    const answerElement = document.getElementById('answer-btn');
    riddleElement.textContent = riddles[randomIndex].question;
  answerElement.textContent = `Answer: ${riddles[randomIndex].answer}`;
  answerElement.classList.add('hidden');
  answerBtn.classList.remove('hidden');
};

const toggleAnswer = () => {
    const answerElement = document.getElementById('Answer');
    const answerBtn = document.getElementById('answer-btn');
    answerElement.classList.remove('hidden');
    answerBtn.classList.add('hidden');
  };

document.getElementById('generate-btn').addEventListener('click', generateRiddle);
document.getElementById('answer-btn').addEventListener('click', toggleAnswer);

// Initial riddle generation
riddle_riddle();

*/
const riddles = [
    { question: "What has to be broken before you can use it?", answer: "An egg" },
    { question: "What has a head and a tail but no body?", answer: "A coin" },
    { question: "What is always in front of you but can't be seen?", answer: "The future" },
    { question: "What can travel around the world while staying in a corner?", answer: "A stamp" },
    { question: "What can you catch but never throw?", answer: "A cold" },
    { question: "What has a face but can't see?", answer: "A clock" },
    { question: "What has a neck but no head?", answer: "A bottle" },
    { question: "What gets broken without being held?", answer: "A promise" },
    { question: "What has a ring but no finger?", answer: "A telephone" },
    { question: "What has a thumb and four fingers but is not a hand?", answer: "A glove" },
    { question: "What gets wet while drying?", answer: "A towel" },
    { question: "What has a spine but no bones?", answer: "A book" },
    { question: "What has a bed but never sleeps?", answer: "A river" },
    { question: "What has a foot but no legs?", answer: "A ruler" },
    { question: "What has lots of eyes but can't see?", answer: "A potato" },
    { question: "What has a tongue but can't talk?", answer: "A shoe" },
    { question: "What has a heart that doesn't beat?", answer: "An artichoke" },
    { question: "What belongs to you, but other people use it more than you?", answer: "Your name" },
];

const generateRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const riddleElement = document.getElementById('riddle-text');
    const answerElement = document.getElementById('answer');
    const answerBtn = document.getElementById('answer-btn');
    riddleElement.textContent = riddles[randomIndex].question;
    answerElement.textContent = `Answer: ${riddles[randomIndex].answer}`;
    answerElement.classList.add('hidden');
    answerBtn.classList.remove('hidden');
};

const toggleAnswer = () => {
    const answerElement = document.getElementById('answer');
    answerElement.classList.toggle('hidden');
};

document.getElementById('generate-btn').addEventListener('click', generateRiddle);
document.getElementById('answer-btn').addEventListener('click', toggleAnswer);

// Initial riddle generation
generateRiddle();

