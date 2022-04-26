module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, header, div, span, button, label, input, ul, li, a, className, type } = lf;

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
  ];

  const Div = project.def('Div');
  const Span = project.def('Span');
  const FlexHContainer = project.def('FlexHContainer');
  const ButtonGradient = project.def('ButtonGradient');

  const Menu = () => Div(
    'hamburger-menu',
    input(
      null,
      $p(
        $attr('id', 'menu__toggle'),
        type('checkbox')
      )
    ),
    label(
      $p(
        Span('bb_top'),
        Span('bb_center'),
        Span('bb_bottom'),
      ),
      $p(
        className('menu__btn'),
        $attr('for', 'menu__toggle')
      )
    ),
    FlexHContainer(
      'menu__box',
      ul(
        $p(
          ...aData.map(oItem => li(
            a(
              oItem.name,
              $p(
                className('menu__item'),
                $attr('href', oItem.link)
              )
            )
          )),
        ),
        className('menu__list')
      )
    )
  );

  return () => {
    return header (
      FlexHContainer(
        'header_container',
        FlexHContainer(
          'nav_container',
          Menu(),
          ...aData.map(oItem => a(
            oItem.name,
            $p(
              className('nav_button'),
              $attr('href', oItem.link)
            )
          )),
          ButtonGradient(
            'личный кабинет',
            'personal_area_button',
            'https://avto-online.pro/kabinet/',
            '_blank'
          )
        )
      ),
      className('header')
    )
  };
}