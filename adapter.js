// Интерфейс DataSource
class DataSource {
    read_data() {
        throw new Error("Метод read_data должен быть реализован");
    }
}

// Класс для чтения данных из текстового файла
class FileDataSource extends DataSource {
    constructor(filePath) {
        super();
        this.filePath = filePath;
    }

    read_data() {
        // Здесь вместо реального чтения файла мы возвращаем симулированные данные
        return `Данные из файла ${this.filePath}`;
    }
}

// Класс для чтения данных из базы данных
class DatabaseDataSource {
    constructor(connectionString) {
        this.connectionString = connectionString;
    }

    fetch_data() {
        // Здесь вместо реального подключения к базе данных мы возвращаем симулированные данные
        return `Данные из базы данных с подключением: ${this.connectionString}`;
    }
}

// Адаптер для работы с DatabaseDataSource через интерфейс DataSource
class DatabaseAdapter extends DataSource {
    constructor(databaseDataSource) {
        super();
        this.databaseDataSource = databaseDataSource;
    }

    read_data() {
        // Используем fetch_data() из DatabaseDataSource
        return this.databaseDataSource.fetch_data();
    }
}

// Пример использования

// Чтение данных из текстового файла
const file_source = new FileDataSource("data.txt");
console.log(file_source.read_data());  // Вывод: Данные из файла data.txt

// Чтение данных из базы данных через адаптер
const database_source = new DatabaseDataSource("database_connection_string");
const database_adapter = new DatabaseAdapter(database_source);
console.log(database_adapter.read_data());  // Вывод: Данные из базы данных с подключением: database_connection_string
