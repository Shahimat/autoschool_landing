const path = require('path');
const lfp = require('./lib/lfp');
const slf = require('./lib/slf');

const Project = lfp.Project({
  basePath: path.join(__dirname, 'landing'),
  input: 'index',
  output: path.join(__dirname, '..', 'dist'),
  dependencies: {
    Text: 'Text.index',
    Header: 'Header.index',
    Footer: 'Footer.index',
    SectionHeader: 'Sections.SectionHeader.index',
    SectionCategory: 'Sections.SectionCategory.index',
    SectionCalculator: 'Sections.SectionCalculator.index',
    SectionSchool: 'Sections.SectionSchool.index',
    SectionGroup: 'Sections.SectionGroup.index',
    SectionContacts: 'Sections.SectionContacts.index',
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