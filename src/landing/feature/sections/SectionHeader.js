module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, section, div, span, button, img, svg, video, source, use, ul, li, a, br, className, alt, src, 
    href, type, picture, h1, h2 } = lf;

  const Box = project.def('Box');
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Section = project.def('Section');
  const Video = project.def('Video');
  
  return () => {

    return Section(
      'section_header',
      Video(
        'assets/bg/video.mp4',
        'video/mp4',
        'autoplay muted loop playsinline',
        'sh_video'
      ),
      Div(
        'sh_wrapper',
        Div(
          'sh_left_container',
          Div(
            'sh_logo_container',
            a(
              img( null, $p(
                $attr('src', 'assets/images/logo.png'),
                alt('logo'),
                className('sh_logo_container_img image_quality')
              )),
              $p(
                className('sh_logo_container_href'),
                href('/')
              )
            ),
          ),
          Div(
            'sh_place_container',
            Div(
              'sh_place_container_left',
              Span('sh_place_container_left_text', '1'),
            ),
            Div(
              'sh_place_container_right',
              Span('sh_place_container_right_top', '- e'),
              Span('sh_place_container_right_center', 'Место<br>в рейтинге ГИБДД'),
              Span('sh_place_container_right_bottom', 'по числу сдавших на права'),
            )
          ),
          Span(
            'sh_agitation',
            'Получите права уже этой осенью!'
          )
        ),
        Div(
          'sh_right_container',
          Div(
            'sh_address',
            Span('sh_address_phone', '+7 (926) 534 16 22'),
            Span('sh_address_place', 'г. Наро-Фоминск, ул. Карла Маркса, д. 19'),
          ),
          Div(
            'sh_quarantine',
            Span('sh_quarantine_text', 'Как проходят занятия в условиях карантина?'),
            a(
              'Подробнее',
              $p(
                className('sh_quarantine_href'),
                href('/#group')
              )
            )
          )
        )
      )
    )
  };
}