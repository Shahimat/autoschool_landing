module.exports = (lf, slf, project) => {
  const { $print: $p, $attr: $a, a, href, className } = lf;

  return (value, classMail) => {
    return a (
      value,
      $p(
        className($p('base_mail ', classMail)),
        href(`mailto:${value}`)
      )
    );
  };
}