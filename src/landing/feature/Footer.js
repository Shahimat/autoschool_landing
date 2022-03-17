module.exports = (lf, slf, project) => {
  const { $print, $attr, footer, div, span, button, img, svg, use, ul, li, a, className, alt, src, href } = lf;

  const aData = [
    {
      name: 'О школе',
      link: 'about.html',
    },
    {
      name: 'Услуги',
      link: '#info',
    },
    {
      name: 'Набор в группы',
      link: '#group',
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
      link: '#contacts',
    },
  ]

  return () => {
    return footer (
      div(
        $print(
          div(
            img(null, $print( src('./assets/images/decor/4.png'), alt('decor') )),
            className('footer__decor')
          ),
          div(
            span('Автошкола «МИК-2000». © 2021 Все права защищены', className('footer__label')),
            className('footer__copyright')
          ),
          ul(
            $print(
              ...aData.map(oItem => li(
                a(
                  oItem.name,
                  $print(
                    className('footer-nav__link'),
                    href(oItem.link)
                  )
                ),
                className('footer-nav__item')
              ))
            ),
            className('footer__nav footer-nav')
          ),
          a(
            svg(
              use(null, $attr('xlink:href', 'assets/images/sprite.svg#icon_vk')),
              className('footer__icon')
            ),
            $print(
              className('footer__link'),
              href('https://vk.com/mik2000')
            )
          )
        ),
        className('container container container--flex footer__container')
      ),
      className('footer')
    );
  };
}