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
    shell.cd('dist/packages/css-houdini-ripple');

    return `${defaultCommand} --access public --tag ${tag}`
  }
};
