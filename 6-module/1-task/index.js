/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');

    let tbodyTemp = '';

    for (let objRow of rows) {
      tbodyTemp += `<tr><td>${objRow.name}</td><td>${objRow.age}</td><td>${objRow.salary}</td><td>${objRow.city}</td><td><button>X</button></td></tr>`;
    }

    this.elem.insertAdjacentHTML('afterbegin', `<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>${tbodyTemp}</tbody>`);

    this.elem.onclick = function(event) {
      let target = event.target;

      if (target.tagName === 'BUTTON') {
        target.closest('tr').remove();
      }
    };
  }
}
