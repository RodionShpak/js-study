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


// =============== Масивы
// const arr = [5, true, "stroke", 5.7, 0, -100];
// console.log(arr);   // [5, true, 'stroke', 5.7, 0, -100]


// const arr = [5, true, "stroke", 5.7, 0, -100];
// console.log(arr[5]); // -100


// const arr = [5, true, "stroke", 5.7, 0, -100];
// console.log(arr[0]);  // 5


// let arr = [5, true, "stroke", 5.7, 0, -100];
// arr[3] = "word";
// console.log(arr[3]);  //word


// const arr = [5, true, "stroke", 5.7, 0, -100];
// console.log(arr.length); //6 - длина масива


// let matrix = [
//     [4, 6, 8],
//     ["stroke", 5.7],
//     [0, -100],
// ];
// matrix[1][0] = 90;
// console.log(matrix);   //
//     [4, 6, 8],
//     [90, 5.7],
//     [0, -100];

// =============== Циклы
// ------------цикл for

// for (let i = 0; i <= 10; i++) {
//     console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// for (let i = 100; i > 5; i /= 2) {
//     console.log(i); // 100, 50, 25, 12.5, 6.25
// }

// for (let i = 100; i > 5; i /= 2) {
//     console.log(i); // 100, 50, 25, 12.5, 6.25
// }

// ------------цикл while

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


// let j = 1000;
// while (j > 100) {
//     console.log(j);
//     j -= 100;
// }  // 1000, 900, 800, 700, 600, 500, 400, 300, 200

// ------------цикл do while

// let x = 100;
// do {
//     console.log(x);
// } while (x < 50);  //100

// let x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x < 10);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


// for (let i = 10; i < 20; i += 2) {
//     console.log(i);  // 10, 12, 14, 16, 18
// }


// for (let i = 10; i <= 20; i += 2) {
//     console.log(i);  // 10, 12, 14, 16, 18, 20
// }

// ===============оператор break (выходит из цикла на опред. значении)

// for (let i = 10; i <= 20; i += 2) {
//     if (i > 15)
//         break;
//     console.log(i);  // 10, 12, 14
// }


// ===============оператор continue (пропускает итерацию одну)

// for (let i = 10; i <= 20; i++) {
//     if (i % 2 == 10)
//         continue;
//     console.log(i);  // 11, 13, 15, 17, 19
// }


// for (let i = 10; i <= 20; i++) {
//     if (i % 2 == 10)
//         continue;
//     console.log(i);  // 13, 15, 17, 19
// }


// Перебираем весь масив и выводим

// let arr = [5, 7, 3, 8, 9, "stroke"];
// for (let i = 0; i < arr.length; i++) {
//     console.log("Элемент " + (i + 1) + ":" + arr[i]);
// }  // Элемент 1:5, 2:7, 3:3, 4:8, 5:9, 6:stoke

// let arr = [5, 7, 3, 8, 9, 91];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//     console.log("Элемент " + (i + 1) + ":" + arr[i]);
// }  // Элемент 1:10, 2:14, 3:6, 4:16, 5:18, 6:182



// ===============метод alert (выводит вспл. окно)
// alert("Hello world!"); //Hello world! -> OK

// ===============метод confirm (выводит вспл. окно с двумя кнопками)
// confirm("Вы ещё здесь?"); // Вы ещё здесь? OK/Отмена

// let question = confirm("Вы ещё здесь?");
// console.log(question); // ОК- > true, Отмена -> false

// let question = confirm("Вы ещё здесь?");
// if (question) {
//     alert("Вы молодец!"); //ОК- > Вы молодец, Отмена -> ничего не происходит
// }


// ===============метод prompt (выводит вспл. окно для пользователя с графой)

// const question = prompt("Скажите сколько вам лет?");
// console.log(question); //ОК- > выводит то значение кот. вписал пользов., Отмена -> выводит значение null




// =============== значение null (пустое место)
// const num1 = null;

// let person = null;
// if (confirm("Вы точно уверены?")) {
//     person = prompt("Введите Ваше имя!");
//     alert("Привет, " + person);
// } else {
//     alert("Вы нажали на «Отмена»!");
// }   // //ОК- > выводит поле для ввода, далее вводим имя, Отмена -> выводит сообщение Вы нажали на «Отмена»!


//     alert("Вы нажали на «Отмена»!");
// }   // //ОК- > выводит поле для ввода, далее вводим имя, Отмена -> выводит сообщение Вы нажали на «Отмена»!