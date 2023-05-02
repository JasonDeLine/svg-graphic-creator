const fs = require('fs');
const inquirer = require('inquirer');

class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}