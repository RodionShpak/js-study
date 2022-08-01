// ###########################################################################################################################################################

// // ==========================================Task-1
// Доступ до багатовимірних масивів за допомогою індексів
// Багатовимірні масиви можна також описати як масиви в масивах.Коли ви використовуєте дужки для доступу до масиву,
// перша пара дужок відноситься до матеріалів зовнішнього(перший рівень) масиву,
//     і кожна додаткова пара дужок стосується наступного рівня матеріалів.

//     Наприклад

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
// ];

// arr[3];
// arr[3][0];
// arr[3][0][1];
// arr[3] є[[10, 11, 12], 13, 14], arr[3][0] є[10, 11, 12], і arr[3][0][1] є 11.

// Примітка: ніколи не вставляйте пробіл між ім'ям масиву і квадратними дужками,
// наприклад, так array[0][0] і навіть так array[0][0] не можна робити.
// Незважаючи на те, що для JavaScript це є дрібницею, ця звичка може ускладнити читання коду іншими програмістами.

// // // --------------------===================== Conditions =====================--------------------
// За допомогою квадратних дужок виберіть елемент із myArray таким чином, щоб myData дорівнював 8.

// // // --------------------===================== Tests =====================--------------------
// myData має дорівнювати 8.
// Waiting:Ви маєте використовувати квадратні дужки, щоб зчитати правильне значення з myArray.

// // // --------------------===================== Result =====================--------------------
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];



// ###########################################################################################################################################################

// // ==========================================Task-2
// Керування масивами за допомогою push()
// Найпростіший спосіб додати дані до кінця масиву - це використати функцію push().

// .push() приймає один або більше parameters і "виштовхує" їх в кінець масиву.

//     Приклади:

// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1 зараз набуває значення[1, 2, 3, 4] та arr2 набуває значення["Stimpson", "J", "cat", ["happy", "joy"]].

// // // --------------------===================== Conditions =====================--------------------
// Виштовхніть["dog", 3] в кінець змінної myArray.

// const myArray = [["John", 23], ["cat", 2]];

// // // --------------------===================== Tests =====================--------------------
// myArray тепер має дорівнювати[["John", 23], ["cat", 2], ["dog", 3]].

// // // --------------------===================== Result =====================--------------------
// const myArray = [["John", 23], ["cat", 2]];

// // Змініть код лише під цим рядком
// myArray.push(["dog", 3]);



// ###########################################################################################################################################################

// // ==========================================Task-3
// Керування масивами за допомогою pop()
// Іншим способом змінити дані у масиві можна за допомогою функції.pop().

// .pop() використовується для виведення значення з кінця масиву.Ми можемо зберігати значення, яке виводиться, присвоюючи його змінній.
// Іншими словами, .pop() видаляє останній елемент з масиву і повертає цей елемент.

//     Будь - який тип запису може бути виведений з масиву - цифри, рядки, навіть вкладені масиви.

// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// Перший console.log відображатиме значення 6, а другий - значення[1, 4].

// // // --------------------===================== Conditions =====================--------------------
// Використовуйте функцію.pop(), щоб видалити останній елемент з myArray та призначити значення, яке виводиться для removedFromMyArray.

// // // --------------------===================== Tests =====================--------------------
// myArray повинен містити лише[["John", 23]].
// Waiting:Вам слід використовувати pop() на myArray.
// Waiting:removedFromMyArray повинен містити лише["cat", 2].

// // // --------------------===================== Result =====================--------------------
// const myArray = [["John", 23], ["cat", 2]];
// // Змініть код лише під цим рядком
// const removedFromMyArray = myArray.pop();



// ###########################################################################################################################################################

// // ==========================================Task-4
// Керування масивами за допомогою shift()
// pop() завжди видаляє останній елемент масиву.А якщо ти хочеш видалити перший ?

//     Саме тут нам на допомогу може прийти.shift().Це працює точно так як.pop(),
//         за винятком того, що видаляє перший елемент замість останнього.

//         Наприклад:

// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArray матиме значення рядка Stimpson та ourArray отримає["J", ["cat"]].

// // // --------------------===================== Conditions =====================--------------------
// Використовуйте функцію.shift(), щоб видалити перший елемент з myArray
// та призначивши значення "викреслено" для нової змінної removedFromMyArray.

// // // --------------------===================== Tests =====================--------------------
// myArray має дорівнювати[["dog", 3]].
//     Waiting:removedFromMyArray повинен містити["John", 23].

// // // --------------------===================== Result =====================--------------------
// const myArray = [["John", 23], ["dog", 3]];

// // Змініть код лише під цим рядком
// const removedFromMyArray = myArray.shift();



// ###########################################################################################################################################################

// // ==========================================Task-5
// Керування масивами за допомогою unshift()
// Ви можете не лише shift елементи з початку масиву, ви також можете unshift елементи на початок масиву, тобто додати елементи перед масивом.

// .unshift() працює в точності як.push(), але замість додавання елемента в кінець масиву, unshift() додає елемент на початку масиву.

//     Наприклад:

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// Після shift, ourArray матиме значення["J", "cat"].Після unshift, ourArray матиме значення["Happy", "J", "cat"].

// // // --------------------===================== Conditions =====================--------------------
    // Додайте["Paul", 35] на початок змінної myArray, використовуючи unshift().

// // // --------------------===================== Tests =====================--------------------
// myArray тепер має мати[["Paul", 35], ["dog", 3]].

// // // --------------------===================== Result =====================--------------------
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// // Змініть код лише під цим рядком
// myArray.unshift(["Paul", 35]);



// ###########################################################################################################################################################

// // ==========================================Task-6
// Список покупок
// Створіть список покупок у змінній myList.Список повинен бути багатовимірним масивом, який містить декілька підмасивів.

// Перший елемент у кожному підмасиві повинен містити рядок з назвою одиниці.Другий елемент повинен бути числом, яке відображає кількість.

// ["Chocolate Bar", 15]
// // // --------------------===================== Conditions =====================--------------------
// У списку повинно бути щонайменше 5 підмасивів.

// // // --------------------===================== Tests =====================--------------------
// myList повинен бути масивом.
// Waiting:Першими елементами у кожному з ваших підмасивів повинні бути рядки.
// Waiting:Другими елементами у кожному підмасиві повинні бути числа.
// Waiting:У списку має бути щонайменше 5 одиниць.

// // // --------------------===================== Result =====================--------------------
// const myList = [["Mango", 3], ["Peach", 5], ["Banana", 9], ["Orange", 4], ["Kiwi", 7]];



// ###########################################################################################################################################################

// // ==========================================Task-7

// // // --------------------===================== Conditions =====================--------------------

// // // --------------------===================== Tests =====================--------------------

// // // --------------------===================== Result =====================--------------------


































// ###########################################################################################################################################################

// // ==========================================Task-8

// // // --------------------===================== Conditions =====================--------------------

// // // --------------------===================== Tests =====================--------------------

// // // --------------------===================== Result =====================--------------------








