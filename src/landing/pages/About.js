module.exports = (lf, slf, project) => {

  const { $print: $p, $attr, doctype, html, head, body, main, meta, title, link, script, src, charset, className, 
    div, a, href } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const Text = project.def('Text');
  const H1 = project.def('H1');
  const H2 = project.def('H2');
  const H3 = project.def('H3');
  const H4 = project.def('H4');
  const KV = project.def('KV');
  const List = project.def('List');
  const Link = project.def('Link');
  const Mail = project.def('Mail');
  const Model = project.model('aboutModel');

  const Container = (...args) => div(
    div(
      $p(
        ...args
      ),
      className('about_wrapper')
    ),
    className('about_page')
  );

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
              Container(
                H1('Сведения об образовательной органицации'),
                H3('Основные сведения'),
                Text(Model.get().main.info),
                KV(Model.get().main.founder.key, Model.get().main.founder.value),
                KV(Model.get().main.legalAdress.key, Model.get().main.legalAdress.value),
                KV(Model.get().main.schedule.key, $p(
                  Model.get().main.schedule.value,
                  ', ',
                  Mail(Model.get().main.mail)
                )),
                H3('Структура и органы управления'),
                KV(Model.get().main.ceo.key, $p(
                  Model.get().main.ceo.value,
                  ', ',
                  Mail(Model.get().main.mail)
                )),
                H2('Структурные подразделения'),
                List(Model.get().structural.map(({key, value}) => KV(
                  key,
                  value,
                  'comma'
                ))),
                H3('Документы'),
                List(Model.get().documents.map(({href: sHref, value}) => Link(
                  value,
                  sHref,
                  '_blank'
                ))),
                H2('Образование'),
                ...Model.get().education.map(elem => $p(
                  H4(elem.title),
                  elem.content.length > 0? List(elem.content.map(({href: sHref, value}) => Link(
                    value,
                    sHref,
                    '_blank'
                  )), ): ''
                )),
                H3('Финансово-хозяйственная деятельность'),
                Link(
                  Model.get().financial.value,
                  Model.get().financial.href,
                  '_blank'
                ),
                H3('Сроки обучения на категории:'),
                List(Model.get().training_period),
                H3('Платные образовательные услуги'),
                List(Model.get().paid.map(({href: sHref, value}) => Link(
                  value,
                  sHref,
                  '_blank'
                ))),
                H3('Информация о численности обучающихся'),
                List(Model.get().studentInfo, 'list_decimal'),
                H3('Материально-техническое обеспечение учебного процесса'),
                H4('Оборудованные объекты для проведения занятий:'),
                List(Model.get().schools.map(elem => {
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
                H3('Доступная среда'),
                Text(Model.get().description),
                H3('Международное сотрудничество'),
                Text(Model.get().international)
              ),
              Footer(),
              script(null, $p( src('assets/scripts/app.min.js'), charset('utf-8') ))
            ),
          )
        )
      )
    );

  }
}