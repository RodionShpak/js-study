/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */


// const playlist = {  // {} - литерал обьекта
//     name: [1, 2, 3],  // name - ключ // [] - свойства (значение) обьекта
//     b: 5,   // b: - ключ // 5 - свойство
//     c: 10  // с: - ключ // 10 - свойство
// };

///************* Как отличить объект от области видимости **************///
// const x = {};

// const fn = function (myObject) {
//     // myObject = {a: 1, b: 2}
//     console.log(myObject);
// };

// fn({ a: 1, b: 2 });

///************* Как отличить объект от области видимости **************///

// const rtfm = function () {
//     return { a: 5 };
// };

// console.log(rtfm());

/* Доступ к свойству
//     * - obj.key
//     * - obj['key']
//     * - Отсутствующие свойства
*/

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,

// playlist.qwe = 5; // добавляем новое свойсвто в уже существующий 
// массив если такое свойство уже сть оно перезаписывается


//****** ключ свойства всегда строка ******//

// console.log(playlist);
// console.log(playlist.name); // получаем доступ через ключ к значению
// console.log(playlist.tracks);  // ['трек-1', 'трек-2', 'трек-3']
// console.log(playlist.trackCount);  // 3

////****** имя свойства хранится в переменной ******////

// const propertyName = 'tracks';

// console.log(playlist.propertyName);  // undefined

//****** как достучаться до свойства ******//

// console.log(playlist.rating);  // 5
// console.log(playlist['rating']);  // 5

// console.log(playlist.propertyName); // undefined
// console.log(playlist[propertyName]); // ['трек-1', 'трек-2', 'трек-3']

// /*
//  * Короткая запись свойств
//  */

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//     // username: username,
//     username,  // запись покороче если имя ключа совпадает с именем переменной
//     // email: email,
//     email,  // запись покороче если имя ключа совпадает с именем переменной
// };

// console.log(signupData);

// /*
//  * Вычисляемые свойства
//  */

// <input name="color" value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     // [inputName]: 5  // подставляем значение 5 в имя переменной
//     [inputName]: inputValue,  // подставляем значение inputValue в имя переменной
// };

// console.log(colorPickerData); // color: 5
// console.log(colorPickerData); // color: tomato

// /*
//  * Ссылочный тип {} === {}
//  */

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a);

a.c = 100;

// b.c = 100;

console.log(a); // { x: 1, y: 2, c: 100 }
console.log(b); // { x: 1, y: 2, c: 100 }







// /*
//  * Массивы и функции это объекты
//  */

// // const a = [1, 2, 3];

// // a.hello = ':)';

// // console.log(a);

// // const fn = function () {
// //   console.log('hello');
// // };

// // fn.hello = ';)';

// // console.dir(fn.hello);



// ------------------  ------------------ //
