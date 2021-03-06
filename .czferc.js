const { types } = require('./__czfe/types.json');
const fs = require('fs');
const path = require('path');

const pathPackages = fs.readdirSync(path.join(__dirname, 'packages'));

/**
 * @typedef {{type: string; scope: string; subject: string; body: string; isBreaking: boolean; breakingBody: string; breaking: string; isIssueAffected: boolean; issuesBody: string; issues: string;}} Answers
 */

/** @type import('cz-format-extension').Config<Answers> */
module.exports = {
  questions({ inquirer }) {
    return [
      {
        type: 'list',
        name: 'type',
        message: 'Select type',
        choices: types,
      },
      {
        type: 'list',
        name: 'scope',
        message: 'What is the scope of this change\n',
        choices: [
          new inquirer.Separator('Packages'),
          ...pathPackages,

          new inquirer.Separator(),
          new inquirer.Separator('Others'),
          'tools',
          'typings',
          'website',

          new inquirer.Separator(),
          'nothing',

          new inquirer.Separator(),
        ],
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change\n',
        validate: (subject) =>
          subject.length === 0 ? 'subject is required' : true,
      },
      {
        type: 'input',
        name: 'body',
        message:
          'Provide a longer description of the change: (press enter to skip)\n',
      },
      {
        type: 'confirm',
        name: 'isBreaking',
        message: 'Are there any breaking changes?',
        default: false,
      },
      {
        type: 'input',
        name: 'breakingBody',
        default: '-',
        message:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
        when: (answers) => answers.isBreaking && !answers.body,
      },
      {
        type: 'input',
        name: 'breaking',
        message: 'Describe the breaking changes:\n',
        when: (answers) => answers.isBreaking,
      },
      {
        type: 'confirm',
        name: 'isIssueAffected',
        message: 'Does this change affect any open issues?',
        default: false,
      },
      {
        type: 'input',
        name: 'issuesBody',
        default: '-',
        message:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n',
        when: (answers) =>
          answers.isIssueAffected && !answers.body && !answers.breakingBody,
      },
      {
        type: 'input',
        name: 'issues',
        message: 'Add issue references (e.g. "fix #123", "re #123".):\n',
        when: (answers) => answers.isIssueAffected,
        default: undefined,
        validate: (issues) =>
          issues.length === 0 ? 'issues is required' : true,
      },
    ];
  },
  commitMessage({ answers }) {
    const scope = answers.scope === 'nothing' ? '' : `(${answers.scope})`;
    const head = `${answers.type}${scope}: ${answers.subject}`;
    const body = answers.body ? answers.body : false;
    const breaking = answers.breaking
      ? `BREAKING CHANGE: ${answers.breaking}`
      : '';
    const issues = answers.issues ? answers.issues : false;

    return [head, body, breaking, issues].join('\n\n');
  },
};
