module.exports = (lf, slf, project) => {
  const { $print: $p, div, className } = lf;

  const Div = project.def('Div');

  return () => {
    return Div(
      'circles_base',
      Div(
        'circles_base--item circles_base--circle_0',
        Div(
          'circles_base--gradient circles_base--gradient--circle_0',
          ' '
        )
      ),
      Div(
        'circles_base--item circles_base--circle_1',
        Div(
          'circles_base--gradient circles_base--gradient--circle_1',
          ' '
        )
      ),
      Div(
        'circles_base--item circles_base--circle_2',
        Div(
          'circles_base--gradient circles_base--gradient--circle_2',
          ' '
        )
      ),
      Div(
        'circles_base--item circles_base--circle_3',
        Div(
          'circles_base--gradient circles_base--gradient--circle_3',
          ' '
        )
      )
    );
  };
}