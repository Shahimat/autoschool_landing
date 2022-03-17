const path = require('path');
const lfp = require('./lib/lfp');
const slf = require('./lib/slf');

const Project = lfp.Project({
  basePath: path.join(__dirname, 'landing'),
  input: 'index',
  output: path.join(__dirname, '..', 'dist'),
  dependencies: {
    Text: 'Text.index',
    Header: 'feature.Header',
    Footer: 'feature.Footer',
    SectionHeader: 'feature.sections.SectionHeader',
    SectionCategory: 'feature.sections.SectionCategory',
    SectionCalculator: 'feature.sections.SectionCalculator',
    SectionSchool: 'feature.sections.SectionSchool',
    SectionGroup: 'feature.sections.SectionGroup',
    SectionContacts: 'feature.sections.SectionContacts',
  },
  models: {
    model: 'model',
  }
});

Project.build();
Project.run().then(() => {
  return slf.onLoadSCSS(path.join(__dirname, 'style', 'index.scss'))
}).then((css) => {
  return slf.onSaveFile(path.join(__dirname, '..', 'dist', 'style.css'), css);
}).then(() => {
  console.log('CSS created');
});