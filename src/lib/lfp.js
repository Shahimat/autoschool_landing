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
  styleOutput,
  dependencies,
  models,
}) => {
  const inputs = {};
  const generators = {};
  let outputStyleContent = '';
  if (typeof(input) === 'string') {
    inputs.index = loadModule(basePath, input);
    generators.index = () => {};
  } else if (typeof(input) === 'object') {
    for (let key in input) {
      inputs[key] = loadModule(basePath, input[key]);
      generators[key] = () => {};
    }
  }
  for (let key in dependencies) {
    dependencies[key] = loadModule(basePath, dependencies[key]);
  }
  for (let key in models) {
    models[key] = loadModel(basePath, models[key]);
  }

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
    style: (sModelName) => {
      if (typeof(sModelName) !== 'string' || sModelName === '') {
        throw new Error(`expected model name <string>, but found "${sModelName}"`);
      }
      return (oProps, customProps) => () => {
        let id = `${sModelName}_${slf.guid()}`;
        outputStyleContent += lf.$put( lf.$style(id, oProps, customProps) ) + ' ';
        return id;
      };
    },
    build: () => {
      for (let key in inputs) {
        const Structure = inputs[key](lf, slf, oProject);
        generators[key] = Structure();
      }
      console.log('generator(\'s) created');
      return generators;
    },
    run: async () => {
      styles = [];
      for (let key in generators) {
        let sGen = generators[key]();
        await slf.onSaveFile(path.join(output, `${key}.html`), sGen);
      }
      console.log('HTML created');
      await slf.onSaveFile(path.join(styleOutput, 'outputStyle.gen.scss'), outputStyleContent);
      console.log('Custom style\'s created');
    },
  }
  return oProject;
}

module.exports = { Project };