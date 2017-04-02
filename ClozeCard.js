// dependency for inquirer npm package
var inquirer = require("inquirer");

//constructor function for creating flash cards
function Flashcard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}