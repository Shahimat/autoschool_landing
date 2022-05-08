module.exports = (lf, slf, project) => {

  const { $print: $p, $attr, doctype, html, head, body, main, meta, title, link, script, src, charset, className, 
    div, a, href, iframe } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const H1 = project.def('H1');

  const Container = (...args) => div(
    div(
      $p(
        ...args
      ),
      className('pdd_page--content_wrapper')
    ),
    className('pdd_page--content')
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
                H1('ПДД онлайн'),
                iframe(
                  null,
                  $p(
                    src('//www.pdd24.com/pdd-onlain'),
                    $attr('width', '100%'),
                    $attr('height', '980px'),
                    $attr('frameborder', '0'),
                    $attr('marginwidth', '0'),
                    $attr('marginheight', '0'),
                  )
                )
              ),
              Footer()
            ),
            className('pdd_page')
          )
        )
      )
    );

  }
}