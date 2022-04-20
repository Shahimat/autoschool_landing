module.exports = (lf, slf, project) => {
  const {
    $print,
    $attr,
    section,
    div,
    span,
    button,
    img,
    svg,
    video,
    source,
    use,
    ul,
    li,
    a,
    br,
    className,
    alt,
    src,
    href,
    type,
    picture,
    h1,
    h2,
    form,
    label,
    value,
    input,
    select,
    option,
  } = lf;

  const Text = project.def('Text');
  const Title = project.def('Title');
  const Link = project.def('Link');
  const ButtonGradient = project.def('ButtonGradient');
  const FieldSet = project.def('FieldSet');
  const TextArea = project.def('TextArea');
  const ButtonClose = project.def('ButtonClose');
  const Checkbox = project.def('Checkbox');

  const oData = {
    transport: ['мотоцикл', 'легковое авто', 'переобучение с B на C', 'переобучение с C на D'],
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

  const Modal = () => div(
    divClass(
      'modal_content',
      divClass(
        'scm_close_field',
        ButtonClose(
          'scm_close_button',
          $attr('data-action', 'close_modal')
        )
      ),
      divClass(
        'scm_wrapper',
        Title('Записаться'),
        divClass('scm_subtitle', Text('Мы свяжемся с Вами в самое ближайшее время для уточнения деталей', 
          'scm_subtitle_content')),
        divClass(
          'scm_form',
          divClass(
            'scm_form_left',
            FieldSet('Ваше имя'),
            FieldSet('E-mail'),
            FieldSet('Телефон'),
            divClass(
              'scm_form_left_agreement',
              divClass(
                'scm_form_check',
                Checkbox('wf')
              ),
              divClass(
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
          divClass(
            'scm_form_right',
            TextArea('Сообщение', '', 'scm_message_field'),
            Text(
              '* Мы ценим вашу конфиденциальность и никогда не передадим вашу информацию кому-либо.',
              'scm_form_right_text'
            ),
            ButtonGradient(
              'Отправить',
              'scm_form_right_button'
            ),
          ),
        )
      )
    ),
    $print(
      className('selection_calculator_modal'),
      $attr('data-state', 'is_open_modal')
    )
  );

  const Selection = (title, select, arr) => divClass(
    'calculator_block selection_part',
    ulClass(
      'select_set',
      ...arr.map(elem => liClass(
        'select_set_item',
        elem
      ))
    ),
    divClass(
      'left',
      divClass('select_title', title),
      divClass('select_value', select),
    ),
    divClass(
      'right',
      img(
        null,
        $print(
          className('img'),
          src('assets/images/arrow.svg'),
          alt('arrow')
        )
      )
    )
  )

  const Block = ({ name: sName, value: sValue, type: sType }) => divClass(
    'calculator_block calculator_value_part',
    divClass(
      'block_title',
      sName
    ),
    divClass(
      'block_value',
      spanClass(
        'calculator_value',
        sValue
      ),
      spanClass(
        'calculator_type',
        sType
      )
    )
  )

  return () => {

    return section(
      divClass(
        'container',
        form(
          $print(
            Selection('Транспорт', 'Легковое авто', oData.transport),
            Selection('Коробка передач', 'Механическая', oData.transmission),
            ...oData.labels.map((oElem) => Block(oElem)),
            divClass(
              'btn_part',
              divClass(
                'decor_part',
                img(
                  null,
                  $print(src('assets/images/decor/1.png'), alt('decor'), className('decor_img'))
                ),
              ),
              button(
                span(
                  'Записаться',
                  $print(
                    className('btn_enroll_text'),
                    $attr('data-action', 'open_modal'),
                  )
                ),
                className('btn_enroll')
              )
            ),
            Modal()
          ),
          className('section_calculator_form')
        ),
        divClass(
          'calculator_desc',
          '* организация экзамена в ГИБДД и свидетельство об окончании.'
        )
      ),
      className('section_calculator')
    );
  };
};
