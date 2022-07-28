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
//     value = Math.round(value * 1.);
// }

// console.log(cart); //  [59, 31, 116, 77, 101, 19, 132]


















