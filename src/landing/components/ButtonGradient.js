module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, button, span, className, href } = lf;

  return (text, classButtonGradient = '', sHref = '') => {
    return button (
      span(text, className('base_button_gradient_text')),
      $p(
        className($p('base_button_gradient ', classButtonGradient)),
        $attr('onclick', `location.href='${sHref}';`),
        href(sHref),
      )
    );
  };
}