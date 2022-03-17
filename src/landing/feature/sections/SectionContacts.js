module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2, h3, h4, form, label, value, input, iframe, fieldset, legend, id, p } = lf;

  const oData = {
    decor: 'assets/images/decor/3.png',
    tabs: [
      {
        class: 'is-active',
        target: '0-contacts',
        title: 'НАРО-ФОМИНСК',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          }
        ]
      },
      {
        class: '',
        target: '1-contacts',
        title: 'СЕЛЯТИНО',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          }
        ]
      },
      {
        class: '',
        target: '2-contacts',
        title: 'АПРЕЛЕВКА',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          }
        ]
      },
      {
        class: '',
        target: '3-contacts',
        title: 'ВИРЕЯ',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          },
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            isMain: true,
          }
        ]
      }
    ],
    inputs: [
      'Ваше имя',
      'E-mail',
      'Телефон',
      'Сообщение'
    ]
  };

  return () => {

    const ListItem = (oItem) => li(
      $print(
        span(
          $print(
            span(
              $print(
                svg(
                  use(
                    null,
                    $attr('xlink:href', 'assets/images/sprite.svg#icon_map')
                  ),
                  className('contacts-card-list__icon')
                ),
                span(
                  oItem.title,
                  className('contacts-card-list__label')
                )
              ),
              className('contacts-card-list__info')
            ),
            oItem.isMain? span(
              span(
                'Главный офис',
                className('contacts-card-list__label')
              ),
              className('contacts-card-list__mark contacts-card-list__mark--main')
            ): ''
          ),
          className('contacts-card-list__header')
        ),
        span(
          $print(
            span(
              $print(
                svg(
                  use(
                    null,
                    $attr('xlink:href', 'assets/images/sprite.svg#icon_time')
                  ),
                  className('contacts-card-list__icon')
                ),
                span(
                  `Время работы: ${oItem.working_hours}`,
                  className('contacts-card-list__label')
                ),
              ),
              className('contacts-card-list__info')
            ),
            span(
              $print(
                svg(
                  use(
                    null,
                    $attr('xlink:href', 'assets/images/sprite.svg#icon_phone')
                  ),
                  className('contacts-card-list__icon')
                ),
                a(
                  `Телефон: ${oItem.tel}`,
                  $print(
                    className('contacts-card-list__label'),
                    href(oItem.telhref)
                  )
                ),
              ),
              className('contacts-card-list__info')
            )
          ),
          className('contacts-card-list__footer')
        )
      ),
      className('contacts-card-list__item')
    )

    const TabContent = (oTab) => div(
      $print(
        ...oTab.list.map(oItem => ListItem(oItem))
      ),
      $print(
        className(`tabs-content__wrapper ${oTab.class}`),
        $attr('data-tab', oTab.target),
        $attr('data-tab-group', 'contacts')
      )
    );

    return section(
      div(
        $print(
          h2(
            span(
              'Контакты',
              className('title__label')
            ),
            className('title')
          ),
          div(
            $print(
              div(
                div(
                  $print(
                    div(
                      img(
                        null,
                        $print(
                          src(oData.decor),
                          alt('decor')
                        )
                      ),
                      className('contacts-card__decor')
                    ),
                    div(
                      $print(
                        ul(
                          $print(
                            ...oData.tabs.map(oItem => li(
                              span(
                                oItem.title,
                                className('tabs__label')
                              ),
                              $print(
                                className(`tabs__tab ${oItem.class}`),
                                $attr('data-tab-target', oItem.target)
                              )
                            ))
                          ),
                          className('tabs')
                        ),
                        div(
                          $print(
                            ...oData.tabs.map(oTab => TabContent(oTab))
                          ),
                          className('tabs-content')
                        ),
                        a(
                          $print(
                            span(
                              'Email:',
                              className('contacts-card__label')
                            ),
                            span(
                              'info@mik2000.ru',
                              className('contacts-card__label contacts-card__label--brend')
                            )
                          ),
                          $print(
                            className('contacts-card__email'),
                            href('mailto:info@mik2000.ru')
                          )
                        )
                      ),
                      className('contacts-card__address')
                    ),
                    div(
                      iframe(
                        null,
                        $print(
                          className('contacts-card__iframe'),
                          src('https://yandex.ru/map-widget/v1/?um=constructor%3A2b197339cfc89dd20801261a00adb114059f19a2237b249757760ebaeb30809d&source=constructor')
                        )
                      ),
                      className('contacts-card__map')
                    )
                  ),
                  className('contacts__card contacts-card')
                ),
                className('grid__col grid__col--xl-9 grid__col--lg-12')
              ),
              div(
                form(
                  $print(
                    h4(
                      span(
                        'Запишитесь онлайн или задайте вопрос',
                        className('contacts-form__label')
                      ),
                      className('contacts-form__title')
                    ),
                    ...oData.inputs.map(sItem => div(
                      $print(
                        input(
                          null,
                          $print(
                            className('contacts-form__input'),
                            type('text')
                          )
                        ),
                        fieldset(
                          legend(
                            span(
                              sItem,
                              className('contacts-form__label')
                            ),
                            className('contacts-form__placeholder')
                          ),
                          className('contacts-form__border')
                        )
                      ),
                      className('contacts-form__item')
                    )),
                    span(
                      span(
                        '* Мы ценим вашу конфиденциальность и никогда не передадим вашу информацию кому-либо.',
                        className('contacts-form__label')
                      ),
                      className('contacts-form__descr')
                    ),
                    button(
                      span(
                        'Отправить',
                        className('button__label')
                      ),
                      className('button contacts-form__btn')
                    )
                  ),
                  className('contacts__form contacts-form')
                ),
                className('grid__col grid__col--xl-3 grid__col--lg-12')
              )
            ),
            className('grid')
          )
        ),
        className('container')
      ),
      $print(
        className('contacts'),
        id('contacts')
      )
    );
  };
}