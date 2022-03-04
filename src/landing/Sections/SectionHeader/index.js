module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2 } = lf;

  return () => {
    return section(
      $print(
        div(
          video(
            source(null, $print( src('assets/video-bg/video.mp4'), type('video/mp4') )),
            $print(
              className('video__item'),
              $attr('loop autoplay muted playsinline'),
            )
          ),
          className('intro__video video')
        ),
        div(
          div(
            $print(
              div(
                div(
                  $print(
                    div(
                      a(
                        picture(
                          source(
                            img( null, $print(
                              $attr('srcset', 'assets/images/logo.png'),
                              alt('logo')
                            )),
                            $attr('srcset', 'assets/images/logo.webp'),
                          ),
                          className('logo__picture')
                        ),
                        $print(
                          className('intro__logo logo'),
                          href('/')
                        )
                      ),
                      className('grid__col grid__col--xl-6')
                    ),
                    div(
                      div(
                        $print(
                          a(
                            '+7 (926) 534 16 22',
                            $print(
                              className('intro__link'),
                              href('tel:+79265341622')
                            )
                          ),
                          span(
                            'г. Наро-Фоминск, ул. Карла Маркса, д. 19',
                            className('intro__adress')
                          )
                        ),
                        className('intro__contacts')
                      ),
                      className('grid__col grid__col--xl-6')
                    ),
                  ),
                  className('grid')
                ),
                className('intro__header')
              ),
              div(
                div(
                  $print(
                    div(
                      $print(
                        h1(
                          $print(
                            span('1', className('intro-title__num')),
                            span(
                              $print(
                                span(
                                  '- e',
                                  className('intro-title__thin')
                                ),
                                span(
                                  'МЕСТО<br>В РЕЙТИНГЕ ГИБДД',
                                  className('intro-title__main')
                                ),
                                span(
                                  'по числу сдавших на права',
                                  className('intro-title__subtitle')
                                )
                              ),
                              className('intro-title__descr')
                            )
                          ),
                          className('intro__title intro-title')
                        ),
                        h2(
                          span(
                            'Получите права уже этой осенью!',
                            className('intro-descr__label')
                          ),
                          className('intro__descr intro-descr')
                        )
                      ),
                      className('grid__col grid__col--xl-7')
                    ),
                    div(
                      div(
                        $print(
                          span(
                            'Как проходят занятия в условиях карантина?',
                            className('intro-action__text')
                          ),
                          a(
                            'Подробнее',
                            $print(
                              className('intro-action__link'),
                              href('#!')
                            )
                          )
                        ),
                        className('intro__action intro-action')
                      ),
                      className('grid__col grid__col--xl-5 grid__col--center')
                    )
                  ),
                  className('grid')
                ),
                className('intro__promo')
              )
            ),
            className('intro__content')
          ),
          className('container container--relative')
        )
      ),
      className('intro')
    );
  };
}