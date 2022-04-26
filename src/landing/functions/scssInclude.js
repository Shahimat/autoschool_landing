module.exports = (lf, slf, project) => {
  const { $print: $p, $put, $props } = lf;

  return (name, input, outputProps) => {
    return $p(
      `@include ${$put(name)} (${$put(input)}) {`,
      $props(outputProps),
      '}'
    );
  };
}