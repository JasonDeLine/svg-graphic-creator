const fs = require('fs');
const inquirer = require('inquirer');

// defines parent class to extend
class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}
// shape values for logo.svg
class TriangleShape extends Shapes {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }
}
class CircleShape extends Shapes {
    render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
        }
}
class SquareShape extends Shapes {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`
    }
};
module.exports = {Circle, Square, Triangle}