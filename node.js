var readlineSync = require("readline-sync");

var score = 0;

const questionOne = {
    question: "what is my name? ",
    answer: "manvendra singh"
}
const questionTwo = {
    question: "which university I graduated from? ",
    answer: "LPU"
}
const questionThree = {
    question: "where do I live? ",
    answer: "mumbai"
}
const questionFour = {
    question: "what's my favourite macro-nutrient? ",
    answer: "protein"
}
const questionFive = {
    question: "what's my favourite color? ",
    answer: "grey"
}

var arr = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function welcome() {
    var userName = readlineSync.question("please enter your name: ");
    console.log("welcome", userName, ", to manav's - DO YOU KNOW ME?");
    console.log("------------------");
}

function play() {
    for (var i = 0; i < arr.length; i++) {
        quiz(arr[i].question, arr[i].answer)
    }
}

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("yaay! you're right.");
        score += 1;
    }
    else {
        console.log("Oops! you missed");
    }
    console.log("current score:", score);
    console.log("--------------");
}

function showScore() {
    console.log("yaay! you scored:", score);
}
welcome();
play();
showScore();