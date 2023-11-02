const inquirer = require('inquirer');
const fs = require('fs');
const {shape} = require('./lib/shapes.js')

const circle = new shape('circle');
const triangle = new shape('triangle');
const square = new shape('square');

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
        name: 'shape color',
    },
    
]).then((answers) => {

    const { title, textColor, shape, shapeColor } = answers;
      const logoSvg = generateLogoSvg(title, textColor, shape, shapeColor);

    
    fs.writeFile('logo.svg', logoSvg,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    
    )});
    
    const generateLogoSvg = (title, textColor, shape, shapeColor) => {
        // TODO: Generate the SVG string based on the user's input
        return `<svg>...</svg>`;
      };
};
    
init();