module.exports = (lf, slf, project) => {
  const { $print: $p, button, div, className } = lf;

  return (classButtonClose, ...attrs) => {
    return button (
      div(
        $p(
          div('', className('base_button_close_img_horizontal')),
          div('', className('base_button_close_img_vertical')),
        ),
        className('base_button_close_img')
      ),
      $p(
        className($p('base_button_close ', classButtonClose)),
        ...attrs
      )
    );
  };
}