// console.log('Hello world!');

// Оператор typeof - говорит нам какой вид данных мы используем

// Типы данных:



// // --------------------===================== undefined =====================--------------------

// - undefined - неопределённый тип данных (будет объявлен если не было присвоенно никакое значение);
// let userName; // обьявляем переменную

// // получаем тип данных
// console.log(typeof userName);

// // получаем значение переменной
// console.log(userName); // undefined

// Примеры использования
// проверяем определена ли переменная

// if (userName === undefined) {
//     console.log('Переменная Не определена');
// } else {
//     console.log('Переменная определена');
// }

// либо с помощью оператора typeof

// of(typeof userName === 'undefined'){
//     console.log('Переменная Не определена');
// } else {
//     console.log('Переменная определена');
// }



// // --------------------===================== Null =====================--------------------

// - Null - так же как и undefined содержит только одно значение null (ничего тоисть пустое место)

// пример

// let userName = null;
// console.log(userName); // null

// пример
// попытка орбратится к объекту которого нет
// let block = document.querySelector('.block');

// // получаем null
// console.log(block); // null

// // вернеn тип object
// console.log(typeof block); // object



// // --------------------===================== Boolean =====================--------------------

// - Boolean - это булевой или логический тип данных, может принимать только два значение
//     true(истина), false(ложь).

// пример

// let willYouMaryMe = true;
// if (willYouMaryMe) {
//     console.log(';)');
// } else {
//     console.log(':('); // ;)
// }


// let willYouMaryMe = false;
// if (willYouMaryMe) {
//     console.log(';)');
// } else {
//     console.log(':(');  // :(
// }

// Так же можно использовать с опереторами сравнения

// let trueOrFalse = 58 < 18;
// console.log(trueOrFalse); // false

// let trueOrFalse = 58 > 18;
// console.log(trueOrFalse); // true



// // --------------------===================== Number =====================--------------------

// - Number - числовой тип данных представляет значения как в виде
//     целых чисел, так и в виде чисел с плавающей точкой.

// let userAge = 20;
// let userHeight = 1.83;
// console.log(userAge);  // 20
// console.log(typeof userAge);  // number
// console.log(userHeight);  // 1.83
// console.log(typeof userHeight);  // number

// // Infinity - бесконечность
// let getInfinity = 58 / 0;
// console.log(getInfinity);  //  infinity
// console.log(typeof getInfinity);  //  number

// NaN

// let getNan = 'Фрилансер' / 10;
// console.log(getNan);  // NaN
// console.log(typeof getNan);  // number



// // --------------------===================== BigInt =====================--------------------

// - BigInt - в JS тип данных "number" не может
//     содержать числа больше, чем 9007199254740991,
//     или меньше, чем -9007199254740991.

// const bigInteger = 12345678901234567890123456789n;
// console.log(typeof bigInteger); // bigint



// // --------------------===================== String =====================--------------------

// - String - строка (пишется в кавычках).

// let userName = "Фрилансер по жизни";
// console.log(typeof userName); // string

// let userNameV2 = 'Фрилансер по жизни';
// console.log(typeof userNameV2); // string

// let userNameV3 = `Фрилансер по жизни`;
// console.log(typeof userNameV3); // string

// let userAge = 36;
// let userAgeInfo = `Возраст: ${userAge}`;
// console.log(userAgeInfo); // Возраст: 36



// // --------------------===================== Object =====================--------------------

// - Object -

//     let userInfo = {
//         name: "Фрилансер по жизни",
//         age: 36
//     }
// console.log(userInfo); // name: "Фрилансер по жизни", age: 36
// console.log(typeof userInfo); // object



// // --------------------===================== Symbol =====================--------------------

// - Symbol -

//     let id = Symbol("id");
// console.log(typeof id); // symbol



// // --------------------===================== Function =====================--------------------

// - Function -

//     let funcVariable = function name(params) {
//     // код функции
// }
// console.log(typeof funcVariable); // function


// // --------------------===================== Преобразование типов =====================--------------------

// Строковое преобразование //

// Пример 1

// let userAge = 58;

// console.log(userAge); // 58
// console.log(typeof userAge); // number

// userAge = String(userAge);

// console.log(userAge); // 58
// console.log(typeof userAge); // string

// Пример 2

// let userTrue = true;

// console.log(userTrue); // true
// console.log(typeof userTrue); // boolean

// userTrue = String(userTrue);

// console.log(userTrue); // true
// console.log(typeof userTrue); // string



// Численное преобразование //

// Пример 1

// let userAge = "58";

// console.log(userAge); // 58
// console.log(typeof userAge); // string

// userAge = Number(userAge);

// console.log(userAge); // 58
// console.log(typeof userAge); // number

// Пример 2

// let userAge = "Фрилансер";

// userAge = Number(userAge);

// console.log(userAge); // NaN
// console.log(typeof userAge); // number

// Пример 3

// let userAge = "72" / "2";
// console.log(userAge); // 36
// // console.log(typeof userAge); // number

// Логическое преобразование //

// let userAge = 58;

// console.log(userAge); // 58
// console.log(typeof userAge); // number

// userAge = Boolean(userAge);

// console.log(userAge); // true
// console.log(typeof userAge); // boolean







