module.exports = (lf, slf, project) => {
  const { $print, $attr, p, className } = lf;

  return (sText) => {
    return p(sText, className('text'));
  }
}