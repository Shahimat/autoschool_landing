module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, section, div, span, button, img, className, alt, src } = lf;

  const oData = {
    transport: [
      'мотоцикл',
      'легковое авто',
      [
        {
          type: 'small',
          text: 'переобучение&nbsp;с&nbsp;',
        },
        {
          type: 'big',
          text: 'B',
        },
        {
          type: 'small',
          text: '&nbsp;на&nbsp;',
        },
        {
          type: 'big',
          text: 'C',
        }
      ],
      [
        {
          type: 'small',
          text: 'переобучение&nbsp;с&nbsp;',
        },
        {
          type: 'big',
          text: 'C',
        },
        {
          type: 'small',
          text: '&nbsp;на&nbsp;',
        },
        {
          type: 'big',
          text: 'D',
        }
      ]
    ],
    transmission: ['Механическая', 'Автоматическая'],
    labels: [
      {
        name: 'Практика',
        value: '28',
        type: 'занятий',
      },
      {
        name: 'Теория',
        value: '3',
        type: 'месяца',
      },
      {
        name: 'Стоимость',
        value: '30',
        type: 'тыс. руб.',
      },
    ],
  };

  const Style = project.style('group');

  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Text = project.def('Text');
  const Title = project.def('Title');
  const Link = project.def('Link');
  const ButtonGradient = project.def('ButtonGradient');
  const FieldSet = project.def('FieldSet');
  const TextArea = project.def('TextArea');
  const ButtonClose = project.def('ButtonClose');
  const Checkbox = project.def('Checkbox');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const Select = project.def('Select');

  const getTextByTypes = (input) => {
    if (typeof(input) === 'string' || typeof(input) === 'function') {
      return Div(
        'text_by_types',
        Div(
          'text_by_types--text text_by_types--big',
          input
        )
      );
    } else if (Array.isArray(input)) {
      return Div(
        'text_by_types',
        ...input.map(item => Div(
          `text_by_types--text text_by_types--${item.type}`,
          item.text
        ))
      )
    } else {
      throw new Error(`getTextByTypes: expected <string> | <array> but found "${input}"`);
    }
  }

  const Modal = () => div(
    Div(
      'modal_content',
      Div(
        'scm_close_field',
        ButtonClose(
          'scm_close_button',
          $attr('data-action', 'close_modal')
        )
      ),
      Div(
        'scm_wrapper',
        Title('Записаться'),
        Div('scm_subtitle', Text('Мы свяжемся с Вами в самое ближайшее время для уточнения деталей', 
          'scm_subtitle_content')),
        Div(
          'scm_form',
          Div(
            'scm_form_left',
            FieldSet('Ваше имя'),
            FieldSet('E-mail'),
            FieldSet('Телефон'),
            Div(
              'scm_form_left_agreement',
              Div(
                'scm_form_check',
                Checkbox('wf')
              ),
              Div(
                'scm_form_text',
                Text(
                  'Я соглашаюсь с условими политики конфеденциальности и обработки персональных данных в соответствии с',
                  'scm_form_info'
                ),
                Link(
                  'ФЗ РФ №152 - ФЗ "О персональных данных"',
                  'http://www.consultant.ru/document/cons_doc_LAW_61801/',
                  '_blank',
                  'scm_form_link'
                ),
              ),
            )
          ),
          Div(
            'scm_form_right',
            TextArea('Сообщение', '', 'scm_message_field'),
            Text(
              '* Мы ценим вашу конфиденциальность и никогда не передадим вашу информацию кому-либо.',
              'scm_form_right_text'
            ),
            ButtonGradient('Отправить', 'scm_form_right_button'),
          ),
        )
      )
    ),
    $p(
      className('selection_calculator_modal'),
      $attr('data-state', 'is_open_modal')
    )
  );

  const InfoBox = ({
    title = '',
    before_num = '',
    num = '',
    after_num = '',
    sClass = '',
    content = undefined,
  }) => Box(
    $p('info_box ', sClass),
    FlexVContainer(
      'info_box_container',
      FlexItem(
        'info_box_title',
        Span('info_box_title--text', title)
      ),
      FlexItem(
        'info_box_description',
        content? content: $p(
          Span('info_box_description--before', before_num),
          Span('info_box_description--num', num),
          Span('info_box_description--after', after_num)
        )
      )
    )
  )

  return () => {

    return Section(
      'section_calculator',
      Modal(),
      FlexHContainer(
        '',
        FlexItem(
          'section_calculator_content',
          FlexVContainer(
            '',
            FlexItem(
              '',
              FlexHContainer(
                'section_calculator_panel',
                FlexItem(
                  '',
                  FlexHContainer(
                    '',
                    FlexItem(
                      '',
                      InfoBox({
                        title: 'Транспорт',
                        content: Select(oData.transport.map(item => getTextByTypes(item))),
                        sClass: 'info_box_select--first noselect',
                      })
                    ),
                    FlexItem(
                      '',
                      InfoBox({
                        title: 'Коробка передач',
                        content: Select(oData.transmission.map(item => getTextByTypes(item))),
                        sClass: 'info_box_select--second noselect',
                      })
                    )
                  )
                ),
                FlexItem(
                  '',
                  FlexHContainer(
                    '',
                    FlexItem(
                      '',
                      InfoBox({
                        title: 'Практика',
                        num: '25',
                        after_num: ' занятий',
                        sClass: 'noselect',
                      })
                    ),
                    FlexItem(
                      '',
                      InfoBox({
                        title: 'Теория',
                        num: '3',
                        after_num: ' месяца',
                        sClass: 'noselect',
                      })
                    ),
                    FlexItem(
                      '',
                      InfoBox({
                        title: 'Стоимость',
                        num: '38',
                        after_num: ' тыс.руб.',
                        sClass: 'noselect',
                      })
                    )
                  )
                ),
                FlexItem(
                  'btn_part',
                  Div(
                    'decor_part',
                    img(
                      null,
                      $p(src('assets/images/decor/1.png'), alt('decor'), className('decor_part--img image_quality'))
                    ),
                  ),
                  button(
                    Span('btn_enroll--text noselect', 'Записаться'),
                    $p(
                      className('btn_enroll'),
                      $attr('data-action', 'open_modal'),
                    )
                  )
                ),
              ),
              FlexItem(
                'calculator_desc',
                Span('calculator_desc--text', '* организация экзамена в ГИБДД и свидетельство об окончании.')
              )
            )
          )
        )
      )
    )
  };
};
