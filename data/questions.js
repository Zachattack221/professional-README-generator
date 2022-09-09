// Created an array of questions for user input

module.exports = [
    {
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        message: 'Please describe your project'
    },
    {
        name: 'installation',
        message: 'What should the user do to install dependencies?',
        default: 'npm init -y'
    },
    {
        name: 'usage',
        message: 'What should the user enter to test usage?',
        default: 'node index.js'
    },
    {
        name: 'license',
        type: 'rawlist',
        message: 'Please choose a license type from the options provided.',
        choices: [
            'apache 2.0',
            'mit',
            'isc',
            'mpl 2.0',
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