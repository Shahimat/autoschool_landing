module.exports = (lf, slf, project) => {

  const { $print: $p, $attr, doctype, html, head, body, main, meta, title, link, script, src, charset, className, 
    div, a, href, br, section } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const Wrapper = project.def('Wrapper');
  const Div = project.def('Div');
  const Box = project.def('Box');
  const Text = project.def('Text');
  const H1 = project.def('H1');
  const H2 = project.def('H2');
  const H3 = project.def('H3');
  const KV = project.def('KV');
  const List = project.def('List');
  const Link = project.def('Link');
  const Mail = project.def('Mail');
  const Model = project.model('aboutModel');

  const InfoBlock = (...args) => Box(
    'about_page--info_block',
    ...args
  )

  return () => {
  
    return doctype(
      html(
        $p(
          head(
            $p(
              meta(null, $attr('charset', 'utf-8')),
              meta(null, $p(
                $attr('name', 'viewport'),
                $attr('content', 'width=device-width, initial-scale=1'),
              )),
              meta(null, $p(
                $attr('http-equiv', 'X-UA-Compatible'),
                $attr('content', 'IE=edge'),
              )),
              title('Auto School'),
              meta(null, $p(
                $attr('name', 'description'),
                $attr('content', ''),
              )),
              link(null, $p(
                $attr('href', './assets/favicon.ico'),
                $attr('rel', 'shortcut icon'),
              )),
              link(null, $p(
                $attr('href', './style.css'),
                $attr('rel', 'stylesheet'),
              )),
              script(null, $p( src('./bundle.js'), charset('utf-8') )),
            )
          ),
          body(
            $p(
              Header(),
              section(
                Wrapper(
                  H1('Сведения об образовательной органицации'),
                  Div(
                    'about_page--document',
                    H2('Основные сведения'),
                    InfoBlock(
                      Text(Model.get().main.info),
                      br(),
                      KV(Model.get().main.founder.key, Model.get().main.founder.value),
                      KV(Model.get().main.legalAdress.key, Model.get().main.legalAdress.value),
                      KV(Model.get().main.schedule.key, $p(
                        Model.get().main.schedule.value,
                        ', ',
                        Mail(Model.get().main.mail)
                      )),
                    ),
                    H2('Структура и органы управления'),
                    InfoBlock(
                      KV(Model.get().main.ceo.key, $p(
                        Model.get().main.ceo.value,
                        ', ',
                        Mail(Model.get().main.mail)
                      )),
                    ),
                    H2('Структурные подразделения'),
                    InfoBlock(
                      List(Model.get().structural.map(({key, value}) => KV(
                        key,
                        value,
                        'comma'
                      ))),
                    ),
                    H2('Документы'),
                    InfoBlock(
                      List(Model.get().documents.map(({href: sHref, value}) => Link(
                        value,
                        sHref,
                        '_blank'
                      ))),
                    ),
                    H2('Образование'),
                    InfoBlock(
                      ...Model.get().education.map(elem => $p(
                        H3(elem.title),
                        br(),
                        elem.content.length > 0? List(elem.content.map(({href: sHref, value}) => Link(
                          value,
                          sHref,
                          '_blank'
                        )), ): '',
                        br(),
                      )),
                    ),
                    H2('Финансово-хозяйственная деятельность'),
                    InfoBlock(
                      Link(
                        Model.get().financial.value,
                        Model.get().financial.href,
                        '_blank'
                      ),
                    ),
                    H2('Сроки обучения на категории:'),
                    InfoBlock(
                      List(Model.get().training_period),
                    ),
                    H2('Платные образовательные услуги'),
                    InfoBlock(
                      List(Model.get().paid.map(({href: sHref, value}) => Link(
                        value,
                        sHref,
                        '_blank'
                      ))),
                    ),
                    H2('Информация о численности обучающихся'),
                    InfoBlock(
                      List(Model.get().studentInfo),
                    ),
                    H2('Материально-техническое обеспечение учебного процесса'),
                    InfoBlock(
                      H3('Оборудованные объекты для проведения занятий:'),
                      br(),
                      List(Model.get().schools.map(elem => {
                        if (elem === 'br') {
                          return br();
                        }
                        let aElem = elem.split('ПДД онлайн');
                        if (aElem.length === 1) {
                          return elem;
                        } else {
                          let render = [];
                          for (let i = 0; i < aElem.length; i++) {
                            render.push(aElem[i]);
                            if (i < aElem.length - 1) {
                              render.push(Link(
                                'ПДД онлайн',
                                '/pdd-onlajn',
                                '_blank'
                              ))
                            }
                          }
                          return $p(...render);
                        }
                      })),
                    ),
                    H2('Доступная среда'),
                    InfoBlock(
                      Text(Model.get().description),
                    ),
                    H2('Международное сотрудничество'),
                    InfoBlock(
                      Text(Model.get().international)
                    ),
                  ),
                ),
                className('about_page--content')
              ),
              Footer()
            ),
            className('about_page')
          )
        )
      )
    );

  }
}