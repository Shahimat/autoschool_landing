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

  const oData = {
    transport: ['мотоцикл', 'легковое авто', 'переобучение с B на C'],
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
                spanClass('btn_enroll_text', 'Записаться'),
                className('btn_enroll')
              )
            )
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
