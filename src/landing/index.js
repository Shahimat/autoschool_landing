const { className } = require("../lib/lf");

module.exports = (lf, slf, project) => {

  const { $print, $attr, doctype, html, head, body, meta, title, link, p } = lf;
  const Header = project.def('Header');
  const Footer = project.def('Footer');
  const Model = project.model('model');

  let sData = JSON.stringify(Model.get());

  return () => {
  
    return doctype(
      html(
        $print(
          head(
            $print(
              meta(null, $attr('charset', 'utf-8')),
              meta(null, $print(
                $attr('name', 'viewport'),
                $attr('content', 'width=device-width, initial-scale=1'),
              )),
              meta(null, $print(
                $attr('http-equiv', 'X-UA-Compatible'),
                $attr('content', 'IE=edge'),
              )),
              title('Auto School'),
              meta(null, $print(
                $attr('name', 'description'),
                $attr('content', ''),
              )),
              link(null, $print(
                $attr('href', './assets/favicon.ico'),
                $attr('rel', 'shortcut icon'),
              )),
              link(null, $print(
                $attr('href', './style.css'),
                $attr('rel', 'stylesheet'),
              )),
            )
          ),
          body(
            $print(
              Header(),
              Footer()
            )
          )
        )
      )
    );

  }
}