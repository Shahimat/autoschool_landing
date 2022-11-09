module.exports = (lf, slf, project) => {
  const { $print: $p, div, className } = lf;

  return (sClass, ...args) => {
    return div($p(...args), className($p('box_base ', sClass)));
  };
};
