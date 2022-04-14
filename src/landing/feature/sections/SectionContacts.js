module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2, h3, h4, form, label, value, input, iframe, fieldset, legend, id, p } = lf;

  const oData = {
    decor: 'assets/images/decor/3.png',
    tabs: [
      {
        class: 'is-active',
        target: '0-contacts',
        title: 'Наро-Фоминск',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'main',
          },
          {
            title: 'ул. Карла-Маркса-19',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          },
          {
            title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          }
        ]
      },
      {
        class: '',
        target: '1-contacts',
        title: 'Селятино',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'main',
          },
          {
            title: 'ул. Карла-Маркса-19',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          },
          {
            title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          }
        ]
      },
      {
        class: '',
        target: '2-contacts',
        title: 'Апрелевка',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'main',
          },
          {
            title: 'ул. Карла-Маркса-19',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          },
          {
            title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          }
        ]
      },
      {
        class: '',
        target: '3-contacts',
        title: 'Вирея',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'main',
          },
          {
            title: 'ул. Карла-Маркса-19',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
          },
          {
            title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
            working_hours: 'с 9:00 до 18:00',
            tel: '+7 (926) 534 16 22',
            telhref: 'tel:+79265341622',
            contactType: 'class',
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

  const FieldSet = project.def('FieldSet');
  const Title = project.def('Title');
  const ButtonGradient = project.def('ButtonGradient');

  const divClass = (sClass, ...args) => div(
    $print(...args),
    className(sClass)
  );

  const spanClass = (sClass, ...args) => span(
    $print(...args),
    className(sClass)
  );

  const ulClass = (sClass, ...args) => ul(
    $print(...args),
    className(sClass)
  );

  const liClass = (sClass, ...args) => li(
    $print(...args),
    className(sClass)
  );

  const InfoBlock = (type) => {
    switch (type) {
      case 'main':
        return spanClass(
          'contact_info_block contact_info_block--main',
          spanClass(
            'contact_info_block_text',
            'Главный офис',
          ),
        );
      case 'class':
        return spanClass(
          'contact_info_block contact_info_block--class',
          spanClass(
            'contact_info_block_text',
            'Учебный класс',
          ),
        );
      default: return '';
    }
  }

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
                  className('contacts_card_title')
                )
              ),
              className('contacts-card-list__info')
            ),
            InfoBlock(oItem.contactType)
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
      className('contacts-card-list__item contacts_item')
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
          divClass('title_content', Title('Контакты')),
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
                              spanClass('tab_title', oItem.title),
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
                    divClass(
                      'widget_map',
                      iframe(
                        null,
                        $print(
                          className('widget_frame'),
                          src('https://yandex.ru/map-widget/v1/?um=constructor%3A0d9db955c0c89e32e5b28d60d48794a73edad6fbab23ddee965af01a28374b88&amp;source=constructor'),
                          $attr('frameborder', '0'),
                        )
                      )
                    )
                  ),
                  className('contacts__card contacts-card contacts_container')
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
                    ...oData.inputs.map(sItem => FieldSet(sItem, '')),
                    span(
                      span(
                        '* Мы ценим вашу конфиденциальность и никогда не передадим вашу информацию кому-либо.',
                        className('contacts-form__label')
                      ),
                      className('contacts-form__descr')
                    ),
                    ButtonGradient('Отправить', 'button_send')
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
        className('contacts section_contacts'),
        id('contacts')
      )
    );
  };
}