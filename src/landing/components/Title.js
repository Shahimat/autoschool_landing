module.exports = (lf, slf, project) => {
  const { $print: $p, div, className } = lf;

  return (title, classTitle = '') => {
    return div(
      title,
      className($p('base_title ', classTitle))
    );
  };
}