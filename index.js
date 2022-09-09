const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./data/questions');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    if (!fs.existsSync('output')) {
        fs.mkdirSync('output');
    }
          fs.writeFileSync('output/template.md', template);
    });


// // TODO: Create a function to write README file
// function writeToFile(template.md, data) {}

// // TODO: Create a function to initialize app
const init = () => {
    return prompt;
};

// // Function call to initialize app
init();
