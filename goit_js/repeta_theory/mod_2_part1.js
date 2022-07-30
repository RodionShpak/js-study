// ------------------ Массив ------------------ //

// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);

// // находим элемент в массиве по индексу
// console.log(friends[0]); // Mango
// console.log(friends[3]); // Ajax
// console.log(friends[4]); // undefined

// // перезаписываем элемент в массиве
// friends[1] = 'Rob';
// console.table(friends); // 'Mango', 'Rob', 'Poly', 'Ajax'

// ------------------ Передача по значению ------------------ //

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10   - создаётся копия значения

// a = 20;

// console.log(a); // 20   - значение в переменной а заменяется
// console.log(b); // 10   - значение остаётся такое же не смотря на изменение в переменной а

// ------------------ Передача по сcылке ------------------ //

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);  // 1, 2, 3
// console.log('b', b);  // 1, 2, 3

// a[0] = 500;

// console.log('a', a);  // 500, 2, 3
// console.log('b', b);  // 500, 2, 3

// console.log(a === b); // true



// ------------------ Перебор (итерация) массива for ------------------ //

// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// // если необходимо перебрать массив и изменить индекс

// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]); //  'Mango', 'Kivi', 'Poly', 'Ajax'
//     friends[i] += '-1';
// }

// console.table(friends); // 'Mango-1', 'Kivi-1', 'Poly-1', 'Ajax-1'

// // то же самое но меньше индекс for of

// for (const friend of friends) {
//     console.log(friend); // 'Mango', 'Kivi', 'Poly', 'Ajax'
// }

// // console.table(friends);



// ------------------ Задача ------------------ //

/*
* Посчитать общую сумму покупок в корзине
*/

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // 2 - сделать переменную total до цикла
// let total = 0;

// 1 - перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     // 3 - каждый элемент приплюсовать к total
//     total += cart[i];

//     console.log('Total: ', total); // 486
// }

// тоже самое что и выше только через for of//

// for (const carts of cart) {
//     total += carts;
// }

// console.log('Total: ', total);

// добавляем таксу //

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }


// for (let value of cart) {
//     value = Math.round(value * 1.1);
// }

// console.log(cart); //  [59, 31, 116, 77, 101, 19, 132]



// ------------------ Задача ------------------ //
/*
* напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // 1 переменная тотал
// let total = 0;
// // 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     // 3 на каждой итерации проверить элемент на чётность
//     if (numbers[i] % 2 === 0) {
//         console.log('Чётное!!!');
// // 4 если чётное плюсуем к тотал
// total += numbers[i];
//     }
// }
// console.log('Total: ', total); //

// ------------------ или через for of ------------------ //

// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log('Чётное!!!');
//         total += number;
//     }
// }
// console.log('Total: ', total);

// ------------------ или через continue (от обратного) ------------------ //

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Эту итерацию пропустить!!!', number);
//         continue;
//     }
//     console.log(`${number} - чётное!!!`);
// total += number;
// }
// console.log('Total: ', total);



// ------------------ Задача ------------------ //

/*
* Напиши скрипт поиска логина
*   - Если логина нет, вывести сообщение 'Пользователь [логин]' не найден'
*   - Если нашли логин, вывести сообщение 'Пользователь [логин]' найден'
*
* - Сначала через for
* - Потом через for...of
* - Логика break
* - Метод includes() c тернарным оператором
*/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// * - Сначала через for - * //

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//
// if (login !== loginToFind) {
//         message = `Пользователь ${loginToFind} не найден.`;
//     } else {
//         message = `Пользователь ${loginToFind} найден.`;
//     }
// }                         цикл не прерывается по этому не ищет
// console.log(message);  // Пользователь poly1scute не найден.

// * - сделаем так что бы цикл прерывался через break - * //
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//
// if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message); // Пользователь poly1scute найден.

// * - cравниваем - * //

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//
// if (login === loginToFind) {
//         console.log('Ура, равны!!!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message); // Пользователь poly1scute найден.

// * - сделаем по короче - * //
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден.';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//
// if (login === loginToFind) {
//         console.log('Ура, равны!!!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message); // Пользователь poly1scute найден.

// * - Потом через for...of - * //

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден.';

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура, равны!!!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message); // Пользователь poly1scute найден.

// * - Метод includes() c тернарным оператором - *//

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// // let message = 'Пользователь ${loginToFind} не найден.';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message); // Пользователь poly1scute найден.



// ------------------ Задача for...of ------------------ //

/*
* Напиши скрипт поиска самого маленького числа в массиве,
* при условии что числа уникальные (не повторяются).
*/

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }
// console.log('smallesNumber: ', smallesNumber); // smallesNumber: 7



// ------------------ Задача на метод join ------------------ //
/*
* Напиши скрипт, который объеденяет все элементы массива в одно строковое значение.
* Элементов может быть произвольное кол-во.
* Пусть элементы массива в строке будут разделены запятой.
* - Сначала через for
* - Потом через join()
* // Должно получится 'Mango,Poly,Kiwi,Ajax'
*/

// * - Сначала через for - * //

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string); // Mango,Poly,Kiwi,Ajax

// * - Потом через join() - * //

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join(', ');
// console.log(string); // Mango, Poly, Kiwi, Ajax



// ------------------ Задача на регистр и тернарый оператор ------------------ //
/*
* Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
* Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
*/

// const string = 'JavaScript';
// const letters = string.split('');
// // console.log(letters); // 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'
// let invertedString = '';

// for (const letter of letters) {
//     console.log(letter);

// if (letter === letter.toLowerCase()) {
//     console.log('Эта буква в нижнем регистре!!! -', letter);
//     invertedString += letter.toUpperCase();
//     // console.log(invertedString); // AVACRIPT
// } else {
//     invertedString += letter.toLowerCase();
//     // console.log(invertedString); // jAVAsCRIPT
// }

// * - через тернарный оператор - * //

// invertedString +=
//     letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }
// console.log(invertedString); // jAVAsCRIPT



// ------------------ Задача  ------------------ //
/*
* Делаем slug в URL из названия статьи (например на dev.to)
* Заголовок статьи состоит только из букв и пробелов
*
* - нормализируем строку
* - разбиваем по словам
* - сшиваем в строку с разделителями
*/

// Должно получиться top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle); // top 10 benefits of react framework
const words = normalizedTitle.split(' ');
// console.log(words); // ['top', '10', 'benefits', 'of', 'react', 'framework']
const slug = words.join('-');
// console.log(slug); // top-10-benefits-of-react-framework


