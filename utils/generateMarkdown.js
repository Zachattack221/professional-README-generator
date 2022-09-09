// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

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
  return `<!-- Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions -->
  # Title
  ${answers.title}
  
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
  
  
  ## License
  
  
  ## Contributing
  
  
  ## Tests
  To test application, please run: 
  
  npm test
  
  ## Questions
  User email: ${answers.email}
  GitHub Link: https://github.com/${answers.gitHub}`
};
