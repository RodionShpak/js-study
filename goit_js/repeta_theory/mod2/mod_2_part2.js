/*
* Функции
*   - Функциональные выражения
*   - Аргументы и параметры
*   - Возврат значения
*/

// функциональное выражение

// const add = function (x, y) {// параметры функции

//     // тело функции
//     console.log(x);
//     console.log(y);
//     // ..........
//     const result = x + y;
//     // console.log('x + y: ', result); // x + y: 5
//     console.log('Выполняется функция add');
//     return x + y;
// };

// // инструкция вызова функции
// const r1 = add(5, 3);
// console.log('r1: ', r1); // r1: 8

// const r2 = add(10, 15); // аргументы функции;
// console.log('r2: ', r2); // r2: 25

// const r3 = add(30, 50);
// console.log('r3: ', r3); // r3: 80

// //// // return
// const fn = function (value) {
//     console.log(1);
//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50';
//     }
//         return 'Больше чем 50';
// };
// console.log('Результат функции: ', fn(10)); // Результат функции:  Меньше чем 50

// console.log('Результат функции: ', fn(1000)); // Результат функции:  Больше чем 50

/*
*   - Стек вызовов
*   - Stack trace и поиск ошибок
*/

// const fnA = function () {
//     console.log('Выполняется функция А');
// };

// const fnB = function () {
//     console.log('Выполняется функция B');
// };

// const fnC = function () {
//     console.log('Выполняется функция C');
// };

// // console.log('Лог перед вызовом функции А');
// fnA();
// // console.log('Лог после вызова функции А');

// // console.log('Лог перед вызовом функции B');
// fnB();
// // console.log('Лог после вызова функции B');

// // console.log('Лог перед вызовом функции C');
// fnC();
// // console.log('Лог после вызова функции C');



// ------------------ Задача calculateTotalPrice(items) сумма чисел в массиве------------------ //
/*
* Напиши функцию calculateTotalPrice(items)
* которая принимает массив цен (чисел) и возвращает их сумму
*/

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total); // Total: 613

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// };

// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600



// ------------------ Задача logItems(items) перебор массива ------------------ //
/*
* Напиши функцию logItems(items) для перебора и логирования массива
*/

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);



// ------------------ Задача findLogin(allLogins, login) поиск логина------------------ //
/*
* напиши функцию findLogin(allLogins, login) для поиска логина
* Если логина нет, Вывести сообщение "Пользователь [логин] не найден."
* Если нашли логни, вывести сообщение "Пользователь [логин] найден."
*/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message); // Пользователь aj4xth3m4n найден.`

//***/ напиши функцию findLogin(allLogins, login) для поиска логина/***/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     let message = `Пользователь ${loginToFind} не найден.`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return message;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//***/ модифицируем функию /***/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//***/ модифицируем с помощью тернарника /***/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));



// ------------------ Задача findSmallesNumber(numbers) поиск маленького числа в массиве ------------------ //
/*
* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
* при условии что числа уникальные (не повторяются).
*/

// // const numbers = [51, 18, 13, 24, 7, 85, 19];
// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// };

// // console.log('smallestNumber: ', smallestNumber);

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4



// ------------------ Задача changeCase(string) замена регистра в строке ------------------ //

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (string) {
//     const letters = string.split('');
//     // console.log(letters);
//     // ['q', 'w', 'e', 'R', 'T', 'Y']
//     // ['m', 'A', 'n', 'G', 'o']
//     // ['A', 'j', 'A', 'x']

//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX



// ------------------ Задача slugify(string) получаем строку и возвращаем её же только с символом "-" ------------------ //
/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
// const normalizedString = string.toLowerCase();
// const words = normalizedString.split(' ');
// const slug = words.join('-');

// return slug;
// };

// const slugify = function (string) {
//     // const normalizedString = string.toLowerCase();
//     // const words = normalizedString.split(' ');
//     // const slug = words.join('-');

//     // return slug;

//     return string.toLowerCase().split(' ').join('-');
// };


// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));



// ------------------ Задача arguments и Array.from и ------------------ //
/*
 * Псевдомассив arguments и Array.from и ...
 */

//********* Metod 1 через Array.from *********//

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);

//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5,);
// fn(1, 2, 3, 4, 5, 6, 7);

//********* Metod 2 через ...(rest) *********//

// const fn = function (...args) {
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5,);
// fn(1, 2, 3, 4, 5, 6, 7);

//********* Metod 3 через  *********//

// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     // hello 1 2
//     // aloha 1 2
//     // hi 1 2

//     console.log(args);
//     // [3]
//     // [3, 4, 5]
//     // [3, 4, 5, 6, 7]
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5,);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);



// ------------------ Задача на ... rest ------------------ //
/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += args;
//     }
//     return total;

// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));



// ------------------ Задача на возврат нового массива с новыми значениями ------------------ //

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
//  */

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);

//             console.log(`${element} есть везде!`);
//         }
//     }

//     return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]