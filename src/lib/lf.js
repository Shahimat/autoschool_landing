const $put = (content) => {
  if (content === undefined || content === null) {
    return ''
  } else if (typeof(content) === 'string') {
    return content;
  } else if (typeof(content) === 'function') {
    return content();
  } else {
    throw new Error(`invalid content type '${content}'`);
  }
}

const $putCheck = (regexp, content) => {
  if (typeof(regexp) === 'object' && regexp.constructor.name === 'RegExp') {
    let any = $put(content);
    if (regexp.exec(any) !== null) {
      return any;
    } else {
      throw new Error(`invalid content structure '${any}' by regexp '${regexp}'`);
    }
  } else {
    throw new Error(`invalid regexp type '${regexp}'`);
  }
}

const $check = (value) => {
  if (value === undefined || value === null) {
    return false;
  } else if (typeof(value) === 'boolean') {
    return value;
  } else if (typeof(value) === 'function') {
    let bCheck = value();
    if (typeof(bCheck) === 'boolean') {
      return bCheck;
    } else {
      throw new Error(`invalid check value function result type '${bCheck}'`);
    }
  } else {
    throw new Error(`invalid check value type '${value}'`);
  }
}

const $isDef = (value) => {
  return value !== undefined && value !== null;
}

const $print = (...args) => {
  return () => args.map(elem => $put(elem)).join('');
};

const $printCheck = (regexp, ...args) => {
  return () => args.map(elem => $putCheck(regexp, elem)).join('');
};

const $if = (cond, content) => {
  return () => $check(cond) === true ? $put(content) : '';
};

const $ifelse = (cond, contentIf, contentElse) => {
  return () => $check(cond) === true ? $put(contentIf) : $put(contentElse);
};

const $attr = (key, value) => {
  return $print(
    ' ',
    key,
    $if(
      $isDef(value),
      $print(
        '="',
        value,
        '"'
      )
    )
  );
};

const $tag = (name, content, attr, simplify = true, onlyAttrNames = false) => {
  if (typeof(name) === 'string') {
    return $print(
      '<',
      name,
      ' ',
      $if(
        $isDef(attr),
        $ifelse(
          onlyAttrNames === true,
          attr,
          $printCheck(/^([^=]+\="[^"]*")*$/, attr)
        )
      ),
      $ifelse(
        $isDef(content),
        $print(
          '>',
          content,
          '</',
          name,
          '>'
        ),
        $ifelse(
          simplify === true,
          '/>',
          $print(
            '></',
            name,
            '>'
          )
        )
      )
    );
  } else {
    new Error(`invalid tag name type '${name}'`);
  }
}

module.exports = {
  $put,
  $putCheck,
  $check,
  $isDef,
  $if,
  $ifelse,
  $print,
  $printCheck,
  $attr,
  $tag,
 
  div      : ( content, attr ) => $tag('div',      content, attr, false),
  span     : ( content, attr ) => $tag('span',     content, attr, false),
  a        : ( content, attr ) => $tag('a',        content, attr),
  p        : ( content, attr ) => $tag('p',        content, attr),
  br       : (               ) => $tag('br',       null,    null),
  ul       : ( content, attr ) => $tag('ul',       content, attr),
  li       : ( content, attr ) => $tag('li',       content, attr),
  h1       : ( content, attr ) => $tag('h1',       content, attr),
  h2       : ( content, attr ) => $tag('h2',       content, attr),
  h3       : ( content, attr ) => $tag('h3',       content, attr),
  h4       : ( content, attr ) => $tag('h4',       content, attr),
  html     : ( content, attr ) => $tag('html',     content, attr),
  head     : ( content, attr ) => $tag('head',     content, attr),
  body     : ( content, attr ) => $tag('body',     content, attr),
  meta     : ( content, attr ) => $tag('meta',     content, attr),
  link     : ( content, attr ) => $tag('link',     content, attr),
  use      : ( content, attr ) => $tag('use',      content, attr),
  title    : ( content, attr ) => $tag('title',    content, attr),
  button   : ( content, attr ) => $tag('button',   content, attr),
  input    : ( content, attr ) => $tag('input',    content, attr),
  label    : ( content, attr ) => $tag('label',    content, attr),
  header   : ( content, attr ) => $tag('header',   content, attr, false),
  main     : ( content, attr ) => $tag('main',     content, attr, false),
  footer   : ( content, attr ) => $tag('footer',   content, attr, false),
  section  : ( content, attr ) => $tag('section',  content, attr, false),
  script   : ( content, attr ) => $tag('script',   content, attr, false),
  img      : ( content, attr ) => $tag('img',      content, attr),
  svg      : ( content, attr ) => $tag('svg',      content, attr),
  video    : ( content, attr ) => $tag('video',    content, attr, true, true),
  source   : ( content, attr ) => $tag('source',   content, attr),
  picture  : ( content, attr ) => $tag('picture',  content, attr),
  form     : ( content, attr ) => $tag('form',     content, attr, false),
  iframe   : ( content, attr ) => $tag('iframe',   content, attr, false),
  fieldset : ( content, attr ) => $tag('fieldset', content, attr),
  legend   : ( content, attr ) => $tag('legend',   content, attr),

  doctype: (...args) => $print('<!DOCTYPE html>', ...args),

  className : (value) => $attr('class',   value),
  type      : (value) => $attr('type',    value),
  src       : (value) => $attr('src',     value),
  alt       : (value) => $attr('alt',     value),
  href      : (value) => $attr('href',    value),
  charset   : (value) => $attr('charset', value),
  value     : (value) => $attr('value',   value),
  id        : (value) => $attr('id',      value),
};