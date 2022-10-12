module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, svg, img, use, a, className, src, alt, href, iframe } = lf;

  const oData = {
    decor: 'assets/images/decor/3.png',
    tabs: [
      {
        title: 'Наро-Фоминск',
        list: [
          {
            title: 'ул. Московская 9К',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'main',
          },
          {
            title: 'ул. Карла-Маркса-19',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'class',
          },
          {
            title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'class',
          }
        ]
      },
      {
        title: 'Селятино',
        list: [
          {
            title: 'ул. Промышленная 81/1 (2-й этаж)',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'main',
          },
          // {
          //   title: 'ул. Карла-Маркса-19',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // },
          // {
          //   title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // }
        ]
      },
      {
        title: 'Апрелевка',
        list: [
          {
            title: 'ул. Августовская д.1 (3-й этаж)',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'main',
          },
          // {
          //   title: 'ул. Карла-Маркса-19',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // },
          // {
          //   title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // }
        ]
      },
      {
        title: 'Вирея',
        list: [
          {
            title: 'Советская площадь д.1',
            working_hours: 'с 9:00 до 17:00',
            tel: '+7 (903) 124 12 61',
            telhref: 'tel:+79031241261',
            contactType: 'main',
          },
          // {
          //   title: 'ул. Карла-Маркса-19',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // },
          // {
          //   title: 'ул. Шибанкова д. 71 ТЦ Весна 2 этаж',
          //   working_hours: 'с 9:00 до 17:00',
          //   tel: '+7 (926) 534 16 22',
          //   telhref: 'tel:+79031241261',
          //   contactType: 'class',
          // }
        ]
      }
    ],
    inputs: [
      {
        value: 'Ваше имя',
        className: 'mailto_name',
      },
      {
        value: 'E-mail',
        className: 'mailto_email',
      },
      {
        value: 'Телефон',
        className: 'mailto_tel',
      },
      {
        value: 'Сообщение',
        className: 'mailto_message',
      },
    ]
  };

  const Wrapper = project.def('Wrapper');
  const FieldSet = project.def('FieldSet');
  const Title = project.def('Title');
  const TabContainer = project.def('TabContainer');
  const ButtonGradient = project.def('ButtonGradient');

  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Section = project.def('Section');

  const Style = project.style('contacts');

  const Icon = (path) => svg(
    use(
      null,
      $attr('xlink:href', path)
    ),
    className('contacts_icon')
  )

  const InfoBlock = (type) => {
    switch (type) {
      case 'main':
        return Div(
          'contacts_card_type contacts_card_type--main',
          Span(
            'contacts_card_type_text',
            'главный офис',
          ),
        );
      case 'class':
        return Div(
          'contacts_card_type contacts_card_type--class',
          Span(
            'contacts_card_type_text',
            'учебный класс',
          ),
        );
      default: return '';
    }
  }

  const CardInfo = (info) => {
    return FlexVContainer(
      $p(
        'contacts_card ',
        Style({
          'padding': '10px 0',
        })
      ),
      FlexItem(
        Style({
          'padding-top': '15px',
          'padding-bottom': '27px',
        }),
        FlexHContainer(
          Style({
            'align-items': 'center',
          }),
          FlexItem(
            Style({
              'flex': '0 0 content'
            }),
            Icon('assets/images/sprite.svg#icon_map')
          ),
          FlexItem(
            Style({
              'flex': '1 1 content',
              'padding-bottom': '3px'
            }),
            Span('contacts_card_title', info.title)
          ),
          FlexItem(
            $p(
              'contacts_card_type ',
              Style({
                'flex': '0 0 content'
              }),
            ),
            InfoBlock(info.contactType)
          )
        )
      ),
      FlexItem(
        Style({
          'padding-bottom': '6px',
        }),
        FlexHContainer(
          Style({
            'align-items': 'center',
          }),
          FlexItem(
            '',
            Icon('assets/images/sprite.svg#icon_time'),
          ),
          FlexItem(
            Style({
              'padding-bottom': '3px'
            }),
            Span('contacts_card_text', `Время работы: ${info.working_hours}`),
          )
        )
      ),
      FlexItem(
        Style({
          'padding-bottom': '19px',
        }),
        FlexHContainer(
          Style({
            'align-items': 'center',
          }),
          FlexItem(
            '',
            Icon('assets/images/sprite.svg#icon_phone'),
          ),
          FlexItem(
            Style({
              'padding-bottom': '3px'
            }),
            a(
              `Телефон: ${info.tel}`,
              $p(
                className('contacts_card_text'),
                href(info.telhref)
              )
            ),
          )
        )
      )
    )
  }

  const ContactForm = () => FlexVContainer(
    $p(
      'contact_form mailto_form ',
      Style({
        'justify-content': 'space-between',
        'padding-left': '41px',
      },
      `@include breakpoint (xxl) {
        padding-left: 0,
      }`)
    ),
    FlexItem(
      'contact_form_title',
      Span(
        '',
        'Запишитесь онлайн или задайте вопрос'
      )
    ),
    ...oData.inputs.map(input => FlexItem(
      '',
      FieldSet(input.value, '', input.className)
    )),
    FlexItem(
      '',
      Span(
        'contact_form_info',
        '* Мы ценим вашу конфиденциальность и никогда не передадим вашу информацию кому-либо.'
      )
    ),
    FlexItem(
      Style({
        'padding-bottom': '10px',
      }),
      ButtonGradient('Отправить', 'contact_form_button_send mailto_button')
    )
  );

  return () => {

    return Section(
      {
        sClass: 'section_contacts',
        id: 'contacts',
      },
      Wrapper(
        FlexVContainer(
          '',
          FlexItem(
            '',
            Title('Контакты')
          ),
          FlexItem(
            'section_contacts--content',
            Box(
              'contacts_decor',
              img(null, $p( className('contacts_decor--img image_quality'), src(oData.decor), alt('decor'))),
            ),
            FlexHContainer(
              'section_contacts_block',
              FlexItem(
                'section_contacts_block--first',
                FlexHContainer(
                  'section_contacts_block--first_content',
                  FlexItem(
                    'section_contacts_block--first_content--left',
                    FlexVContainer(
                      '',
                      FlexItem(
                        Style({
                          'flex': '1 0 content',
                        }),
                        TabContainer({
                          tabs: oData.tabs.map(tab => tab.title),
                        }, (title, index) => Box(
                          Style({
                            'padding-top': '53px',
                          }),
                          ...oData.tabs[index].list.map(info => CardInfo(info))
                        ))
                      ),
                      FlexItem(
                        '',
                        FlexHContainer(
                          Style({
                            'justify-content': 'end',
                            'padding-top': '21px'
                          }),
                          FlexItem(
                            '',
                            a(
                              $p(
                                Span(
                                  'contacts_email_first',
                                  'Email: '
                                ),
                                Span(
                                  'contacts_email_second',
                                  'info@mik2000.ru'
                                )
                              ),
                              $p(
                                className('contacts_email'),
                                href('mailto:info@mik2000.ru')
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  FlexItem(
                    'section_contacts_block--first_content--right',
                    Div(
                      'widget_map',
                      iframe(
                        null,
                        $p(
                          className('widget_frame'),
                          src('https://yandex.ru/map-widget/v1/?um=constructor%3A0d9db955c0c89e32e5b28d60d48794a73edad6fbab23ddee965af01a28374b88&amp;source=constructor'),
                          $attr('frameborder', '0'),
                        )
                      )
                    )
                  ),
                )
              ),
              FlexItem(
                'section_contacts_block--form',
                ContactForm()
              )
            )
          )
        )
      )
    );

  }

}