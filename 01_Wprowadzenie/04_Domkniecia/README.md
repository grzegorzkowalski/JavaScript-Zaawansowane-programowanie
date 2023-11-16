### Zadania rozwiązuj w odpowiednim folderze w pliku main.js. Wynik sprawdzaj w konsoli.

## Zadanie 1

1. Utwórz funkcję `createCounter`, która wewnątrz ma dwie zmienne  `count = 0` i `operations=0`.
1. Funkcja pozwala na wykonywanie operacji dodawania i odejmowania na zmiennej count, a także śledzi liczbę wykonanych operacji. 
1. Funkcja createCounter powinna zwracać cztery metody:

1. `add(number)`: Dodaje liczbę do aktualnego stanu.
1. `subtract(number)`: Odejmuje liczbę od aktualnego stanu.
1. `getOperationsCount()`: Zwraca liczbę wykonanych operacji.
1. `getCount()`: Zwraca aktualny wynik.
1. Przetestuj wyniki dla kilku operacji.

Przykład:
```js
const counter = createCounter();
counter.add(5);
counter.add(3);
counter.subtract(2);

console.log(counter.getCount()); // Powinno wyświetlić 6
console.log(counter.getOperationsCount()); // Powinno wyświetlić 3
```
