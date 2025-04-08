// Система освещения
class LightingSystem {
    turnOn() {
        console.log("Освещение включено.");
    }

    turnOff() {
        console.log("Освещение выключено.");
    }

    setDimmed() {
        console.log("Освещение приглушено.");
    }
}

// Система климат-контроля
class ClimateControlSystem {
    setComfortableTemperature() {
        console.log("Установлена комфортная температура.");
    }

    setLowTemperature() {
        console.log("Температура снижена.");
    }

    setPartyMode() {
        console.log("Климат-режим для вечеринки установлен.");
    }
}

// Система безопасности
class SecuritySystem {
    activateAlarm() {
        console.log("Сигнализация включена.");
    }

    deactivateAlarm() {
        console.log("Сигнализация выключена.");
    }
}

// Мультимедийная система
class MultimediaSystem {
    playMusic() {
        console.log("Музыка включена.");
    }

    stopMusic() {
        console.log("Музыка выключена.");
    }
}

// Фасад
class SmartHomeFacade {
    constructor() {
        this.lightingSystem = new LightingSystem();
        this.climateControlSystem = new ClimateControlSystem();
        this.securitySystem = new SecuritySystem();
        this.multimediaSystem = new MultimediaSystem();
    }

    // Режим "Я дома"
    homeMode() {
        this.lightingSystem.turnOn();
        this.climateControlSystem.setComfortableTemperature();
        this.securitySystem.deactivateAlarm();
        return ["Свет включен", "Комфортная температура установлена", "Сигнализация выключена"];
    }

    // Режим "Я ухожу"
    awayMode() {
        this.lightingSystem.turnOff();
        this.multimediaSystem.stopMusic();
        this.securitySystem.activateAlarm();
        return ["Свет выключен", "Музыка выключена", "Сигнализация включена"];
    }

    // Режим "Вечеринка"
    partyMode() {
        this.lightingSystem.setDimmed();
        this.multimediaSystem.playMusic();
        this.climateControlSystem.setPartyMode();
        return ["Освещение приглушено", "Музыка играет", "Климат-режим для вечеринки установлен"];
    }

    // Режим "Ночь"
    nightMode() {
        this.lightingSystem.turnOff();
        this.climateControlSystem.setLowTemperature();
        this.securitySystem.activateAlarm();
        return ["Основное освещение выключено", "Температура снижена", "Сигнализация включена"];
    }

    // Получение статуса всех систем
    getAllSystemsStatus() {
        return "Системы: Освещение, Климат-контроль, Безопасность, Мультимедиа";
    }
}

// Клиентский код
function main() {
    console.log("=== Тестирование паттерна Фасад для умного дома ===");

    // Создаем экземпляр фасада
    const smartHome = new SmartHomeFacade();

    // Проверяем начальное состояние
    console.log("\n1. Начальное состояние всех систем:");
    console.log(smartHome.getAllSystemsStatus());

    // Проверяем режим "Я дома"
    console.log("\n2. Активация режима 'Я дома':");
    let homeResults = smartHome.homeMode();
    homeResults.forEach(result => console.log(` - ${result}`));

    console.log("\n   Состояние систем после активации режима 'Я дома':");
    console.log(smartHome.getAllSystemsStatus());

    // Проверяем режим "Вечеринка"
    console.log("\n3. Активация режима 'Вечеринка':");
    let partyResults = smartHome.partyMode();
    partyResults.forEach(result => console.log(` - ${result}`));

    console.log("\n   Состояние систем после активации режима 'Вечеринка':");
    console.log(smartHome.getAllSystemsStatus());

    // Проверяем режим "Ночь"
    console.log("\n4. Активация режима 'Ночь':");
    let nightResults = smartHome.nightMode();
    nightResults.forEach(result => console.log(` - ${result}`));

    console.log("\n   Состояние систем после активации режима 'Ночь':");
    console.log(smartHome.getAllSystemsStatus());

    // Проверяем режим "Я ухожу"
    console.log("\n5. Активация режима 'Я ухожу':");
    let awayResults = smartHome.awayMode();
    awayResults.forEach(result => console.log(` - ${result}`));

    console.log("\n   Состояние систем после активации режима 'Я ухожу':");
    console.log(smartHome.getAllSystemsStatus());

    console.log("\n=== Тестирование завершено ===");
}

main();
