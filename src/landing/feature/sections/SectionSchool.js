module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, img, className, alt, src } = lf;

  const oData = {
    tabs: [
      {
        title: 'Теоретические занятия',
        src: 'assets/images/info-bg.jpg',
        left_content: [
          {
            title: 'Теория',
            text: [
              {
                type: 'small',
                text: 'от',
              },
              {
                type: 'big',
                text: '1,5',
              },
              {
                type: 'small',
                text: 'до',
              },
              {
                type: 'big',
                text: '3',
              },
              {
                type: 'small',
                text: 'месяцев',
              },
            ]
          },
        ],
        center_content: [
          '- изучение Правил дорожного движения (ПДД)',
          '- юридическая ответственность водителя за нарушение ПДД',
          '- оказание первой медицинской помощи',
          '- правила эксплуатации автомобиля',
          '- основы безопасного вождения',
          '- практическая тренировка по решению экзаменационных задач',
        ],
        right_content: [
          {
            title: 'Занятия проходят в вечерних группах по будням',
            text: [
              {
                type: 'small',
                text: 'с',
              },
              {
                type: 'big',
                text: '18',
              },
              {
                type: 'small',
                text: 'до',
              },
              {
                type: 'big',
                text: '21:15',
              },
            ]
          },
          {
            title: 'И в группах выходного дня с перерывами',
            text: [
              {
                type: 'small',
                text: 'с',
              },
              {
                type: 'big',
                text: '10',
              },
              {
                type: 'small',
                text: 'до',
              },
              {
                type: 'big',
                text: '13:15',
              },
              {
                type: 'padding',
                length: 3,
              },
              {
                type: 'small',
                text: 'и с',
              },
              {
                type: 'big',
                text: '14',
              },
              {
                type: 'small',
                text: 'до',
              },
              {
                type: 'big',
                text: '17:15',
              },
            ]
          }
        ]
      },
      {
        title: 'Практические занятия',
        src: 'assets/images/info-bg.jpg',
        left_content: [
          {
            title: 'Практика',
            text: [
              {
                type: 'big',
                text: '28',
              },
              {
                type: 'small',
                text: 'занятий',
              },
            ]
          },
          {
            title: '',
            text: [
              {
                type: 'small',
                text: 'по',
              },
              {
                type: 'big',
                text: '2',
              },
              {
                type: 'small',
                text: 'часа',
              },
            ]
          },
        ],
        center_content: [
          '- тренировка и практическое выполнение упражнений на автодроме',
          '- учебная езда по городу',
          '- действия водителя в нестандартных ситуациях',
          '- изучение особенностей экзаменационного маршрута',
        ],
        right_content: [
          {
            title: 'Практические занятия проводятся индивидуально с каждым в любой день по записи',
            text: [
              {
                type: 'small',
                text: 'с',
              },
              {
                type: 'big',
                text: '10:00',
              },
              {
                type: 'small',
                text: 'по',
              },
              {
                type: 'big',
                text: '18:00',
              },
            ]
          }
        ]
      },
      {
        title: 'Организация экзамена в ГИБДД',
        src: 'assets/images/info-bg.jpg',
        left_content: [],
        center_content: [
          '- подготовка пакета документов, необходимых для ГИБДД',
          '- регистрация на экзамен с назначением даты',
        ],
        right_content: []
      }
    ],
  };

  const Style = project.style('group');

  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const TabContainer = project.def('TabContainer');
  const ComplexText = project.def('ComplexText');

  const InfoBoxLeft = (title, text) => Box(
    'info_box_left',
    FlexVContainer(
      'info_box_left_container',
      FlexItem(
        'info_box_left_title',
        Span('info_box_left_title--text', title)
      ),
      FlexItem(
        'info_box_left_description',
        ComplexText(text)
      )
    )
  );

  const InfoBoxRight = (title, text) => Box(
    'info_box_right',
    FlexVContainer(
      'info_box_right_container',
      FlexItem(
        'info_box_right_title',
        Span('info_box_right_title--text', title)
      ),
      FlexItem(
        'info_box_right_description',
        ComplexText(text)
      )
    )
  );

  return () => {

    return Section(
      {
        sClass: 'section_school',
        id: 'info',
      },
      FlexHContainer(
        '',
        FlexItem(
          'section_school_container',
          TabContainer({
            tabs: oData.tabs.map(tab => tab.title),
            tabStyle: 'tab_header',
          }, (title, index) => Box(
            '',
            Box(
              'section_school_picture',
              img(null, $p(
                className('section_school_picture--img image_quality'),
                src(oData.tabs[index].src),
                alt('info-bg')
              ))
            ),
            Box(
              'tab_content',
              FlexHContainer(
                'tab_content_container',
                FlexItem(
                  'tab_content--left',
                  FlexVContainer(
                    'tab_content--left_content',
                    ...oData.tabs[index].left_content.map(info => FlexItem(
                      'tab_content--left_content--item',
                      InfoBoxLeft(info.title, info.text)
                    ))
                  )
                ),
                FlexItem(
                  'tab_content--center',
                  ...oData.tabs[index].center_content.map(text => $p(
                    Box(
                      'tab_content--center_text',
                      text
                    ),
                  ))
                ),
                FlexItem(
                  'tab_content--right',
                  FlexVContainer(
                    'tab_content--right_content',
                    ...oData.tabs[index].right_content.map(info => FlexItem(
                      'tab_content--right_content--item',
                      InfoBoxRight(info.title, info.text)
                    ))
                  )
                )
              )
            ),
            Box(
              'section_school_desc',
              Span('section_school_desc--text', '* с личным инструктором')
            )
          ))
        )
      )
    )
  };
}