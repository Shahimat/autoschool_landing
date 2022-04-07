module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, input, className, type, name } = lf;

  return (text = '', classCheckbox) => {
    return input (
      '',
      $p(
        className($p('base_checkbox ', classCheckbox)),
        type('checkbox'),
        text !== ''? $attr('name', text): ''
      )
    );
  };
}