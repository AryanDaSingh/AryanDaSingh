class Books {
    static #bookList = [];
    #book;
    #id;

    constructor(book) {
        this.#book = book;
        this.#id = this.#getRandId();
        this.#addBookToList();
    }

    static logBookList() {
        for (let row = 0; row < Books.#bookList.length; row++) {
                console.log(`Book ${row + 1}: Title: ${Books.#bookList[row][0]}; ID: ${Books.#bookList[row][1]};`);
        }
    }

    #addBookToList() {
        const bookRow = [this.#book, this.#id];
        Books.#bookList.push(bookRow);
    }
    
    #getRandId() {
        return crypto.randomUUID();
    }
}

const my_book = new Books("What they teach you at Harvard business school");
const my_second_book = new Books("What they don't teach you at Harvard business school")
Books.logBookList();

console.log("These two books contain the sum of all human knowledge");