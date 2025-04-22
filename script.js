let allQuestions = [];
let uniqueQuestions = [];

fetch('ficchier donées/questions_cybersecurite.json')
    .then(response => response.json())
    .then(data => {
        allQuestions = data;

        // Supprimer les doublons (comme dans ton code actuel)
        uniqueQuestions = [];
        const seenQuestions = new Set();

        allQuestions.forEach(question => {
            if (!seenQuestions.has(question.question)) {
                seenQuestions.add(question.question);
                uniqueQuestions.push(question);
            }
        });

        allQuestions = uniqueQuestions;

        // Tu peux maintenant activer le bouton de démarrage par exemple
        document.getElementById("start-button").disabled = false;
    })
    .catch(error => {
        console.error("Erreur de chargement des questions :", error);
    });

// Variables globales
let questions = []; // Questions sélectionnées aléatoirement
let currentQuestionIndex = 0;
let score = 0;
let selectedChoices = [];

// Éléments DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const validateButton = document.getElementById("validate-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const scoreEl = document.getElementById("score");

// Événements
document.getElementById("start-button").addEventListener("click", startQuiz);
validateButton.addEventListener("click", validateAnswers);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Fonction pour mélanger un tableau (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Démarrage du quiz
function startQuiz() {
    // Sélectionne 10 questions aléatoires
    questions = shuffleArray([...uniqueQuestions]).slice(0, 10);

    // Réinitialise l'état
    currentQuestionIndex = 0;
    score = 0;
    selectedChoices = [];

    // Affiche l'interface
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
}

// Afficher la question actuelle
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    choicesEl.innerHTML = "";

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
    const maxSelections = currentQuestion.correct.length;

    if (currentQuestion.correct.length === 1) {
        // Une seule réponse possible
        selectedChoices = [index];
        document.querySelectorAll("#choices button").forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    } else {
        // Réponses multiples
        if (selectedChoices.includes(index)) {
            // Désélectionner
            selectedChoices = selectedChoices.filter((i) => i !== index);
            button.classList.remove("selected");
        } else {
            // Empêcher de sélectionner plus que le nombre de réponses attendues
            if (selectedChoices.length < maxSelections) {
                selectedChoices.push(index);
                button.classList.add("selected");
            }
        }
    }
}

// Valider les réponses
function validateAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    let correctCount = 0;
    let incorrectCount = 0;

    // Compter les bonnes et mauvaises réponses
    selectedChoices.forEach((choice) => {
        if (currentQuestion.correct.includes(choice)) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });

    // Calcul du score partiel
    const maxPoints = currentQuestion.correct.length;
    const pointsEarned = (correctCount - incorrectCount) / maxPoints;
    score += Math.max(0, pointsEarned); // Éviter les scores négatifs

    // Afficher les réponses avec les couleurs
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const answerText = document.createElement("p");
        answerText.textContent = choice;

        if (currentQuestion.correct.includes(index)) {
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
    scoreEl.textContent = `Votre score est de ${score.toFixed(2)} / ${questions.length}`;
}

// Redémarrer le quiz
function restartQuiz() {
    endScreen.classList.add("hidden"); // Cache l'écran de fin
    startQuiz(); // Réinitialise et redémarre le quiz
}
