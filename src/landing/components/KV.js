module.exports = (lf, slf, project) => {
  const { $print: $p, div, span, className } = lf;

  return (key, value, type, classKey, classValue, classSeparator, classKV) => {
    if (!type) {
      type = 'colon';
    }
    const getSeparator = (type) => {
      switch (type) {
        case 'colon':
          return ': ';
        case 'comma':
          return ', ';
        default:
          return '';
      }
    };
    return div(
      $p(
        span(key, className($p('base_kv_key ', classKey))),
        span(
          getSeparator(type),
          className($p('base_kv_separator ', classSeparator)),
        ),
        span(value, className($p('base_kv_value ', classValue))),
      ),
      className($p('base_kv ', classKV)),
    );
  };
};
