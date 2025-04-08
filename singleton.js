class GameSettings {
    // Приватное статическое свойство для хранения единственного экземпляра
    static instance = null;

    constructor() {
        if (GameSettings.instance) {
            // Если экземпляр уже существует, возвращаем его
            return GameSettings.instance;
        }

        // Если экземпляра еще нет, создаем новый
        this.volume = 50;
        this.difficulty = "Normal";
        
        // Сохраняем текущий экземпляр
        GameSettings.instance = this;
    }

    // Метод для получения экземпляра
    static get_instance() {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }
}

// Пример использования
const settings1 = GameSettings.get_instance();
const settings2 = GameSettings.get_instance();

console.log(settings1 === settings2);  // true

settings1.volume = 70;
settings1.difficulty = "Hard";

console.log(settings2.volume);        // 70
console.log(settings2.difficulty);    // Hard
