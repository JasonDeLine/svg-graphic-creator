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

// function to write to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log(`The file ${fileName} has been saved!`);
  });
}

async function init() {
    console.log('Welcome to the SVG Creator. Please follow the prompts below.');

    let svgText = '';
    let svgFile = 'logo.svg';

    const answers = await inquirer.prompt(questions);

    let userText = '';
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    }
    
    // user input entered into console
    console.log(`User text: ${userText}`);

    const textColor = answers.textColor;
    console.log(`Text color: ${textColor}`);

    const shapeColor = answers.shapeColor;
    console.log(`Shape color: ${shapeColor}`);

    const shapeType = answers.shapeType.toLowerCase();
    console.log(`Shape type: ${shapeType}`);
    
    // set shape for new
    let userShape;
    if (shapeType === "Square" || shapeType === "square") {
        userShape = new Square();
        console.log("User selected Square shape");
    }
    else if (shapeType === "Circle" || shapeType === "circle") {
        userShape = new Circle();
        console.log("User selected Circle shape");
    }
    else if (shapeType === "Triangle" || shapeType === "triangle") {
        userShape = new Triangle();
        console.log("User selected Triangle shape");
    }
    else {
        console.log("Uh oh something went wrong! Lets try again!");
    }
    // have to set shapeColor before construction
    userShape.setColor(shapeColor);

    // final generation of SVG
    const svg = new SVGCreator();
    svg.setTextEl(userText, textColor);
    svg.setShapeEl(userShape);
    svgText = svg.render();
    writeToFile(svgFile, svgText); 
}

init();
