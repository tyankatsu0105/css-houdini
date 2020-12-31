const shell = require('shelljs');


const getPackagePath = (dir) => {
  const splittedDir = dir.split('/');
  const packagePath = [
    splittedDir[splittedDir.length - 2],
    splittedDir[splittedDir.length - 1],
  ].join('/');
  return { packagePath };
};

const getDistPackagePath = (packagePath) => {
  const distPackagePath = `../../dist/${packagePath}`;

  return { distPackagePath };
};

module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
    updateDependencies: false,
  },
  buildCommand: () => 'npm run build:all',
  publishCommand: ({ defaultCommand, tag, dir }) => {
    const { packagePath } = getPackagePath(dir);
    const { distPackagePath } = getDistPackagePath(packagePath);

    shell.cd(distPackagePath);

    return `${defaultCommand} --access public --tag ${tag}`
  }
};
