const path = require('path')
const LFP = require('./lib/lfp');

const Project = LFP.Project({
  input: path.join(__dirname, 'landing'),
  output: path.join(__dirname, '..', 'dist'),
  dependencies: {
    Text: 'Text',
    Header: 'Header',
    Footer: 'Footer',
    SectionHeader: 'Sections.SectionHeader',
    SectionCategory: 'Sections.SectionCategory',
  },
  models: {
    model: 'model',
  }
});

Project.build();
Project.run();