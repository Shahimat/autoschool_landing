module.exports = (lf, slf, project) => {
  const {
    $print: $p,
    $attr,
    section,
    div,
    span,
    button,
    img,
    svg,
    video,
    source,
    use,
    ul,
    li,
    a,
    br,
    className,
    alt,
    src,
    href,
    type,
    picture,
    h1,
    h2,
  } = lf;

  const Box = project.def('Box');
  const Div = project.def('Div');
  const Span = project.def('Span');
  const Section = project.def('Section');
  const Video = project.def('Video');
  const FlexHContainer = project.def('FlexHContainer');
  const FlexVContainer = project.def('FlexVContainer');
  const FlexItem = project.def('FlexItem');

  return () => {
    return Section(
      'section_header',
      Video(
        'assets/bg/video.mp4',
        'video/mp4',
        'autoplay muted loop playsinline',
        'sh_video',
      ),
      Div(
        'sh_wrapper',
        Div(
          'sh_left_container',
          Div(
            'sh_place_container',
            Div(
              'sh_place_container_left',
              Div(
                'sh_place_container_left--up',
                Span('sh_text-red_big', '0%'),
              ),
              Div(
                'sh_place_container_left--down',
                Span('sh_text-description', 'Действует рассрочка'),
              ),
            ),
            // Div(
            //   'sh_place_container_right',
            //   Span('sh_place_container_right_top', '- e'),
            //   Span(
            //     'sh_place_container_right_center',
            //     'Место<br>в рейтинге ГИБДД',
            //   ),
            //   Span(
            //     'sh_place_container_right_bottom',
            //     'по числу сдавших на права',
            //   ),
            // ),
          ),
          // Span('sh_agitation', 'Получите права уже этой осенью!'),
        ),
        Div(
          'sh_right_container',
          Div(
            'sh_address',
            Span('sh_address_phone', '+7 (903) 124 12 61'),
            Span('sh_address_phone', '+7 (800) 500 03 56'),
            Span('sh_address_place', 'г. Наро-Фоминск, ул. Московская 9К'),
          ),
          FlexVContainer(
            'sh_right_container--agitation',
            FlexItem(
              'sh_right_container--agitation-item',
              FlexHContainer(
                'sh_right_container--agitation--up',
                FlexItem(
                  'sh_right_container--agitation--up-left_item',
                  Span('sh_text-red_big', '2'),
                ),
                FlexItem(
                  'sh_right_container--agitation--up-right_item',
                  FlexVContainer(
                    'sh_right_container--agitation--up--box',
                    FlexItem(
                      'sh_right_container--agitation--up--box-up',
                      Span('sh_text-red_middle', 'тыс.'),
                    ),
                    FlexItem(
                      'sh_right_container--agitation--up--box-down',
                      Span('sh_text-red_middle', 'руб.'),
                    )
                  )
                )
              )
            ),
            FlexItem(
              'sh_right_container--agitation-description',
              Span('sh_text-description', 'Скидка в День рождения'),
            )
          )
          // Div(
          //   'sh_quarantine',
          //   Span('sh_quarantine_text', 'Как проходят занятия в условиях карантина?'),
          //   a(
          //     'Подробнее',
          //     $p(
          //       className('sh_quarantine_href'),
          //       href('/#group')
          //     )
          //   )
          // )
        ),
      ),
    );
  };
};
