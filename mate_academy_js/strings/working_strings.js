// Робота з рядками
// У кожного рядка є довжина(кількість символів в ньому).Довжина записана у властивості length.

// const fullName = 'Misha Hrynko';

// console.log(fullName.length); // 12
// Символ у рядку
// Отримати окремий символ можна за його індексом(порядковим номером), що починається з 0.

// const fullName = 'Misha Hrynko';

// console.log(
//     fullName[0], // 'M'
//     fullName[1], // 'i'
//     fullName[5], // ' '
//     fullName[11], // 'o'

//     // Індекс останнього символа на 1 менше за довжину рядка
//     fullName[fullName.length - 1]; // 'o'
// );
// charAt
// Якщо ми спробуємо взяти символ за індексом, якого немає в рядку, ми отримаємо undefined.
// Проте можна скористатися методом charAt, що повертає пустий рядок для індекса, якого не існує.

// const name = 'Misha';

// console.log(
//     name[0], // 'M'
//     name.charAt(0), // 'M'
//     name[10], // undefined
//     name.charAt(10), // ''
// );
// Перебір рядка
// Часто виникає необхідність перебрати всі символи в рядку.Для цього чудово підходить цикл for

// const name = 'Misha';

// for (let i = 0; i < name.length; i++) {
//         console.log(name[i]); // 'M', 'i', 's', 'h', 'a'
//     }
// Перебір можна використати, аби щось порахувати в рядку

// const text = 'My name is Misha';
// let spacesCount = 0;

// for (let i = 0; i < text.length; i++) {
//     // рахуємо скільки пробілів у рядку
//     if (text[i] === ' ') {
//         spacesCount++;
//     }
// }

// console.log(spacesCount); // 3
// Зміна рядка
// Якщо ми хочемо замінити певний символ в рядку, то логічним здається зробити це за індексом.

// let text = '0123456789';
// text[2] = 'X';
// Але це призведе до помилки, оскільки в Javascript змінити рядок не можна.
// Тому нам доведеться створити новий з майже такими ж символами.Для цього підійде цикл:

// const text = 'My name is Misha';
// let result = '';

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === ' ') {
//         // Міняємо пробіл на 3 дефіси
//         result += '---';
//     } else {
//         // Додаємо всі інші символи без змін
//         result += text[i];
//     }
// }

// console.log(result); // 'My---name--is---Misha'
// Або для видалення символа

// const text = 'My name is Misha';
// let result = '';

// for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//         // додаємо все, крім пробілів
//         result += text[i];
//     }
// }

// console.log(result); // 'MynameisMisha'
// Перебір без індекса
// Перебрати символи в рядку можна і без індекса за допомогою цикла for of.
// Такий перебір не потребує перевірок та зміни індекса, тому він пишеться трохи швидше.

// const name = 'Misha';

// for (const letter of name) {
//     console.log(letter); // 'M', 'i', 's', 'h', 'a'
// }
// Отримання підрядка
// Досить часто нам потрібен не один символ, а певна частина рядка(підрядок).У цьому випадку зручно скористатися методом slice.
// Він приймає 2 параметри:

// індекс, з якого ми почнемо
// та індекс, перед яким ми закінчимо брати підрядок
// const text = '0123456789';

// console.log(
//     // останній індекс не буде включений
//     text.slice(1, 5), // '1234'

//     // беремо перші 8 символів
//     text.slice(0, 8), // '01234567'

//     // якщо початок більший за кінець, отримуємо пустий рядок
//     text.slice(5, 1), // ''

//     //  без параметрів отримуємо весь рядок
//     text.slice(), // '0123456789'

//     // якщо другий параметр не переданий, беремо все до кінця
//     text.slice(2), // '23456789'

//     // якщо індекс початку занадто великий, отримаємо пустий рядок
//     text.slice(15), // ''

//     // від'ємні індекси рахуються з кінця
//     text.slice(-5, -2), // '567'

//     // беремо останні 3 символа
//     text.slice(-3); // '789'

// // починаючи з 2 по 2 з кінця включно
// text.slice(1, -1); // '12345678'
// );
// Це можна використати, аби сконструювати рядок з частинок

// const text = 'I have 4 dogs';

// // 'I have five dogs
// const text2 = text.slice(0, 7) + 'five' + text.slice(-5);

// // 'We don't have dogs'
// const text3 = `We don't ${text.slice(2, 6)} ${text.slice(-4)}`;
// Регістр тексту
// Щоб перетворити великі літери на маленькі і навпаки, є методи toUpperCase та toLowerCase.

// const name = 'Misha';

// console.log(
//     name.toLowerCase(), // 'misha'
//     name.toUpperCase(), // 'MISHA'

//     name[0].toLowerCase(), // 'm'
//     name[0].toUpperCase(), // 'M'
// );
// Великими і маленькими бувають лише літери, але не інші символи

// console.log(
//     '1'.toLowerCase(), // '1'
//     '1'.toUpperCase(), // '1'
//     ','.toUpperCase(), // ','
//     ' '.toUpperCase(), // ' '
//     ''.toUpperCase(), // ''
// );
// Перевірити, що символ - це літера, можна так

// function isLetter(ch) {
//     return ch.toLowerCase() !== ch.toUpperCase();
// }

// console.log(
//     isLetter('a'), // true
//     isLetter('B'), // true
//     isLetter('1'), // false
//     isLetter(','), // false
//     isLetter(' '), // false
// );
// Якщо треба додатково перевірити, що літера велика, то об'єднуємо 2 перевірки

// function isBigLetter(ch) {
//     const isLetter = ch.toLowerCase() !== ch.toUpperCase();
//     const isBig = ch === ch.toUpperCase();

//     return isLetter && isBig;
// }

// console.log(
//     isBigLetter('A'), // true
//     isBigLetter('a'), // false
//     isBigLetter('1'), // false
//     isBigLetter(','), // false
//     isBigLetter(' '), // false
// );
// Пошук підрядка
// Якщо ми хочемо дізнатися, чи є в рядку певний символ або цілий підрядок, можна скористатися методом includes

// const name = 'Misha';

// console.log(
//     name.includes('M'), // true
//     name.includes('e'), // false

//     // регістр має значення
//     name.includes('m'), // false

//     // можна перевірити чи є частина
//     name.includes('Mis'), // true
//     name.includes('mis'), // false

//     // підрядок шукається повністю, а не окремі літери
//     name.includes('ia'), false
// );
// Можна починати пошук не від початку, а з вказаного індексу.Для цього ми передаємо стартовий індекс другим параметром

// const word = 'abrakadabra';

// console.log(
//     word.includes('k'), // true

//     // 'k' стоїть на 4-ом індексі, а ми починаємо перевірку з 5-го
//     word.includes('k', 5), // false

//     // але від'ємні або занадто великі індекси ігноруються
//     'abrakadabra'.includes('b', -1), // true
//     word.includes('b', 15), // true
// );
// Регістро - незалежний пошук
// Якщо ми хочемо робити перевірку без урахування регістру, щоб знаходились як великі, так і маленькі літери,
// треба виконати приведення рядка і підрядка до одного й того ж самого регістру(наприклад до нижнього), а після цього перевіряти

// function search(text, part) {
//     const normalizedText = text.toLowerCase();
//     const normalizedPart = part.toLowerCase();

//     return normalizedText.includes(normalizedPart);
// }

// console.log(
//     search('Misha', 'm'), // true
//     search('Misha', 'SHA'), // true
// );
// Початок і кінець рядка
// Також можна перевірити, що рядок починається або закінчується визначеним підрядком за допомогою методів startsWith і endsWith

// const name = 'Misha';

// console.log(
//     name.startsWith('Mis'), // true
//     name.startsWith('Misha'), // true
//     name.startsWith('M'), // true

//     name.startsWith('is'), // false
//     name.startsWith('a'), // false
// );

// console.log(
//     name.endsWith('a'), // true
//     name.endsWith('sha'), // true
//     name.endsWith('Misha'), // true

//     name.endsWith('is'), // false
//     name.endsWith('Mi'), // false
// );
// Видалення пробілів
// Також можна видалити всі пробіли на початку та в кінці рядка за допомогою методу trim.

// const name = ' Misha';
// const fullName = 'Misha Hrynko   ';
// const word = '     abrakadabra     ';

// console.log(
//     name.trim(), // 'Misha'
//     fullName.trim(), // 'Misha Hrynko'
//     word.trim(), // 'abrakadabra'
// );
// Пошук позиції
// Іноді треба дізнатися, на якому місці стоїть літера або цілий підрядок.Для цього існує метод indexOf.
// Якщо підрядок знайдений, повертається індекс, з якого починається перше його входження, якщо не знайдений, то - 1.

// const name = 'My name is Misha';

// console.log(
//     name.indexOf('y'), // 1
//     name.indexOf('n'), // 3
//     name.indexOf('My'), // 0

//     // символ не знайдений
//     name.indexOf('x'), // -1

//     // регістр має значення
//     name.indexOf('my'), // -1

//     // знаходиться індекс першого входження
//     name.indexOf('M'); // 0

// // маленька літера 'm' стоїть шостою
// name.indexOf('m'); // 5
// );
// Пошук позиції можна почати після певного індекса

// const name = 'My name is Misha';

// console.log(
//     name.indexOf('M'), // 0
//     name.indexOf('M', 1), // 11,

//     // 'M' не трапляється, починаючи з 12 індекса
//     name.indexOf('M', 12), // -1
// );
// Також є метод для пошуку в зворотному напрямку lastIndexOf.Цей метод повертає індекс першого входження, починаючи з кінця рядка.

// const name = 'My name is Misha';

// console.log(
//     name.lastIndexOf('y'), // 1
//     name.lastIndexOf('M'), // 11

//     // Можна вказати індекс, з якого починається пошук у зворотній бік
//     name.lastIndexOf('M', 10), // 0
// );
// Перетворення в рядок і назад
// Іноді буває зручно перетворити число на рядок.Це можна зробити декількома способами.Найбільш наочним є String(n),
// але на практиці може зустрітися будь - який з них.

// const n = -123;

// console.log(
//     String(n), // '-123'
//     n.toString(), // '-123'
//     `${n}`, // '-123'
//     '' + n, // '-123'
// );
// Це можна використати, наприклад, для отримання окремих цифр числа

// function getFirstDigit(n) {
//     return String(n)[0];
// }

// console.log(
//     getFirstDigit(123), // '1'
//     getFirstDigit(76543), // '7'
//     getFirstDigit(0), // '0'
// );
// Але коли ми працюємо з символами, результат завжди залишається рядком.Для того, аби перетворити його назад в число,
// треба зробити явне приведення.

// const digits = '123';

// console.log(
//     Number(digits), // 123
//     +digits, // 123
// );
// На практиці найчастіше застосовують оператор + лише через те, що він коротший.