const path = require('path');
const lfp = require('./lib/lfp');
const slf = require('./lib/slf');

const Project = lfp.Project({
  basePath: path.join(__dirname, 'landing'),
  input: {
    index: 'pages.HomePage',
    about: 'pages.About',
  },
  output: path.join(__dirname, '..', 'dist'),
  dependencies: {
    Text: 'components.Text',
    H1: 'components.H1',
    H2: 'components.H2',
    H3: 'components.H3',
    H4: 'components.H4',
    KV: 'components.KV',
    List: 'components.List',
    Link: 'components.Link',
    Mail: 'components.Mail',
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
    aboutModel: 'models.about',
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