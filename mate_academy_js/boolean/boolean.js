// Boolean
// Коли ми перевіряємо, чи виконується якась умова, то отримуємо одну з двох відповідей так, вірно або ні, невірно.Для зберігання результатів таких перевірок в Javascript є тип даних Boolean, який складається всього з 2 значень true і false(правда і неправда).

// const isAdult = true;
// const hasEnoughMoney = false;
// Порівняння чисел
// Результат булевого типу часто отримуємо, як результат порівняння чисел.

//     a > b - дає true, якщо a більше b
// a >= b - дає true, якщо a більше або рівне b
// a === b - дає true, якщо a рівне b(однакові значення)
// a !== b - дає true, якщо a НЕ рівне b(різні значення)
// a < b - дає true, якщо a менше b
// a <= b - дає true, якщо a менше або рівне b
// console.log(
//     2 > 2, // false
//     2 >= 2, // true
//     2 === 2, // true
//     2 !== 2, // false
//     2 < 2, // false
//     2 <= 2, // true
// )
// Порівняння рядків
// Рядки порівнюються в алфавітному порядку:

// спочатку перша буква з першою
// якщо перші букви однакові, порівнюються другі
// і так далі
// всі великі букви вважаються меншими за маленькі, тому 'a' > 'Z'
// console.log(
//     'b' > 'a', // true
//     'B' > 'a', // false
//     'abc' > 'aba', // true
//     'a' === 'A', // false
// );
// Оператор заперечення
// Щоб отримати значення, протилежне результату перевірки можна використати оператор логічного заперечення!

// const isAdult = true;
// const isNotAdult = !isAdult;

// console.log(isAdult, isNotAdult); // true false
// Щоб застосувати оператор заперечення до цілого виразу, потрібно скористатися дужками

// const isNotAdult = !(age >= 18);
// Логічне І
// Якщо ми хочемо перевірити, що виконуються одразу 2 умови, ми можемо використати оператор && - логічне І.Він дає true тільки якщо обидві його частини вірні.

// const isAdult = true;
// const hasEnoughMoney = true;

// // якщо хоча б одна з умов false, то й результат буде false
// const canBuy = isAdult && hasEnoughMoney;
// Логічне АБО
// Іноді достатньо виконання однієї з двох умов, тоді ми використовуємо оператор || - логічне АБО.Він дає true якщо хоча б одна частина рівна true.

// const hasEnoughCash = true;
// const hasCreditLimit = false;

// // достатньо одного true
// const canBuy = hasEnoughCash || hasCreditLimit;
// Групування умов
// Коли ми об'єднуємо більше 2 умов, то можна записати декілька логічних операторів.

// const isWarm = isRed || isOrange || isYellow;
// const canBuy = isAdult && hasEnoughMoney && isProductAvailable;
// Якщо ж ми хочемо використати різні оператори для об'єднання, краще скористатися дужками

// const canBuy = isAdult && (hasEnoughCash || hasCreditLimit);