/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */



//  * метод concat
// const numbers = [1, 2, 3].concat00000([4, 5, 6], [7, 8, 9])
// метод concat - вызывается на массиве и набивает
// в уже существующий массив новые массивы в один

// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



//  * Операция spread (распыление ...)
// const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9], 9000,];
// // операция spread (распыление) ставим в любом месте
// // берёт коллекцию и распыляет на отдельные элементы

// console.log(numbers); // [1000, 1, 2, 3, 5000, 4, 5, 6, 7000, 7, 8, 9, 9000]



// /*
//  * Поиск самой маленькой или большой температуры (числа)
//  */

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6)); // ищет не в массиве, а в том что вызывается // 17
// console.log(Math.max(...temps)); // ищет в самом массиве // 29

// console.log(Math.min(1, 4, 17, 5, 6)); // ищет не в массиве, а в том что вызывается // 1
// console.log(Math.min(...temps)); // ищет в самом массиве // 12

// операция распыление не деструктивная она создает копию массива
// const a = [1, 2, 3];
// const b = [...a];

// console.log(a);
// console.log(b);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a]; // распаковываем элементы а в массив b

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); //
// console.log(a === b); // массивы не равны

// // массивы не равны но нулевые и первые и вторые элементы
// // между собой равны при распылении сложных типов кладется ссылка на оригинальный обьект

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);



// /*
//  * Сшиваем несколько массивов в один через concat() и spread
//  */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps); // [1, 2, 3, 4, 5, 6, 7, 8, 9] - распыливаем массив



// /*
//  * Распыление объектов
//  * - Object.prototype.assign() и spread
//  */

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({ name: 'Mango' }, a, b);

// const c = {
//     name: 'Mango',
//     ...a,
//     ...b,
// };

// console.log(c);

// const defaultSettings = {
//     theme: 'light',
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// };

// console.log(finalSettings);



// /*
//  * Сшиваем несколько массивов в один через concat() и spread
//  */