// Les questions et réponses du quiz
const questions = [
    {
        question: "Qu'est-ce que la cybersécurité ?",
        choices: ["Un fruit", "Sécurité d'internet", "Un sport", "Une saison"],
        correct: [1],
    },
    {
        question: "Quels sont les 3 piliers de la cybersécurité ?",
        choices: ["La préparation", "La protection", "La liberté", "La réaction"],
        correct: [0, 1, 3],
    },
    {
        question: "Comment appelle-t-on une personne qui travaille dans la cybersécurité ?",
        choices: ["Un cybersécuritien", "Un cybermen", "Expert cybersécurité", "Un informaticien"],
        correct: [2],
    },
    {
        question: "Combien de personnes sont victime de cyberattaques par an ?",
        choices: ["1", "100 000 000", "2500", "100 000"],
        correct: [2],
    },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedChoices = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const validateButton = document.getElementById("validate-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.getElementById("start-button").addEventListener("click", startQuiz);
validateButton.addEventListener("click", validateAnswers);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
// Démarrage du quiz
function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
}
// Afficher la question actuelle, les choix et les réponses
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    choicesEl.innerHTML = "";
    selectedChoices = [];

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice-button");
        button.addEventListener("click", () => toggleChoice(index, button));
        choicesEl.appendChild(button);
    });

    validateButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
}

function toggleChoice(index, button) {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correct.length === 1) {
        // Si la question a une seule bonne réponse, on autorise une seule sélection
        selectedChoices = [index];
        document.querySelectorAll("#choices button").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    } else {
        // Si la question a plusieurs bonnes réponses, on permet plusieurs sélections
        if (selectedChoices.includes(index)) {
            selectedChoices = selectedChoices.filter((i) => i !== index);
            button.classList.remove("selected");
        } else {
            selectedChoices.push(index);
            button.classList.add("selected");
        }
    }
}

function validateAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct;

    // Effacer les choix précédents
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const answerText = document.createElement("p");
        answerText.textContent = choice;

        // Vérifier si la réponse est correcte ou incorrecte
        if (correctAnswers.includes(index)) {
            answerText.classList.add("correct-answer");  // Appliquer la classe pour les bonnes réponses
        } else {
            answerText.classList.add("incorrect-answer");  // Appliquer la classe pour les mauvaises réponses
        }

        // Si l'utilisateur a sélectionné cette réponse, on l'affiche comme "sélectionnée"
        if (selectedChoices.includes(index)) {
            answerText.classList.add("selected");
        }

        choicesEl.appendChild(answerText);
    });

    // Masquer le bouton "Valider" et afficher "Suivant"
    validateButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

// Question suivante
function nextQuestion() {
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
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove("hidden");
    endScreen.classList.add("hidden");
}