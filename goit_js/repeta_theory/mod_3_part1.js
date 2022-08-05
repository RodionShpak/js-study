/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */


// const playlist = {  // {} - литерал обьекта
//     name: [1, 2, 3],  // name - ключ // [] - свойства (значение) обьекта
//     b: 5,   // b: - ключ // 5 - свойство
//     c: 10  // с: - ключ // 10 - свойство
// };

///************* Как отличить объект от области видимости **************///
// const x = {};

// const fn = function (myObject) {
//     // myObject = {a: 1, b: 2}
//     console.log(myObject);
// };

// fn({ a: 1, b: 2 });

///************* Как отличить объект от области видимости **************///

// const rtfm = function () {
//     return { a: 5 };
// };

// console.log(rtfm());

/* Доступ к свойству
//     * - obj.key
//     * - obj['key']
//     * - Отсутствующие свойства
*/

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,

// playlist.qwe = 5; // добавляем новое свойсвто в уже существующий
// массив если такое свойство уже сть оно перезаписывается


//****** ключ свойства всегда строка ******//

// console.log(playlist);
// console.log(playlist.name); // получаем доступ через ключ к значению
// console.log(playlist.tracks);  // ['трек-1', 'трек-2', 'трек-3']
// console.log(playlist.trackCount);  // 3

////****** имя свойства хранится в переменной ******////

// const propertyName = 'tracks';

// console.log(playlist.propertyName);  // undefined

//****** как достучаться до свойства ******//

// console.log(playlist.rating);  // 5
// console.log(playlist['rating']);  // 5

// console.log(playlist.propertyName); // undefined
// console.log(playlist[propertyName]); // ['трек-1', 'трек-2', 'трек-3']

// /*
//  * Короткая запись свойств
//  */

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//     // username: username,
//     username,  // запись покороче если имя ключа совпадает с именем переменной
//     // email: email,
//     email,  // запись покороче если имя ключа совпадает с именем переменной
// };

// console.log(signupData);

// /*
//  * Вычисляемые свойства
//  */

// <input name="color" value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     // [inputName]: 5  // подставляем значение 5 в имя переменной
//     [inputName]: inputValue,  // подставляем значение inputValue в имя переменной
// };

// console.log(colorPickerData); // color: 5
// console.log(colorPickerData); // color: tomato

// /*
//  * Ссылочный тип {} === {}
//  */

// console.log({ a: 1, y: 2 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a); // { x: 1, y: 2, c: 100 }
// console.log(b); // { x: 1, y: 2, c: 100 }


// /*
//  * Массивы и функции это объекты
//  */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a); // [1, 2, 3, hello: ':)']

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ':)';

// console.dir(fn.hello);  // :)

// const a = [1, 2, 3];

// a.push(4);

// console.log(a); // [1, 2, 3, 4]



// ------------------ Методы объекта и this при обращении к свойствам в методах ------------------ //
/*
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

///********** old school *********///*

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName: function () {     /// метод
//         console.log('Ага это getName :)');
//     },
// };

// // console.log(playlist);

// playlist.getName(5); // Ага это getName:)

///********** new school *********///*

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName() {
//         console.log('Ага это getName :)'); // Ага это getName :)
//     },
// };

// // console.log(playlist);

///********** изменяем имя свойства обьекта *********///*

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     chageName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName; // меняем имя с 'Мой супер плейлист' на 'Новое имя'
//     },
//     addTrack(track) {
//         this.tracks.push(track); // добавляем новый трек
//         // this.trackCount = this.tracks.length; // меняем trackCount
//     },
//     updateRating(newRating) {
//         this.rating = newRating; // изменяем рейтинг
//     },
//     getTrackCount() {
//         return this.tracks.length; // возвращает текущую длину массива
//     },
// };

// playlist.chageName('Новое имя');
// console.log(playlist);

// // this внутри changeName:  {name: 'Мой супер плейлист', rating: 5, tracks: Array(3), trackCount: 3, chageName: ƒ}
// // { name: 'Новое имя', rating: 5, tracks: Array(3), trackCount: 3, chageName: ƒ }

// playlist.addTrack('Новый трек');
// console.log(playlist);

// // {name: 'Новое имя', rating: 5, tracks: Array(3), trackCount: 3, chageName: ƒ, …}
// // { name: 'Новое имя', rating: 5, tracks: Array(4), trackCount: 3, chageName: ƒ, … }

// playlist.updateRating(4);
// console.log(playlist);

// // { name: 'Новое имя', rating: 5, tracks: Array(4), trackCount: 3, chageName: ƒ, … }
// // { name: 'Новое имя', rating: 4, tracks: Array(4), trackCount: 3, chageName: ƒ, … }



// ------------------ Перебор через for...in и Object.keys|values|entries ------------------ //

/*
 * Перебор через for...in и Object.keys|values|entries
 */

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback); // получаем массив ключей из обьекта feedback
// console.log(keys); // ['good', 'neutral', 'bad']

// for (const key of keys) { // перебираем массив
//     console.log(key); // good neutral bad
// }

// for (const key of keys) { // перебираем массив
//     console.log(key); // good neutral bad
//     console.log(feedback[key]); // получаем значение объекта по ключу
//     ///// good
//     ///// 5
//     ///// neutral
//     ///// 10
//     ///// bad
//     ///// 3
//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);  // totalFeedback:  18

///********** вместо Object.keys (возврат массива ключей) ипсользуем Object.values (возврат массива значений) *********///*

// const values = Object.values(feedback); // возвращает массив значений

// console.log(values); // [5, 10, 3]

// for (const value of values) {
//     console.log(value);
//     ///// 5
//     ///// 10
//     ///// 3

//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback); //  totalFeedback: 18



// ------------------ работа с коллекцией (массив обьектов) ------------------ //

/*
 * Работа с коллекцией (массивом объектов)
 */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// ///// перебираем массив /////
// for (const friend of friends) {
//     console.log(friend);

//     ///// ccылка на оригинальный обьект и добавл.
//     ///// к каждому обьекту свойство 555
//     friend.newprop = 555;
// }

// console.table(friends);


/*
 * Ищем друга по имени
 */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name === name);

//         if (friend.name === friendName) {
//             return 'Нашли!';
//         }
//     }
//     return 'Не нашли! :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// /*
//  * Получаем имена всех друзей
//  */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//     const names = []; // создаем пустой массив

//     for (const friend of friends) { // перебираем массив
//         console.log(friend.name);

//         names.push(friend.name); // пушим каждое имя в пустой массив
//     }
//     // console.log(names); // получаем массив имён

//     return names; // возвращаем уже созданый новый массив ['Mango', 'Kiwi', 'Poly', 'Ajax']
// };

// console.log(getAllNames(friends));


// /*
//  * Получаем имена только друзей которые онлайн
//  */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends; //
// };

// console.log(getOnlineFriends(friends));
// {name: 'Kiwi', online: true}
// {name: 'Ajax', online: true}


// /*
//  * Получаем имена только друзей которые офлайн
//  */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// console.table(friends);

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// };
// console.log(getOfflineFriends(friends));
// //  {name: 'Mango', online: false}
// //  {name: 'Poly', online: false}


/*
// // создать 2 массива онлайн и офлайн?
// // если тру - в первый, если нет - во второй
*/

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };
//     // for (const friend of allFriends) {
//     //     if (friend.online) {
//     //         friendsByStatus.online.push(friend);
//     //     } else {
//     //         friendsByStatus.offline.push(friend);
//     //     }
//     // }

//     //// или можно и так ////

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));
// // {name: 'Mango', online: false} - offline
// // {name: 'Poly', online: false} - offline
// // {name: 'Kiwi', online: true} - online
// // {name: 'Ajax', online: true} - online

//// как узнать колличество свойств в этом объекте? ////

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100
// };

// console.log(Object.keys(x).length); // 4



/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */


const cart = {
    items: [],
    getItems() { },
    add(product) { },
    remove(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());




















