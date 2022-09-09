//  Created a function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  let color = 'blue';
  const encoded = encodeURIComponent(license);
  return `<img src="https://img.shields.io/badge/license-${encoded}-${color}" alt="badge" />`;
};

// Created a function that returns the license link

const renderLicenseLink = (license) => {
  const encoded = license.replace(/\s/g,'-');
  return  `
  (https://choosealicense.com/licenses/${encoded}/)
    `;
};


// Created a function to generate markdown for README

module.exports = (answers) => {
  return `This project is licenced with the ${answers.license} license.

  ${renderLicenseBadge(answers.license)}

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
  
   ${answers.installation}
  
  Then to pull v8.2.4 of inquirer, run:
  
  npm install inquirer@8.2.4
  
  ## Usage
  To use this application, navigate to the index.js file and run ${answers.usage} within the terminal. 
  This will initiate a series of prompts; once answered, the application will then generate a custom README within the output folder. 
  
  ## License
  This application uses the ${answers.license} license.

  ${renderLicenseBadge(answers.license)}

  For more information: ${renderLicenseLink(answers.license)}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  To test, within console, within the index.js file, please run: 
  
  node index.js 

  Once you follow and answer prompts, a generated markdown file will be created in the output folder.
  
  ## Questions
  User email: ${answers.email}

  GitHub Link: https://github.com/${answers.gitHub}`
};
