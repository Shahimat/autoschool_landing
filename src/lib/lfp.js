const fs   = require('fs')
const path = require('path')
const sass = require('node-sass');
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

const loadSCSS = (sBasePath, sPath) => {
  return new Promise((res, rej) => {
    sass.render({
      file: path.join(sBasePath, ...sPath.split('.'), 'index.scss'),
      outputStyle: 'compressed',
    }, (error, result) => {
      if (error) {
        rej(error);
        return;
      }
      res(result.css.toString());
    });
  });
}

const Project = ({
  input,
  output,
  dependencies,
  models,
}) => {

  const Base = loadModule(input, '');
  let scss = {
    default: '',
  };
  for (let key in dependencies) {
    scss[key] = dependencies[key];
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
    run: async () => {
      let sGen = generator();
      await slf.onSaveFile(path.join(output, 'index.html'), sGen);
      console.log('HTML created');

      let sCss = '';
      for (let key in scss) {
        try {
          let sFile = await loadSCSS(input, scss[key]);
          sCss += sFile;
        } catch (err) {
          console.error(err);
        }
      }
      await slf.onSaveFile(path.join(output, 'style.css'), sCss);
      console.log('CSS created');
    },
  }
  return oProject;
}

module.exports = { Project };