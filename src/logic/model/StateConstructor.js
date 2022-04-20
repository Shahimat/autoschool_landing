const copyJSON = (any) => {
  const copyJSONrec = (any) => {
    if (Array.isArray(any)) {
      let res = [];
      for (let item of any) {
        res.push(copyJSONrec(item));
      }
      return res;
    }
    if (typeof(any) === 'object') {
      let res = {};
      for (let key in any) {
        res[key] = copyJSONrec(any[key]);
      }
      return res;
    }
    return any;
  };
  return copyJSONrec(any);
};

const State = function (anyDefault) {
  const oState = typeof(anyDefault) === 'object'? copyJSON(anyDefault) : {};
  let instance;
  let bindings = {};
  let elementsByFields = {};
  for (let key in anyDefault) {
    elementsByFields[key] = [];
  }

  const has = (field) => {
    if (typeof(field) !== 'string') {
      throw new Error(`field "${field}" must be a string!`);
    }
    return elementsByFields[field] !== undefined;
  }

  const isSimple = (anyValue) => {
    return typeof(anyValue) === 'boolean' || typeof(anyValue) === 'number' || 
      typeof(anyValue) === 'string' || typeof(anyValue) === 'symbol' || 
      typeof(anyValue) === 'bigint';
  }

  const getter = (field) => {
    if (typeof(field) !== 'string') {
      return copyJSON(oState);
    }
    if (has(field)) {
      return copyJSON( oState[field] );
    } else {
      return null;
    }
  };

  const setter = (field, anyValue) => {
    if (typeof(field) !== 'string') {
      throw new Error(`field "${field}" must be a string!`);
    }
    if (has(field) && typeof(oState[field]) === typeof(anyValue)) {
      oState[field] = copyJSON( anyValue );
      if ( isSimple(anyValue) ) {
        for (let element of elementsByFields[field]) {
          element.setAttribute(`data-state-${field}`, `${anyValue}`);
        }
      }
      for (let bindingName in bindings) {
        let binding = bindings[bindingName];
        if (binding.fields.includes(field)) {
          for (let element of elementsByFields[field]) {
            binding.callback(
              element,
              field,
              copyJSON( anyValue ),
              instance
            );
          }
        }
      }
    } else {
      console.error(`model.setter error: field "${field}" has "${oState[field]}" but value "${anyValue}"`);
    }
  }

  this.get = function (field) {
    return getter(field);
  }
  this.set = function (field, anyValue) {
    setter(field, anyValue);
  };
  this.addElement = function (field, element) {
    if (has(field)) {
      elementsByFields[field].push(element);
      let anyValue = this.get(field);
      if ( isSimple(anyValue) ) {
        element.setAttribute(`data-state-${field}`, `${anyValue}`);
      }
    } else {
      console.error(`Field "${field}" not found`);
    }
  };
  this.addCallback = function (name, callback) {
    if (bindings[name] === undefined) {
      bindings[name] = {
        callback,
        fields: [],
      }
    } else {
      console.error(`Callback by name "${name}" already exists`);
    }
  };
  this.addBinding = function (name, field) {
    if (!has(field)) {
      console.error(`Field "${field}" not found`);
      return;
    } 
    if (!bindings[name]) {
      console.error(`Callback "${name}" not found`);
      return;
    }
    if (bindings[name].fields.includes(field)) {
      console.error(`Binding "${field}" for callback "${name}" already exists`);
      return;
    }
    bindings[name].fields.push(field);
  };
  this.activate = function (inputInstance) {
    instance = inputInstance;
  }
};

export default State;