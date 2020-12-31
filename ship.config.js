module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
    updateDependencies: false,
  },
  buildCommand: () => 'npm run build:all',
  publishCommand: ({ defaultCommand, tag }) => {
    return `cd ./dist && ${defaultCommand} --access public --tag ${tag}`
  }
};
