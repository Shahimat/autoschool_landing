module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, img, className, alt, src } = lf;

  const oData = {
    tabs: [
      {
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

  const Style = project.style('group');

  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const TabContainer = project.def('TabContainer');

  const InfoBox = (title, before_num, num, after_num) => Box(
    'info_box',
    FlexVContainer(
      'info_box_container',
      FlexItem(
        'info_box_title',
        Span('info_box_title--text', title)
      ),
      FlexItem(
        'info_box_description',
        Span('info_box_description--before', before_num),
        Span('info_box_description--num', num),
        Span('info_box_description--after', after_num)
      )
    )
  )

  return () => {

    return Section(
      'section_school',
      FlexHContainer(
        '',
        FlexItem(
          'section_school_container',
          TabContainer({
            tabs: oData.tabs.map(tab => tab.text),
            tabStyle: 'tab_header',
          }, (title, index) => Box(
            '',
            Box(
              'section_school_picture',
              img(null, $p( className('section_school_picture--img'), src(oData.tabs[index].src), alt('info-bg') ))
            ),
            Box(
              'tab_content',
              FlexHContainer(
                'tab_content_container',
                FlexItem(
                  'tab_content--left',
                  InfoBox('Практика', '', oData.tabs[index].lessons_number, ' занятий'),
                  InfoBox(' ', 'по ', oData.tabs[index].lessons_hour, ' часа'),
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
                    'tab_content--right_container',
                    FlexItem(
                      'tab_content--right_top',
                      Span('right_top--text', 'Практические занятия проводятся индивидуально с каждым в любой день по записи')
                    ),
                    FlexItem(
                      'tab_content--right_bottom',
                      Span('tab_content_text--small', 'с '),
                      Span('tab_content_text--big', '10:00'),
                      Span('tab_content_text--small', ' по'),
                      Span('tab_content_text--big', '18:00'),
                    )
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