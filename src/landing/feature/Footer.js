module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, footer, div, span, button, img, svg, use, ul, li, a, className, alt, src, href } = lf;

  const aData = [
    {
      name: 'О школе',
      link: 'about.html',
    },
    {
      name: 'Услуги',
      link: '/#info',
    },
    {
      name: 'Набор в группы',
      link: '/#group',
    },
    {
      name: 'Пдд онлайн',
      link: 'pdd-online.html',
    },
    {
      name: 'Фото',
      link: 'gallery.html',
    },
    {
      name: 'Контакты',
      link: '/#contacts',
    },
  ]

  const scssInclude = project.def('scssInclude');

  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');

  const Style = project.style('footer');
  
  const breakpoint = (input, output) => scssInclude('breakpoint', input, output);

  const Footer = (...args) => footer(
    $p( ...args ),
    className('footer')
  )

  return () => {
    return Footer (
      FlexHContainer(
        Style({
          'justify-content': 'center',
          'padding-top': '30px',
        }),
        FlexItem(
          Style({
            'flex-basis': '1630px',
            'padding': '0 66px',
          }, breakpoint('sm', {
            'padding': '0 20px',
          })),
          FlexHContainer(
            Style({
              'justify-content': 'space-between',
            }, breakpoint('xxl', {
              'flex-wrap': 'wrap'
            })),
            FlexItem(
              '',
              Box(
                Style({
                  'padding': '12px 0',
                  'margin-right': '133px',
                }),
                Span('footer_copyright_text', 'Автошкола «МИК-2000». © 2021 Все права защищены')
              )
            ),
            FlexItem(
              Style({
                'flex-grow': '1',
              }),
              FlexHContainer(
                Style({
                  'justify-content': 'space-between',
                  'margin-top': '2px',
                }, breakpoint('sm', {
                  'padding-top': '8px',
                })),
                FlexItem(
                  Style({
                    'flex-grow': '1',
                  }),
                  FlexHContainer(
                    Style({
                      'justify-content': 'space-between',
                      'padding-bottom': '36px',
                    }, breakpoint('xxl', {
                      'justify-content': 'start',
                    }), breakpoint('sm', {
                      'flex-wrap': 'wrap',
                    })),
                    FlexItem(
                      '',
                      FlexHContainer (
                        Style({
                          'margin-top': '7px',
                        }, breakpoint('lg', {
                          'flex-wrap': 'wrap',
                        })),
                        ...aData.map(oItem => FlexItem(
                          Style({
                            'flex': '0 1 content',
                            'padding-right': '40px',
                          }, breakpoint('lg', {
                            'padding-right': '27px',
                          })),
                          a(
                            oItem.name,
                            $p(
                              className('footer_navlink'),
                              href(oItem.link)
                            )
                          )
                        )),
                      )
                    ),
                    FlexItem(
                      Style({
                        'flex': '0 0 content'
                      }, breakpoint('sm', {
                        'margin-top': '28px',
                      })),
                      a(
                        svg(
                          use(null, $attr('xlink:href', 'assets/images/sprite.svg#icon_vk')),
                          className('footer_link_icon')
                        ),
                        $p(
                          className('footer_link'),
                          href('https://vk.com/mik2000')
                        )
                      ),
                    )
                  )
                ),
                FlexItem(
                  Style({
                    'min-width': '150px',
                    'margin-left': '21px',
                    'flex': '0 0 content',
                  }, breakpoint('sm', {
                    'margin-left': '0',
                  })),
                  FlexVContainer(
                    '',
                    FlexItem(
                      'decor_field_container',
                      Box(
                        'decor_container',
                        img(
                          null,
                          $p(
                            className('decor_container_img image_quality'),
                            src('./assets/images/decor/4.png'),
                            alt('decor')
                          )
                        ),
                      )
                    )
                  )
                )
              )
            ),
          )
        )
      )
    );
  };
}