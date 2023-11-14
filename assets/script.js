// Hover down for learn more button
document.getElementById('scrollButton').addEventListener('click', function() {
	const targetSection = document.getElementById('speech');
	targetSection.scrollIntoView({
		behavior: 'smooth'
	});
});



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
		action.innerHTML = "<small>listening, please speak...</small>";
	};

	recognition.onspeechend = function() {
		action.innerHTML = "<small>stopped listening, hope you are done...</small>";
		recognition.stop();
	}

	// This runs when the speech recognition service returns result
	recognition.onresult = function(event) {
		codingCourse();
		var transcript = event.results[0][0].transcript.toLowerCase();
		if (transcript == "Give me a random number" || transcript == "random number" || transcript == "give me a random number" || transcript == "Random Number") {
			var num = Math.floor(Math.random() * 100);
			output.innerHTML = "<b>Random Number:</b> " + num;
			action.innerHTML = "Tap to speak";
		} else if (transcript == "roll a die" || transcript == "role a dice" || transcript == "throw a die" || transcript == "throw a dice") {
			var num = Math.floor(Math.random() * 6) + 1;
			output.innerHTML = "<b>Rolled a Dice:</b> " + num;
			action.innerHTML = "Tap to speak";
		} else if (transcript == "hello" || transcript == "hey") {
			output.innerHTML = "<b>Text:</b> " + "Hey there! Nice to meet you. Say Help for available commands.";
			action.innerHTML = "Tap to speak";
		} else if (transcript == "throw me a question" || transcript == "get me a random question" || transcript == "random question") {
			const apiUrl = 'https://opentdb.com/api.php?amount=1';

			// Make a GET request to the API
			fetch(apiUrl)
				.then((response) => response.json())
				.then((data) => {
					// Extract the question from the response
					const question = data.results[0].question;
					output.innerHTML = "<b>Random Question:</b> " + question;
					action.innerHTML = "Tap to speak";
				})
				.catch((error) => {
					output.innerHTML = "<b>Text:</b> " + "Error Occurred getting the question!";
					action.innerHTML = "Tap to speak";
				});
		} else if (transcript == "help" || transcript == "commands") {
			const multilineString = `
      <b>Try Saying:</b> <br>
      1. Random Question <br>
      2. Random Number  <br>
      3. Roll a die/dice    <br>
      4. Anything you want to say    <br>
      5. Any Number    <br>
      6. Current Date   <br>
      7. Current Time    <br>
      8. random fact   <br>
      9. Any animal name for its images    <br>
      10. Random Activity    <br>
    `;
			output.innerHTML = multilineString;
			action.innerHTML = "Tap to speak";
		} else if (transcript == "tell me a joke" || transcript == "random joke") {
			const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

			// Make a GET request to the API
			fetch(apiUrl)
				.then((response) => response.json())
				.then((data) => {
					if (data.type === 'single') {
						output.innerHTML = "<b>Random Joke:</b> " + data.joke;
						action.innerHTML = "Tap to speak";
					} else if (data.type === 'twopart') {
						output.innerHTML = "<b>Random Joke:</b> " + data.setup + "            " + data.delivery;
						action.innerHTML = "Tap to speak";
					}
				})
				.catch((error) => {
					output.innerHTML = "<b>Text:</b> " + "Error Occurred!";
					action.innerHTML = "Tap to speak";
				});
		} else if (transcript == "what is the date" || transcript == "current date") {
			const currentDate = new Date();

			// Get the current date and time in various formats
			const currentYear = currentDate.getFullYear();
			const currentMonth = currentDate.getMonth() + 1; // Months are 0-based (0 = January)
			const currentDay = currentDate.getDate();
			output.innerHTML = "<b>Date:(day-month-year)</b> " + currentDay + "-" + currentMonth + "-" + currentYear;
			action.innerHTML = "Tap to speak";
		} else if (transcript == "what is the time" || transcript == "current time") {
			const currentDate = new Date();

			const currentHours = currentDate.getHours();
			const currentMinutes = currentDate.getMinutes();
			const currentSeconds = currentDate.getSeconds();
			output.innerHTML = "<b>Date:(hr:min:sec)</b> " + currentHours + ":" + currentMinutes + ":" + currentSeconds;
			action.innerHTML = "Tap to speak";
		} else if (transcript == "random fact" || transcript == "tell me a random fact") {
			const apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';

			// Make a GET request to the API
			fetch(apiUrl)
				.then((response) => response.json())
				.then((data) => {
					output.innerHTML = "<b>Random Fact:</b> " + data.text;
					action.innerHTML = "Tap to speak";
				})
				.catch((error) => {
					output.innerHTML = "<b>Text:</b> " + "Error Occurred!";
					action.innerHTML = "Tap to speak";
				});
		} else if (commonAnimalNames.includes(transcript)) {
			const searchQuery = `${transcript} animal images`;
			const googleImagesUrl = `https://www.google.com/search?q=${searchQuery}&tbm=isch`;
			window.open(googleImagesUrl, '_blank');
		} else if (transcript == "random activity") {
			fetch('https://www.boredapi.com/api/activity')
				.then((response) => response.json())
				.then((data) => {
					const activity = data.activity;
					output.innerHTML = "<b>Random Activity:</b> " + activity;
					action.innerHTML = "Tap to speak";
				})
				.catch((error) => {
					output.innerHTML = "<b>Text:</b> " + "Error Occurred!";
					action.innerHTML = "Tap to speak";
				});
		} else {
			output.innerHTML = "<b>Text:</b> " + transcript;
			action.innerHTML = "Tap to speak";
		}
	};

	// start recognition
	recognition.start();
}





//function definition

function codingCourse() {
	setTimeout(function() {
		var i = 0;
		while (i < 2000000000) {
			i += 1;
		}
	}, 0);
}


const commonAnimalNames = [
	"dog", "cat", "elephant", "lion", "tiger", "giraffe", "bear", "rabbit",
	"penguin", "dolphin", "shark", "seagull", "butterfly", "horse", "zebra",
	"kangaroo", "koala", "cheetah", "crocodile", "turtle", "panda", "parrot",
	"gorilla", "polar bear", "zebra", "hedgehog", "peacock", "otter", "octopus",
	"owl", "puma", "quokka", "rhinoceros", "seahorse", "sloth", "tarantula",
	"unicorn", "vulture", "walrus", "yak", "iguana", "hamster", "jaguar",
	"lemur", "meerkat", "narwhal", "opossum", "puma", "quokka", "raccoon",
	"squirrel", "tapir", "unicorn", "vulture", "wombat", "x-ray tetra", "yellowjacket",
	"zebrafish", "ant", "beetle", "chameleon", "dragonfly", "firefly", "gazelle",
	"hummingbird", "ibis", "jellyfish", "kingfisher", "ladybug", "mongoose", "newt",
	"octopus", "platypus", "quail", "reindeer", "scorpion", "toucan", "urutu",
	"viper", "weasel", "x-ray fish", "yak", "zebra", "python"
];
