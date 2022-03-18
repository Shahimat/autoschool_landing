module.exports = (lf, slf, project) => {
  const { $print: $p, $attr: $a, a, href, className } = lf;

  return (value, anyHref, anyTarget, classLink) => {
    return a (
      value,
      $p(
        className($p('base_link ', classLink)),
        $a('target', anyTarget),
        href(anyHref)
      )
    );
  };
}