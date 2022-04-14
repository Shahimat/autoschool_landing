module.exports = (lf, slf, project) => {
  const { $print: $p, span, className } = lf;

  return (sClass, ...args) => {
    return span(
      $p(...args),
      className(sClass)
    );
  };
}