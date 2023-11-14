let quizData = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-level Text Management Language", "HyperTransfer Markup Language", "Hyperlink and Text Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What is the primary purpose of CSS in web development?",
        options: ["Client-side Scripting", "Computer Style Syntax", "Cascading Style Sheets", "Centralized Style System"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which programming language is known for its use in machine learning and data science?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: "Python"
    },
    {
        question: "What is the role of a compiler in the software development process?",
        options: ["Converts source code to machine code", "Executes the program", "Debugs the code", "Manages database connections"],
        correctAnswer: "Converts source code to machine code"
    },
    {
        question: "What does the acronym SQL stand for?",
        options: ["Structured Question Language", "Simple Query Language", "System Query Language", "Structured Query Language"],
        correctAnswer: "Structured Query Language"
    },
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: "Stack"
    },
    {
        question: "Which of the following is an example of a front-end programming language?",
        options: ["Java", "Python", "HTML", "PHP"],
        correctAnswer: "HTML"
    },
    {
        question: "Which networking protocol is used for secure communication over the web?",
        options: ["HTTP", "FTP", "TCP", "HTTPS"],
        correctAnswer: "HTTPS"
    },
    {
        question: "In object-oriented programming, what is encapsulation?",
        options: ["Hiding the implementation details", "Inheritance of properties", "Creating multiple instances", "Dynamic typing"],
        correctAnswer: "Hiding the implementation details"
    },
    {
        question: "What does URL stand for?",
        options: ["Universal Remote Link", "Unified Resource Language", "Uniform Resource Locator", "Unrestricted Reference Locator"],
        correctAnswer: "Uniform Resource Locator"
    },
    {
        question: "Which file format is commonly used for images on the web?",
        options: ["TXT", "JPG", "PDF", "DOCX"],
        correctAnswer: "JPG"
    },
    {
        question: "Which programming paradigm does JavaScript primarily follow?",
        options: ["Procedural", "Declarative", "Functional", "Object Oriented"],
        correctAnswer: "Object Oriented"
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Central Peripheral Unit"],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "What is the purpose of the \"git commit\" command in Git?",
        options: ["Fetch changes from a remote repository", "Push changes to a remote repository", "Create a new branch", "Stage changes for commit"],
        correctAnswer: "Stage changes for commit"
    },
    {
        question: "What is the primary purpose of a router in a computer network?",
        options: ["Connect devices within a local network", "Connect multiple networks", "Store and manage data", "Provide power to devices"],
        correctAnswer: "Connect multiple networks"
    },
    {
        question: "What does API stand for in the context of software development?",
        options: ["Automated Processing Integration", "Application Programming Interface", "Advanced Programming Interface", "Adaptive Protocol Interface"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "In networking, what does DHCP stand for?",
        options: ["Domain Hosting Control Protocol", "Digital Handshake Communication Protocol", "Dynamic Host Configuration Protocol", "Data Handling and Control Protocol"],
        correctAnswer: "Dynamic Host Configuration Protocol"
    },
    {
        question: "What is the purpose of the HTML '<head>' element?",
        options: ["Display content", "Define page structure", "Provide metadata", "Handle user input"],
        correctAnswer: "Provide metadata"
    },
    {
        question: "Which database model organizes data into tables with predefined relationships?",
        options: ["NoSQL", "Relational", "Object-Oriented", "Hierarchical"],
        correctAnswer: "Relational"
    },
    {
        question: "What is the significance of the HTTP status code \"404\"?",
        options: ["Page Not Found", "Server Error", "Redirect", "Network Error"],
        correctAnswer: "Page Not Found"
    },
    {
        question: "What does the acronym AJAX stand for in web development?",
        options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XHTML", "Automated JSON and XML", "Asynchronous JSON and XHTML"],
        correctAnswer: "Asynchronous JavaScript and XML"
    },
    {
        question: "Which protocol is used for sending email over the internet?",
        options: ["FTP", "TCP", "VoIP", "SMTP"],
        correctAnswer: "SMTP"
    },
    {
        question: "What does the term \"ORM\" stand for in database development?",
        options: ["Object-Role Modeling", "Object-Relational Model", "Object-Relationship Mapping", "Object-Reference Mechanism"],
        correctAnswer: "Object Relationship Mapping"
    },
    {
        question: "What does the term \"API Gateway\" refer to in microservices architecture?",
        options: ["Network firewall", "Entry point for API", "Database server", "Load balancer"],
        correctAnswer: "Entry point for API"
    },
    {
        question: "What is the purpose of the CSS property \"display: flex\"?",
        options: ["Create a flex container", "Set font size", "Change background color", "Add a border"],
        correctAnswer: "Create a flex container"
    },
    {
        question: "Which CSS property is used for controlling the spacing between elements?",
        options: ["border", "margin", "padding", "display"],
        correctAnswer: "margin"
    },
    {
        question: "Which HTTP status code indicates a successful request?",
        options: ["200", "404", "500", "302"],
        correctAnswer: "200"
    },
    {
        question: "Which type of loop is used in JavaScript for iterating over objects?",
        options: ["for loop", "while loop", "do while loop", "for in loop"],
        correctAnswer: "for in loop"
    },
    {
        question: "Which type of error occurs during the compilation of a program?",
        options: ["Syantax error", "Runtime error", "Logical error", "Semantic error"],
        correctAnswer: "syntax error"
    },
    {
        question: "Which CSS property is used for changing the text color of an element?",
        options: ["font-color", "background-color", "text-color", "color"],
        correctAnswer: "color"
    },
];

const quizData1 = quizData;

function getRandomItem() {
    if (quizData.length === 0) {
        // If all items have been used, reset the list
        quizData = quizData1;
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quizData.length);

    // Get the item at the random index
    const randomItem = quizData[randomIndex];

    // Remove the selected item from the list
    quizData.splice(randomIndex, 1);

    return randomItem;
}

let currentQuestion = getRandomItem();
let numQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = currentQuestion.correctAnswer.toLowerCase();

    if (selectedOption.toLowerCase() === correctAnswer) {
        score++;
    }

    numQuestion++;
    currentQuestion = getRandomItem();

    if (numQuestion < 5) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionElement = document.getElementById("question");
    const resultElement = document.getElementById("result");
    if (score == 0) {
        questionElement.textContent = "Someone Need To Learn Somethings!";
    } else if (score < 3) {
        questionElement.textContent = "Could Have Done Better Better!";
    } else {
        questionElement.textContent = "Great Work!";
    }
    resultElement.textContent = `You scored ${score} out of 5!`;
    document.getElementById("options").innerHTML = "";
    document.querySelector("button").disabled = true;
}

function checkAnswer() {
    const selectedOption = document.querySelector('button:focus');

    if (selectedOption) {
        selectAnswer(selectedOption.textContent);
    } else {
        alert("Please select an option before submitting.");
    }
}

// Load the first question
loadQuestion();

var button = document.getElementById("Speak");

function runSpeechRecognition() {
const audioElement = new Audio("assets/ButtonPressed.mp3");

// Play the audio
audioElement.play();


// get output div reference
var output = document.getElementById("output");
// get action element reference
var action = document.getElementById("action");
// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// This runs when the speech recognition service starts
recognition.onstart = function() {
button.innerHTML="Listening Speak...";
};

recognition.onspeechend = function() {
button.innerHTML="<small>stopped listening, hope you are done...</small>";
recognition.stop();
}

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
var transcript = event.results[0][0].transcript.toLowerCase();
if (transcript=="colour") {
    selectAnswer("color");
} else {
    selectAnswer(transcript);
}
button.innerHTML="Tap to Speak Answer";
};

// start recognition
recognition.start();
}

function refreshPage() {
    // Reload the current page
    location.reload();
}
