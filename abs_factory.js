// Абстрактный класс Car (автомобиль)
class Car {
    drive() {
        throw new Error("Этот метод должен быть реализован в подклассе");
    }
}

// Конкретные классы автомобилей
class ElectricCar extends Car {
    drive() {
        console.log("Driving an electric car.");
    }
}

class PetrolCar extends Car {
    drive() {
        console.log("Driving a petrol car.");
    }
}

class HybridCar extends Car {
    drive() {
        console.log("Driving a hybrid car.");
    }
}

// Абстрактная фабрика CarFactory
class CarFactory {
    produce_car() {
        throw new Error("Этот метод должен быть реализован в подклассе");
    }
}

// Конкретные фабрики для создания автомобилей
class ElectricCarFactory extends CarFactory {
    produce_car() {
        return new ElectricCar();
    }
}

class PetrolCarFactory extends CarFactory {
    produce_car() {
        return new PetrolCar();
    }
}

class HybridCarFactory extends CarFactory {
    produce_car() {
        return new HybridCar();
    }
}

// Пример использования
const electric_factory = new ElectricCarFactory();
const petrol_factory = new PetrolCarFactory();
const hybrid_factory = new HybridCarFactory();

const electric_car = electric_factory.produce_car();
const petrol_car = petrol_factory.produce_car();
const hybrid_car = hybrid_factory.produce_car();

electric_car.drive(); // Вывод: Driving an electric car.
petrol_car.drive();   // Вывод: Driving a petrol car.
hybrid_car.drive();   // Вывод: Driving a hybrid car.
