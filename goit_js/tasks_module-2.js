// ###########################################################################################################################################################

// // ==========================================Task-1
// РАННИЙ ВОЗВРАТ
// В функции может быть больше одного оператора return.
// Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат,
// и весь код после него будет проигнорирован в текущем вызове функции.
// Возьмём уже знакомую нам функцию проверки совершеннолетия.
// Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать.
// В данном случае подойдёт приём(паттерн) «ранний возврат».

// function checkAge(age) {
//     let message;
//     if (age >= 18) {
//         message = "Вы совершеннолетний человек";
//     } else {
//         message = "Вы не совершеннолетний человек";
//     }
//     return message;
// }
// Если условие в if выполняется, то есть приводится к true, возвращаем строку "You are an adult" и код ниже уже не исполнится.
// Если условие в if не выполняется, то есть приводится к false, возвращаем строку "You are a minor".
// Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы избавляемся от лишней переменной и блока else.
// То есть этот приём помогает «разгладить» ветвления.

// //  --------------------===================== Сonditions --------------------=====================
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// //  --------------------===================== Test --------------------=====================
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"
// В теле функции есть только одна инструкция if
// В теле функции нет инструкции else или else if

// // --------------------===================== Result --------------------=====================
// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }
//     return "You are a minor";
// }



// ###########################################################################################################################################################

// // ==========================================Task-2
// ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ(РАННИЙ ВОЗВРАТ)

// //  --------------------===================== Сonditions --------------------=====================
// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// //  --------------------===================== Test --------------------=====================
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// // --------------------===================== Result --------------------=====================

// BEFORE

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!";
//     }
//     return message;
// }

// AFTER

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//     return "Access denied, wrong password!";
// }



// ###########################################################################################################################################################

// // ==========================================Task-3
// ЗАДАЧА: СКЛАД ТОВАРОВ 3.0

// //  --------------------===================== Сonditions --------------------=====================
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
//     available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// //  --------------------===================== Test --------------------=====================
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(150, 0) возвращает "Your order is empty!"

// // --------------------===================== Result --------------------=====================

// BEFORE

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = "Your order is empty!";
//     } else if (ordered > available) {
//         message = "Your order is too large, not enough goods in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
// }

// AFTER

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//          return "Your order is empty!";
//     }
//     if (ordered > available) {
//          return "Your order is too large, not enough goods in stock!";
//     }
//          return "The order is accepted, our manager will contact you";
// }



// ###########################################################################################################################################################

// // ==========================================Task-4
// СОЗДАНИЕ МАССИВА
// Массив используется для хранения упорядоченной коллекции элементов.
// Он объявляется открывающей и закрывающей квадратной скобками[] - литералом массива.
// Внутри скобок каждый элемент массива разделяется запятой.

// const planets = ["Earth", "Mars", "Venus"];
// Полезно
// При объявлении переменной для объекта или массива программисты обычно используют const.
// Они делают это для того, чтобы случайно не перезаписать значение,
// т.к.попытка перезаписи вызовет ошибку до того как код попадет к пользователю.

// //  --------------------===================== Сonditions --------------------=====================
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// //  --------------------===================== Test --------------------=====================
// Объявлена переменная fruits
// Значение переменной fruits это массив["apple", "plum", "pear", "orange"]

// // --------------------===================== Result --------------------=====================
// const fruits = ["apple", "plum", "pear", "orange"];



// ###########################################################################################################################################################

// // ==========================================Task-5
// ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ
// Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс].
// Между именем переменной массива и квадратными скобками не должно быть пробела.
// Внимание
// Индексация элементов массива начинается с нуля.

// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"

// //  --------------------===================== Сonditions --------------------=====================
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// //  --------------------===================== Test --------------------=====================
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "apple"
// Объявлена переменная secondElement
// Значение переменной secondElement это строка "plum"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "orange"

// // --------------------===================== Result --------------------=====================
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];



// ###########################################################################################################################################################

// // ==========================================Task-6
// ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА
// В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

// //  --------------------===================== Сonditions --------------------=====================
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// //  --------------------===================== Test --------------------=====================
// Объявлена переменная fruits
// Значение переменной fruits это массив["apple", "peach", "pear", "banana"]

// // --------------------===================== Result --------------------=====================
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";



// ###########################################################################################################################################################

// // ==========================================Task-7
// ДЛИНА МАССИВА
// Длина массива, то есть число его элементов, хранится в свойстве length.
// Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.
// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3

// //  --------------------===================== Сonditions --------------------=====================
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// //  --------------------===================== Test --------------------=====================
// Объявлена переменная fruitsArrayLength
// Значение переменной fruitsArrayLength это число 4

// // --------------------===================== Result --------------------=====================
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;



// ###########################################################################################################################################################

// // ==========================================Task-8
// ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА
// Чаще всего, мы заранее в коде не знаем какая будет длина массива.
// Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше,
// чем индекс последнего элемента.Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// //  --------------------===================== Сonditions --------------------=====================
// Объяви две переменные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// //  --------------------===================== Test --------------------=====================
// Объявлена переменная lastElementIndex
// Значение переменной lastElementIndex это число 3
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "banana"

// // --------------------===================== Result --------------------=====================
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];



// ###########################################################################################################################################################

// // ==========================================Task-9
// ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА

// //  --------------------===================== Сonditions --------------------=====================
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// //  --------------------===================== Test --------------------=====================
// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает[1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает["apple", "banana"]

// // --------------------===================== Result --------------------=====================
// function getExtremeElements(array) {
//     let mass = [];
//     mass.push(array[0]);
//     let a = array.length - 1;
//     mass.push(array[a]);
//     return mass;
// }



// ###########################################################################################################################################################

// // ==========================================Task-10
// МЕТОД СТРОК SPLIT()
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter.
// Если разделитель это пустая строка, то получится массив отдельных символов.
// Разделителем может быть один или несколько символов.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

// //  --------------------===================== Сonditions --------------------=====================
// Дополни код функции splitMessage(message, delimeter) так,
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// //  --------------------===================== Test --------------------=====================
// Объявлена функция splitMessage(message, delimeter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает["best", "for", "week"]

// // --------------------===================== Result --------------------=====================

// BEFORE

// function splitMessage(message, delimeter) {
//     let words;
//     return words;
// }

// AFTER

// function splitMessage(message, delimeter) {
//     return message.split(delimeter);
// }



// ###########################################################################################################################################################

// // ==========================================Task-11
// ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ

// //  --------------------===================== Сonditions --------------------=====================
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message)
// и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// //  --------------------===================== Test --------------------=====================
// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// // --------------------===================== Result --------------------=====================
// function calculateEngravingPrice(message, pricePerWord) {
//     let newPrice = message.split(" ");
//     let priceLenght = newPrice.length;
//     return priceLenght * pricePerWord;
// }



// ###########################################################################################################################################################

// // ==========================================Task-12
// МЕТОД МАСИВУ JOIN()
// Метод масивів join(delimeter) дозволяє з'єднати елементи масиву в рядок.
// У рядку елементи будуть розділені символом або групою символів, зазначених у delimeter.
// Тобто це зворотна операція методу рядків split(delimeter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// //  --------------------===================== Сonditions --------------------=====================
// Доповни код функції makeStringFromArray(array, delimeter) таким чином, щоб вона повертала у змінній string
// результат з'єднання елементів масиву array з роздільником delimeter - рядок.

// //  --------------------===================== Test --------------------=====================
// Оголошена функція makeStringFromArray(array, delimeter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// // --------------------===================== Result --------------------=====================
// function makeStringFromArray(array, delimeter) {
//     let string;
//     string = (array.join(delimeter));
//     return string;
// }



// ###########################################################################################################################################################

// // ==========================================Task-13
// ЗАДАЧА: ГЕНЕРАТОР SLUG

// //  --------------------===================== Сonditions --------------------=====================
// Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується у веб - розробці для створення читабельних URL - адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна зробити slug з назви статті.
// В результаті адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-begginers.
//         Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// //  --------------------===================== Test --------------------=====================
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// // --------------------===================== Result --------------------=====================
// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
// }
// slugify("Arrays for begginers")



// ###########################################################################################################################################################

// // ==========================================Task-14
// МЕТОД SLICE()
// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.
// Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
// Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
// Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// //  --------------------===================== Сonditions --------------------=====================
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
//     firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// //  --------------------===================== Test --------------------=====================
// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// // --------------------===================== Result --------------------=====================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);



// ###########################################################################################################################################################

// // ==========================================Task-15
// МЕТОД CONCAT()
// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// //  --------------------===================== Сonditions --------------------=====================
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// //  --------------------===================== Test --------------------=====================
// Оголошена змінна oldClients
// Значення змінної oldClients - це масив["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// // --------------------===================== Result --------------------=====================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// // let oldClients = oldClients.join(" ");
// // let newClients = newClients.join(" ");
// const allClients = oldClients.concat(newClients);



// ###########################################################################################################################################################

// // ==========================================Task-16
// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ

// //  --------------------===================== Сonditions --------------------=====================
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray.
// Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
// В іншому випадку функція повинна повернути новий масив повністю.

// //  --------------------===================== Test --------------------=====================
// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає[]
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// // --------------------===================== Result --------------------=====================
// function makeArray(firstArray, secondArray, maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
// }



// ###########################################################################################################################################################

// // ==========================================Task-17
// ЦИКЛ FOR
// Цикли використовуються для багаторазового повторення коду.Оголошення циклу for складається з трьох виразів.
//     for(Ініціалізація; Умова; Пост - вираз) {
// }
// Ініціалізація - виконується один раз перед початком циклу.Використовується для створення змінної - лічильника і встановлення її початкового значення.
//     Умова - вираз, що оцінюється перед кожною ітерацією(повторенням) циклу.Тіло циклу виконується тільки тоді, коли вираз приводиться до true.
// Цикл завершується, якщо значення буде false.
// Пост - вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови.Використовується для оновлення змінної - лічильника.
// Тіло - набір інструкцій для виконання на кожному повторенні.Виконується, якщо вираз умови приводиться до true.
// for(let i = 0; i <= 20; i += 5) {
// console.log(i);
// }
// В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується(його тіло) доти, доки i <= 20, тобто умова приводиться до true.
// Після кожної ітерації лічильник збільшується на 5.

// //  --------------------===================== Сonditions --------------------=====================
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// //  --------------------===================== Test --------------------=====================
// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// // --------------------===================== Result --------------------=====================
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//     console.log(i);
// }



// ###########################################################################################################################################################

// // ==========================================Task-18
// ЗАДАЧА: СУМА ЧИСЕЛ(ЦИКЛ FOR)

// //  --------------------===================== Сonditions =====================--------------------

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number)
// і повертає суму всіх цілих чисел від одиниці і до цього числа.
//     Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// //  --------------------===================== Tests =====================--------------------

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// //  --------------------===================== Result =====================--------------------

// // Before

// function calculateTotal(number) {
//     // Change code above this line
// }

// // After

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         console.log(number[i]);
//         total += i;
//     }
//     return total;
// }



// ###########################################################################################################################################################

// // ==========================================Task-19

// //  --------------------===================== Сonditions =====================--------------------

// //  --------------------===================== Tests =====================--------------------

// //  --------------------===================== Result =====================--------------------

// // Before


// // After










// ###########################################################################################################################################################

// // ==========================================Task-41

// //  --------------------===================== Сonditions =====================--------------------

// //  --------------------===================== Tests =====================--------------------

// //  --------------------===================== Result =====================--------------------

// // Before


// // After



























// ###########################################################################################################################################################
// //  --------------------===================== TASKS --------------------=====================

// ------------------------------Задача 1------------------------------------
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log(checkAge(15));

// ------------------------------Задача 2------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam'));

// ------------------------------Задача 3------------------------------------
// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(2000, 100));

// ------------------------------Задача 4------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// ------------------------------Задача 5------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement); //orange

// ------------------------------Задача 6------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits); // ['apple', 'peach', 'pear', 'banana']

// ------------------------------Задача 7------------------------------------
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength); // 4

// ------------------------------Задача 8------------------------------------
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); //3
// console.log(lastElement); //banana

// ------------------------------Задача 9------------------------------------
// function getExtremeElements(array) {
//   const arrayLength = array.length;

//   const arrayPartDel = arrayLength - 2;

//   array.splice(1, arrayPartDel);
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// ------------------------------Задача 10------------------------------------
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);

//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' ')); // ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage('Mango', '')); // ["M", "a", "n", "g", "o"]
// console.log(splitMessage('best_for_week', '_')); // ["best", "for", "week"]

// ------------------------------Задача 11------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100
// console.log(calculateEngravingPrice('Web-development is creative work', 40)); // 160
// console.log(calculateEngravingPrice('Web-development is creative work', 20)); // 80

// ------------------------------Задача 12------------------------------------
// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }
// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')); // "Mango hurries to the train"
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // "Mango"
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // "top_picks_for_you"

// ------------------------------Задача 13------------------------------------
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Arrays for begginers'));
// ------------------------------Задача 14------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, [fruits.length - 1]);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls); // ['plum', 'pear', 'orange']

// ------------------------------Задача 15------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {

//   const allArray = firstArray.concat(secondArray);

//   if (allArray.length > maxLength) {
//     return allArray.slice(0, maxLength);
//   }
//   return allArray;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ['Mango', 'Poly', 'Ajax']
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ['Mango', 'Poly', 'Houston', 'Ajax']
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ['Mango', 'Ajax', 'Chelsea']
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// ------------------------------Задача 16------------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ------------------------------Задача 17------------------------------------
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(7)); // 28

// ------------------------------Задача 18------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ------------------------------Задача 19------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

// ------------------------------Задача 20------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// ------------------------------Задача 21------------------------------------
// function findLongestWord(string) {
//
//   const arr = string.split(' ');
//   // console.log(arr); // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
//   let wordMaxLength = arr[0];
//   // console.log(wordMaxLength);
//   for (const word of arr) {
//     // console.log(word);
//     if (word.length > wordMaxLength.length) {
//       wordMaxLength = word;
//       // console.log(word);
//     }
//     wordMaxLength = wordMaxLength;
//   }
//   return wordMaxLength;
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// ------------------------------Задача 22------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   // numbers.push(min);
//   // console.log(numbers);
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     // console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// ------------------------------Задача 23------------------------------------
// function filterArray(numbers, value) {

//   const newArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// ------------------------------Задача 24------------------------------------
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }

// ------------------------------Задача 25------------------------------------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];

//   for (const arr of array1) {
//     console.log(arr);

//     if (array1.includes(arr) && array2.includes(arr)) {
//       array3.push(arr);
//     }
//   }
//   return array3;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ------------------------------Задача 26------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const element of order) {
//     total += element;
//   }

//   return total;
// }

// ------------------------------Задача 27------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// ------------------------------Задача 28------------------------------------
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// ------------------------------Задача 29------------------------------------
// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]

// ------------------------------Задача 30------------------------------------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ------------------------------Задача 31------------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   // Change code above this line
// }

// ------------------------------Задача 32------------------------------------
// function includes(array, value) {
//   for (const arr of array) {
//     console.log(arr);
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3)); // [true]






















// ###########################################################################################################################################################

// // ==========================================Task-

// //  --------------------===================== Сonditions --------------------=====================

// //  --------------------===================== Test --------------------=====================

// // --------------------===================== Result --------------------=====================
