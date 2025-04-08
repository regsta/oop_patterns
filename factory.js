// Абстрактный класс Animal
class Animal {
    make_sound() {
        throw new Error("Этот метод должен быть реализован в подклассе");
    }
}

// Конкретные классы животных
class Lion extends Animal {
    make_sound() {
        return "Рычание!";
    }
}

class Monkey extends Animal {
    make_sound() {
        return "Визг!";
    }
}

class Elephant extends Animal {
    make_sound() {
        return "Трубление!";
    }
}

// Абстрактная фабрика AnimalFactory
class AnimalFactory {
    create_animal() {
        throw new Error("Этот метод должен быть реализован в подклассе");
    }
}

// Конкретные фабрики для создания животных
class LionFactory extends AnimalFactory {
    create_animal() {
        return new Lion();
    }
}

class MonkeyFactory extends AnimalFactory {
    create_animal() {
        return new Monkey();
    }
}

class ElephantFactory extends AnimalFactory {
    create_animal() {
        return new Elephant();
    }
}

// Функция для взаимодействия с животным
function interact_with_animal(factory) {
    const animal = factory.create_animal();
    console.log("Звук: " + animal.make_sound());
}

// Пример использования
const lion_factory = new LionFactory();
const monkey_factory = new MonkeyFactory();
const elephant_factory = new ElephantFactory();

interact_with_animal(lion_factory);     // Вывод: Звук: Рычание!
interact_with_animal(monkey_factory);   // Вывод: Звук: Визг!
interact_with_animal(elephant_factory); // Вывод: Звук: Трубление!
