const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "High-level Text Markup Language",
            "Hyperlink and Text Markup Language",
            "Hypertext Media Language"
        ],
        answer: "Hypertext Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "JavaScript",
            "CSS",
            "HTML",
            "SQL"
        ],
        answer: "CSS"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading System Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            "React",
            "Laravel",
            "Django",
            "Ruby on Rails"
        ],
        answer: "React"
    },
    {
        question: "What is the purpose of the 'var' keyword in JavaScript?",
        options: [
            "Declare a variable",
            "Define a function",
            "Create a class",
            "Set a constant value"
        ],
        answer: "Declare a variable"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreSpan = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(option, button) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (option === correctAnswer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }
    // Disable all buttons after an answer is selected
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn !== button) {
            btn.classList.add('incorrect');
        }
    });
    nextButton.disabled = false;
}

function showResult() {
    questionContainer.textContent = '';
    optionsContainer.innerHTML = '';
    resultContainer.classList.remove('hidden');
    scoreSpan.textContent = `Your score: ${score}/${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    loadQuestion();
    nextButton.disabled = true;
});

loadQuestion();
nextButton.disabled = true;



