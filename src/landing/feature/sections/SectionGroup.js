module.exports = (lf, slf, project) => {
  const { $print, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2, h3, form, label, value, input, id, p } = lf;

  const oData = {
    tabs: [
      {
        class: 'is-active',
        target: '0-group',
        text: 'Категория A',
        src: 'assets/images/group-bg.jpg',
        decor: 'assets/images/decor/2.png',
        table: {
          title: 'Категория A',
          columns: [
            {
              title: 'Теоретические занятия',
              description: 'в классе',
            },
            {
              title: 'Набор в учебную группу на категорию А',
              description: 'начало занятий',
            },
          ],
          cells: [
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: 'март-апрель 2022'
              }
            ]
          ]
        }
      },
      {
        class: '',
        target: '1-group',
        text: 'Категория B',
        src: 'assets/images/group-bg.jpg',
        decor: 'assets/images/decor/2.png',
        table: {
          title: 'Категория B',
          columns: [
            {
              title: 'Теоретические занятия',
              description: 'в классе',
            },
            {
              title: 'Группа выходного дня',
              description: 'начало занятий',
            },
            {
              title: 'Группа рабочего дня',
              description: 'начало занятий',
            },
          ],
          cells: [
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Карла Маркса'
              },
              {
                date: ''
              },
              {
                date: '5 октября 2021'
              }
            ],
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Шибанкова'
              },
              {
                date: '10 октября 2021'
              },
              {
                date: ''
              }
            ],
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '23 октября 2021'
              },
              {
                date: ''
              }
            ],
            [
              {
                title: 'г. Апрелевка',
                description: 'ул. Августовская д. 1'
              },
              {
                date: '18 сентября 2021'
              },
              {
                date: '9 ноября 2021'
              }
            ],
            [
              {
                title: 'п. Селятино',
                description: 'ул. Промышленная д. 81'
              },
              {
                date: '19 сентября 2021'
              },
              {
                date: '15 ноября 2021'
              }
            ],
            [
              {
                title: 'п. Верея',
                description: 'пл. Советская, д. 1'
              },
              {
                date: '4 декабря 2021'
              },
              {
                date: ''
              }
            ]
          ]
        }
      },
      {
        class: '',
        target: '2-group',
        text: 'Категория C',
        src: 'assets/images/group-bg.jpg',
        decor: 'assets/images/decor/2.png',
        table: {
          title: 'Категория C',
          columns: [
            {
              title: 'Теоретические занятия',
              description: 'в классе',
            },
            {
              title: 'Набор в учебную группу на переобучение с "В" на "С"',
              description: 'начало занятий',
            },
          ],
          cells: [
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '11 октября 2021'
              },
            ]
          ]
        }
      },
      {
        class: '',
        target: '3-group',
        text: 'Категория D',
        src: 'assets/images/group-bg.jpg',
        decor: 'assets/images/decor/2.png',
        table: {
          title: 'Категория D',
          columns: [
            {
              title: 'Теоретические занятия',
              description: 'в классе',
            },
            {
              title: 'Набор в учебную группу на переобучение с "С" на "D"',
              description: 'начало занятий',
            },
          ],
          cells: [
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '28 сентября 2021'
              },
            ]
          ]
        }
      }
    ],
  };

  const Title = project.def('Title');

  const divClass = (sClass, ...args) => div(
    $print(...args),
    className(sClass)
  );

  return () => {

    const TableCell = (aCells) => div(
      $print(
        ...aCells.map(oCell => div(
          $print(
            oCell.title? span(
              oCell.title,
              className('group-card-table__title')
            ): '',
            oCell.description? span(
              oCell.description,
              className('group-card-table__descr')
            ): '',
            oCell.date? span(
              oCell.date,
              className('group-card-table__date')
            ): '',
          ),
          className('group-card-table__cell')
        ))
      ),
      className('group-card-table__row')
    );

    const TableHeader = (aHeader) => div(
      $print(
        ...aHeader.map(oHeader => div(
          $print(
            span(
              oHeader.title,
              className('group-card-table__title')
            ),
            span(
              oHeader.description,
              className('group-card-table__descr')
            )
          ),
          className('group-card-table__cell')
        ))
      ),
      className('group-card-table__row group-card-table__row--header')
    );

    const TableContent = (oTable) => div(
      $print(
        TableHeader(oTable.columns),
        ...oTable.cells.map(aCells => TableCell(aCells))
      ),
      className('group-card__table group-card-table')
    );

    const TabContent = (oTab) => div(
      $print(
        div(
          div(
            img(null, $print( className('tabs-content__image'), src(oTab.src), alt('group-bg') )),
            className('tabs-content__picture')
          ),
          className('tabs-content__bg')
        ),
        div(
          $print(
            div(
              img(
                null,
                $print(
                  src(oTab.decor),
                  alt('decor')
                )
              ),
              className('group-card__decor')
            ),
            h3(
              oTab.text,
              className('group-card__title')
            ),
            TableContent(oTab.table)
          ),
          className('group-card')
        )
      ),
      $print(
        className(`tabs-content__wrapper ${oTab.class}`),
        $attr('data-tab', oTab.target),
        $attr('data-tab-group', 'group')
      )
    );

    return section(
      div(
        $print(
          divClass(
            'title_content',
            Title('Идет набор в учебные группы автошколы'),
          ),
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
              ...oData.tabs.map(oItem => TabContent(oItem))
            ),
            className('tabs-content')
          )
        ),
        className('container')
      ),
      $print(
        className('group section_group'),
        id('group')
      )
    );
  };
}