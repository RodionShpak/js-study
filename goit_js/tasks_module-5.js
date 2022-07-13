// ###########################################################################################################################################################

// // ==========================================Task-1
// КОНТЕКСТ ВИКЛИКУ ФУНКЦІЇ
// Всередині функцій можна використовувати зарезервоване ключове слово this.
// Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана.
// Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const bookShelf = {
//     authors: ["Bernard Cornwell", "Robert Sheckley"],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методи getAuthors і addAuthor - це функції(методи об'єкта), які викликаються в контексті об'єкта bookShelf.
// Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

// //  --------------------===================== Сonditions =====================--------------------
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// //  --------------------===================== Tests =====================--------------------
// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// //  --------------------===================== Result =====================--------------------

// // Before

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = checkPizza(pizzaName);
//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }
//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };

// // After

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);
//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }
//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };



// ###########################################################################################################################################################

// // ==========================================Task-2
// ЗАДАЧА: АКАУНТ КОРИСТУВАЧА

// //  --------------------===================== Сonditions =====================--------------------
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
// Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.
// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// //  --------------------===================== Tests =====================--------------------
// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

// //  --------------------===================== Result =====================--------------------

// // Before

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return balance;
//     },
//     getDiscount() {
//         return discount;
//     },
//     setDiscount(value) {
//         discount = value;
//     },
//     getOrders() {
//         return orders;
//     },
//     addOrder(cost, order) {
//         balance -= cost - cost * discount;
//         orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// // After

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// ###########################################################################################################################################################

// // ==========================================Task-3
// ЗАДАЧА: ІСТОРІЯ ЗАМОВЛЕНЬ

// //  --------------------===================== Сonditions =====================--------------------
// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// //  --------------------===================== Tests =====================--------------------
// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// Виклик historyService.getOrdersLog()
// повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails()
// повертає масив всіх унікальних поштових адрес з властивості orders
// Виклик historyService.getOrdersByEmail("solomon@topmail.net")
// повертає[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Виклик historyService.getOrdersByEmail("artemis@coldmail.net")
// повертає[{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this

// //  --------------------===================== Result =====================--------------------

// // Before

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

// // After

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     getOrdersLog() {
//         return this.orders
//             .map((order) => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map((order) => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter((order) => order.email === email);
//     },
// };



// ###########################################################################################################################################################

// // ==========================================Task-4
// ПРОТОТИП ОБ'ЄКТА
// Об'єкти можна організувати у ланцюжки таким чином,
// щоб здійснювався автоматичний пошук властивості в іншому об'єкті,не знайденої в одному об'єкті.
// Сполучною ланкою виступає спеціальна прихована властивість[[Prototype]], яка в консолі браузера відображається як __proto__.

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.
// Об'єкт, на який вказує посилання в __proto__, називається прототипом.
// У нашому прикладі об'єкт animal - це прототип для об'єкта dog.Метод isPrototypeOf() перевіряє,
// чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog.
// Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog,
// не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__,
// тобто, у цьому випадку, в об'єкті animal - його прототипі.

// Тобто прототип - це резервне сховище властивостей і методів об'єкта,
// що автоматично використовується під час їх пошуку.
// Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

// Пошук властивості виконується до першого збігу.
// Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__,
// тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу.
// Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.

// //  --------------------===================== Сonditions =====================--------------------
// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// //  --------------------===================== Tests =====================--------------------
// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()

// //  --------------------===================== Result =====================--------------------

// // Before

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// // Change code below this line
// const child = {};
// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// // After

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;



// ###########################################################################################################################################################

// // ==========================================Task-5
// ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ

// //  --------------------===================== Сonditions =====================--------------------
// Зміни код, побудувавши ланцюжок прототипів таким чином,
// щоб об'єкт ancestor був прототипом для parent,
// а той, своєю чергою, був прототипом для child.

// //  --------------------===================== Tests =====================--------------------
// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()

// //  --------------------===================== Result =====================--------------------

// // Before

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line
// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;
// // Change code above this line

// // After

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;



// ###########################################################################################################################################################

// // ==========================================Task-6
// ОГОЛОШЕННЯ КЛАСУ
// Синтаксис літерала об'єкта дозволяє створити один об'єкт.
// Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей,
// але різними значеннями і методами для взаємодії з ними.
// Все це потрібно робити динамічно, під час виконання програми.
// З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло.
// Класи прийнято називати з великої літери, а у назві відображати тип об'єкта(іменник), що створюється.

// class User {
//     // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// //  --------------------===================== Сonditions =====================--------------------
// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// //  --------------------===================== Tests =====================--------------------
// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт

// //  --------------------===================== Result =====================--------------------

// class Car {
//     // Тіло класу
// }



// ###########################################################################################################################################################

// // ==========================================Task-7
// КОНСТРУКТОР КЛАСУ
// Для ініціалізації екземпляра в класі є метод constructor.
// Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//     // Синтаксис оголошення методу класу
//     constructor(name, email) {
//         // Ініціалізація властивостей екземпляра
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта.
// Тобто this всередині конструктора буде посилатися на новостворений об'єкт.
// Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями,
// тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// //  --------------------===================== Сonditions =====================--------------------
// Додай класу Car метод constructor, який приймає три параметри:
// brand - марка автомобіля.
//     model - модель автомобіля.
//          price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price,
// значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// //  --------------------===================== Tests =====================--------------------
// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan", "Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// //  --------------------===================== Result =====================--------------------

// // Before

// class Car {
//     // Change code above this line
// }

// // After

// class Car {
//     // Синтаксис оголошення методу класу
//     constructor(brand, model, price) {
//         // Ініціалізація властивостей екземпляра
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }



// ###########################################################################################################################################################

// // ==========================================Task-8
// ОБ'ЄКТ ПАРАМЕТРІВ
// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// Якщо параметрів багато(більше 2 - х), то, як правило, застосовують патерн «Об'єкт параметрів».
// Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями.
// Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//     // Деструктуризуємо об'єкт
//     constructor({ name, email }) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//     name: "Poly",
//     email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// //  --------------------===================== Сonditions =====================--------------------
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
// Деструктуризуй об'єкт в сигнатурі(підписі) конструктора.

// //  --------------------===================== Tests =====================--------------------
// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })
// утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 })
// утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// //  --------------------===================== Result =====================--------------------

// // Before

// class Car {
//     // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code above this line
// }

// // After

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }



// ###########################################################################################################################################################

// // ==========================================Task-9
// МЕТОДИ КЛАСУ
// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
//     Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class User {
//     constructor({ name, email }) {
//         this.name = name;
//         this.email = email;
//     }

//     // Метод getEmail
//     getEmail() {
//         return this.email;
//     }

//     // Метод changeEmail
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }

// //  --------------------===================== Сonditions =====================--------------------
// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

// //  --------------------===================== Tests =====================--------------------
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// //  --------------------===================== Result =====================--------------------

// // Before

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code above this line
// }

// // After

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }



// ###########################################################################################################################################################

// // ==========================================Task-10
// ЗАДАЧА: СКЛАД

// //  --------------------===================== Сonditions =====================--------------------
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.

// //  --------------------===================== Tests =====================--------------------
// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Об'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив["Nanitoids", "Antigravitator", "Droid"]

// //  --------------------===================== Result =====================--------------------

// // Before

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // After

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// ###########################################################################################################################################################

// // ==========================================Task-11
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ

// //  --------------------===================== Сonditions =====================--------------------
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
// який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.

// //  --------------------===================== Tests =====================--------------------
// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок.
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
//     Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// //  --------------------===================== Result =====================--------------------

// // Before

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // After

// class StringBuilder {
//     value;
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="





























// ###########################################################################################################################################################

// // ==========================================Task-25

// //  --------------------===================== Сonditions =====================--------------------

// //  --------------------===================== Tests =====================--------------------

// //  --------------------===================== Result =====================--------------------

// // Before


// // After