module.exports = (lf, slf, project) => {
  const { $print: $p } = lf;

  const Div = project.def('Div');

  const getText = (current, prev, index, length) => {
    let text = current.text;
    if (current.type === 'small') {
      if (index === 0 && length > 1) {
        text = text + '&nbsp;';
      } else if (index === length - 1 && length > 1) {
        if (prev.type === 'big') {
          text = '&nbsp;' + text;
        }
      } else if (index > 0 && index < length - 1) {
        if (prev.type === 'big') {
          text = '&nbsp;' + text;
        }
        text = text + '&nbsp;';
      }
    } else if (current.type === 'padding') {
      text = '&nbsp;'.repeat(current.length);
    }
    return text;
  };

  return (input) => {
    if (typeof input === 'string' || typeof input === 'function') {
      return Div(
        'complex_text',
        Div('complex_text--text complex_text--big', input),
      );
    } else if (Array.isArray(input)) {
      return Div(
        'complex_text',
        ...input.map((item, index) =>
          Div(
            `complex_text--text complex_text--${item.type}`,
            getText(
              item,
              index > 0 ? input[index - 1] : {},
              index,
              input.length,
            ),
          ),
        ),
      );
    } else {
      throw new Error(
        `getTextByTypes: expected <string> | <array> but found "${input}"`,
      );
    }
  };
};
