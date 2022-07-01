// Функції
// Функція - це невеликий фрагмент коду з ім'ям, який можна багаторазово викликати, передаючи параметри і отримуючи результат. Функція дозволяє не писати один і той самий код декілька разів.

// Оголошення функції(function declaration)
// Для створення функції використовується ключове слово function. Ось синтаксис:

// function ім'яФункції(аргументи) {
//   // тіло функції
// }
// Наприклад, ось функція sayHello:

// function sayHello(personName) {
//     console.log(`Hello, ${personName}!`)
// }
// sayHello - ім'я функції, зазвичай починається з дієслова (дія, яку виконує функція)
// personName - аргумент(параметр) функція - це змінна, значення якої визначається при виклику функції.Аргументів може бути декілька, в такому разі їх пишуть через кому.Якщо аргументів немає, ми в дужках не пишемо нічого.
// Назви параметрів повинні дати зрозуміти, що в них зберігається.
// В фігурних дужках пишеться тіло функції - це команди, які функція виконує.
// Виклик фукнції
// Щоб запустити функцію, ми пишемо її ім'я і далі круглі дужки, куди ми через кому можемо записати значення для аргументів.

// sayHello('Misha'); // В консолі надрукується 'Hello, Misha!'
// sayHello('Roma'); // В консолі надрукується 'Hello, Roma!'
// Повернення значення із функції
// Щоб функція повернула значення, в її тілі ми пишемо ключове слово return і праворуч від нього пишемо потрібне значення.

// function getRectangleSquare(a, b) {
//     const square = a * b;

//     return square;
// }
// Результат функції підставляється в те місце, де функція була викликана.

// const square1 = getRectangleSquare(3, 2);
// // const square1 = 6;

// const square2 = getRectangleSquare(4, 5);
// // const square2 = 20;
// Можна навіть не записувати результат в змінну, а одразу використати

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(2, 2), sum(5, 7)); // надрукуються 4 та 12
// Якщо в функції нема return або праворуч від return немає значення, то результатом буде undefined.

// function f1() { }

// function f2() {
//     return;
// }

// console.log(f1(), f2()); // буде undefined undefined
// return завершує виконання функції, і подальші команди не виконуються.

// function sum(x, y) {
//     return x + y;

//     // цей рядок ніколи не буде викликаний
//     console.log(`Sum of ${x} and ${y} is ${x + y}`);
// }
// Функціональний вираз
// Ще один спосіб створення функції - присвоїти її в змінну.Таку функцію(на відміну від функції, створеної через оголошення) можна використовувати тільки після присвоєння.

//     printDifference(3, 2); // помилка!!
// printSum(3, 2); // все гаразд

// const printDifference = function (x, y) {
//     console.log(x - y);
// };

// function printSum(x, y) {
//     console.log(x + y);
// }

// printDifference(3, 2); // все гаразд
// printSum(3, 2); // все гаразд


