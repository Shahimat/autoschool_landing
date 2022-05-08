module.exports = (lf, slf, project) => {
  const { $print: $p, section, className, id } = lf;

  return (input, ...args) => {
    if (typeof(input) === 'string') {
      return section(
        $p(...args),
        className(input)
      );
    } else if (typeof(input) === 'object') {
      const config = {
        sClass: '',
        id: '',
      }
      Object.assign(config, input);
      return section(
        $p(...args),
        $p(
          config.sClass? className(config.sClass): '',
          config.id? id(config.id): ''
        )
      );
    } else {
      throw new Error(`Section: expected class <string> or <object> but found "${input}"`);
    }
  };
}