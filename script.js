const questions = [
2
{
3
question: "Wofür steht die Abkürzung IHK?",
4
answers: [
5
"Industrie- und Handelskammer",
6
"Internationale Handelskonferenz",
7
"Institut für Handelskunde",
8
"Interaktive Handelskooperation"
9
],
10
correct: 0
11
},
12
{
13
question: "In welcher Stadt befindet sich das historische Gebäude Am Sande 1?",
14
answers: [
15
"Hamburg",
16
"Lüneburg",
17
"Celle",
18
"Uelzen"
19
],
20
correct: 1
21
},
22
{
23
question: "Welcher Fluss fließt durch Lüneburg?",
24
answers: [
25
"Elbe",
26
"Leine",
27
"Aller",
28
"Ilmenau"
29
],
30
correct: 3
31
},
32
{
33
question: "Welche Aufgabe hat die IHK?",
34
answers: [
35
"Vertretung der Wirtschaft",
36
"Polizeiaufgaben",
37
"Krankenversicherung",
38
"Gerichtsbarkeit"
39
],
40
correct: 0
41
},
42
{
43
question: "Wie viele Monate hat ein Jahr?",
44
answers: [
45
"10",
46
"11",
47
"12",
48
"13"
49
],
50
correct: 2
51
}
52
];
53
 
54
let currentQuestion = 0;
55
let score = 0;
56
 
57
function showQuestion() {
58
 
59
document.getElementById("question-number").innerHTML =
60
`Frage ${currentQuestion + 1} von ${questions.length}`;
61
 
62
document.getElementById("question").innerHTML =
63
questions[currentQuestion].question;
64
 
65
const answersDiv = document.getElementById("answers");
66
answersDiv.innerHTML = "";
67
 
68
questions[currentQuestion].answers.forEach((answer, index) => {
69
 
70
const btn = document.createElement("button");
71
btn.className = "answer-btn";
72
btn.innerText = answer;
73
 
74
btn.onclick = () => selectAnswer(index);
75
 
76
answersDiv.appendChild(btn);
77
});
78
 
79
document.getElementById("progress-bar").style.width =
80
((currentQuestion + 1) / questions.length) * 100 + "%";
81
}
82
 
83
function selectAnswer(index) {
84
 
85
if (index === questions[currentQuestion].correct) {
86
score++;
87
}
88
 
89
currentQuestion++;
90
 
91
if (currentQuestion < questions.length) {
92
showQuestion();
93
} else {
94
showResult();
95
}
96
}
97
 
98
function showResult() {
99
 
100
document.getElementById("quiz-container").classList.add("hidden");
101
 
102
document.getElementById("result-container").classList.remove("hidden");
103
 
104
document.getElementById("score").innerHTML =
105
`Du hast ${score} von ${questions.length} Fragen richtig beantwortet.`;
106
}
107
 
108
function restartQuiz() {
109
 
110
currentQuestion = 0;
111
score = 0;
112
 
113
document.getElementById("result-container").classList.add("hidden");
114
 
115
document.getElementById("quiz-container").classList.remove("hidden");
116
 
117
showQuestion();
118
}
119
 
120
showQuestion();
121
