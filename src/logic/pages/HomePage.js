import { byClass, byClassSimple, from } from '../lib/slfp';

const calculatorTable = [
  {
    key0: '0',
    key1: '0',
    value0: '9',
    value1: '1,5',
    value2: '20',
  },
  {
    key0: '0',
    key1: '1',
    value0: '9',
    value1: '1,5',
    value2: '20',
  },
  {
    key0: '1',
    key1: '0',
    value0: '28',
    value1: '3',
    value2: '40',
  },
  {
    key0: '1',
    key1: '1',
    value0: '27',
    value1: '3',
    value2: '45',
  },
  {
    key0: '2',
    key1: '0',
    value0: '19',
    value1: '1,5',
    value2: '38',
  },
  {
    key0: '2',
    key1: '1',
    value0: '19',
    value1: '1,5',
    value2: '38',
  },
  {
    key0: '3',
    key1: '0',
    value0: '20',
    value1: '2',
    value2: '38',
  },
  {
    key0: '3',
    key1: '1',
    value0: '20',
    value1: '2',
    value2: '38',
  },
];

let choise0 = -1;
let choise1 = -1;

export default function () {
  from(byClass('section_category'), (section) => {
    const btnLeft = byClassSimple(
      'section_category_nav_arrow_button--left',
      section,
    );
    const btnRight = byClassSimple(
      'section_category_nav_arrow_button--right',
      section,
    );

    const sliders = [];
    from(byClass('slider_base'), (slider) => {
      sliders.push(slider);
    }).then(() => {
      btnLeft.addEventListener('click', () => {
        const event = new CustomEvent('slider_shift', {
          detail: { direction: 'right' },
        });
        sliders.forEach((slider) => slider.dispatchEvent(event));
      });
      btnRight.addEventListener('click', () => {
        const event = new CustomEvent('slider_shift', {
          detail: { direction: 'left' },
        });
        sliders.forEach((slider) => slider.dispatchEvent(event));
      });
    });
  });

  from(byClass('section_calculator'), (section) => {
    const selects = [];
    const nums = [];
    let block = true;
    let select0 = undefined;
    let select1 = undefined;
    let num0 = undefined;
    let num1 = undefined;
    let num2 = undefined;
    from(byClass('select_input', section), (select) => {
      selects.push(select);
    })
      .then(() => {
        return from(byClass('info_box_description--num', section), (num) => {
          nums.push(num);
        });
      })
      .then(() => {
        if (selects.length === 2 && nums.length === 3) {
          select0 = selects[0];
          select1 = selects[1];
          num0 = nums[0];
          num1 = nums[1];
          num2 = nums[2];
          block = false;
        }
      });
    setInterval(() => {
      if (!block) {
        let newchoise0 = select0.getAttribute('data-key');
        let newchoise1 = select1.getAttribute('data-key');
        if (newchoise0 !== choise0 || newchoise1 !== choise1) {
          choise0 = newchoise0;
          choise1 = newchoise1;
          let result = calculatorTable.find(
            (item) => item.key0 === choise0 && item.key1 === choise1,
          );
          if (result) {
            num0.innerHTML = result.value0;
            num1.innerHTML = result.value1;
            num2.innerHTML = result.value2;
          }
        }
      }
    }, 100);
  });
}
