const inquirer = require('inquirer');
const fs = require('fs');
//TODO: insert the required file where shapes where constructed.
const {Circle, Triangle, Square} = require('./lib/shapes.js')

//TODO: start application
const init = () => {

//TODO: create questions here.
inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter up to three letters for your logo',
        name: 'title',
    },
    {
        type: 'input',
        message: 'type the color keyword for your text',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose a logo shape',
        name: 'shape',
        choices: ['circle','triangle','square'],
    },
    {
        type: 'input',
        message: 'type the color keyword for your shape',
        name: 'shapeColor',
    },
    
]).then((answers) => {

    const { title, textColor, shape, shapeColor } = answers;
      const logoSvg = generateLogoSvg(title, textColor, shape, shapeColor);

    console.log(shapeColor)
    fs.writeFile('logo.svg', logoSvg,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    
    )});
    
    const generateLogoSvg = (title, textColor, shape, shapeColor) => {
        // TODO: Generate the SVG string based on the user's input
        let chosenShape;
        if (shape === "circle") {
            chosenShape = new Circle(shapeColor, title, textColor)
        }
        else if (shape === 'triangle') {
        chosenShape = new Triangle(shapeColor, title, textColor)
        }
        else { 
            chosenShape = new Square(shapeColor, title, textColor)
        }
        return chosenShape.render()
      };
};
    
//TODO: start application
init();