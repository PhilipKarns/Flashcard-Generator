// dependency for inquirer npm package
var inquirer = require("inquirer");

//requiring the json file where the questions and answers are stored
var questions = require("./basic.json");
console.log("here's the question: ");
console.log(questions);

//array to hold flashcard objects
var flashcardArray = [];

//constructor function for creating flash cards
function Flashcard(front, back) {
	this.front = front;
	this.back = back;
};

//creating question objects and pushing to flashcardArray
for (i = 0; i < questions.length; i++) {
var newFlashcard = new Flashcard(
	questions[i].front, questions[i].back
);
flashcardArray.push(newFlashcard);
console.log("New card: " + flashcardArray[i].front + flashcardArray[i].back);
// flashcardArray.push(newFlashcard);
// console.log("here's a new array item " + flashcardArray);

}//for end


// var champs = new Flashcard(
// 	questions[1].front, questions[1].back
// );

//counts the number of correct answers
var correct = 0;
//counts number of questions already asked
var questionsAsked = 0;

//setting up a recursive function to ask each of the questions in the array
//using inquirer npm to ask questions
var askQuestion = function () {
	if (questionsAsked < flashcardArray.length) {
		inquirer.prompt([
			{
				type: "input",
				message: newFlashcard.front, 
				name: "answer"		
			}
		//confirm whether the user's answer is correct or not
		]).then(function(answers){
				console.log(answers);
				console.log(answers.answer);
				if (answers.answer === newFlashcard.back) {
					console.log("you are correct");
					correct++;
				}//if end
				else {
					console.log("Wrong, the correct answer is: " + newFlashcard.back);
				}//else end
			});//answers func end
	}//end of: if (questionsAsked < flashcardArray.length)
	else {

	}//else end
};//askQuestion function end
