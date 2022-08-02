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



// ------------------ Задача ------------------ //
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



// ------------------ Задача ------------------ //
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



// ------------------ Задача ------------------ //
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



// ------------------ Задача ------------------ //
/*
* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
* при условии что числа уникальные (не повторяются).
*/

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log('smallestNumber: ', smallestNumber);



console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

