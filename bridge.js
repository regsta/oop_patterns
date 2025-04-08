// Интерфейс устройства (Device)
class Device {
    turn_on() {
        throw new Error("Метод turn_on должен быть реализован");
    }

    turn_off() {
        throw new Error("Метод turn_off должен быть реализован");
    }

    set_state(state) {
        throw new Error("Метод set_state должен быть реализован");
    }
}

// Конкретные устройства
class TV extends Device {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    turn_on() {
        console.log(`${this.brand} TV включен`);
    }

    turn_off() {
        console.log(`${this.brand} TV выключен`);
    }

    set_state(state) {
        console.log(`${this.brand} TV переключен на канал: ${state}`);
    }
}

class Light extends Device {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    turn_on() {
        console.log(`${this.brand} лампочка включена`);
    }

    turn_off() {
        console.log(`${this.brand} лампочка выключена`);
    }

    set_state(state) {
        console.log(`${this.brand} лампочка установлена на яркость: ${state}`);
    }
}

// Абстракция пульта управления (RemoteControl)
class RemoteControl {
    constructor(device) {
        this.device = device;
    }

    turn_on() {
        this.device.turn_on();
    }

    turn_off() {
        this.device.turn_off();
    }

    set_state(state) {
        this.device.set_state(state);
    }
}

// Конкретные устройства (производители)
class SonyTV extends TV {
    constructor() {
        super("Sony");
    }
}

class SamsungTV extends TV {
    constructor() {
        super("Samsung");
    }
}

class PhilipsLight extends Light {
    constructor() {
        super("Philips");
    }
}

class IKEALight extends Light {
    constructor() {
        super("IKEA");
    }
}

// Клиентский код
function main() {
    const sony_tv = new SonyTV();
    const samsung_tv = new SamsungTV();
    const philips_light = new PhilipsLight();
    const ikea_light = new IKEALight();

    const remote_for_sony = new RemoteControl(sony_tv);
    const remote_for_samsung = new RemoteControl(samsung_tv);
    const remote_for_philips = new RemoteControl(philips_light);
    const remote_for_ikea = new RemoteControl(ikea_light);

    remote_for_sony.turn_on();
    remote_for_sony.set_state("HBO");
    remote_for_sony.turn_off();

    remote_for_samsung.turn_on();
    remote_for_samsung.set_state("CNN");
    remote_for_samsung.turn_off();

    remote_for_philips.turn_on();
    remote_for_philips.set_state("75%");
    remote_for_philips.turn_off();

    remote_for_ikea.turn_on();
    remote_for_ikea.set_state("50%");
    remote_for_ikea.turn_off();
}

main();
