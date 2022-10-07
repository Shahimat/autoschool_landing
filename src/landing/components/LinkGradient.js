module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, a, span, className, href } = lf;

  return (text, classButtonGradient = '', link) => {
    return a (
      span(text, className('base_button_gradient_text')),
      $p(
        className($p('base_button_gradient ', classButtonGradient)),
        href(link)
      )
    );
  };
}