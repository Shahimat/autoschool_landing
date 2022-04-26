const path = require('path');
const lfp = require('./lib/lfp');
const slf = require('./lib/slf');

const Project = lfp.Project({
  basePath: path.join(__dirname, 'landing'),
  input: {
    index: 'pages.HomePage',
    about: 'pages.About',
    'pdd-online': 'pages.PddOnline',
    gallery: 'pages.Gallery',
  },
  output: path.join(__dirname, '..', 'dist'),
  styleOutput: path.join(__dirname, 'style'),
  dependencies: {
    Div: 'components.Div',
    Span: 'components.Span',
    Box: 'components.Box',
    FlexHContainer: 'components.flex.FlexHContainer',
    FlexVContainer: 'components.flex.FlexVContainer',
    FlexItem: 'components.flex.FlexItem',
    Section: 'components.Section',
    Video: 'components.Video',
    Text: 'components.Text',
    FieldSet: 'components.FieldSet',
    TextArea: 'components.TextArea',
    Checkbox: 'components.Checkbox',
    H1: 'components.H1',
    H2: 'components.H2',
    H3: 'components.H3',
    H4: 'components.H4',
    KV: 'components.KV',
    List: 'components.List',
    Link: 'components.Link',
    Mail: 'components.Mail',
    Title: 'components.Title',
    ButtonGradient: 'components.ButtonGradient',
    ButtonClose: 'components.ButtonClose',
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
    photoModel: 'models.photos',
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