// Типи даних
// В Javascript є декілька типів даних:

// Числа
// Числа можуть бути цілими(42, -5) та дробовими(12.67, -0.2).

// const age = 37;
// const x = -0.25;
// Рядки
// Рядки використовуються для текстової інформації.

// const name = 'Misha';
// const message = 'Hello, world!';
// Boolean
// Булевий(логічний) тип складається з двох значень: true та false.Такі значення використовують для перевірки умов у контрукціях if та в циклах.

// const isMarried = true;
// const hasACat = false;
// null і undefined
// Також є два пустих значення:

// null ми використовуємо, якщо змінна поки що пуста, але пізніше матиме певне значення
// undefined - це невизначене значення, яке найчастіше отримуємо в результаті помилки в програмі.
// // Якщо в тебе поки нема партнера, але в цілому може згодом з'явитись
// let partner = null;

// // Тут undefined, оскільки значення не визначено
// let value;
// Перевірка типу
// Оператор typeof дає змогу дізнатись тип даних змінної або цілого виразу.

//     Тип - це рядок 'number', 'string', 'boolean', 'undefined' для простих типів або 'object', 'function', 'bigint', 'symbol' для складніших, які ми вивчимо пізніше.

// Так історично склалось, що typeof null повертає рядок 'object'.

// const name = 'Misha';
// console.log(typeof name); // 'string'

// const age = 37;
// console.log(typeof (age + 1)); // 'number'

// const isMarried = true;
// console.log(typeof isMarried); // 'boolean'

// console.log(typeof undefined); // 'undefined'
// console.log(typeof null); // 'object'