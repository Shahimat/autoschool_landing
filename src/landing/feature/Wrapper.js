module.exports = (lf, slf, project) => {
  const FlexHContainer = project.def('FlexHContainer');
  const FlexItem = project.def('FlexItem');

  return (...args) => {
    return FlexHContainer('wrapper', FlexItem('wrapper_item', ...args));
  };
};
