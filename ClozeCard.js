// dependency for inquirer npm package
var inquirer = require("inquirer");

//requiring the json file where the questions and answers are stored
var questions = require("./cloze.json");

//array to hold flashcard objects
var flashcardArray = [];

//constructor function for creating flash cards
function Flashcard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

//looping through all questions in the JSON file
for (i = 0; i < questions.length; i++) {
//parse the answer from the text and replace with ...
var str = questions[i].text;
var newstr = str.replace(questions[i].cloze, "...");
//creating Flashcard objects and pushing to flashcardArray
var newFlashcard = new Flashcard(
	newstr, questions[i].cloze
);
flashcardArray.push(newFlashcard);
};//for loop end

//counts the number of correct answers
var correct = 0;

//setting up a recursive function to ask each of the questions in the array
//using inquirer npm to ask questions
var askQuestion = function (questionsAsked) {
	if (questionsAsked < flashcardArray.length) {
		inquirer.prompt([
			{
				type: "input",
				message: flashcardArray[questionsAsked].text + "\nAnswer: ", 
				name: "answer"		
			}
		//confirm whether the user's answer is correct or not
		]).then(function(answers){
				//console.log(answers);
				if (answers.answer === flashcardArray[questionsAsked].cloze) {
					console.log("you are correct");
					correct++;
				}//if end
				else {
					console.log("Wrong, the correct answer is: " + flashcardArray[questionsAsked].cloze);
				}//else end

				//add 1 to questionsAsked
				questionsAsked++;
				//ask next question 
				askQuestion(questionsAsked);
			});//answers func end
	}//end of: if (questionsAsked < flashcardArray.length)
	else {
		console.log("Questions you got correct: " + correct);
		console.log("game over");
	//ask if user wants to play again	
		inquirer.prompt([
			{
				type: "confirm",
				message: "Would you like to play again?",
				name: "playAgain"		
			}
		]).then(function(play){
			if (play.playAgain === false) {
				console.log("Goodbye");
			}
			else {
				console.log("Let's play again");
				askQuestion(0);
			}//else end
		})//play func end
	}//else end
};//askQuestion function end
askQuestion(0);