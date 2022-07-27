// ------------------ Переменные ------------------ //
// const age = 10; // целое число

// const totalPrice = 200.74; // число с плавающей точкой

// сonst userName = 'Chelsy'; // строка 

// const message = 'Добро пожаловать!'; // строка

// const isOpen = true; // буль

// const shouldConfirm = false; // буль

// Для того, чтобы переопределить значение переменной используется переменная let

// let x = 10;
// x = 5;
// console.log(x); // 5

// console.log('Цена: ', x); // Цена: 5



// ------------------ Оператор typeOf ------------------ //

// const type = typeof isOpen;

// console.log(type); // boolean



// ------------------ alert ------------------ //

// console.log('До');
// alert('fhjkdhgkjhg');
// console.log('После');



// ------------------ window.confirm() and window.prompt() ------------------ //

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите колличество товаров');
// quantity = Number(quantity); // преобразование типа из строки в число
// console.log(quantity);
// console.log(typeof quantity);



// ------------------ Number.parseInt() and Number.parseFloat() ------------------ //

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result); // 50 // выводит число как строку затем парсит и запинается на первом не числе

// let elementWidth = '25.48px';
// const result = Number.parseInt(elementWidth);
// console.log(result); //  25 // парсит и запинается на первом не числе

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth); // 50 // преобразует в число

// let elementHight = '200.74px';
// elementHight = Number.parseFloat(elementHight);
// console.log('elementHight: ', elementHight); // выводит 200.74 как число



// ------------------ метод toFixed() ------------------ //

// const salary = 1300.16472;
// console.log(salary.toFixed()); // 1300 // отсекает всё лишнее после точки или на заданное значение в скобках

// const salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary); // 1300.16

// ----- матрёшка то же самое что выше только в одной строке
// const salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary); // 1300.16
// console.log(Number(salary.toFixed(2)));



// ------------------ NaN ------------------ //

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number('5')); // число 5

// console.log(Number(true)); // 1

// console.log(Number(false)); // 0

// console.log(Number('gjhdfghg')); // вёрнет Not a Number NaN (не число)

// console.log(Number(value)); // вёрнет Not a Number NaN (не число)

// console.log(Number(quantity)); // число 30



// ------------------ Math ------------------ //

// const base = 2;
// const power = 5;
// const result = Math.pow(2, 3);

// console.log(result); // число 8, возводит в степень

// console.log(2 ** 3); // 8 оператор exponent делает то жже самое что и Math



// ------------------ Задача ------------------ //
/*
* Напиши скрипт который просит пользователя ввести число и степень,
* возводит число в эту степень и выводит результат в консоль
*/

/* Пишем алгоритм выполнения
// 1. попросить ввести число и сохранить в переменную
// 2. попросить ввести степень и сохранить в переменную
// 3. возвести введенные данные в степень и вывести в консоль
*/

// Решение //
// 1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base); // 5 

// 2. попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power); // 3

// 3. возвести введенные данные в степень и вывести в консоль
// const result = base ** power;
// console.log(result); // 243



// ------------------ генерим псевдослучайные числа ------------------ //

// console.log(Math.random()); // выводит любое число от 0 до 1

// Math.random() * (max - min) + min; 
// console.log(Math.random() * (max - min) + min); // выводит от какого-то до какого-то диапазон

// const max = 50;
// const min = 30;
// console.log(Math.random() * (max - min) + min); // выводит любое число от 30 до 50

// const max = 80;
// const min = 10;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(0, 3)); // отсекает и округляет до опред. значения

/******сокращаем код ******/
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result); 78



// ------------------ Длина строки ------------------ //

// const message = 'В этой строке 26 символов';
// console.log(message.length); // 26 показывает колличество символов в строке



// ------------------ Конкатенация строк ------------------ //

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fuulName = firstName + lastName;
// console.log(fuulName); // ChelsyEmerald
// *******
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fuulName = firstName + ' ' + lastName;
// console.log(fuulName); // Chelsy Emerald

// console.log('5' + 5); // 55



// ------------------ Задача ------------------ //

/*
* Напиши скрипт который выведет строку в формате:
* "Гость x y поселяется в z номер q",
* подставив вместо x y z q значения переменных
*/
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type ='VIP';

// const welcomeMsg = 'Гость ' + firstName + ' ' + ' поселяется в ' + type + ' номер ' + room;
// console.log(welcomeMsg); //Гость Chelsy  поселяется в VIP номер 716
// или так
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

// ------------------ Шаблонные строки ------------------ //

// const quantity = 5;
// const orderMsg =`Вы заказываете ${quantiny} холодильников.`;
// console.log(orderMsg); // Вы заказываете 5 холодильников.



// ------------------ Нормализация с методом toLowerCase and toUpperCase ------------------ //

// const brand = 'Samsung';
// const inDb = 'samsung';
// // приводим к нижнему регистру или верхнему (нормализация)
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand); //samsung

// или
// let brand = prompt('Давай бренд');
// brand = brand.toUpperCase();
// console.log(brand); // ERICSON

// делаем нормализацию всего кроме первой буквы
// let brand = 'panasonic';
// console.log(brand[4]); вырезаем букву под № 4 тоисть s
// console.log(brand.slice(1).toUpperCase); // ANASONIC



// ------------------ поиск в строке с методом includes ------------------ //

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmaster';

// console.log(string1.includes(blacklistedWord1)); // true 
// console.log(string1.includes(blacklistedWord2)); // false 

// console.log(string2.includes(blacklistedWord1)); // false
// console.log(string2.includes(blacklistedWord2)); // false 
// console.log(string2.toLowerCase().includes(blacklistedWord2)); // true 

// console.log(string3.includes(blacklistedWord1)); // false 
// console.log(string3.includes(blacklistedWord2)); // false 



// ------------------ операторы сравнения ------------------ //

// >=
// console.log(15 >= 3 ); // true

// >
// console.log(15 > 3 ); // true

// const isEqual = 5 == 5;  // true // == строго равно
// const isEqual = 5 == '3'; // false

// const isEqual = 5 === 5; // false // === строго НЕ равно
// const isEqual = 5 === 3; // true



// ------------------ приведение (преобразование) типов к числу ------------------ //
// в операциях сравнение операнды приводятся к числу
// console.log('10' > 5); // true приводится к строке

// const isEqual = 5 == 5;  // == оператор сравнения



// ------------------ Логические операторы ------------------ //

/*/ Приведение к булю /*/ 
// console.log(Boolean(5)); // true

// *********** 6 ложных значений false
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(' ')); // false
// console.log(Boolean(" ")); // false
// console.log(Boolean(undefined)); // false

/*/ Логическое И && /*/ 
// --- запинается на лжи
// --- возращает то, на чём запнулось или последний операнд

// console.log(5 && 6); // 6  - 5 и 6
// console.log(0 && 'hello') // 0
// console.log(5 && 'hello' && 7 && 'mango') // mango

/*/ Логическое ИЛИ || /*/ 
// --- запинается на правде
// --- возращает то, на чём запнулось или последний операнд

// console.log(false || 5 || null || 0) // 5

/*/ Логическое НЕ (оператор !) /*/ 
// --- делает инверсию правда > ложь и ложь > правда

// console.log(!false) // не false > true и наоборот



// ------------------ Задача ------------------ //
/*
*Напиши скрипт который проверяет вхождение числа
* в отрезок обозначенный отрезком x1 и x2.
* - До x1
* - После х2
* - От х1 до х2
* - До х1 или после х2
*/

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// * - До x1
// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1); // Число 50 попадает в отрезок до 10?  false
// * - После х2
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2); // Число 50 попадает в отрезок после 30?  true
// * - От х1 до х2
// const res = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true

// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, res);  //Число 50 попадает в отрезок от 10 до 30? false

// * - До х1 или после х2
// const res2 = number < x1 || number > x2;

// 50 < 10 || 50 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false ||| false
// false

// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, res2); // Число 50 попадает в отрезок от 10 до 30? true



// ------------------ Задача ------------------ //
/*
*Напиши скрипт который проверяет возможность открыть чат с пользователем.
*Для этого пользователь должен быть:
* - другом
* - онлайн
* - бeз режима НЕ беспокоить
*/

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat); // Можно открыть чат?  true



// ------------------ Задача ------------------ //
/*
* Напиши скрипт проверки подписки пользователя при доступе к контенту.
* Есть три типа подписки: free, pro, vip.
*/

// const sub = 'pro';

// если пользователь pro или пользователь vip тогда есть доступ

// const canAccessContent = sub === 'pro' || sub === 'vip';
// // const sub = 'pro';
// // true || false => true

// // const sub = 'vip';
// // false || true => true

// // const sub = 'free';
// // false || false => false

// console.log('Есть доступ к контенту? ', canAccessContent);



// ------------------ оператор ветвления if(){} ------------------ //

// if (5 > 30){
//     // тело
//     console.log('выполняется');
// }

// если в if = true тело выполняется, в противном случае тело не выполняется



// ------------------ оператор ветвления if...else ------------------ //
// if (5 > 30){
//     console.log('x > y');
// }
// else{
//     console.log('x < y');
// }

// если в if = true тело выполняется, в противном случае тело выполняетя в else



// ------------------ оператор ветвления else...if ------------------ //
// const salary = 1500;

// if (salary <= 500){
//     console.log('Уровень 1');
// } else if(salary > 500 && salary <= 1500){
//     console.log('Уровень 2');
// } else if(salary > 1500 && salary < 3000){
//     console.log('Уровень 3');
// } else {
//     console.log('Уровень 4');
// }

// используется когда условия многозначные и может быть сколько угодно раз проверять



// ------------------ тернарный оператор ------------------ //
// обыная форма 
// const balance = 1000;
// let message;
// if (balance >= 0){
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }
// console.log(message);

// заменяем на тернарный оператор

// const message = условие ? выражение1 : выражение2;
// const message = balance >= ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);



// ------------------ блочная область видимости переменных ------------------ //
// if (true){
//     const a = 5;
// }
// console.log(a);  // a is not defined  (переменная не объявлена)

// правильно

// const b = 10;
// if (true){
// }
// console.log(b);  // 10
