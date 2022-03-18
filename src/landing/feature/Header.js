module.exports = (lf, slf, project) => {
  const { $print, $attr, header, div, span, button, ul, li, a, className } = lf;

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

  return () => {
    return header (
      div(
        $print(
          div(
            $print(
              button(
                $print(
                  span(null, className('burger__item burger__item--top')),
                  span(null, className('burger__item burger__item--middle')),
                  span(null, className('burger__item burger__item--bottom')),
                ),
                className('navigation__burger burger')
              ),
              ul(
                $print(
                  ...aData.map(oItem => li(
                    a(
                      oItem.name,
                      $print(
                        className('navigation-list__link'),
                        $attr('href', oItem.link)
                      )
                    ),
                    className('navigation-list__item')
                  ))
                ),
                className('navigation__list navigation-list')
              ),
            ),
            className('navigation')
          ),
          a(
            span('Личный кабинет', className('button__label')),
            $print(
              className('button'),
              $attr('href', 'https://avto-online.pro/kabinet/'),
              $attr('target', '_blank')
            )
          )
        ),
        className('container container--sm container container--flex')
      ),
      className('header')
    )
  };
}