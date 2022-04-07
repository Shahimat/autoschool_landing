module.exports = (lf, slf, project) => {
  const { $print: $p, button, span, className } = lf;

  return (text, classButtonGradient) => {
    return button (
      span(text, className('base_button_gradient_text')),
      className($p('base_button_gradient ', classButtonGradient))
    );
  };
}