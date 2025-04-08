// Компоненты автомобиля

class Engine {
    constructor(type) {
        this.type = type;
    }
}

class Transmission {
    constructor(type) {
        this.type = type;
    }
}

class Body {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

class Wheels {
    constructor(size) {
        this.size = size;
    }
}

// Класс Car, представляющий готовый автомобиль
class Car {
    constructor(engine, transmission, body, wheels) {
        this.engine = engine;
        this.transmission = transmission;
        this.body = body;
        this.wheels = wheels;
    }

    showDetails() {
        console.log(`Автомобиль с двигателем: ${this.engine.type}, 
            коробкой передач: ${this.transmission.type}, 
            кузовом: ${this.body.type} (цвет: ${this.body.color}), 
            колесами: ${this.wheels.size} дюймов.`);
    }
}

// Абстрактный строитель автомобилей
class CarBuilder {
    setEngine() {
        throw new Error("Метод setEngine должен быть реализован");
    }

    setTransmission() {
        throw new Error("Метод setTransmission должен быть реализован");
    }

    setBody() {
        throw new Error("Метод setBody должен быть реализован");
    }

    setWheels() {
        throw new Error("Метод setWheels должен быть реализован");
    }

    getCar() {
        throw new Error("Метод getCar должен быть реализован");
    }
}

// Конкретный строитель для седана
class SedanBuilder extends CarBuilder {
    constructor() {
        super();
        this.car = new Car();
    }

    setEngine() {
        this.car.engine = new Engine("V4");
    }

    setTransmission() {
        this.car.transmission = new Transmission("Автоматическая");
    }

    setBody() {
        this.car.body = new Body("Седан", "Синий");
    }

    setWheels() {
        this.car.wheels = new Wheels(16);
    }

    getCar() {
        return this.car;
    }
}

// Конкретный строитель для внедорожника
class SUVBuilder extends CarBuilder {
    constructor() {
        super();
        this.car = new Car();
    }

    setEngine() {
        this.car.engine = new Engine("V6");
    }

    setTransmission() {
        this.car.transmission = new Transmission("Ручная");
    }

    setBody() {
        this.car.body = new Body("Внедорожник", "Черный");
    }

    setWheels() {
        this.car.wheels = new Wheels(18);
    }

    getCar() {
        return this.car;
    }
}

// Класс, который использует CarBuilder для построения автомобиля
class CarDirector {
    constructor(builder) {
        this.builder = builder;
    }

    construct_car() {
        this.builder.setEngine();
        this.builder.setTransmission();
        this.builder.setBody();
        this.builder.setWheels();
        return this.builder.getCar();
    }
}

// Пример использования
const sedan_builder = new SedanBuilder();
const director = new CarDirector(sedan_builder);
const sedan = director.construct_car();
console.log("Создан седан:");
sedan.showDetails();

const suv_builder = new SUVBuilder();
const directorSUV = new CarDirector(suv_builder);
const suv = directorSUV.construct_car();
console.log("\nСоздан внедорожник:");
suv.showDetails();
