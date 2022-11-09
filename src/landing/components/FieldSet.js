module.exports = (lf, slf, project) => {
  const { $print: $p, input, className, div, span } = lf;

  return (sLegend, sValue = undefined, sClass = undefined) => {
    return div(
      div(
        $p(
          input(sValue ? sValue : '', className('custom_fieldset_input')),
          div(
            $p(
              div('', className('custom_fieldset_border_top_first')),
              div(
                span(sLegend, className('custom_fieldset_legend_content')),
                className('custom_fieldset_border_top_second'),
              ),
              div('', className('custom_fieldset_border_top_third')),
            ),
            className('custom_fieldset_border_top'),
          ),
        ),
        className('custom_fieldset_content'),
      ),
      className(sClass ? `custom_fieldset ${sClass}` : 'custom_fieldset'),
    );
  };
};
