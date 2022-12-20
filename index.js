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
          fs.writeFileSync('output/finalREADME.md', template);
    });

const init = () => {
    return prompt;
};

// Function call to initialize app
init();