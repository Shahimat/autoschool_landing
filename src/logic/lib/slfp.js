import { wait } from "./slf";

let isStart = true;
const start = (nInterval = 400) => {
  return new Promise((res, rej) => {
    if (!isStart) {
      res();
    } else {
      setTimeout(() => {
        res();
      }, nInterval)
    }
  });
}

const byDataAttr = (name) => {
  return new Promise((res, rej) => {
    start().then(() => {
      return wait(() => document.querySelector(`[data-${name}]`));
    }).then(() => {
      res(document.querySelectorAll(`[data-${name}]`));
    }).catch(err => {
      rej(err);
    });
  });
}

const byName = (name, element = undefined) => {
  const elem = element? element: document;
  return new Promise((res, rej) => {
    start().then(() => {
      return wait(() => elem.querySelector(`[data-name=${name}]`));
    }).then(() => {
      const result = elem.querySelectorAll(`[data-${name}]`);
      res(result.length === 1? result[0]: result);
    }).catch(err => {
      rej(err);
    });
  });
}

const byClassSimple = (name, element = undefined) => {
  const elem = element? element: document;
  const res = elem.querySelectorAll(`.${name}`);
  return res && res.length === 1? res[0]: res;
}

const byClass = (name, element = undefined) => {
  const elem = element? element: document;
  return new Promise((res, rej) => {
    start().then(() => {
      return wait(() => elem.querySelector(`.${name}`));
    }).then(() => {
      res(byClassSimple(name, elem));
    }).catch(err => {
      rej(err);
    });
  });
}

const from = async (any, cb) => {
  if (any === undefined || any === null) {
    console.error(`from: variable is "${any}"`);
    return;
  } else if (Array.isArray(any)) {
    for (let elem of any) {
      from(elem, cb);
    }
  } else if (typeof(any) === 'function') {
    if (any.constructor.name === 'AsyncFunction') {
      let res = await any();
      from(res, cb);
    } else {
      from(any(), cb);
    }
  } else if (typeof(any) === 'object') {
    if (any.constructor) {
      if (any.constructor.name === 'Promise') {
        any.then(res => {
          from(res, cb);
        });
      } else if (any.constructor.name === 'NodeList') {
        for (let elem of any) {
          from(elem, cb);
        }
      } else {
        cb(any);
      }
    } else {
      cb(any);
    }
  } else {
    cb(any);
  }
}

export {
  start,
  byDataAttr,
  byName,
  byClass,
  byClassSimple,
  from,
}