// ###########################################################################################################################################################

// // ==========================================Task-1

// Як перевірити, що змінна 'status' дорівнює рядку 'user' ?

// if (status === user) {code... }

// if (status = 'user') {code... }

// if (status = user) {code... }

// if (status === 'user') {code... }                    V

// Пояснення правильного варіанту:
// Правильна відповідь: if (status === 'user') {code ... }, оскільки:

// Оператор '===' використовується для перевірки того, що значення змінної 'status' дорівнює 'user';
// 'user' пишеться в лапках, тому що це рядок.

// ⛔ Інші варіанти неправильні, оскільки:

// Оператор '=' використовується для присвоєння значення змінній.
//     Наприклад:
// let status = 'admin'; // змінна 'status' тепер зберігає рядок 'admin'
// let status = user; // змінна 'status' тепер зберігає значення змінної 'user'

// Умова if (status === user) без лапок означає, що змінні 'status' та 'user' повинні мати однакові значення.
//     Наприклад:
// let status = 'online';
// let user = 'online';
// if (status === user) вірно, тому що 'online' === 'online'

// ###########################################################################################################################################################

// // ==========================================Task-2

// Що буде результатом виконання цього коду ?
//     function getPrice(amount) {
//         if (amount < 20) {
//             return amount * 10;
//         } else if (amount < 50) {
//             return amount * 8;
//         }
//         return amount * 5;
//     }

// getPrice(50);

// 250 буде повернено               V

// undefined буде повернено

// 400 буде повернено

// 50 буде повернено

// Пояснення правильного варіанту:
// 250 буде повернено, оскільки:
// 1. Функція викликається з параметром amount = 50;
// 2. amount = 50, тому, коли перевіряється перша умова amount < 20, вона невірна;
// 3. Оскільки перша if (умова) невірна, код у фігурних дужках { return amount * 10 } НЕ виконується;
// 4. Переходимо до наступної умови(else if (amount < 50));
// 5. amount = 50, тому, коли перевіряється друга умова amount < 50, вона невірна;
// 6. Оскільки друга if (умова) невірна, код у фігурних дужках { return amount * 8 } НЕ виконується;
// 7. Ми виходимо з конструкції if-else та переходимо до заключного return -оператора;
// 8. amount * 5 = 50 * 5 = 250;
// 9. Функція повертає 250.

// Після спрацювання одного return -оператора функція припиняє виконання.

// ###########################################################################################################################################################

// // ==========================================Task-3

// Що буде результатом виконання цього коду ?
//     function getSize(volume) {
//         if (volume < 250) {
//             return 'small';
//         } else if (volume < 350) {
//             return 'medium';
//         }
//     }

// getSize(400);

// 300 буде повернено

// 'small' буде повернено

// 'medium' буде повернено

// undefined буде повернено                 V

// Пояснення правильного варіанту:
// undefined буде повернено, оскільки:
// 1. Функція викликається з параметром volume = 400;
// 2. volume = 400, тому коли перевіряється перша умова volume < 250, вона невірна;
// 3. Оскільки перша if (умова) невірна, код у фігурних дужках { return 'small' } НЕ виконується;
// 4. Переходимо до наступної умови(else if (volume < 350));
// 5. volume = 400, тому коли перевіряється друга умова volume < 350, вона невірна;
// 6. Оскільки друга if (умова) невірна, код у фігурних дужках { return 'medium' } НЕ виконується;
// 7. У функції більше немає умов та коду, тому вона зупиняє виконання;
// 8. Функція повертає undefined.

// ###########################################################################################################################################################

// // ==========================================Task-4

// Як перевірити, що змінна 'amount' більша за 75 ?

// if amount > 75, code...

// if (amount > 75) {code... }                  V

// if amount > 75 {code... }

// if (amount > 75), code...

// Пояснення правильного варіанту:
// Правильна відповідь: if (amount > 75) {code ... }, оскільки:

// Умову слід помістити у круглі дужки:
// Наприклад, (price < 90);

// Код, який буде виконуватися, якщо умова вірна, слід помістити у фігурні дужки:
// Наприклад:
// if (value === true) {
//     console.log('True!');
// }

// Шаблон для if-конструкції:
//     if (умова) {
//    код...
//     }

// Якщо шаблону не дотримано, програма видасть помилку.

// ###########################################################################################################################################################

// // ==========================================Task-5

// Що буде результатом виконання цього коду ?
// const score = 59;

// if (score >= 60) {
//     console.log('Well done!');
// }

// 'Well done!' буде надруковано в консолі

// Нічого                                                   V

// 59 буде надруковано в консолі

// Пояснення правильного варіанту:
// Нічого не відбудеться, оскільки:
// 1. score = 59, тому, коли перевіряється умова score >= 60, вона невірна;
// 2. Оскільки if (умова) невірна, код у фігурних дужках { console.log('Well done!') } НЕ виконується;
// 3. Нічого не відбувається.

// ###########################################################################################################################################################

// // ==========================================Task-6

// function getPrice(amount) {
//     if (amount < 20) {
//         return amount * 10;
//     } else if (amount < 50) {
//         return amount * 8;
//     }

//     return amount * 5;
// }

// getPrice(10);

// undefined буде повернено

// 100 буде повернено                                   V

// 10 буде повернено

// 50 буде повернено

// Пояснення правильного варіанту:
// 100 буде повернено, оскільки:
// 1. Функція викликається з параметром amount = 10;
// 2. amount = 10, тому, коли перевіряється перша умова amount < 20, вона вірна;
// 3. Оскільки перша if (умова) вірна, виконується код у фігурних дужках { return amount * 10 };
// 4. amount * 10 = 10 * 10 = 100;
// 5. Функція повертає 100.

// Після спрацювання першого return -оператора функція припиняє виконання та інші умови не перевіряються.

// ###########################################################################################################################################################

// // ==========================================Task-7

// Що буде результатом виконання цього коду ?
//     function getSize(volume) {
//         if (volume < 250) {
//             return 'small';
//         } else if (volume < 350) {
//             return 'medium';
//         }
//     }

// getSize(300);

// 300 буде повернено

// undefined буде повернено

// 'small' буде повернено

// 'medium' буде повернено                          V

// Пояснення правильного варіанту:
// 'medium' буде повернено, тому що:
// 1. Функція викликається з параметром volume = 300;
// 2. volume = 300, тому, коли перевіряється перша умова volume < 250, вона невірна.
// 3. Оскільки перша if (умова) невірна, код у фігурних дужках { return 'small' } НЕ виконується;
// 4. Переходимо до наступної умови(else if (volume < 350));
// 5. volume = 300, тому коли перевіряється друга умова volume < 350, вона вірна;
// 6. Оскільки друга if (умова) вірна, виконується код у фігурних дужках { return 'medium' };
// 7. Функція повертає 'medium'.

// ###########################################################################################################################################################

// // ==========================================Task-8

// Що буде результатом виконання цього коду ?
// const score = 70;

// if (score >= 60) {
//     console.log('Well done!');
// }

// 'Well done!' буде надруковано в консолі                  V

// 70 буде надруковано в консолі

// Нічого

// Пояснення правильного варіанту:
// 'Well done!' буде надруковано в консолі, тому що:
// 1. score = 70, тому, коли перевіряється умова score >= 60, вона вірна;
// 2. Оскільки if (умова) вірна, код у фігурних дужках { console.log('Well done!') } виконується;
// 3. 'Well done!' друкується у консолі.

// ###########################################################################################################################################################

// // ==========================================Task-9

// Що буде результатом виконання цього коду ?
// const score = 55;

// if (score >= 60) {
//     console.log('Well done!');
// } else {
//     console.log('Try again!');
// }

// 55 буде надруковано в консолі

// 'Well done!' буде надруковано в консолі

// Нічого

// 'Try again!' буде надруковано в консолі                  V

// Пояснення правильного варіанту:
// 'Try again!' буде надруковано в консолі, оскільки:
// 1. score = 55, тому, коли перевіряється умова score >= 60, вона невірна;
// 2. Оскільки if (умова) невірна, код у фігурних дужках { console.log('Well done!') } НЕ виконується;
// 3. Є else -вираз, який буде виконано;
// 4. 'Try again!' надрукується у консолі.

// ###########################################################################################################################################################

// // ==========================================Task-10

// Як перевірити, що змінна 'sum' знаходиться в діапазоні від 15 до 35 включно ?

// if (35 >= sum >= 15) {code... }

// if (15 <= sum <= 35) {code... }

// if (sum >= 15 && sum <= 35) {code... }                   V

// if (sum >= 15 || sum <= 35) {code... }

// Пояснення правильного варіанту:
// Правильна відповідь: if (sum >= 15 && sum <= 35) {code ... }, тому що:

// Оператор '&&' використовується для перевірки того, що обидві умови вірні.
// Це означає, що ціна більша або дорівнює 15 ТА менша або дорівнює 35.

// ⛔ Інші варіанти неправильні, тому що:

// Оператор '||' використовується для перевірки того, що хоча б одна умова вірна.
//     Наприклад, if (sum >= 15 || sum <= 35) буде вірно, якщо sum = 1(бо sum <= 35) АБО якщо sum = 40(бо sum >= 15).

// Синтаксис if (15 <= sum <= 35) неправильний, тому що Javascript бачить тільки першу умову:
// 15 <= sum
// І якщо sum = 36, то вся умова також буде вірною, тому що 15 <= sum.
// Умова sum <= 35 ігнорується.

// Синтаксис if (35 >= sum >= 15) неправильний, тому що Javascript бачить тільки першу умову:
// 35 >= sum
// І якщо sum = 14, то вся умова також буде вірною, тому що 35 >= sum.
// Умова sum >= 15 ігнорується.

// ###########################################################################################################################################################

// // ==========================================Task-11

// // --------------------===================== Сonditions --------------------=====================

// За законом тільки повнолітні люди можуть купувати алкогольні напої.

// Створи функцію canBuyBeer, яка приймає як параметр ціле число age:

// якщо age більше або рівне 18, то вона повертає рядок You can buy beer
// у всіх інших випадках повертає рядок You can not buy beer
// Використовуй ключове слово return, щоб повернути потрібний рядок з функції.

//     Приклади:

// canBuyBeer(17) === 'You can not buy beer'
// canBuyBeer(18) === 'You can buy beer'
// canBuyBeer(50) === 'You can buy beer'

// Якщо ти бачиш помилку 'Function 'canBuyBeer' should be declared'
// Перевір всі круглі та фігурні дужки, а також інші символи у функції.
// Якщо хоча б одна кругла або фігурна дужка не закрита або в коді є неочікуваний символ, Javascript не зможе проаналізувати твій код.

// // --------------------===================== Result --------------------=====================

// function canBuyBeer(age) {
//     if (age >= 18) {
//         return "You can buy beer";
//     }
//     else {
//         return "You can not buy beer";
//     }
// }

// ###########################################################################################################################################################

// // ==========================================Task-12

// // --------------------===================== Сonditions --------------------=====================

// Усі офіціанти люблять чайові та навіть оцінюють їх відповідно до секретного рейтингу!

// Реалізуй функцію getTipsRating, яка приймає суму чайових amount та повертає рядок - оцінку відповідно до залишеної суми:

// terrible, якщо amount дорівнює 0 грн;
// poor, якщо amount від 1 до 10 грн включно;
// good, якщо amount від 11 до 20 грн включно;
// great, якщо amount від 21 до 50 грн включно;
// excellent, якщо amount більше 50 грн.
//     Приклад:

// function getTipsRating(amount) {
//     if (amount === 0) {
//         return 'terrible';
//     }

//     if (amount <= 10) {
//         return 'poor';
//     }

//     // додай решту умов...
// }

// getTipsRating(0) === 'terrible'
// getTipsRating(1) === 'poor'
// getTipsRating(10) === 'poor'

// // --------------------===================== Result --------------------=====================

// function getTipsRating(amount) {
//     if (amount === 0) {
//         return "terrible";
//     } if (amount <= 10) {
//         return "poor";
//     } if (amount > 10 && amount <= 20) {
//         return "good";
//     } if (amount > 20 && amount <= 50) {
//         return "great";
//     } if (amount > 50) {
//         return "excellent";
//     }
// }

// ###########################################################################################################################################################

// // ==========================================Task-13

// // --------------------===================== Сonditions --------------------=====================

// Ніхто не любить платити податки, але ми зобов'язані!

// Ставка податку залежить від розміру твого доходу:

// до 1000 грн включно - податок 2 %;
// від 1001 грн до 10000 грн включно - податок 3 %;
// все, що більше 10000 грн - податок 5 %;
// Напиши функцію calculateTaxes, яка приймає ціле число income(твій дохід) та повертає податок, який ти заплатиш.

//     Приклади:

// calculateTaxes(900) === 18 // 900 * 0.02, оскільки 900 < 1000
// calculateTaxes(5000) === 150 // 5000 * 0.03, оскільки 5000 < 10000
// calculateTaxes(10500) === 525 // 10500 * 0.05, оскільки 10500 > 10000
// Підказка
// Перевір, чи income менше або дорівнює 1000. Якщо це так, поверни income, помножений на 0.02.
// Створи подібні перевірки для інших умов завдання
// Якщо ти бачиш помилку 'Octal literals are not allowed in strict mode'
// Не забудь, що числа типу 0.02 потрібно писати через крапку

// // --------------------===================== Result --------------------=====================

// function calculateTaxes(income) {
//     if (income <= 1000) {
//         return income * 0.02;
//     } if (income > 1000 && income <= 10000) {
//         return income * 0.03;
//     } if (income > 10000) {
//         return income * 0.05;
//     }
// }

// ###########################################################################################################################################################

// // ==========================================Task-14

// // --------------------===================== Сonditions --------------------=====================

// Створи функцію getLargestExpressionResult, яка приймає два числа a і b та повертає найбільший можливий результат серед виразів:

// a + b
// a - b
// a * b
// a / b
// Примітки:

// Май на увазі, що a і b можуть бути від'ємними.
// Не використовуй тернарний оператор чи ключове слово else.
// Не використовуй об'єкт Math.
// Приклад:

// a = 3;
// b = 4;

// a + b = 7;
// a - b = -1;
// a * b = 12; // максимальний результат серед виразів
// a / b = 0.75;

// getLargestExpressionResult(a, b) === 12
// Підказка
// Створи змінну result і присвой їй значення a + b
// Перевір, чи a - b більше ніж result: якщо це так, присвой result значення a - b
// Створи подібні перевірки для a * b та a / b
// Після всіх перевірок поверни result - він повинен містити найбільший можливий результат серед виразів

// // --------------------===================== Result --------------------=====================

// function getLargestExpressionResult(a, b) {
//     let result = a + b;
//     if ((a - b) > result) {
//         result = a - b;
//     } if ((a * b) > result) {
//         result = a * b;
//     } if ((a / b) > result) {
//         result = a / b;
//     }
//     return result;
// }
