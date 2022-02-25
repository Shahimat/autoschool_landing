module.exports = ({ $for, $many, $state, div, li, p, className, type }) => {

  const [$getter, $inserter] = $state();

  $getter({
    schema: 'schema1',
    port: 8000,
  });

  const data = [1, 2, 3];
  let nIndex;

  return div(
    div(
      $many(
        p(
          $inserter('schema')
        ),
        div(null, className('fight')),
        $for(
          () => data,
          (current) => nIndex = current,
          li(
            () => `${data[nIndex]}`,
          )
        ),
      )
    ),
    $many(
      className('soMuch'),
      type('da'),
    )
  );
}