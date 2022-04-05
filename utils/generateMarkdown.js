// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// License section and link
function renderLicenseSection(license) {
  if (license === 'Apache 2.0 License') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'MIT License') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
  }
}

// Add optional Table of Contents
const generateTOC = checkTOC => {
  if (!checkTOC) {
      return '';
  }
  return `
  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`
}

// Generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribution, tests, profile, email, confirmTOC } = data;
  console.log(license)
  return `# ${title}
${renderLicenseBadge(license)}
## Description
${description}
${generateTOC(confirmTOC)}
## Installation
${installation}

## Usage
${usage}

## License
This code is licensed via ${renderLicenseSection(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
Get in touch via [Github](https://github.com/${profile}) or [Email](mailto:${email})
`;
}

module.exports = generateMarkdown;
