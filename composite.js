// Интерфейс FileSystemElement
class FileSystemElement {
    display() {
        throw new Error("Метод display() должен быть реализован");
    }

    get_size() {
        throw new Error("Метод get_size() должен быть реализован");
    }
}

// Класс File (Файл)
class File extends FileSystemElement {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    display() {
        console.log(`File: ${this.name} (Size: ${this.size} bytes)`);
    }

    get_size() {
        return this.size;
    }
}

// Класс Directory (Директория)
class Directory extends FileSystemElement {
    constructor(name) {
        super();
        this.name = name;
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    display() {
        console.log(`Directory: ${this.name}`);
        this.elements.forEach(element => {
            element.display();
        });
    }

    get_size() {
        return this.elements.reduce((total, element) => total + element.get_size(), 0);
    }
}

// Клиентский код
function main() {
    const root = new Directory("root");
    const home = new Directory("home");
    const user = new Directory("user");

    const file1 = new File("file1.txt", 100);
    const file2 = new File("file2.txt", 200);
    const file3 = new File("file3.txt", 300);

    root.add(home);
    home.add(user);
    user.add(file1);
    user.add(file2);
    root.add(file3);

    root.display();
    console.log(`\nTotal size: ${root.get_size()} bytes`);
}

main();
