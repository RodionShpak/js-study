// ###########################################################################################################################################################

// // ==========================================Task-1

// СТВОРЕННЯ ОБ'ЄКТА

// Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно.
// Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };
// Для оголошення використовуються фігурні дужки { } - літерал об'єкта.
// При створенні об'єкта можна додати властивості, кожна з яких описується парами ключ: значення.
// Ключ ще називають ім'ям властивості і це завжди рядок.
// Значенням властивості можуть бути будь - які типи: примітиви, масиви, об'єкти, булі, функції тощо.Властивості розділяються комою.

// //  --------------------===================== Сonditions =====================--------------------

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив["premium", "promoted", "top"].

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив["premium", "promoted", "top"]

// //  --------------------===================== Result =====================--------------------

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };



// ###########################################################################################################################################################

// // ==========================================Task-2

// ВКЛАДЕНІ ВЛАСТИВОСТІ

// Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

// Наприклад, статистика користувача соціальної мережі складається з кількості послідовників,
// переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування, окремо країна і місто.

// В майбутньому це можна буде використовувати для пошуку користувачів за країною, містом,
// мінімальною або максимальною кількістю послідовників тощо.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// //  --------------------===================== Сonditions =====================--------------------

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };



// ###########################################################################################################################################################

// // ==========================================Task-3

// ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КРАПКУ
// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості.
// Здебільшого використовується синтаксис «через крапку» і підходить тоді,
// коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місце звернення буде повернуте значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків["premium", "promoted", "top"]

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;



// ###########################################################################################################################################################

// // ==========================================Task-4

// ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
// };
// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
// Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country,
// де user.location - це звернення(шлях) до об'єкта у властивості location,
// а user.locaton.country - звернення до властивості country в цьому об'єкті.Тобто, «крапка» вказує наступну вкладеність.

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // "Jamaica"
// Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву.
// Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment за допомогою const
//     Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
//     Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
//     Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
//     Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
//     Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
//     Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
//     Значення змінної lastTag - це "top"

// //  --------------------===================== Result =====================--------------------


// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment;
// const ownerPhone = apartment;
// const ownerEmail = apartment;
// const numberOfTags = apartment;
// const firstTag = apartment;
// const lastTag = apartment;

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];



// ###########################################################################################################################################################

// // ==========================================Task-5

// ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КВАДРАТНІ ДУЖКИ
// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"].
// Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

// Синтаксис «квадратних дужок» використовується значно рідше.
// Як правило у випадках, коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра функції, наприклад).

// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment,
// використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це["premium", "promoted", "top"]

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];



// ###########################################################################################################################################################

// // ==========================================Task-6

// ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ
// Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив["premium", "promoted", "top", "trusted"]

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");



// ###########################################################################################################################################################

// // ==========================================Task-7
// ДОДАВАННЯ ВЛАСТИВОСТЕЙ

// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
// Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті, вона буде створена.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// //  --------------------===================== Сonditions =====================--------------------

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // After

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };



// ###########################################################################################################################################################

// // ==========================================Task-8

// КОРОТКІ ВЛАСТИВОСТІ
// Іноді, під час створення об'єкта, значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям,
//     як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної,
//     в якій зберігається необхідне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//     name: name,
//     age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Синтаксис коротких властивостей(shorthand properties) вирішує цю проблему,
// дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//     name,
//     age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості,
//     а значення буде взято зі змінної з аналогічним ім'ям.

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price,
// image і tags зі значеннями зі змінних з аналогічними іменами.Обов'язково використовуй синтаксис коротких властивостей.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив["on sale", "trending", "best buy"]

// //  --------------------===================== Result =====================--------------------

// // Before

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     // Change code below this line
//     // Change code above this line
// };

// // After

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };



// ###########################################################################################################################################################

// // ==========================================Task-9

// ОБЧИСЛЮВАНІ ВЛАСТИВОСТІ
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям,
// яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//     age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // "Генрі Сибола"
// Синтаксис обчислюваних властивостей(computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його.
// Значенням обчислюваної властивості може бути будь - який валідний вираз.

// const propName = "name";
// const user = {
//     age: 25,
//     // Ім'я цієї властивості буде взято зі значення змінної propName
//     [propName]: "Генрі Сибола",
// };

// console.log(user.name); // "Генрі Сибола"

// //  --------------------===================== Сonditions =====================--------------------

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості:
// email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
//     а значенням властивості password - рядок "jqueryismyjam".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// //  --------------------===================== Result =====================--------------------

// // Before

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line
//     // Change code above this line
// };

// // After

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };



// ###########################################################################################################################################################

// // ==========================================Task-10
// ЦИКЛ FOR...IN
// На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//     // інструкції
// }
// Змінна key доступна тільки в тілі циклу.На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
// Для того щоб отримати значення властивості з таким ключем(ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
// }

// //  --------------------===================== Сonditions =====================--------------------

// Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153]

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// // After

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }



// ###########################################################################################################################################################

// // ==========================================Task-11

// МЕТОД HASOWNPROPERTY()
// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
// Тому можна отримати значення властивості legs, звернувшись до неї як dog.legs,
//     хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.

// Оператор in, який використовується в циклі for...in, не розрізняє власні та невласні властивості об'єкта.
// Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості.
// Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає,
// використовується метод hasOwnProperty(key), який повертає true або false.

//     // ❌ Повертає true для всіх властивостей
//     console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість.
// Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(book[key]);
//     }

//     // Якщо це невласна властивість - нічого не робимо
// }

// //  --------------------===================== Сonditions =====================--------------------

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].

// //  --------------------===================== Result =====================--------------------

// // Before

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line

//     keys.push(key);
//     values.push(apartment[key]);

//     // Change code above this line
// }

// // After

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }



// ###########################################################################################################################################################

// // ==========================================Task-12
// ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// //  --------------------===================== Result =====================--------------------

// // Before

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     // Change code above this line
//     return propCount;
// }

// // After

// function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
// }



// ###########################################################################################################################################################

// // ==========================================Task-13

// МЕТОД OBJECT.KEYS()

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей.
// Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//     title: "The Last Kingdom",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта,
// не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
// }
// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

// //  --------------------===================== Сonditions =====================--------------------

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = apartment;

// // After

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }



// ###########################################################################################################################################################

// // ==========================================Task-14
// ЗАДАЧА.ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// //  --------------------===================== Сonditions =====================--------------------
// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// //  --------------------===================== Result =====================--------------------

// // Before

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
//     // Change code above this line
// }

// // After

// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     propCount = keys.length;
//     return propCount;
// }



// ###########################################################################################################################################################

// // ==========================================Task-15

// МЕТОД OBJECT.VALUES()
// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта,
// то метод Object.values(obj) повертає масив значень його власних властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "genres", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

// //  --------------------===================== Сonditions =====================--------------------

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей.
// Використовуй методи Object.keys() і Object.values().

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// //  --------------------===================== Result =====================--------------------

// // Before

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = apartment;
// const values = apartment;

// // After

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// let values = Object.values(apartment);
// const keys = Object.keys(apartment);



// ###########################################################################################################################################################

// // ==========================================Task-16
// ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// //  --------------------===================== Result =====================--------------------

// // Before

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line

//     // Change code above this line
//     return totalSalary;
// }

// // After

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries)
//     for (const value of values) {
//         totalSalary += value
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



// ###########################################################################################################################################################

// // ==========================================Task-17

// МАСИВ ОБ'ЄКТІВ
// У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів.
// Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
// ];
// Для перебирання такого масиву використовується стандартний цикл for...of.
// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку»,
// оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

//     for(const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
// }

// //  --------------------===================== Сonditions =====================--------------------

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// //  --------------------===================== Result =====================--------------------

// // Before

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // After

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }



// ###########################################################################################################################################################

// // ==========================================Task-18
// ЗАДАЧА.ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// //  --------------------===================== Result =====================--------------------

// // Before

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code above this line
// }

// // After

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;
// }



// ###########################################################################################################################################################

// // ==========================================Task-19
// ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає[4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає[1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає[]

// //  --------------------===================== Result =====================--------------------

// // Before

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
// }

// // After

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let allNames = [];
//     for (let product of products) {
//         if (propName === "name") {
//             allNames.push(product.name);
//         }
//         if (propName === "quantity") {
//             allNames.push(product.quantity);
//         }
//         if (propName === "price") {
//             allNames.push(product.price);
//         } else {
//             allNames.push();
//         }
//          console.log(product.name);
//     }
//     return allNames;
// }



// ###########################################################################################################################################################

// // ==========================================Task-20
// ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// //  --------------------===================== Result =====================--------------------

// // Before

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code above this line
// }

// // After

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0;
// }



// ###########################################################################################################################################################

// // ==========================================Task-21

// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ
// Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// const accessType = book.public ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні.
// Це робить код в місці їх використання менш «шумним».

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// Деструктуризація завжди знаходиться у лівій частині операції присвоєння.
// Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта.
// Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання, в іншому випадку їй буде присвоєно undefined.
// Порядок оголошення змінних у фігурних дужках не важливий.

// //  --------------------===================== Сonditions =====================--------------------

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні(meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// //  --------------------===================== Result =====================--------------------

// // Before

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // After

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);



// ###########################################################################################################################################################

// // ==========================================Task-22
// ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ
// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей,
//     можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі,
//         коли в об'єкті відсутня властивість з таким ім'ям.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"

// //  --------------------===================== Сonditions =====================--------------------

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
// Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// //  --------------------===================== Result =====================--------------------

// // Before

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // After

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const { yesterday,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     today,
//     tomorrow, } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;



// ###########################################################################################################################################################

// // ==========================================Task-23
// ЗМІНА ІМЕНІ ЗМІННОЇ
// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості.
// Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної,
// в яку необхідно помістити значення цієї властивості.

// const firstBook = {
//     title: "Останнє королівство",
//     coverImage:
//         "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Останнє королівство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//     title: "Сон смішної людини",
// };

// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
// Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

// //  --------------------===================== Сonditions =====================--------------------

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта
// highTemperatures.Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта

// //  --------------------===================== Result =====================--------------------

// // Before

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // After

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



// ###########################################################################################################################################################

// // ==========================================Task-24

// ДЕСТРУКТУРИЗАЦІЯ В ЦИКЛАХ
// Під час перебирання масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
// ];

// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }
// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }
// Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати безпосередньо в місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }

// //  --------------------===================== Сonditions =====================--------------------

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта

// //  --------------------===================== Result =====================--------------------

// // Before

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// // After

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }



// ###########################################################################################################################################################

// // ==========================================Task-25

// ГЛИБОКА ДЕСТРУКТУРИЗАЦІЯ
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// //  --------------------===================== Сonditions =====================--------------------

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// //  --------------------===================== Result =====================--------------------

// // Before

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// // After

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;



// ###########################################################################################################################################################

// // ==========================================Task-26

// ПАТЕРН «ОБ'ЄКТ НАЛАШТУВАНЬ»
// Якщо функція приймає більше двох - трьох аргументів, дуже просто заплутатися, в якій послідовності і що передавати.
// В результаті виходить дуже неочевидний код у місці її виклику.

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//     // Робимо щось з параметрами
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
// }

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);
// Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему,
// замінюючи набір параметрів всього одним - об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
//     // Робимо щось з властивостями об'єкта
//     console.log(book.title);
//     console.log(book.numberOfPages);
//     // І так далі
// }
// Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.

// // ✅ Все зрозуміло
// doStuffWithBook({
//     title: "Останнє королівство",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     public: true,
// });
// Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book.

// // Це можна зробити в тілі функції.
// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, public } = book;
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
// }

// // Або в сигнатурі (підписі), різниці немає.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
// }

// //  --------------------===================== Сonditions =====================--------------------

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }) повертає 28.5
// Виклик calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }) повертає 37

// //  --------------------===================== Result =====================--------------------

// // Before

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//     const todayLow = forecast.today.low;
//     const todayHigh = forecast.today.high;
//     const tomorrowLow = forecast.tomorrow.low;
//     const tomorrowHigh = forecast.tomorrow.high;

//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // After

// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



// ###########################################################################################################################################################

// // ==========================================Task-27

// ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ
// Синтаксис ... (spread) дозволяє розподілити колекцію елементів(масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень.
// Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// Можна навести аналогію з ящиком яблук.Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень.
// Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

// Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.
// Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

//     Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів(чисел),
//     тобто очікує не масив значень, а довільну кількість аргументів.

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25
// Тобто запис Math.max(...[14, -4, 25, 8, 11]),
// після інтерпретації перетворюється у Math.max(14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив,
// тобто розподіляє його елементи у якості окремих аргументів.

// //  --------------------===================== Сonditions =====================--------------------

// У змінній scores зберігається масив результатів тестування.
// Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином,
//     щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна scores
// Значення змінної scores - це масив[89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// //  --------------------===================== Result =====================--------------------

// // Before

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = scores;
// const worstScore = scores;

// // After

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));



// ###########################################################################################################################################################

// // ==========================================Task-28

// ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО МАСИВУ
// Операція.spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
// Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію.
// Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію.
// За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.
// Оригінальні ящики(масиви) не зміняться, а в новому будуть копії усіх їх яблук(елементів).
// Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// //  --------------------===================== Сonditions =====================--------------------

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// //  --------------------===================== Tests =====================--------------------

// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив[64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив[89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив[29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив[64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// //  --------------------===================== Result =====================--------------------

// // Before

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [];
// const bestScore = allScores;
// const worstScore = allScores;

// // After

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// ###########################################################################################################################################################

// // ==========================================Task-29

// //  --------------------===================== Сonditions =====================--------------------

// //  --------------------===================== Tests =====================--------------------

// //  --------------------===================== Result =====================--------------------

// // Before


// // After
































































// ###########################################################################################################################################################

// // ==========================================Task-1

// //  --------------------===================== Сonditions =====================--------------------

// //  --------------------===================== Tests =====================--------------------

// //  --------------------===================== Result =====================--------------------

// // Before


// // After


















// ###########################################################################################################################################################

// // --------------------===================== TASKS --------------------=====================

//------------------------------------Task 1--------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

//------------------------------------Task 2--------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

//------------------------------------Task 3--------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//------------------------------------Task 4--------------------------------------
//   const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Henry',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

//------------------------------------Task 5--------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

//------------------------------------Task 6--------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

//------------------------------------Task 7--------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

//------------------------------------Task 8--------------------------------------
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

//------------------------------------Task 9--------------------------------------
// ОБЧИСЛЮВАНІ ВЛАСТИВОСТІ
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };
//------------------------------------Task 10--------------------------------------
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   console.log('ключ', key);
//   console.log('значення ключа', apartment[key]);

//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(keys);
//   console.log(values);
// }

//------------------------------------Task 11--------------------------------------
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

//------------------------------------Task 12--------------------------------------
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//------------------------------------Task 13--------------------------------------
// OBJECT.KEYS();
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

//------------------------------------Task 14--------------------------------------
// ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);
//   propCount = keys.length;

//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//------------------------------------Task 15--------------------------------------
// OBJECT.VALUES();
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

//------------------------------------Task 16--------------------------------------
//  ВИТРАТИ НА ЗАРПЛАТУ
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

//------------------------------------Task 17--------------------------------------
// МАСИВ ОБ'ЄКТІВ
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

//------------------------------------Task 18--------------------------------------
// Напиши функцію getProductPrice(productName),
// яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name)
// в масиві products і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Engine')); // null

//------------------------------------Task 19--------------------------------------
// КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const res = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     // console.log(keys);

//     for (const key of keys) {
//       //   console.log(key);

//       if (key === propName) {
//         console.log(key);
//         res.push(product[key]);
//       }
//     }
//   }
//   return res;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

//------------------------------------Task 20--------------------------------------
// ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ
// Напиши функцію calculateTotalPrice(productName),
//  яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість
// (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));

//------------------------------------Task 21--------------------------------------
//ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
//------------------------------------Task 22--------------------------------------
// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей,
//  можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі,
//  коли в об'єкті відсутня властивість з таким ім'ям.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

//------------------------------------Task 23--------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//------------------------------------Task 24--------------------------------------
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//------------------------------------Task 25--------------------------------------
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line
// з чого змінюємо
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// на що змінили
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

//------------------------------------Task 26--------------------------------------
// ПАТЕРН «ОБ'ЄКТ НАЛАШТУВАНЬ»
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//------------------------------------Task 27--------------------------------------
//ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ
// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

//------------------------------------Task 28--------------------------------------
// ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО МАСИВУ
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//------------------------------------Task 29--------------------------------------
// ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО ОБ'ЄКТА

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

//------------------------------------Task 30--------------------------------------
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const dataNew = { completed, category, priority, ...data };
//   return dataNew;
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));

//------------------------------------Task 31--------------------------------------
// ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ВСІХ АРГУМЕНТІВ ФУНКЦІЇ

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

//------------------------------------Task 32--------------------------------------
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
// }

//------------------------------------Task 33--------------------------------------
//  МАСИВ ЗБІГІВ
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// повинна повернути масив[1, 2],
// тому що тільки вони є в масиві першого аргументу.

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   console.log(array);
//   console.log(args);

//   for (const elenemt of array) {
//     for (const arg of args) {
//       if (elenemt === arg) {
//         matches.push(arg);
//       }
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

//------------------------------------Task 34--------------------------------------
// МЕТОДИ ОБ'ЄКТА
// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

// };
//------------------------------------Task 35--------------------------------------
// ДОСТУП ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА В ЙОГО МЕТОДАХ
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books);
//     const idx = this.books.indexOf(oldName);
//     console.log(idx);

//     this.books.splice(idx, 1, newName);
//     console.log(this.books);
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

//------------------------------------Task 36--------------------------------------
// const atTheOldToad = {
//   potions: [],
// };

//------------------------------------Task 37--------------------------------------
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

//------------------------------------Task 38--------------------------------------
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

//------------------------------------Task 39--------------------------------------
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const idx = this.potions.indexOf(potionName);
//     this.potions.splice(idx, 1);
//     console.log(this.potions);
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));

//------------------------------------Task 40--------------------------------------
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
// Change code below this line
// const idx = this.potions.indexOf(oldName);
// this.potions.splice(idx, 1, newName);
// console.log(this.potions);

// Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

//------------------------------------Task 41--------------------------------------
// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         const valuesNewPotion = Object.values(newPotion);
//         // console.log(valuesNewPotion);

//         for (const obj of this.potions) {
//             // console.log(Object.values(obj));

//             for (const value of Object.values(obj)) {
//                 // console.log(value);

//                 for (const valueNewPotion of valuesNewPotion) {
//                     // console.log(valueNewPotion);

//                     if (valueNewPotion === value) {
//                         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//                     }
//                 }
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             // console.log(potion);
//             const potionValues = Object.values(potion);
//             // console.log(potionValues);

//             for (const value of potionValues) {
//                 // console.log(value);
//                 if (value === potionName) {
//                     // console.log('ok', value, potionName);
//                     const idx = this.potions.indexOf(potion);
//                     // console.log(idx);

//                     return this.potions.splice(idx, 1);
//                 }
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === oldName) {
//                 potions[i].name = newName;
//             }
//         }
//         // Change code above this line
//     },
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// console.log(atTheOldToad.removePotion('Dragon breath'));

// console.log(atTheOldToad.removePotion('Speed potion'));

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));

// console.log(atTheOldToad.getPotions());