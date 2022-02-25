const tag = (name, content, attr) => {
  if (typeof(name) === 'string') {
    if (content === undefined || content === null) {
      if (attr === undefined || attr === null) {
        return () => `<${name}/>`;
      } else if (typeof(attr) === 'string') {
        return () => `<${name} ${attr}/>`;
      } else if (typeof(attr) === 'function') {
        return () => `<${name} ${attr()}/>`;
      }
    } else if (typeof(content) === 'string') {
      if (attr === undefined || attr === null) {
        return () => `<${name}>${content}</${name}>`;
      } else if (typeof(attr) === 'string') {
        return () => `<${name} ${attr}>${content}</${name}>`;
      } else if (typeof(attr) === 'function') {
        return () => `<${name} ${attr()}>${content}</${name}>`;
      }
    } else if (typeof(content) === 'function') {
      if (attr === undefined || attr === null) {
        return () => `<${name}>${content()}</${name}>`;
      } else if (typeof(attr) === 'string') {
        return () => `<${name} ${attr}>${content()}</${name}>`;
      } else if (typeof(attr) === 'function') {
        return () => `<${name} ${attr()}>${content()}</${name}>`;
      }
    }
  }
  return undefined;
};

const attr = (key, value) => {
  if (typeof(key) === 'string') {
    if (value === undefined || value === null) {
      return () => `${key}`;
    } else if (typeof(value) === 'string') {
      return () => `${key}="${value}"`;
    } else if (typeof(value) === 'function') {
      return () => `${key}="${value()}"`;
    }
  }
  return undefined;
};

const $many = (...args) => {
  for (let render of args) {
    if (typeof(render) !== 'function') {
      return undefined;
    }
  }
  return () => {
    let sRes = '';
    for (let render of args) {
      sRes += render();
    }
    return sRes;
  };
};

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

const $state = (defdata = undefined) => {
  let getter = function (data = undefined) {
    if (this.data === undefined || data !== undefined) {
      if (typeof(data) === 'object') {
        this.data = {};
        Object.assign(this.data, data);
      } else {
        console.error('data not found');
      }
      return;
    }
    return this.data;
  }.bind({ data: undefined });
  let inserter = (path) => {
    if (typeof(path) === 'string') {
      return () => getter()[path];
    }
    return undefined;
  }
  if (typeof(defdata) === 'object') {
    getter(defdata);
  }
  return [
    getter,
    inserter,
  ];
}

module.exports = {
  tag,
  attr,

  $many,
  $for,
  $state,

  div  : ( content, attr ) => tag('div',  content, attr),
  span : ( content, attr ) => tag('span', content, attr),
  a    : ( content, attr ) => tag('a',    content, attr),
  p    : ( content, attr ) => tag('p',    content, attr),
  ul   : ( content, attr ) => tag('ul',   content, attr),
  li   : ( content, attr ) => tag('li',   content, attr),

  className : (value) => attr('class', value),
  type      : (value) => attr('type',  value),
};