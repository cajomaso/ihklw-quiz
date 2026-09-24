/* ==================================
   TEXTE HIER ANPASSEN
================================== */

const SETTINGS = {

    title: "IHKLW Quiz",

    subtitle: "Wirtschaft • Lüneburg • IHKLW"

};

/* ==================================
   FRAGEN HIER EINTRAGEN
================================== */

const QUESTIONS = [

{
    question: "Wofür steht die Abkürzung IHK?",

    answers: [
        "Industrie- und Handelskammer",
        "Internationale Handelskonferenz",
        "Institut für Handelskunde",
        "Interaktiver Handelskongress"
    ],

    correct: 0
},

{
    question: "In welcher Stadt befindet sich Am Sande 1?",

    answers: [
        "Hamburg",
        "Lüneburg",
        "Uelzen",
        "Celle"
    ],

    correct: 1
},

{
    question: "Welcher Fluss fließt durch Lüneburg?",

    answers: [
        "Leine",
        "Elbe",
        "Aller",
        "Ilmenau"
    ],

    correct: 3
},

{
    question: "Welche Aufgabe hat die IHK?",

    answers: [
        "Vertretung der Wirtschaft",
        "Polizeiaufgaben",
        "Steuerprüfung",
        "Gerichtswesen"
    ],

    correct: 0
},

{
    question: "Wie viele Monate hat ein Jahr?",

    answers: [
        "10",
        "11",
        "12",
        "13"
    ],

    correct: 2
}

];

/* ==================================
   QUIZ LOGIK
================================== */

let currentQuestion = 0;
let score = 0;

document.getElementById("quiz-title").textContent =
SETTINGS.title;

document.getElementById("quiz-subtitle").textContent =
SETTINGS.subtitle;

function startQuiz() {

    document
    .getElementById("start-screen")
    .classList.add("hidden");

    document
    .getElementById("quiz-container")
    .classList.remove("hidden");

    showQuestion();
}

function showQuestion() {

    const question = QUESTIONS[currentQuestion];

    document.getElementById(
        "question-number"
    ).innerHTML =
    `Frage ${currentQuestion + 1} von ${QUESTIONS.length}`;

    document.getElementById(
        "question"
    ).textContent =
    question.question;

    const answers =
    document.getElementById("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer,index) => {

        const button =
        document.createElement("button");

        button.className =
        "answer-btn";

        button.textContent =
        answer;

        button.onclick = () =>
        selectAnswer(index);

        answers.appendChild(button);

    });

    document.getElementById(
        "progress-bar"
    ).style.width =
    ((currentQuestion + 1)
    / QUESTIONS.length * 100)
    + "%";
}

function selectAnswer(index) {

    if(
        index ===
        QUESTIONS[currentQuestion].correct
    ) {
        score++;
    }

    currentQuestion++;

    if(currentQuestion < QUESTIONS.length) {

        showQuestion();

    } else {

        showResult();

    }
}

function showResult() {

    document
    .getElementById("quiz-container")
    .classList.add("hidden");

    document
    .getElementById("result-container")
    .classList.remove("hidden");

    document.getElementById(
        "score"
    ).innerHTML =
    `Du hast ${score} von ${QUESTIONS.length} Fragen richtig beantwortet.`;

    let rating = "";

    const percent =
    score / QUESTIONS.length;

    if(percent >= 0.8) {

        rating =
        "🏆 Quiz-Profi";

    }
    else if(percent >= 0.6) {

        rating =
        "🌟 Wirtschaftsexperte";

    }
    else {

        rating =
        "👍 Gut gemacht";

    }

    document
    .getElementById("rating")
    .innerHTML = rating;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document
    .getElementById("result-container")
    .classList.add("hidden");

    document
    .getElementById("start-screen")
    .classList.remove("hidden");
}
