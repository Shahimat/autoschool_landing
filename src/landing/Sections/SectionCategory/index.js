module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2 } = lf;

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
      }
    ],
    category: ['A', 'B', 'C', 'D'],
    slider: [
      {
        class: 'category-car--a',
        src: 'assets/images/slider/a.png'
      },
      {
        class: 'category-car--b',
        src: 'assets/images/slider/b.png'
      },
      {
        class: 'category-car--c',
        src: 'assets/images/slider/c.png'
      },
      {
        class: 'category-car--d',
        src: 'assets/images/slider/d.png'
      }
    ]
  };

  

  return () => {

    const CategoryDecor = () => ul(
      $print(
        ...oData.dataDepth.map(oItem => li(
          span( null, className(`category-decor__circle ${oItem.class}`)),
          $print(
            className('category-decor__item'),
            $attr('data-depth', oItem.depth)
          )
        ))
      ),
      className('category__decor category-decor')
    );

    const CategoryLetter = () => div(
      div(
        div(
          $print(
            ...oData.category.map(sCategory => div(
              div(
                span(sCategory, className('category-letter-slider__label')),
                className('category-letter-slider__slide')
              ),
              className('swiper-slide')
            ))
          ),
          className('swiper-wrapper')
        ),
        className('swiper category-letter-slider js-slider-letters')
      ),
      className('category__letter category-letter')
    );

    const CarSlider = () => div(
      div(
        $print(
          ...oData.slider.map(oItem => div(
            div(
              div(
                div(
                  img(null, $print( className('category-car__image'), src(oItem.src) )),
                  className('category-car__picture')
                ),
                className(`category-car-slider__car category-car ${oItem.class}`)
              ),
              className('category-car-slider__slide')
            ),
            className('swiper-slide')
          ))
        ),
        className('swiper-wrapper')
      ),
      className('swiper category-car-slider js-slider-cars')
    )

    return section(
      $print(
        div(
          $print(
            CategoryDecor(),
            CategoryLetter(),
            CarSlider(),
          ),
          className('container container--flex container--center')
        ),
        div(
          $print(
            div(null, className('swiper-button-prev slider-btn')),
            div(null, className('swiper-button-next slider-btn')),
          ),
          className('container slider-btn-wrap')
        )
      ),
      className('category')
    );
  };
}