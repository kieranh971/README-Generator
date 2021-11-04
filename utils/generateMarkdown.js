// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let licenseLink = `![badge]("https://img.shields.io/badge/license-${data.license}-blue")`
  // if (!data.license == '') {
  //   licenseLink;
  // } else {
  //   licenseLink = '';
  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//   if (!data.license == '') {
//   `##Licensing:
//   ${data.licensing}`
//   } else {
//     data.license = '';
//   }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[Testing](#testing)
[Licensing](#licensing)
[Questions](#questions)

##Description:
${data.description}

##Installation:
${data.installation}

##Usage:
${data.usage}

##Contribution:
${data.contribution}

##Licensing
${data.license}

##Testing:
${data.testing}

##Questions:
Unsure about something? Feel free to contact me through github or my email listed here:
  Github: [${data.githubUN}](https://github.com/${data.githubUN})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
