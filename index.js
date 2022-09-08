const fs = require('fs');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

prompt([
    {
    name: 'title'
    message: 'What is the name of your project?'
    },
    {
    name: 'description'
    message: 'Please describe your project'
    },
    {
    name: 'installation'
    message: 'To install dependencies, run the following command: npm init -y'
    },
    {
    name: 'usage'
    message: 'To run tests, enter the following command: npm install inquirer@8.2.4'
    },
    {
    name: 'license'
    type: 'checkbox'
    message: 'This project is licenced with the ${} license'
    choices: ['',
    '',
    '',
    ''
    ]},
    {
    name: 'contributing'
    message: 'Are other users able to contribute to this project?'
    },
    {
    name: 'tests'
    message: 'To test application, please run: npm test'
    },
    {
    name: 'questions'
    message: 'Please enter your email'
    message: 'Please enter your GitHub username'
},
]).then((answers) => {
    console.log(answers);
    const template = ``;
    if (fs.existsSync('output')) {
        fs.writeFileSync('output/index.html', template);
        } else {
          fs.mkdirSync('output')
          fs.writeFileSync('output/index.html', template);
        }
});


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(template.md, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
