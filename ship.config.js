module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
    updateDependencies: false
  },
  buildCommand: () => 'npm run build:all',
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public --tag ${tag}`,
};
