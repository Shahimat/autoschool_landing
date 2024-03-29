module.exports = (lf, slf, project) => {
  const {
    $print: $p,
    $attr,
    doctype,
    html,
    head,
    body,
    main,
    meta,
    title,
    link,
    script,
    src,
    charset,
    className,
    div,
    a,
    href,
    img,
    alt,
    section,
  } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const Wrapper = project.def('Wrapper');
  const H1 = project.def('H1');
  const Model = project.model('photoModel');

  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');

  return () => {
    return doctype(
      html(
        $p(
          head(
            $p(
              meta(null, $attr('charset', 'utf-8')),
              meta(
                null,
                $p(
                  $attr('name', 'viewport'),
                  $attr('content', 'width=device-width, initial-scale=1'),
                ),
              ),
              meta(
                null,
                $p(
                  $attr('http-equiv', 'X-UA-Compatible'),
                  $attr('content', 'IE=edge'),
                ),
              ),
              title('Auto School'),
              meta(
                null,
                $p($attr('name', 'description'), $attr('content', '')),
              ),
              link(
                null,
                $p(
                  $attr('href', './assets/favicon.ico'),
                  $attr('rel', 'shortcut icon'),
                ),
              ),
              link(
                null,
                $p($attr('href', './style.css'), $attr('rel', 'stylesheet')),
              ),
              link(
                null,
                $p(
                  $attr(
                    'href',
                    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css',
                  ),
                  $attr('rel', 'stylesheet'),
                ),
              ),
              script(null, $p(src('./bundle.js'), charset('utf-8'))),
            ),
          ),
          body(
            $p(
              Header(),
              section(
                Wrapper(
                  H1('Фото автошколы МИК 2000'),
                  FlexHContainer(
                    'gallery_page_images',
                    ...Model.get().map((elem) =>
                      FlexItem(
                        'gallery_page_images--item',
                        a(
                          img(
                            null,
                            $p(
                              className('gallery_photo_img'),
                              src(`assets/photos/${elem}`),
                              alt(elem),
                            ),
                          ),
                          $p(
                            className('gallery_photo'),
                            href(`assets/photos/${elem}`),
                            $attr('data-fancybox', 'gallery'),
                            $attr('data-caption', elem),
                            $attr('data-width', '640'),
                            $attr('data-height', '480'),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                className('gallery_page--content'),
              ),
              Footer(),
              script(
                null,
                src(
                  'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
                ),
              ),
            ),
            className('gallery_page'),
          ),
        ),
      ),
    );
  };
};
