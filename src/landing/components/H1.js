module.exports = (lf, slf, project) => {
  const { $print: $p, h1, className } = lf;

  return (title, classH1) => {
    return h1 (
      title,
      className($p('base_h1 ', classH1))
    );
  };
}