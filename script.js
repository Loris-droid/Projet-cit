// Les questions et réponses du quiz (sans doublons)
const allQuestions = [
    {
        question: "Qu'est-ce que la cybersécurité ?",
        choices: ["Un fruit",
                "Sécurité d'internet",
                "Un sport",
                "Une saison"],
        correct: [1],
    },
    {
        question: "Quels sont les 3 piliers de la cybersécurité ?",
        choices: ["La préparation",
                "La protection",
                "La liberté",
                "La réaction"],
        correct: [0, 1, 3],
    },
    {
        question: "Comment appelle-t-on une personne qui travaille dans la cybersécurité ?",
        choices: ["Un cybersécuritien",
                "Un cybermen",
                "Expert cybersécurité",
                "Un informaticien"],
        correct: [2],
    },
    {
        question: "Combien de personnes sont victime de cyberattaques par an ?",
        choices: ["1",
                "100 000 000",
                "2500",
                "100 000"],
        correct: [2],
    },
    {
        question: "Qui est concerné par les cyber attaques ? (2 réponses)",
        choices: ["Les adolescents",
                "Les entreprises",
                "Les administrations",
                "Les informaticiens"],
        correct: [1, 2],
    },
    {
        question: "Est-ce une bonne idée d'utiliser le même mot de passe sur tous ses comptes ?",
        choices: ["Oui c'est une super idée",
                 "Non c'est la pire idée"],
        correct: [1],
    },
    {
        question: "Faut-il s'assurer contre le risque cyber ?",
        choices: ["Non ça ne sert à rien",
                "Peut-être",
                "Cela aggraverait la situation",
                "Oui c'est très important pour limiter la crise"],
        correct: [3],
    },
    {
        question: "Y a-t-il un ministère de la cybersécurité ?",
        choices: ["Oui",
                "Non",
                "Pas encore, mais c'est en projet"],
        correct: [2],
    },
    {
        question: "Que faire en cas de cyberattaque ?",
        choices: ["Se cacher sous une table",
                "Appeler les pompiers",
                "La signaler et porter plainte",
                "Ne pas paniquer et aller chez un spécialiste"],
        correct: [2],
    },
    {
        question: "Quand est le cybermois ?",
        choices: ["En janvier",
                "Ce mois-ci",
                "En octobre", 
                "En décembre"],
        correct: [2],
    },

    {
        question: "Que dois-tu faire si un inconnu te demande ton adresse en ligne ?",
        choices: [
            "La donner sans hésiter", 
            "Ne jamais la partager", 
            "Demander son adresse en retour", 
            "Partager seulement la ville"
        ],
        correct: [1]
    },
    {
        question: "Quel est le meilleur mot de passe ?",
        choices: [
            "123456", 
            "MotDePasse", 
            "Ch@t-2024!", 
            "MonAnniversaire"
        ],
        correct: [2]
    },
    {
        question: "À quoi sert un antivirus ?",
        choices: [
            "Jouer à des jeux vidéo", 
            "Protéger l'ordinateur des virus", 
            "Rendre Internet plus rapide", 
            "Envoyer des emails"
        ],
        correct: [1]
    },
    {
        question: "Que faire si tu reçois un message bizarre d'un ami ?",
        choices: [
            "Le transférer à tout le monde", 
            "Lui répondre immédiatement", 
            "Vérifier si c'est vraiment lui", 
            "Supprimer ton compte"
        ],
        correct: [2]
    },
    {
        question: "Que signifie ce cadenas 🔒 à côté d'une URL ?",
        choices: [
            "Le site est payant", 
            "La connexion est sécurisée", 
            "Le site est en construction", 
            "C'est une publicité"
        ],
        correct: [1]
    },
    {
        question: "Pourquoi ne faut-il pas cliquer sur des liens inconnus ?",
        choices: [
            "Ils ralentissent l'ordinateur", 
            "Ils peuvent être dangereux", 
            "Ils coûtent de l'argent", 
            "Ils effacent les jeux"
        ],
        correct: [1]
    },
    {
        question: "Que faire si tu vois un message de harcèlement en ligne ?",
        choices: [
            "Le liker", 
            "En parler à un adulte et le signaler", 
            "Ne rien dire", 
            "Le partager"
        ],
        correct: [1]
    },
    {
        question: "Qu'est-ce qu'un « ami en ligne » que tu n'as jamais rencontré ?",
        choices: [
            "Un vrai ami", 
            "Un inconnu", 
            "Un professeur", 
            "Un robot"
        ],
        correct: [1]
    },
    {
        question: "Que dois-tu faire avant de télécharger une application ?",
        choices: [
            "Demander à tes parents", 
            "Télécharger vite fait", 
            "Partager ton mot de passe", 
            "Éteindre le téléphone"
        ],
        correct: [0]
    },
    {
        question: "Quelle information ne dois-tu JAMAIS partager en ligne ?",
        choices: [
            "Ta couleur préférée", 
            "Ton nom complet et ton adresse", 
            "Ton sport favori", 
            "Ton film préféré"
        ],
        correct: [1]
    },
    {
        question: "Que faire si ton compte est piraté ?",
        choices: [
            "Crier sur l'ordinateur", 
            "Prévenir un adulte et changer le mot de passe", 
            "Ne plus jamais utiliser Internet", 
            "Acheter un nouveau téléphone"
        ],
        correct: [1]
    },
    {
        question: "Qu'est-ce qu'un « spam » ?",
        choices: [
            "Un message important", 
            "Un message indésirable", 
            "Un jeu vidéo", 
            "Une photo drôle"
        ],
        correct: [1]
    },
    {
        question: "Pourquoi faut-il se déconnecter des sites après utilisation ?",
        choices: [
            "Pour gagner des points", 
            "Pour protéger son compte", 
            "Pour économiser l'électricité", 
            "C'est inutile"
        ],
        correct: [1]
    },
    {
        question: "Que faire si un site te demande ton numéro de téléphone ?",
        choices: [
            "Le donner tout de suite", 
            "Demander l'autorisation à un adulte", 
            "Inventer un numéro", 
            "Quitter le site"
        ],
        correct: [1]
    },
    {
        question: "Qu'est-ce qu'un « pseudo » en ligne ?",
        choices: [
            "Un nom de famille", 
            "Un surnom pour rester anonyme", 
            "Un mot de passe", 
            "Un type de virus"
        ],
        correct: [1]
    },
    {
        question: "Que signifie « signaler » un message bizarre ?",
        choices: [
            "Le partager avec des amis", 
            "Avertir les modérateurs du site", 
            "Le supprimer", 
            "L'ignorer"
        ],
        correct: [1]
    },
    {
        question: "Que dois-tu faire si tu reçois un cadeau virtuel d'un inconnu ?",
        choices: [
            "L'accepter et le remercier", 
            "Refuser et prévenir un adulte", 
            "Le vendre en ligne", 
            "Cacher ton téléphone"
        ],
        correct: [1]
    },
    {
        question: "Quelle est la bonne attitude sur les réseaux sociaux ?",
        choices: [
            "Insulter les autres", 
            "Partager des photos de ses amis sans autorisation", 
            "Respecter les autres", 
            "Tout dire sur sa vie privée"
        ],
        correct: [2]
    },
    {
        question: "À quoi sert la « confidentialité » des comptes ?",
        choices: [
            "Rendre ton compte invisible", 
            "Contrôler qui voit tes informations", 
            "Supprimer ton historique", 
            "Avoir plus d'abonnés"
        ],
        correct: [1]
    },
    {
        question: "Que faire si tu trouves un ordinateur allumé dans la salle de classe ?",
        choices: [
            "Jouer à des jeux", 
            "Fermer la session ou prévenir un adulte", 
            "Effacer tous les fichiers", 
            "Le prendre pour toi"
        ],
        correct: [1]
    }
];

// Supprimer les doublons
const uniqueQuestions = [];
const seenQuestions = new Set();

allQuestions.forEach(question => {
    if (!seenQuestions.has(question.question)) {
        seenQuestions.add(question.question);
        uniqueQuestions.push(question);
    }
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