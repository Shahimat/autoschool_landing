module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2, h3, form, label, value, input, id, p } = lf;

  const oData = {
    tabs: [
      {
        class: 'is-active',
        target: '0-info',
        text: 'Теоретические занятия',
        src: 'assets/images/info-bg.jpg',
        lessons_number: '25',
        lessons_hour: '2',
        center_content: [
          '- изучение Правил дорожного движения (ПДД)',
          '- юридическая ответственность водителя за нарушение ПДД',
          '- оказание первой медицинской помощи',
          '- правила эксплуатации автомобиля',
          '- основы безопасного вождения',
          '- практическая тренировка по решению экзаменационных задач',
        ],
      },
      {
        class: '',
        target: '1-info',
        text: 'Практические занятия',
        src: 'assets/images/info-bg.jpg',
        lessons_number: '25',
        lessons_hour: '2',
        center_content: [
          '- тренировка и практическое выполнение упражнений на автодроме',
          '- учебная езда по городу',
          '- действия водителя в нестандартных ситуациях',
          '- изучение особенностей экзаменационного маршрута',
        ],
      },
      {
        class: '',
        target: '2-info',
        text: 'Организация экзамена в ГИБДД',
        src: 'assets/images/info-bg.jpg',
        lessons_number: '25',
        lessons_hour: '2',
        center_content: [
          '- подготовка пакета документов, необходимых для ГИБДД',
          '- регистрация на экзамен с назначением даты',

        ],
      }
    ],
  };

  return () => {

    const TabContent = (oTab, LeftItems, CenterItems, RightItems) => div(
      $print(
        div(
          div(
            img(null, $print( className('tabs-content__image'), src(oTab.src), alt('info-bg') )),
            className('tabs-content__picture')
          ),
          className('tabs-content__bg')
        ),
        div(
          $print(
            div(
              ul(
                LeftItems(),
                className('info-card__practical info-card-list info-card-list--practical')
              ),
              className('info-card__item info-card__item--practical')
            ),
            div(
              ul(
                CenterItems(),
                className('info-card__descr info-card-list info-card-list--descr')
              ),
              className('info-card__item info-card__item--descr')
            ),
            div(
              ul(
                RightItems(),
                className('info-card__clock info-card-list info-card-list--clock')
              ),
              className('info-card__item info-card__item--clock')
            )
          ),
          className('info-card')
        )
      ),
      $print(
        className(`tabs-content__wrapper ${oTab.class}`),
        $attr('data-tab', oTab.target),
        $attr('data-tab-group', 'info')
      )
    );

    return section(
      div(
        $print(
          ul(
            $print(
              ...oData.tabs.map(oItem => li(
                span(
                  oItem.text,
                  className('tabs__label')
                ),
                $print(
                  className(`tabs__tab ${oItem.class}`),
                  $attr('data-tab-target', oItem.target)
                )
              )),
            ),
            className('tabs')
          ),
          div(
            $print(
              ...oData.tabs.map(oItem => TabContent(oItem,
                () => $print(
                  li(
                    $print(
                      h3(
                        span(
                          'Практика',
                          className('info-card-list__label')
                        ),
                        className('info-card-list__title')
                      ),
                      p(
                        $print(
                          span(
                            oItem.lessons_number,
                            className('info-card-list__num')
                          ),
                          ' занятий'
                        ),
                        className('info-card-list__text')
                      )
                    ),
                    className('info-card-list__item')
                  ),
                  li(
                    p(
                      $print(
                        'по ',
                        span(
                          oItem.lessons_hour,
                          className('info-card-list__num')
                        ),
                        ' часа'
                      ),
                      className('info-card-list__text')
                    ),
                    className('info-card-list__item')
                  )
                ), () => $print(
                  ...oItem.center_content.map(sItem => li(
                    span(
                      sItem,
                      className('info-card-list__label')
                    ),
                    className('info-card-list__item')
                  ))
                ), () => $print(
                  li(
                    span(
                      'Практические занятия проводятся индивидуально с каждым в любой день по записи',
                      className('info-card-list__label')
                    ),
                    className('info-card-list__item')
                  ),
                  li(
                    p(
                      $print(
                        'С ',
                        span('10:00', className('info-card-list__num')),
                        ' ДО ',
                        span('18:00', className('info-card-list__num')),
                      ),
                      className('info-card-list__text')
                    ),
                    className('info-card-list__item info-card-list__item--bottom')
                  )
                ))
              )
            ),
            className('tabs-content')
          )
        ),
        className('container')
      ),
      $print(
        className('info'),
        id('info')
      )
    );
  };
}