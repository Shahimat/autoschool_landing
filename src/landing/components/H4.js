module.exports = (lf, slf, project) => {
  const { $print: $p, h4, className } = lf;

  return (title, classH4) => {
    return h4 (
      title,
      className($p('base_h4 ', classH4))
    );
  };
}