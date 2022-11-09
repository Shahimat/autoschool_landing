module.exports = (lf, slf, project) => {
  const {
    $print: $p,
    $attr,
    footer,
    div,
    span,
    button,
    img,
    svg,
    use,
    ul,
    li,
    a,
    className,
    alt,
    src,
    href,
  } = lf;

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

  const scssInclude = project.def('scssInclude');

  const Wrapper = project.def('Wrapper');
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');

  const Style = project.style('footer');

  const breakpoint = (input, output) =>
    scssInclude('breakpoint', input, output);

  const Footer = (...args) => footer($p(...args), className('footer'));

  const Copyright = () =>
    Span(
      'footer_copyright_text',
      'Автошкола «МИК-2000». © 2021 Все права защищены',
    );

  const navBar = () =>
    FlexHContainer(
      'navbar',
      ...aData.map((oItem) =>
        FlexItem(
          'navbar--item',
          a(oItem.name, $p(className('footer_navlink'), href(oItem.link))),
        ),
      ),
    );

  const vk = () =>
    a(
      svg(
        use(null, $attr('xlink:href', 'assets/images/sprite.svg#icon_vk')),
        className('footer_link_icon'),
      ),
      $p(className('footer_link'), href('https://vk.com/mik2000')),
    );

  const Decor = () =>
    Box(
      'decor_container',
      img(
        null,
        $p(
          className('decor_container_img image_quality'),
          src('./assets/images/decor/4.png'),
          alt('decor'),
        ),
      ),
    );

  return () => {
    return Footer(
      Wrapper(
        FlexHContainer(
          'footer_container',
          FlexItem('footer_container--copyright', Copyright()),
          FlexItem(
            'footer_container--navbar',
            FlexHContainer(
              'footer_container--navbar_container',
              FlexItem('footer_container--navbar_container--item', navBar()),
              FlexItem('footer_container--navbar_container--vk', vk()),
            ),
          ),
        ),
        Decor(),
      ),
    );
  };
};
