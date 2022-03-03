const fs   = require('fs')
const path = require('path')
const lf   = require('./lf');
const slf  = require('./slf');

const loadModule = (sBasePath, sPath) => {
  let sFullPath = path.join(sBasePath, ...sPath.split('.'), 'index');
  return require(sFullPath);
}

const loadModel = (sBasePath, sPath) => {
  let aPath = sPath.split('.');
  aPath[aPath.length - 1] = `${aPath[aPath.length - 1]}.json`;
  let sFullPath = path.join(sBasePath, ...aPath);
  return require(sFullPath);
}

const Project = ({
  input,
  output,
  dependencies,
  models,
}) => {

  const Base = loadModule(input, '');
  for (let key in dependencies) {
    dependencies[key] = loadModule(input, dependencies[key]);
  }
  for (let key in models) {
    models[key] = loadModel(input, models[key]);
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
    run: () => {
      let sRes = generator();
      fs.writeFile(path.join(output, 'index.html'), sRes, 'utf-8', () => {
        console.log('Files created');
      });
    },
  }
  return oProject;
}

module.exports = { Project };