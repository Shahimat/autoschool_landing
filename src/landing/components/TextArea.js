module.exports = (lf, slf, project) => {
  const { $print: $p, textarea, className, div, span } = lf;

  return (sLegend, sValue = undefined, sClass = undefined) => {
    return div(
      div(
        $p(
          textarea(sValue ? sValue : '', className('custom_textarea_input')),
          div(
            $p(
              div('', className('custom_textarea_border_top_first')),
              div(
                span(sLegend, className('custom_textarea_legend_content')),
                className('custom_textarea_border_top_second'),
              ),
              div('', className('custom_textarea_border_top_third')),
            ),
            className('custom_textarea_border_top'),
          ),
        ),
        className('custom_textarea_content'),
      ),
      className(sClass ? `custom_textarea ${sClass}` : 'custom_textarea'),
    );
  };
};
