module.exports = (lf, slf, project) => {
  const { $print: $p, div, className } = lf;

  return (sClass, ...args) => {
    return div(
      $p(...args),
      className($p('flex_horizontal_container_base ', sClass))
    );
  };
}