const fs   = require('fs')
const path = require('path')
const lf   = require('./lf');
const slf  = require('./slf');

const loadModule = (sBasePath, sPath) => {
  let aPath = sPath.split('.');
  aPath[aPath.length - 1] = `${aPath[aPath.length - 1]}.js`;
  let sFullPath = path.join(sBasePath, ...aPath);
  return require(sFullPath);
}

const loadModel = (sBasePath, sPath) => {
  let aPath = sPath.split('.');
  aPath[aPath.length - 1] = `${aPath[aPath.length - 1]}.json`;
  let sFullPath = path.join(sBasePath, ...aPath);
  return require(sFullPath);
}

const Project = ({
  basePath,
  input,
  output,
  dependencies,
  models,
}) => {

  const Base = loadModule(basePath, input);
  for (let key in dependencies) {
    dependencies[key] = loadModule(basePath, dependencies[key]);
  }
  for (let key in models) {
    models[key] = loadModel(basePath, models[key]);
  }

  let generator = () => {};
  const oProject = {
    def: (sModuleName) => {
      if (typeof(sModuleName) !== 'string' || !dependencies[sModuleName]) {
        throw new Error(`Module by name "${sModuleName}" not found`);
      }
      return dependencies[sModuleName](lf, slf, oProject);
    },
    model: (sModelName) => {
      if (typeof(sModelName) !== 'string' || !models[sModelName]) {
        throw new Error(`Model by name "${sModelName}" not found`);
      }
      return slf.State(models[sModelName]);
    },
    build: () => {
      const Structure = Base(lf, slf, oProject);
      generator = Structure();
      console.log('generator created');
      return generator;
    },
    run: async () => {
      let sGen = generator();
      await slf.onSaveFile(path.join(output, 'index.html'), sGen);
      console.log('HTML created');
    },
  }
  return oProject;
}

module.exports = { Project };