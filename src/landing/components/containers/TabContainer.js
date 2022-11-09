module.exports = (lf, slf, project) => {
  const { $print: $p, className, menu, button, li } = lf;

  return (config, content) => {
    if (typeof config !== 'object' || typeof content !== 'function') {
      throw new Error(
        `Expected config <object>, content <function> but found config = "${config}" content = "${content}"`,
      );
    }

    let defConfig = {
      tabs: [],
      tabStyle: '',
      contentStyle: '',
    };
    Object.assign(defConfig, config);

    const Span = project.def('Span');
    const Box = project.def('Box');
    const FlexHContainer = project.def('FlexHContainer');
    const FlexItem = project.def('FlexItem');

    return Box(
      'tab_container',
      Box(
        'tab_container_header',
        FlexHContainer(
          'tab_container_header--container',
          FlexItem(
            'tab_container_header--item',
            Box(
              'tab_container_header--scroll',
              menu(
                $p(
                  ...defConfig.tabs.map((tab, index) =>
                    li(
                      button(
                        Span('tab_container_link_text', tab),
                        className(
                          $p('tab_container_link ', defConfig.tabStyle),
                        ),
                      ),
                      className('tab_container_header--menu_item'),
                    ),
                  ),
                ),
                className('tab_container_header--menu'),
              ),
            ),
          ),
        ),
      ),
      Box(
        $p('tab_container_content ', defConfig.contentStyle),
        ...defConfig.tabs.map((tab, index) =>
          Box('tab_container_item', content(tab, index)),
        ),
      ),
    );
  };
};
