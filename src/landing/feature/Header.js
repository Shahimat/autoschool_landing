module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, header, label, input, ul, li, a, img, href, alt, className, type } = lf;

  const aData = [
    {
      name: 'Об автошколе',
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
  const Box = project.def('Box');
  const Span = project.def('Span');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexItem = project.def('FlexItem');
  const LinkGradient = project.def('LinkGradient');

  const Style = project.style('header');

  const Logo = () => Box(
    'logo_container',
    a(
      img( null, $p(
        $attr('src', 'assets/images/logo.png'),
        alt('logo'),
        className('logo_container_img image_quality')
      )),
      $p(
        className('logo_container_href'),
        href('/')
      )
    ),
  );

  const LoginButton = () => LinkGradient(
    'личный кабинет',
    '',
    'https://avto-online.pro/kabinet/',
  );

  const NavLink = (name, link) => a(
    name,
    $p(
      className('nav_button'),
      href(link)
    )
  );

  const NavPanel = (sClass) => ul(
    $p(
      ...aData.map(oItem => li(
          $p(
            NavLink(oItem.name, oItem.link)
          ),
          className('nav_li')
        )
      ),
    ),
    className(sClass)
  );

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
          li(
            LoginButton(),
            className('menu__login')
          )
        ),
        className('menu__list')
      )
    )
  );

  return () => {
    return header (
      FlexHContainer(
        'header_container',
        FlexItem(
          'header_container--item',
          FlexHContainer(
            'header_content',
            FlexItem(
              '',
              FlexHContainer(
                '',
                FlexItem(
                  '',
                  Menu(),
                ),
                FlexItem(
                  '',
                  Logo()
                )
              )
            ),
            FlexItem(
              '',
              NavPanel('nav_panel--hd')
            ),
            FlexItem(
              'login_button_field',
              LoginButton()
            )
          )
        )
      ),
      className('header')
    )
  };
}