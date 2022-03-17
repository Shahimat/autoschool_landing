const path = require('path');
const lfp = require('./lib/lfp');
const slf = require('./lib/slf');

const Project = lfp.Project({
  input: path.join(__dirname, 'landing'),
  output: path.join(__dirname, '..', 'dist'),
  dependencies: {
    Text: 'Text',
    Header: 'Header',
    Footer: 'Footer',
    SectionHeader: 'Sections.SectionHeader',
    SectionCategory: 'Sections.SectionCategory',
    SectionCalculator: 'Sections.SectionCalculator',
    SectionSchool: 'Sections.SectionSchool',
    SectionGroup: 'Sections.SectionGroup',
    SectionContacts: 'Sections.SectionContacts',
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