module.exports = (lf, slf, project) => {
  const { $print: $p, section, className } = lf;

  return (sClass, ...args) => {
    return section(
      $p(...args),
      className(sClass)
    );
  };
}