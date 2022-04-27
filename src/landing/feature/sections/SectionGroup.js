module.exports = (lf, slf, project) => {
  const { $print: $p, $attr,img, className, alt, src } = lf;

  const oData = {
    tabs: [
      {
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

  const Style = project.style('group');

  const Title = project.def('Title');
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const TabContainer = project.def('TabContainer');

  const Decor = (imagePath) => Div(
    'decor_container',
    img(
      null,
      $p(
        src(imagePath),
        alt('decor')
      )
    ),
  )

  const TableCell = (cell) => Box(
    'group_table_cell',
    cell.title? Box('', Span('group_table_cell--title', cell.title)) : '',
    cell.description? Box('', Span('group_table_cell--description', cell.description)) : '',
    cell.date? Box('', Span('group_table_cell--date', cell.date)) : '',
  )

  const TableLine = (line) => FlexHContainer(
    'group_table_line',
    ...line.map(cell => FlexItem(
      $p(
        'group_table_line--item ',
        Style({
          width: `${Math.round( 100 / line.length * 100 ) / 100}%`,
        })
      ),
      TableCell(cell)
    ))
  )

  const Table = (header, cells) => FlexVContainer(
    'group_table',
    FlexItem(
      'group_table--item_first',
      TableLine(header)
    ),
    ...cells.map(cell => FlexItem(
      'group_table--item',
      TableLine(cell)
    ))
  )

  return () => {

    return Section(
      'section_group',
      FlexHContainer(
        '',
        FlexItem(
          Style({
            width: '1300px',
            margin: '0 auto',
          }),
          FlexVContainer(
            '',
            FlexItem(
              'title_content',
              Title('Идет набор в учебные группы автошколы')
            ),
            FlexItem(
              '',
              TabContainer({
                tabs: oData.tabs.map(tab => tab.text),
                tabStyle: 'tab_header',
              }, (text, index) => Box(
                '',
                Box(
                  'section_group_picture',
                  img(null, $p( className('section_group_picture_img'), src(oData.tabs[index].src), alt('group-bg') )),
                ),
                Box(
                  'section_group_content',
                  Decor(oData.tabs[index].decor),
                  Box(
                    'section_group_content--title',
                    Span('category_tab_title', text)
                  ),
                  Box(
                    'section_group_content--table',
                    Table(oData.tabs[index].table.columns, oData.tabs[index].table.cells)
                  )
                )
              ))
            )
          )
        )
      )
    );
  };
}