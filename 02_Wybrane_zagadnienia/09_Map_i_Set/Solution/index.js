//Zadanie 1

let books = new Map();
books.set("978-3-16-148410-0", { title: "Tytuł 1", author: "Autor 1", year: 1991 });
// Dodaj więcej książek

function displayBookInfo(isbn) {
    if (books.has(isbn)) {
        console.log(books.get(isbn));
    } else {
        console.log("Książka nie znaleziona.");
    }
}

displayBookInfo("978-3-16-148410-0");

//Zadanie 2
let phoneNumbers = new Set();
phoneNumbers.add("+48123456789");
// Dodaj więcej numerów

function displayPhoneNumbers() {
    phoneNumbers.forEach(phone => console.log(phone));
}
