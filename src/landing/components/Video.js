module.exports = (lf, slf, project) => {
  const { $print: $p, $attr, video, source, src, type, className } = lf;

  return (url, sType, sAttrs, sClass) => {
    return video(
      source(null, $p( src(url), type(sType) )),
      $p(
        className(sClass),
        $attr(sAttrs),
      )
    );
  };
}