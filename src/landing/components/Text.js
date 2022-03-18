module.exports = (lf, slf, project) => {
  const { $print: $p, p, br, className } = lf;

  return (anyText, classText) => {
    if (typeof(anyText) === 'string') {
      return p (
        anyText,
        className($p('base_text ', classText))
      );
    } else if (Array.isArray(anyText)) {
      return p (
        $p(
          ...anyText.map(elem => $p(elem, br()))
        ),
        className($p('base_text ', classText))
      );

    }
  };
}