module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, $put, $by, div, className } = lf;

  const Style = project.style('slider');

  const Div = project.def('Div');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexItem = project.def('FlexItem');

  return (input = {}) => {
    if (typeof input !== 'object') {
      throw new Error(`Expected input <object> but found "${input}"`);
    }

    let config = {
      sliderName: '',
      sliderStyle: '',
      contentWidth: '400px',
      elementWidth: '200px',
      elementStyle: '',
      elementStart: 0,
      elementsTotal: 3,
      content: (index) => `element${index}`,
    };
    Object.assign(config, input);

    return div(
      Div(
        $p(
          'slider_base_content ',
          Style({
            width: config.contentWidth,
          }),
        ),
        FlexHContainer(
          'slider_base_list',
          $by(
            config.elementsTotal,
            (index) =>
              FlexItem(
                $p(
                  'slider_base_list--item ',
                  config.elementStyle,
                  ' ',
                  Style({
                    width: config.elementWidth,
                  }),
                ),
                $put(config.content(index)),
              ),
            config.elementStart,
          ),
        ),
      ),
      $p(
        className($p('slider_base ', config.sliderStyle)),
        $attr('data-slider-name', config.sliderName),
      ),
    );
  };
};
