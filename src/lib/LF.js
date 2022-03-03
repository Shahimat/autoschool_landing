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
  return $print(' ', key, '="', value, '"');
};

const $tag = (name, content, attr) => {
  if (typeof(name) === 'string') {
    return $print(
      '<',
      name,
      ' ',
      $if(
        $isDef(attr),
        $printCheck(/^([^=]+\="[^"]*")*$/, attr)
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
        '/>'
      )
    );
  } else {
    new Error(`invalid tag name type '${name}'`);
  }
}

const $for = (getArr, setIndex, render) => {
  if (typeof(getArr) !== 'function' || typeof(setIndex) !== 'function' || typeof(render) !== 'function') {
    return undefined;
  }
  return () => {
    let arr = getArr();
    let sRes = '';
    for (let i = 0; i < arr.length; i++) {
      setIndex(i);
      sRes += render();
    }
    return sRes;
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

  div    : ( content, attr ) => $tag('div',    content, attr),
  span   : ( content, attr ) => $tag('span',   content, attr),
  a      : ( content, attr ) => $tag('a',      content, attr),
  p      : ( content, attr ) => $tag('p',      content, attr),
  ul     : ( content, attr ) => $tag('ul',     content, attr),
  li     : ( content, attr ) => $tag('li',     content, attr),
  html   : ( content, attr ) => $tag('html',   content, attr),
  head   : ( content, attr ) => $tag('head',   content, attr),
  body   : ( content, attr ) => $tag('body',   content, attr),
  meta   : ( content, attr ) => $tag('meta',   content, attr),
  link   : ( content, attr ) => $tag('link',   content, attr),
  title  : ( content, attr ) => $tag('title',  content, attr),
  button : ( content, attr ) => $tag('button', content, attr),
  input  : ( content, attr ) => $tag('input',  content, attr),
  header : ( content, attr ) => $tag('header', content, attr),

  doctype: (...args) => $print('<!DOCTYPE html>', ...args),

  className : (value) => $attr('class', value),
  type      : (value) => $attr('type',  value),
};