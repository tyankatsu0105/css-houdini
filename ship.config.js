const shell = require('shelljs');

module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
    updateDependencies: false,
  },
  buildCommand: () => 'npm run build:all',
  publishCommand: ({ defaultCommand, tag }) => {
    shell.exec('ls -a');
    shell.cd('./dist');
    shell.exec('pwa');

    return `${defaultCommand} --access public --tag ${tag}`
  }
};
