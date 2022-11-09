/**
 * ===== STANDART LIBRARY FUNCTIONS =====
 */
const fs = require('fs');
const sass = require('node-sass');

const slf = {
  /**
   * Производит высокоскоростное копирование объекта наподобие Object.assign, только с дополнительными
   * проверками на входной параметр, который может быть как объектом, так и массивом или простым свойством
   * @param {any} any JSON
   * @returns {object} JSON
   */
  copyJSON: function (any) {
    const copyJSONrec = (any) => {
      if (Array.isArray(any)) {
        let res = [];
        for (let item of any) {
          res.push(copyJSONrec(item));
        }
        return res;
      }
      if (typeof any === 'object') {
        let res = {};
        for (let key in any) {
          res[key] = copyJSONrec(any[key]);
        }
        return res;
      }
      return any;
    };
    return copyJSONrec(any);
  },

  /**
   * Функция генерации guid
   * @returns guid
   */
  guid: () =>
    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, () =>
      Math.trunc(Math.random() * 16).toString(16),
    ),

  State: (anyDefault) => {
    let oContext = slf.copyJSON(anyDefault);
    return {
      get: () => slf.copyJSON(oContext),
      set: (any) => {
        oContext = slf.copyJSON(any);
      },
    };
  },

  onLoadFile: function (sPath) {
    return new Promise((res, rej) => {
      fs.readFile(sPath, 'utf8', (err, data) => {
        if (err) {
          rej(err);
          return;
        }
        res(data);
      });
    });
  },

  onSaveFile: function (sPath, sData) {
    return new Promise((res, rej) => {
      fs.writeFile(sPath, sData, 'utf8', (err) => {
        if (err) {
          rej(err);
          return;
        }
        res();
      });
    });
  },

  onLoadSCSS: (sPath) => {
    return new Promise((res, rej) => {
      sass.render(
        {
          file: sPath,
          outputStyle: 'compressed',
        },
        (error, result) => {
          if (error) {
            rej(error);
            return;
          }
          res(result.css.toString());
        },
      );
    });
  },
};

module.exports = slf;
