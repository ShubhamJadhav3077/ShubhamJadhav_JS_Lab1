var question = [
    {
        text: "JavaScript supports",
        choices: ["Functions", "XHTML", "CSS", "HTML"],
        ans: "Functions"
    },
    {
        text: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        ans: "CSS"
    },
    {
        text: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django", "NodeJS"],
        ans: "Django"
    },
    {
        text: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        ans: "PHP"
    },
    {
        text: "JavaScript is a",
        choices: ["Language", "Programming Language", "Development", "All"],
        ans: "Programming Language"
    },
]
// Global Variables:-
var currentIndex = 0;
var score = 0;

// Variable for question paragraph,buttons and progress:-
var questionPara = document.querySelector("#question");
var ch0 = document.getElementById("btn0");
var ch1 = document.getElementById("btn1");
var ch2 = document.getElementById("btn2");
var ch3 = document.getElementById("btn3");
var progress = document.getElementById("progress")

// Show question and options:
function show() {
    questionPara.innerText = question[currentIndex].text;
    ch0.innerText = question[currentIndex].choices[0];
    ch1.innerText = question[currentIndex].choices[1];
    ch2.innerText = question[currentIndex].choices[2];
    ch3.innerText = question[currentIndex].choices[3];
    progress.innerText = `Question ${currentIndex + 1} of 5`;
}
// Function when any button clicked:-
function btnClicked() {
    var answerIndex = currentIndex;
    var choice = this.innerText
    if (choice == question[answerIndex].ans) {
        score = score + 1
    }
    currentIndex = currentIndex + 1
    if (currentIndex < question.length) {
        show()
    }
    else {
        result();
    }
    console.log(score);
}
// Adding eventListener to the buttons
ch0.addEventListener("click", btnClicked);
ch1.addEventListener("click", btnClicked);
ch2.addEventListener("click", btnClicked);
ch3.addEventListener("click", btnClicked);

//Displaying result:
function result() {
    document.title = "Your Result"
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").innerHTML = `<h1 class="result">Result</h1><h1 id="score">Your score is :<span style="color:red" id="sp1"></span>and percentage is :<span style="color:red" id="sp2"></span>%.`;
    document.getElementById("sp1").innerHTML = ` ${score} `
    document.getElementById("sp2").innerHTML = ` ${(score / question.length) * 100} `
}

// Function called:-
show();