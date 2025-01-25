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
    {
        question: "Qui en est concerné ? (2 réponses)",
        choices: ["Les adolescents", "Les entreprises", "Les administrations", "Les informaticiens"],
        correct: [1, 2],
    },
    {
        question: "Est-ce une bonne idée d'utiliser le même mot de passe sur tous ses comptes ?",
        choices: ["Oui c'est une super idée", "Non c'est la pire idée"],
        correct: [1],
    },
    {
        question: "Faut-il s'assurer contre le risque cyber ?",
        choices: ["Non ça ne sert à rien", "Peut-être", "Cela aggraverait la situation", "Oui c'est très important pour limiter la crise"],
        correct: [3],
    },
    {
        question: "Y a-t-il un ministère de la cybersécurité ?",
        choices: ["Oui", "Non", "Pas encore, mais c'est en projet"],
        correct: [2],
    },
    {
        question: "Que faire en cas de cyberattaque ?",
        choices: ["Se cacher sous une table", "Appeler les pompiers", "La signaler et porter plainte", "Ne pas paniquer et aller chez un spécialiste"],
        correct: [2],
    },
    {
        question: "Quand est le cybermois ?",
        choices: ["En janvier", "Ce mois-ci", "En octobre", "En décembre"],
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
const scoreEl = document.getElementById("score");

document.getElementById("start-button").addEventListener("click", startQuiz);
validateButton.addEventListener("click", validateAnswers);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Démarrage du quiz
function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    score = 0; // Réinitialiser le score
    currentQuestionIndex = 0; // Réinitialiser l'index des questions
    showQuestion();
}

// Afficher la question actuelle
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

// Gérer la sélection des choix
function toggleChoice(index, button) {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correct.length === 1) {
        // Une seule réponse possible
        selectedChoices = [index];
        document.querySelectorAll("#choices button").forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    } else {
        // Plusieurs réponses possibles
        if (selectedChoices.includes(index)) {
            selectedChoices = selectedChoices.filter((i) => i !== index);
            button.classList.remove("selected");
        } else {
            selectedChoices.push(index);
            button.classList.add("selected");
        }
    }
}

// Valider les réponses
function validateAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct;

    // Vérifier si toutes les réponses sélectionnées sont correctes
    const isCorrect =
        correctAnswers.every((answer) => selectedChoices.includes(answer)) &&
        selectedChoices.every((choice) => correctAnswers.includes(choice));

    if (isCorrect) {
        score++; // Incrémenter le score
    }

    // Afficher les réponses avec les couleurs
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const answerText = document.createElement("p");
        answerText.textContent = choice;

        if (correctAnswers.includes(index)) {
            answerText.classList.add("correct-answer"); // Bonne réponse
        } else {
            answerText.classList.add("incorrect-answer"); // Mauvaise réponse
        }

        if (selectedChoices.includes(index)) {
            answerText.classList.add("selected-answer"); // Réponse sélectionnée
        }

        choicesEl.appendChild(answerText);
    });

    validateButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

// Passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Terminer le quiz
function endQuiz() {
    quizScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    scoreEl.textContent = `Votre score est de ${score} / ${questions.length}`;
}

// Redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove("hidden");
    endScreen.classList.add("hidden");
}