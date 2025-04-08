// Прототип заказа
class OrderPrototype {
    constructor() {
        this.order_number = null;
        this.products = [];
        this.total_price = 0.00;
    }

    // Метод для клонирования заказа
    clone() {
        const newOrder = new OrderPrototype();
        newOrder.order_number = this.order_number;
        newOrder.products = [...this.products];  // Копируем массив товаров
        newOrder.total_price = this.total_price;
        return newOrder;
    }
}

// Класс заказа, который использует прототип
class Order {
    constructor(orderPrototype) {
        this.order_number = orderPrototype.order_number;
        this.products = orderPrototype.products;
        this.total_price = orderPrototype.total_price;
    }

    // Метод для добавления товара
    addProduct(product) {
        this.products.push(product);
    }

    // Метод для изменения общей суммы
    updateTotalPrice(price) {
        this.total_price = price;
    }
}

// Пример использования
const prototype_order = new OrderPrototype();
prototype_order.order_number = 1001;
prototype_order.products = ["Product A", "Product B", "Product C"];
prototype_order.total_price = 150.00;

// Создаем новый заказ на основе прототипа
const order1 = new Order(prototype_order.clone());
order1.order_number = 1002;  // Изменяем номер заказа
order1.updateTotalPrice(200.00);  // Изменяем общую сумму заказа

// Создаем еще один новый заказ на основе прототипа
const order2 = new Order(prototype_order.clone());
order2.order_number = 1003;  // Изменяем номер заказа
order2.addProduct("Product D");  // Добавляем новый товар

// Выводим информацию о заказах
console.log("Order 1:");
console.log("Order Number:", order1.order_number);
console.log("Products:", order1.products);
console.log("Total Price:", order1.total_price);

console.log("\nOrder 2:");
console.log("Order Number:", order2.order_number);
console.log("Products:", order2.products);
console.log("Total Price:", order2.total_price);
