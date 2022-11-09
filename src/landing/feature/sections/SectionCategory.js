module.exports = (lf, slf, project) => {
  const {
    $print: $p,
    $attr,
    section,
    div,
    span,
    button,
    img,
    svg,
    video,
    source,
    use,
    ul,
    li,
    a,
    br,
    className,
    alt,
    src,
    href,
    type,
    picture,
    h1,
    h2,
  } = lf;

  const oData = {
    dataDepth: [
      {
        depth: '0.1',
        class: 'category-decor__circle--xl',
      },
      {
        depth: '0.2',
        class: 'category-decor__circle--lg',
      },
      {
        depth: '0.3',
        class: 'category-decor__circle--md',
      },
      {
        depth: '0.4',
        class: 'category-decor__circle--sm',
      },
    ],
    category: ['A', 'B', 'C', 'D'],
    slider: [
      {
        class: 'category-car--a',
        src: 'assets/images/slider/a.png',
      },
      {
        class: 'category-car--b',
        src: 'assets/images/slider/b.png',
      },
      {
        class: 'category-car--c',
        src: 'assets/images/slider/c.png',
      },
      {
        class: 'category-car--d',
        src: 'assets/images/slider/d.png',
      },
    ],
  };

  const Style = project.style('category');

  const Div = project.def('Div');
  const Span = project.def('Span');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const Slider = project.def('Slider');
  const Circles = project.def('Circles');

  const Button = (direction) =>
    button(
      img(
        null,
        $p(
          src(`assets/images/arrow/slider_arrow_${direction}.svg`),
          alt(`slider_arrow_${direction}`),
          className('section_category_nav_arrow_button--img'),
        ),
      ),
      className(
        `section_category_nav_arrow_button section_category_nav_arrow_button--${direction}`,
      ),
    );

  const getCategoryByIndex = (index) => {
    switch (index) {
      case 0:
        return 'a';
      case 1:
        return 'b';
      case 2:
        return 'c';
      case 3:
        return 'd';
      default:
        return 'a';
    }
  };

  return () => {
    return Section(
      'section_category',
      FlexHContainer(
        'section_category_circles',
        FlexItem('section_category_circles--item', Circles()),
      ),
      Div(
        'section_category_first_slider',
        Slider({
          sliderStyle: 'section_category_first_slider--content',
          contentWidth: '100%',
          elementWidth: '960px',
          elementsTotal: 4,
          elementStart: 3,
          content: (index) =>
            img(
              null,
              $p(
                src(`assets/images/slider/${getCategoryByIndex(index)}.png`),
                alt(`slider_category_${getCategoryByIndex(index)}`),
                className(
                  `section_category_first_slider--img section_category_first_slider--${getCategoryByIndex(
                    index,
                  )} image_quality`,
                ),
              ),
            ),
        }),
      ),
      FlexHContainer(
        'section_category_second_slider',
        FlexItem(
          'section_category_second_slider--item',
          Slider({
            sliderStyle: 'section_category_second_slider--content',
            contentWidth: '240px',
            elementWidth: '240px',
            elementsTotal: 4,
            elementStart: 0,
            content: (index) =>
              Span(
                'section_category_second_slider--text',
                getCategoryByIndex(index),
              ),
          }),
        ),
      ),
      FlexHContainer(
        'section_category_nav',
        FlexItem(
          'section_category_nav--item',
          Div('section_category_nav_arrow', Button('left'), Button('right')),
        ),
      ),
    );
  };
};
