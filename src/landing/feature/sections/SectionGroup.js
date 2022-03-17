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
              title: 'Группа выходного дня',
              description: 'начало занятий',
            },
            {
              title: 'Группа рабочего дня',
              description: 'начало занятий',
            },
          ],
          cells: [
            ...[0, 1, 2, 3, 4].map(item => ([
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '25 января 2020'
              },
              {
                date: '10 февраля 2020'
              }
            ]))
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
            ...[0, 1, 2, 3, 4].map(item => ([
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '25 января 2020'
              },
              {
                date: '10 февраля 2020'
              }
            ]))
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
              title: 'Группа выходного дня',
              description: 'начало занятий',
            },
            {
              title: 'Группа рабочего дня',
              description: 'начало занятий',
            },
          ],
          cells: [
            ...[0, 1, 2, 3, 4].map(item => ([
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '25 января 2020'
              },
              {
                date: '10 февраля 2020'
              }
            ]))
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
              title: 'Группа выходного дня',
              description: 'начало занятий',
            },
            {
              title: 'Группа рабочего дня',
              description: 'начало занятий',
            },
          ],
          cells: [
            ...[0, 1, 2, 3, 4].map(item => ([
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская д. 9к'
              },
              {
                date: '25 января 2020'
              },
              {
                date: '10 февраля 2020'
              }
            ]))
          ]
        }
      }
    ],
  };

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
        className('group'),
        id('group')
      )
    );
  };
}