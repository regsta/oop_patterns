// Базовый класс кофе
class Coffee {
    get_cost() {
        return 5;
    }

    get_description() {
        return "Basic Coffee";
    }
}

// Абстрактный класс декоратора
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this._coffee = coffee;
    }

    get_cost() {
        return this._coffee.get_cost();
    }

    get_description() {
        return this._coffee.get_description();
    }
}

// Декоратор для молока
class MilkDecorator extends CoffeeDecorator {
    get_cost() {
        return this._coffee.get_cost() + 1;
    }

    get_description() {
        return this._coffee.get_description() + ", Milk";
    }
}

// Декоратор для шоколада
class ChocolateDecorator extends CoffeeDecorator {
    get_cost() {
        return this._coffee.get_cost() + 2;
    }

    get_description() {
        return this._coffee.get_description() + ", Chocolate";
    }
}

// Декоратор для карамели
class CaramelDecorator extends CoffeeDecorator {
    get_cost() {
        return this._coffee.get_cost() + 3;
    }

    get_description() {
        return this._coffee.get_description() + ", Caramel";
    }
}

// Клиентский код
const basic_coffee = new Coffee();
console.log(basic_coffee.get_description()); // Basic Coffee
console.log(basic_coffee.get_cost()); // 5

const milk_coffee = new MilkDecorator(basic_coffee);
console.log(milk_coffee.get_description()); // Basic Coffee, Milk
console.log(milk_coffee.get_cost()); // 6

const chocolate_milk_coffee = new ChocolateDecorator(milk_coffee);
console.log(chocolate_milk_coffee.get_description()); // Basic Coffee, Milk, Chocolate
console.log(chocolate_milk_coffee.get_cost()); // 8

const caramel_chocolate_milk_coffee = new CaramelDecorator(chocolate_milk_coffee);
console.log(caramel_chocolate_milk_coffee.get_description()); // Basic Coffee, Milk, Chocolate, Caramel
console.log(caramel_chocolate_milk_coffee.get_cost()); // 11
