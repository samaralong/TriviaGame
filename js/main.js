$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

}); 

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Where was coffee first discovered?", "Where is the corporate headquarters of Starbucks?", "Which country drinks the most coffee per capita?", "The most expensive coffee in the world is Kopi Luwak. What kind of coffee is it?", "Which drink has more caffeine?", "What's a Cappuccino made out of?", "Which country was the first to make drip coffee?", "How many cups of coffee can be produced by one coffee tree?"];
var answerArray = [["Ethiopia", "Brazil", "Columbia", "Ghana"], ["New York","Boston","Seattle","Los Angeles"], ["Norway", "USA", "Finland", "Italy"], ["Coffee from a tree on the top of a mountain","Coffee from weasel poop","Coffee brewed from a one of a kind machine","A very rare white coffee"], ["Brewed/drip coffee", "Red Bull", "Americano", "They all have the same"], ["Espresso and milk","Espresso, chocolate syrup, & milk foam","Espresso, water, & milk foam","Espresso, milk, & milk foam"], ["France", "Italy", "Japan", "Spain"], ["About 5000 cups","About 1000 cups","About 500 cups","About 100 cups"]];
var correctAnswers = ["A. Ethiopia", "C. Seattle", "C. Finland", "B. Coffee from weasel poop", "A. Brewed/drip coffee", "D. Espresso, milk, & milk foam", "A. France", "D. About 100 cups"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
