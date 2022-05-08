module.exports = (lf, slf, project) => {
  const { $print: $p, button, img, type, alt, src, className } = lf;

  const Div = project.def('Div');

  return (aList, sClass = '') => {
    if (!aList || !Array.isArray(aList)) {
      throw new Error(`Select: Expected array but found "${aList}"`);
    }
    return Div(
      $p('select_base ', sClass),
      button(
        $p(
          Div(
            'select_input',
            aList[0]
          ),
          Div(
            'select_arrow',
            img(
              null,
              $p(src('assets/images/arrow.svg'), alt('decor'), className('select_arrow_decor_img'))
            ),
          ),
        ),
        className('select_base_button')
      ),
      Div(
        'select_list',
        ...aList.map(item => button(
          $p( item ),
          className('select_list--item')
        ))
      )
    );
  };
}