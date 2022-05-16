module.exports = (lf, slf, project) => {
  const { $print: $p } = lf;

  const Div = project.def('Div');

  return (input) => {
    if (typeof(input) === 'string' || typeof(input) === 'function') {
      return Div(
        'complex_text',
        Div(
          'complex_text--text complex_text--big',
          input
        )
      );
    } else if (Array.isArray(input)) {
      return Div(
        'complex_text',
        ...input.map(item => Div(
          `complex_text--text complex_text--${item.type}`,
          item.text
        ))
      )
    } else {
      throw new Error(`getTextByTypes: expected <string> | <array> but found "${input}"`);
    }
  }
}