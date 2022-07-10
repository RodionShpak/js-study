// ###########################################################################################################################################################

// // ==========================================Task-1

// // --------------------===================== Conditions =====================--------------------

// Створи функцію checkNumber, яка приймає ціле число number і перевіряє його на три різні властивості:

// Це позитивне число ?
// Це парне число ?
// Це число кратне 10 ?
// Функція повинна повернути масив з результатами перевірок у вигляді булевих значень.

// Приклади:

// checkNumber(3) === [true, false, false]
// checkNumber(10) === [true, true, true]
// checkNumber(0) === [false, true, true]
// checkNumber(-1) === [false, false, false]

// // --------------------===================== Result =====================--------------------

// function checkNumber(number) {
//     const result = [];
//     if (number > 0) {
//         result.push(true)
//     } else {
//         result.push(false)
//     }
//     if (number % 2 === 0) {
//         result.push(true)
//     } else {
//         result.push(false)
//     }
//     if (number % 10 === 0) {
//         result.push(true)
//     } else {
//         result.push(false)
//     }
//     return result;
// }

// ###########################################################################################################################################################

// // ==========================================Task-2

// // --------------------===================== Conditions =====================--------------------

// Реалізуй функцію getArraysSum, яка приймає два масива чисел однакової довжини, та повертає суму усіх елементів цих масивів.

//     Приклад:

// getArraysSum([1, 2], [3, 4]) === 10  // 1 + 2 + 3 + 4 = 10
// getArraysSum([], []) === 0

// // --------------------===================== Result =====================--------------------

// function getArraysSum(arr1, arr2) {
//     return arr1.reduce(((elem, elem2) => elem + elem2), 0) +
//         arr2.reduce(((elem, elem2) => elem + elem2), 0);
// }

// ###########################################################################################################################################################

// // ==========================================Task-3

// // --------------------===================== Conditions =====================--------------------

// Реалізуй функцію combineArrays, яка приймає 2 масиви чисел(first та second) та повертає масив чисел де N[i] це сума чисел first[i] та second[i].

//     Примітки:

// Вхідні масиви завжди однакового розміру.
//     Приклади:

// combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
// combineArrays([1], [6]) === [7]
// combineArrays([], []) === []

// // --------------------===================== Result =====================--------------------

// function combineArrays(first, second) {
//     let N = [];
//     for (let i = 0; i < first.length; i++) {
//         N.push(first[i] + second[i])
//     }
//     return N;
// }

// ###########################################################################################################################################################

// // ==========================================Task-4

// // --------------------===================== Conditions =====================--------------------

// Напиши функцію splitString, яка приймає рядок і повертає масив рядків з двох символів.

// Якщо рядок містить непарну кількість символів, тоді другий символ останнього рядка потрібно замінити на підкреслення(_).

//     Приклади:

// splitString('abc') === ['ab', 'c_']
// splitString('abcdef') === ['ab', 'cd', 'ef']
// Підказка 1
// Перевір, чи рядок містить непарну кількість символів, і якщо це так, додай до нього підкреслення

// Підказка 2
// Перебери рядок із кроком циклу = 2
// На кожній ітерації додавай рядок із поточним та наступним символом у масив результатів.

// // --------------------===================== Result =====================--------------------

// function splitString(str) {
//     const symb = [];
//     let newStr = str;
//     if (str.length % 2 !== 0) {
//         newStr += '_';
//     }
//     const n = newStr.split('');
//     for (let i = 0; i < n.length; i = i + 2) {
//         symb.push(n[i] + n[i + 1]);
//     }
//     return symb;
// }

// ###########################################################################################################################################################

// // ==========================================Task-5

// // --------------------===================== Conditions =====================--------------------

// Створи функцію scrollingText, яка

// приймає рядок word;
// послідовно переставляє всі символи у рядку з нульового індексу до останнього;
// повертає масив з усіма отриманими комбінаціями в верхньому регістрі.
//     Приклад:

// scrollingText('robot')

// Повертає:
// ['ROBOT',
//     'OBOTR',
//     'BOTRO',
//     'OTROB',
//     'TROBO']
// Підказка 1
// Перебери рядок word
// На кожній ітерації додавай до масиву з результатами рядок, що містить:
// всі символи від поточного індексу до кінця рядка
// всі символи від початку рядка до поточного індексу(не включно)
// Підказка 2
// Використовуй метод slice, щоб отримати підрядок, використовуючи індекси.

// // --------------------===================== Result =====================--------------------

// function scrollingText(word) {
//     let result = [];
//     let upperword = word.toUpperCase()
//     for (let i = 0; i < upperword.length; i++) {
//         result.push(upperword.slice(i) + upperword.slice(0, i))
//     }
//     return result
// }

// ###########################################################################################################################################################

// // ==========================================Task-6

// // --------------------===================== Conditions =====================--------------------

// Створи функцію isSpecialNumber, яка приймає додатне число n і визначає, чи є воно особливим.

// Число називається особливим, якщо воно включає в себе лише цифри 0, 1, 2, 3, 4 або 5.

// Функція повинна повертати рядок 'Special!!', якщо число особливе, та 'NOT!!', якщо воно таким не є.

//     Примітка: одноцифрові числа в інтервалі[0: 5] вважаються особливими числами.

//         Приклади:

// isSpecialNumber(2) === 'Special!!'
// // 2 - це одноцифрове число в інтервалі [0:5].

// isSpecialNumber(9) === 'NOT!!'
// // 9 - це одноцифрове число, але воно не знаходиться в інтервалі [0:5].

// isSpecialNumber(23) === 'Special!!'
// // Всі цифри числа 23 знаходяться у інтервалі [0:5].

// isSpecialNumber(39) === 'NOT!!'
// // Друга цифра (9) не знаходиться в інтервалі [0:5].
// Підказка
// Перетвори число number в рядок, щоб перебирати його цифри
// Перебери цей рядок
// На кожній ітерації перевіряй, чи є поточний елемент більшим за 5.

// // --------------------===================== Result =====================--------------------

// function isSpecialNumber(n) {
//     let numbers = String(n);
//     let sp = '012345';
//     for (let num of numbers) {
//         if (sp.includes(num)) {
//             continue;
//         } else {
//             return 'NOT!!';
//         }
//     }
//     return 'Special!!';
// }

// ###########################################################################################################################################################

// // ==========================================Task-7

// // --------------------===================== Conditions =====================--------------------

// Давай перевіримо, чи всі наші числа охайні і всі цифри стоять у правильному порядку - у неспадаючій послідовності.

// Створи функцію isTidy, яка приймає позитивне число number і повертає true,
// якщо його цифри у неспадаючій послідовності, або false, якщо це не так.

//     Приклади:

// isTidy(12) ==> true
// Цифри { 1, 2 } розташовані у неспадаючій послідовності, тобто  1 <= 2.

// isTidy(32) ==> false
// Цифри { 3, 2 } розташовані в спадаючій послідовності, тобто 3 > 2.

// isTidy(1024) ==> false
// Цифри { 1, 0, 2, 4 } розташовані в спадаючій послідовності, оскільки 0 < 1.

// isTidy(3445) ==> true
// Цифри { 3, 4, 4, 5 } розташовані в неспадаючій послідовності, оскільки 4 <= 4.

// isTidy(13579) ==> true
// Цифри { 1, 3, 5, 7, 9 } розташовані в зростаючій послідовності.
//     Підказка
// Перетвори число number в рядок, щоб перебирати його цифри
// Перебери цей рядок, починаючи з другого елемента
// На кожній ітерації перевіряй, чи є поточний елемент меншим за попередній.

// // --------------------===================== Result =====================--------------------

// function isTidy(number) {
//     const stringNum = number.toFixed(0);
//     const slicedString = stringNum.split('');

//     for (let i = 0; i < slicedString.length; i++) {
//         if (stringNum[i + 1] - stringNum[i] < 1 && slicedString[i + 1] - slicedString[i] !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

// ###########################################################################################################################################################

// // ==========================================Task-8

// // --------------------===================== Conditions =====================--------------------

// Реалізуй функцію isJumping, яка приймає число number та повертає рядок JUMPING, якщо кожна цифра в числі відрізняється від сусідньої на 1.
// Якщо умова не виконується - рядок NOT JUMPING.

//     Примітки:

// Вхідне число завжди додатнє
// Різниця між 9 та 0 не розцінюється як 1
// Всі числа, які складаються із однієї цифри - JUMPING
// Приклади:

// isJumping(9) === 'JUMPING'
// // Це число з однієї цифри

// isJumping(79) === 'NOT JUMPING'
// // Сусідні цифри не відрізняються на 1

// isJumping(23454) === 'JUMPING'
// // Сусідні цифри відрізняються на 1
// Підказка 1
// Перетвори число number в рядок, щоб перебирати його цифри
// Перебери цей рядок, починаючи з другого елемента
// На кожній ітерації перевіряй, чи відрізняються поточний та попередній елементи на 1
// Підказка 2
// Використай метод Math.abs, щоб отримати абсолютне значення(модуль) різниці між поточним та попереднім елементами.

// // --------------------===================== Result =====================--------------------

// function isJumping(number) {
//     // write code here
//     let jump = "JUMPING",
//         notJump = "NOT JUMPING",
//         bool = false,
//         str = number + "";
//     let arr = str.split("");
//     arr = arr.map(s => +s);

//     if (number >= 0 && number < 10) {
//         return jump;
//     } else {
//         for (let i = 1; i < str.length; i++) {
//             if (arr[i - 1] - arr[i] == 1 || arr[i - 1] - arr[i] == -1) {
//                 bool = true;
//             } else return notJump;
//         }
//     }
//     if (bool) {
//         return jump;
//     } else return notJump;
// }
