// dependency for inquirer npm package
var inquirer = require("inquirer");

//constructor function for creating flash cards
function Flashcard(front, back) {
	this.front = front;
	this.back = back;
}

var homerunKing = new Flashcard(
	"Who hit the most total homeruns in the history of baseball?", "Barry Bonds"
);

inquirer.prompt([
	{
		type: "input",
		message: homerunKing.front,
		
		name: "answer"
		
		
	}
]).then(function(answers){
	console.log(answers);
	console.log(answers.answer);
	if (answers.answer === homerunKing.back) {
		console.log("you are correct");
	}//if end
	else {
		console.log("wrong");
	}
});//answers func end