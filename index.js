const fs = require('fs')
const inquirer = require("inquirer");
const {CircleShape, SquareShape, TriangleShape} = require("./lib/shapes.js");

class SVGCreator {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextEl(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape) {
        this.shapeElement = shape.render()
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

function writeToFile(fileName, data, folderName = '.') {
  // create the folder if it doesn't exist
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  let filePath = `${folderName}/${fileName}`;

  // check if file already exists, add random number to file name if it does
  let count = 1;
  while (fs.existsSync(filePath)) {
    filePath = `${folderName}/${fileName.slice(0, -4)}${count}.svg`;
    count++;
  }

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`The file ${filePath} has been saved!`);
    }
  });
}

// function to generate new file name
function getFileName() {
  const randomString = Math.random().toString(36).substring(2, 7);
  return `logo-${currentDate}-${randomString}.svg`;
}

async function init() {
    console.log('Welcome to the SVG Creator. Please follow the prompts below.');

    let svgText = '';
    let svgFile = 'logo.svg';
    let folderName = 'logo-examples';

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
        userShape = new SquareShape();
        console.log("User selected Square shape");
    }
    else if (shapeType === "Circle" || shapeType === "circle") {
        userShape = new CircleShape();
        console.log("User selected Circle shape");
    }
    else if (shapeType === "Triangle" || shapeType === "triangle") {
        userShape = new TriangleShape();
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
    writeToFile(svgFile, svgText, folderName); 
}

init();
