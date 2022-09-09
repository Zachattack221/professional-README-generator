module.exports = [
    {
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        message: 'Please describe your project'
    },
    // {
    // name: 'installation'
    // message: 'To install dependencies, run the following command: npm init -y'
    // },
    // {
    // name: 'usage'
    // message: 'To run tests, enter the following command: npm install inquirer@8.2.4'
    // },
    {
        name: 'license',
        type: 'checkbox',
        message: 'This project is licenced with the ${} license',
        choices: [
            '',
            '',
            '',
            ''
        ]
    },
    {
        name: 'contributing',
        message: 'Are other users able to contribute to this project?'
    },
    {
        name: 'gitHub',
        message: 'Please enter your GitHub username.'
    },
    {
        name: 'email',
        message: 'Please enter your email.'
    },
];