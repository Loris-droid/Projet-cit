const questions = [
    {
        question: "Qu'est-ce que la cybersécurité ?",
        choices: ["Un fruit", "Sécurité d'internet", "Un sport", "Une saison"],
        correct: 1,
    },
    {
        question: "Quels sont les 3 piliers de la cybersécurité ?",
        choices: ["La préparation", "La protection", "La liberté", "La réaction"],
        correct: [0, 1, 3], // Multiréponses
    },
    {
        question: "Comment appelle-t-on une personne qui travaille dans la cybersécurité ?",
        choices: ["Un cybersécuritien", "Un cybermen", "Expert cybersécurité", "Un informaticien"],
        correct: 2,
    },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedChoiceIndex = null;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const answerFeedback = document.getElementById("answer-feedback");
const scoreEl = document.getElementById("score");
const totalQuestionsEl = document.getElementById("total-questions");

document.getElementById("start-button").addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
document.getElementById("restart-button").addEventListener("click", restartQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    totalQuestionsEl.textContent = questions.length;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    answerFeedback.classList.add("hidden");
    nextButton.classList.add("hidden");
    selectedChoiceIndex = null;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index, button));
        choicesEl.appendChild(button);
    });
}

function selectAnswer(index, button) {
    selectedChoiceIndex = index;

    // Retirer la sélection précédente
    document.querySelectorAll("#choices button").forEach((btn) => btn.classList.remove("selected"));

    // Ajouter la classe sélectionnée
    button.classList.add("selected");
    nextButton.classList.remove("hidden");

    // Vérification immédiate de la réponse
    const currentQuestion = questions[currentQuestionIndex];
    if (Array.isArray(currentQuestion.correct)) {
        answerFeedback.textContent = currentQuestion.correct.includes(index)
            ? "Bonne réponse !"
            : "Mauvaise réponse.";
    } else {
        answerFeedback.textContent = index === currentQuestion.correct
            ? "Bonne réponse !"
            : "Mauvaise réponse.";
    }
    answerFeedback.classList.remove("hidden");
}

function nextQuestion() {
    if (selectedChoiceIndex !== null) {
        const currentQuestion = questions[currentQuestionIndex];
        if (
            Array.isArray(currentQuestion.correct) &&
            currentQuestion.correct.includes(selectedChoiceIndex)
        ) {
            score++;
        } else if (selectedChoiceIndex === currentQuestion.correct) {
            score++;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    scoreEl.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}