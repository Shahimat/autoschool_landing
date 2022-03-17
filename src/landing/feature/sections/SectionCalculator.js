module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2, form, label, value, input } = lf;

  const oData = {
    transport: [
      'мотоцикл',
      'легковое авто',
      'переобучение с B на C',
    ],
    transmission: [
      'Механическая',
      'Автоматическая',
    ],
    labels: [
      {
        name:  'Практика',
        value: '28',
        type:  'занятий',
      },
      {
        name:  'Теория',
        value: '3',
        type:  'месяца',
      },
      {
        name:  'Стоимость',
        value: '30',
        type:  'тыс. руб.',
      }
    ]
  };

  return () => {

    const Selection = (title, select, arr) => div(
      $print(
        ul(
          $print(
            ...arr.map(sTransport => li(
              span( sTransport, className('calculator-form-dropdown__label') ),
              className('calculator-form-dropdown__item')
            ))
          ),
          className('calculator-form-field__dropdown calculator-form-dropdown')
        ),
        div(
          span(title, className('calculator-form-field__label')),
          className('calculator-form-field__title')
        ),
        label(
          $print(
            input(
              null,
              $print(
                className('calculator-form-field__value'),
                type('hidden'),
                value(select)
              )
            ),
            span(
              select,
              className('calculator-form-field__label')
            ),
            img(
              null,
              $print(
                className('calculator-form-field__arrow'),
                src('assets/images/arrow.svg'),
                alt('arrow')
              )
            )
          ),
          className('calculator-form-field__input calculator-form-field__select')
        )
      ),
      className('calculator-form__field calculator-form-field calculator-form-field--select')
    );

    const Block = ({ name: sName, value: sValue, type: sType }) => div(
      $print(
        div(
          span(
            sName,
            className('calculator-form-field__label')
          ),
          className('calculator-form-field__title')
        ),
        label(
          $print(
            input(
              null,
              $print(
                className('calculator-form-field__value'),
                type('hidden'),
                value(sType)
              )
            ),
            span(
              sValue,
              className('calculator-form-field__label calculator-form-field__label--num')
            ),
            span(
              sType,
              className('calculator-form-field__label')
            )
          ),
          className('calculator-form-field__input calculator-form-field__count')
        )
      ),
      className('calculator-form__field calculator-form-field calculator-form-field--count')
    );

    return section(
      div(
        $print(
          form(
            $print(
              Selection( 'Транспорт', 'Легковое авто', oData.transport ),
              Selection( 'Каробка передач', 'Механическая', oData.transmission ),
              ...oData.labels.map(oElem => Block(oElem)),
              div(
                $print(
                  div(
                    img(
                      null,
                      $print(
                        src('assets/images/decor/1.png'),
                        alt('decor')
                      )
                    ),
                    className('calculator-form__decor')
                  ),
                  input(
                    null,
                    $print(
                      className('calculator-form-field__label'),
                      type('submit'),
                      value('Записаться')
                    )
                  )
                ),
                className('calculator-form__field calculator-form-field calculator-form-field--btn')
              )
            ),
            className('calculator__form calculator-form')
          ),
          div(
            '* организация экзамена в ГИБДД и свидетельство об окончании.',
            className('calculator__descr')
          )
        ),
        className('container')
      ),
      className('calculator')
    );
  };
}