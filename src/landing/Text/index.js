module.exports = (lf, slf, project) => {
  const { $print, $attr, p } = lf;

  return (sText) => {
    return p(sText);
  }
}