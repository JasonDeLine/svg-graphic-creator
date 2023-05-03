# SVG Graphic Creator

## Table of Contents
1. [Description](#description)
2. [ScreenCastify Link](#screencastify)
3. [User Story](#userstory)
4. [Acceptance Criteria](#acceptancecriteria)
5. [Usage](#usage)
6. [Installation](#installation)
7. [GitHub Link](#github)


## Description

This application collects four user inputs, then uses the information to generate an svg logo image. The user is asked to input three letters, a text color, a shape color, then shoose from three preselected shapes. When all user inputs are completed, the application creates a file path where the new logo.svg file is saved. Each subsequent use of the application, checks the file path and create s a new unique file name to ensure that no previous files are overridden. 

## ScreenCastify Link
[Video Demo](https://drive.google.com/file/d/1Vn1Am5PATmAMUmlT-zGYTyt7zEAgZ46e/view)

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage
This app was created to generate a svg logo file when a user completes four prompts. After the four prompts are completed the file is created and viewable in a web browser.

## Installation
A user may fork, or clone this repo. 
```md
To run this application:
1. Open a new terminal and cd into the file path
2. Install inquirer with "npm install inquirer"
3. Run "node index.js"
4. Complete all prompts
```
## Contributing
None

## License

[MIT](https://choosealicense.com/licenses/mit/)

## GitHub Link 
[svg-graphic-creator](https://github.com/JasonDeLine/svg-graphic-creator)