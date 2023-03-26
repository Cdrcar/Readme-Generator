// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `![badge](https://img.shields.io/badge/license-${license}-green>)`;
  } else {
    return ' ';
  }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `[${license}](https://choosealicense.com/licenses/${license})`
  } else {
    return ' ';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `
    ## [License](#table-of-contents)
    Licenced under:
    ${renderLicenseLink (license)}
    `;
  } else {
    return ' ';
  }
};

// Create function that returns a message if user does not accept contributions
function renderContribution(acceptContributors, data) {
  if (!acceptContributors){
    `Third party contributions are not accepted at the moment.`;
  } else {
    return `${data}`;
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## [Table of Contents](#table-of-contents)

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Me](#contact)

  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## [Contributing](#table-of-contents)

  ${renderContribution(data.acceptContributors, data.contribution)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Contact Me](#table-of-contents)

  - [GitHub](https://github.com/${data.usernameGit})

  - [Email: ${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
