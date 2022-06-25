// ===============Вывод в консоль


// console.log("JS говорит привет!");
// document.write("JS говорит привет!");
// console.info("JS говорит привет!");
// console.error("JS говорит привет!");
// console.warn("JS говорит привет!");


// ===============Переменные
// let num = 30;
// console.log(num); // 30
// console.log("Переменная: " + num); // Переменная: 30
// console.log("Переменная: " + num + "."); // Переменная: 30.
// num = 10;
// console.log("Переменная: " + num + "."); // Переменная: 10.

// ===============string or number
// const num_1 = 7;
// const num2 = "7";
// console.log(num_1 + num2); // 77
// console.log(7 + "7"); // 77

// ===============Математ. действия
// const num_1 = 22;
// const num_2 = 33;
// console.log("Вычитание " + num_1 - num_2); // NaN
// const result = num_1 - num_2;
// console.log("Вычитание: " + result); // Вычитание: -11
// const result = num_1 - num_2;
// console.log("Результат вычитания: " + (num_1 - num_2)); // Результат вычитания: -11

// console.log("Результат сложения: " + (num_1 + num_2)); // Результат сложения: 55

// console.log("Результат умножения: " + (num_1 * num_2)); // Результат умножения: 726

// console.log("Результат деления: " + (num_1 / num_2)); // Результат деления: 0.6666666666666666

// console.log("Остаток от деления: " + (num_1 % num_2)); // Остаток от деления: 22

// let num_3 = 44;
// num_3 = num_3 + 11;
// console.log("Результат сложения: " + num_3); // Результат сложения: 55

// let num_3 = 44;
// num_3 += 11;
// console.log("Результат сложения: " + num_3); // Результат сложения: 55

// let num_3 = 44;
// // num_3 += 1;
// // num_3++;
// console.log("Результат сложения: " + num_3); // Результат сложения: 45

// const str_1 = "44";
// const str_2 = "11";
// console.log("Результат сложения: " + (str_1 + str_2)); // Результат сложения: 4411'

// const str_1 = 44;
// const str_2 = "11";
// console.log("Результат сложения: " + (str_1 + str_2)); // Результат сложения: 4411

// const str_1 = Number("44");
// const str_2 = Number("11");
// console.log("Результат сложения: " + (str_1 + str_2)); // Результат сложения: 55

// const str_1 = "44";
// const str_2 = "11";
// console.log("Результат сложения: " + (str_1 + str_2)); // Результат сложения: 4411



// ===============Метод Math
// Ищем число ПИ
// console.log("Math :" + Math.PI); // Math :3.141592653589793
// ищем найменшее число
// console.log("Math :" + Math.min(37, 12, 4, 8, 59, 6)); // Math : 4
// ищем самое большое число
// console.log("Math :" + Math.max(37, 12, 4, 8, 59, 6)); // Math : 59


// ===============Условная конструкция

// // if - если 5=5 код исполн. в фигурн. скобках {}
// const num = 12;
// if (5 === 5) {
//     console.log("OK");
// }
// OK


// const num = 12;
// // if - если num > 5 код исполн. в фигурн. скобках {}
// if (num > 5) {
//     console.log("OK");
// }
// // OK


// // if - если num > 5 код исполн. в фигурн. скобках {}
// const num = 12;
// if (num > 5) {
//     console.log("OK");
// }
// // OK


// // if - если num != (не равно) 5 код исполн. в фигурн. скобках {}
// const num = 12;
// if (num != 5) {
//     console.log("OK");
// }
//  OK


// // if...else - если num != (не равно) 5 код исполн. в фигурн. скобках {} else сраб. тогда когда значение if не верно
// const num = 12;
// if (num != 12) {
//     console.log("OK");
//     console.log("OK!");
// } else {
//     console.log("Error!");
// }
// OK


// // else...if - если num != (не равно) 5 код исполн. в фигурн. скобках {} else сраб. тогда когда значение if не верно
// const num = 15;
// if (num == 5) {
//     console.log("OK");
// } else if (num < 10) {
//     console.log("OK!");
// } else if (num == 7) {
//     console.log("7!");
// } else if (num >= 15) {
//     console.log(">= 15!");
// }
// //>= 15!"


// ===============оператор или ||
// const num = 15;
// const isHasHouse = true;
// if (num == 5 || isHasHouse == true) {
//     console.log("OK");
// } else if (num < 10) {
//     console.log("OK!");
// } else if (num == 7) {
//     console.log("7!");
// } else if (num >= 15) {
//     console.log(">= 15!");
// }
// OK


// ===============оператор и &&
// const num = 15;
// const isHasHouse = true;
// if (num == 5 && isHasHouse == true) {
//     console.log("OK");
// } else if (num < 10) {
//     console.log("OK!");
// } else if (num == 7) {
//     console.log("7!");
// } else if (num > 15) {
//     console.log("> 15!");
// } else {
//     console.log("Else!");
// }
// Else!


// ===============оператор switch...case проверяет на разные значения
// const stroka = "word";
// switch (stroka) {
//     case "4":
//         console.log("Переменная со значением 4");
//         break;
//     case "45":
//         console.log("Переменная со значением 45");
//         break;
//     case "word":
//         console.log("Переменная со значением word");
//         break;
// }
// Переменная со значением word


// ===============оператор default выводит значение после того как не сработали switch...case
// const stroka = "word23";
// switch (stroka) {
//     case "4":
//         console.log("Переменная со значением 4");
//         break;
//     case "45":
//         console.log("Переменная со значением 45");
//         break;
//     case "word":
//         console.log("Переменная со значением word");
//         break;
//     default:
//         console.log("Default");
// }
// Default
