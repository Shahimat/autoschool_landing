module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, img, className, alt, src } = lf;

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
              description: 'в классе / дистанционное обучение',
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
                description: 'ул. Московская д. 9к, ул. Карла-Маркса-19',
              },
              {
                date: '17 мая 2022',
              },
            ],
          ],
        },
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
              description: 'в классе / дистанционное обучение',
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
                description: 'ул. Шибанкова',
              },
              {
                date: '1 мая 2022',
              },
              {
                date: '',
              },
            ],
            [
              {
                title: 'г. Наро-Фоминск',
                description: 'ул. Московская, ул. Карла-Маркса-19',
              },
              {
                date: '14 мая 2022',
              },
              {
                date: '6 июня 2022',
              },
            ],
            [
              {
                title: 'г. Апрелевка',
                description: 'ул. Августовская д. 1',
              },
              {
                date: '16 июля 2022',
              },
              {
                date: '24 мая 2022',
              },
            ],
            [
              {
                title: 'п. Селятино',
                description: 'ул. Промышленная д. 81/1',
              },
              {
                date: '3 июля 2022',
              },
              {
                date: '30 мая 2022',
              },
            ],
            [
              {
                title: 'п. Верея',
                description: 'пл. Советская, д. 1',
              },
              {
                date: '',
              },
              {
                date: '11 июня 2022',
              },
            ],
          ],
        },
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
              description: 'в классе / дистанционное обучение',
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
                description: 'ул. Московская д. 9к, ул. Карла-Маркса-19',
              },
              {
                date: '20 июня 2022',
              },
            ],
          ],
        },
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
              description: 'в классе / дистанционное обучение',
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
                description: 'ул. Московская д. 9к, ул. Карла-Маркса-19',
              },
              {
                date: '17 мая 2022',
              },
            ],
          ],
        },
      },
    ],
  };

  const Style = project.style('group');

  const Wrapper = project.def('Wrapper');
  const Title = project.def('Title');
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Box = project.def('Box');
  const Section = project.def('Section');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');
  const TabContainer = project.def('TabContainer');

  const Decor = (imagePath) =>
    Div(
      'decor_container',
      img(null, $p(src(imagePath), alt('decor'), className('image_quality'))),
    );

  const TableCell = (cell) =>
    Box(
      'group_table_cell',
      cell.title ? Box('', Span('group_table_cell--title', cell.title)) : '',
      cell.description
        ? Box('', Span('group_table_cell--description', cell.description))
        : Box('', '&nbsp;'),
      cell.date ? Box('', Span('group_table_cell--date', cell.date)) : '',
    );

  const TableLine = (line) =>
    FlexHContainer(
      'group_table_line',
      ...line.map((cell) =>
        FlexItem(
          $p(
            'group_table_line--item ',
            Style({
              width: `${Math.round((100 / line.length) * 100) / 100}%`,
            }),
          ),
          TableCell(cell),
        ),
      ),
    );

  const Table = (header, cells) =>
    FlexVContainer(
      'group_table',
      FlexItem('group_table--item_first', TableLine(header)),
      ...cells.map((cell) => FlexItem('group_table--item', TableLine(cell))),
    );

  return () => {
    return Section(
      {
        sClass: 'section_group',
        id: 'group',
      },
      Wrapper(
        FlexVContainer(
          '',
          FlexItem(
            'title_content',
            Title('Идет набор в учебные группы автошколы'),
          ),
          FlexItem(
            '',
            TabContainer(
              {
                tabs: oData.tabs.map((tab) => tab.text),
              },
              (text, index) =>
                Box(
                  '',
                  Box(
                    'section_group_picture',
                    img(
                      null,
                      $p(
                        className('section_group_picture_img image_quality'),
                        src(oData.tabs[index].src),
                        alt('group-bg'),
                      ),
                    ),
                  ),
                  Box(
                    'section_group_tab_content',
                    Decor(oData.tabs[index].decor),
                    Box(
                      'section_group_content',
                      Box(
                        'section_group_content--overflow',
                        Box(
                          'section_group_content--title',
                          Span('category_tab_title', text),
                        ),
                        Box(
                          'section_group_content--table',
                          Table(
                            oData.tabs[index].table.columns,
                            oData.tabs[index].table.cells,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
            ),
          ),
        ),
      ),
    );
  };
};
