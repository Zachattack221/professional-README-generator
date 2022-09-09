// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let color = 'blue';
  return `<img src="https://img.shields.io/badge/license-${license}-${color}" alt="badge" />`;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = (answers) => {
  return `'This project is licenced with the ${answers.license} license'

  # ${answers.title}
  
  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation 
  To pull in dependencies, run:
  
   npm init -y
  
  Then to pull v8.2.4 of inquirer, run:
  
  npm install inquirer@8.2.4
  
  ## Usage
  To use this application, navigate to the index.js file and run 'node index.js" within the terminal. 
  This will initiate a series of prompts; once answered, the application will then generate a custom README within the output folder. 
  
  ## License
  
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  To test, within console, within the index.js file, please run: 
  
  node index.js 

  Once you follow and answer prompts, a generated markdown file will be created in the output folder as template.md
  
  ## Questions
  User email: ${answers.email}
  GitHub Link: https://github.com/${answers.gitHub}`
};
