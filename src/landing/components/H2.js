module.exports = (lf, slf, project) => {
  const { $print: $p, h2, className } = lf;

  return (title, classH2) => {
    return h2(title, className($p('base_h2 ', classH2)));
  };
};
