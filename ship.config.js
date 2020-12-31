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
  beforePublish: ({ exec, dir }) => {
    const { packagePath } = getPackagePath(dir);
    const { distPackagePath } = getDistPackagePath(packagePath);

    exec(`rm -rf ./*`);
    exec(`cp ${distPackagePath} .`);
  },
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public --tag ${tag}`,
};
