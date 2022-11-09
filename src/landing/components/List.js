module.exports = (lf, slf, project) => {
  const { $print: $p, ul, li, className } = lf;

  return (items, classList, classListItem) => {
    return ul(
      $p(
        ...items.map((elem) =>
          li(elem, className($p('base_list_item ', classListItem))),
        ),
      ),
      className($p('base_list ', classList)),
    );
  };
};
