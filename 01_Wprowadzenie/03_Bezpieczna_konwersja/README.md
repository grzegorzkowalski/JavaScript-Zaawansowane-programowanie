### Zadania rozwiązuj w odpowiednim folderze w pliku main.js. Wynik sprawdzaj w konsoli.

## Zadanie 1

1. Utwórz funkcję `safeConvertToNumber`, która przyjmuje jeden argument i bezpiecznie konwertuje go na typ liczbowy.
1. Funkcja powinna obsługiwać przypadki, gdy argument jest już liczbą, stringiem reprezentującym liczbę lub innym typem, który nie może być bezpiecznie przekształcony.
1. Zwróć odpowiednią wartość lub null w przypadku niemożliwej do wykonania konwersji.
1. Przetestuj swoją funkcję z różnymi wartościami.

Przykład:
```js
function safeConvertToNumber(value) {
    // Implementacja
}

console.log(safeConvertToNumber("123")); // 123
console.log(safeConvertToNumber("123abc")); // null
console.log(safeConvertToNumber(123)); // 123
```
