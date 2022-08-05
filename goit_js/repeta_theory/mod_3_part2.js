
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
    getItems() { }, // при вызове возващает ссылку на items
    add(product) { }, // при вызове добавляет items в массив
    remove(productName) { }, // при вызове удаляет из items обьект
    clear() { }, // при вызове очищает массив
    countTotalPrice() { }, // при вызове выводит общую цену товаров в корзине 
    increaseQuantity(productName) { }, // при вызове уменьшает колличество товаров в корзине
    decreaseQuantity(productName) { }, // при вызове увеличивает колличество товаров в корзине
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