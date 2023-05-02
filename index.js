const fs = require('fs')
const inquirer = require("inquirer");
const {CircleShape, SquareShape, TriangleShape} = require("./lib/shapes");

class SVGCreator {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setTextEl(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
}

// array of questions using inquirer
const questions = [{
    
    type: "input",
    name: "text",
    message: 'Please enter 1-3 letters:',
    validate: textInput => {
        if (textInput.length > 0 && textInput.length < 4) {
            return true;
        } else {
            return "Please only enter between 1 and 3 letters"
        }
    },
},
    {
    type: 'input',
    name: 'textColor',
    message: 'Please enter a text color:',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a shape color:',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Please pick a shape:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
];