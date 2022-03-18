module.exports = (lf, slf, project) => {

  const { $print: $p, $attr, doctype, html, head, body, main, meta, title, link, script, src, charset, className, 
    div, a, href, img, alt } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const H1 = project.def('H1');
  const Model = project.model('photoModel');

  const Container = (...args) => div(
    div(
      $p(
        ...args
      ),
      className('gallery_wrapper')
    ),
    className('gallery_page')
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
              link(null, $p(
                $attr('href', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css'),
                $attr('rel', 'stylesheet'),
              )),
            )
          ),
          body(
            $p(
              Header(),
              Container(
                H1('Фото автошколы МИК 2000'),
                ...Model.get().map(elem => a(
                  img(
                    null,
                    $p(
                      className('gallery_photo_img'),
                      src(`assets/photos/${elem}`),
                      alt(elem)
                    )
                  ),
                  $p(
                    className('gallery_photo'),
                    href(`assets/photos/${elem}`),
                    $attr('data-fancybox', 'gallery'),
                    $attr('data-caption', elem),
                    $attr('data-width', '640'),
                    $attr('data-height', '480'),
                  )
                ))
              ),
              Footer(),
              script(null, $p( src('assets/scripts/app.min.js'), charset('utf-8') )),
              script(null, src('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'))
            ),
          )
        )
      )
    );

  }
}