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

const fnA = function () {
    console.log('Выполняется функция А');
};

const fnB = function () {
    console.log('Выполняется функция B');
};

const fnC = function () {
    console.log('Выполняется функция C');
};

// console.log('Лог перед вызовом функции А');
fnA();
// console.log('Лог после вызова функции А');

// console.log('Лог перед вызовом функции B');
fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
fnC();
// console.log('Лог после вызова функции C');