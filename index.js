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