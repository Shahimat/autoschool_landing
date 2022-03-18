module.exports = (lf, slf, project) => {
  const { $print: $p, h3, className } = lf;

  return (title, classH3) => {
    return h3 (
      title,
      className($p('base_h3 ', classH3))
    );
  };
}