## Zadanie 1

1. Stwórz funkcję, która w swoim scope będzie posiadała tablicę, niedostępną poza zakresem funkcji.
2. Niech ta funkcja zwraca obiekt zawierający dwie metody.
3. Jedna, która pozwoli na dodawanie do wewnętrznej tablicy liczb pierwszych (wykonaj odpowiednią walidację).
4. Druga, która zwróci tablicę (wykorzystaj mechanizm domknięć).
5. W wykonaniu tego zadania możesz skorzystać z poniższej funkcji sprawdzającej czy liczba jest liczbą pierwszą.
6. Poniższą funkcję `isPrime` przekaż przy tworzeniu nowej instancji obiektu.
```js
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
  return num > 1;
}
```

## Zadanie 2

1. Zapoznaj się z załączonym kodem i zamień go na kod funkcyjny. 
2. Zastanów się jakich funkcji potrzebujesz i jak je napisać, żeby spełniały definicję czystej funkcji.

## Zadanie 3 

1. Poniżej znajduje się tablica z armią fantasy. 
3. Odfiltruj same elfy, dodaj każdemu elfowi plus 10 do szybkości i zwróć łączny wiek elfów. 
   Wykorzystaj do tego wzorzec HOF(funkcje wyższego rzędu) i inne znane Ci dobre praktyki.
   
```js
const fantasticArmy = [
{race: "Elf", name: "Ravalee", age: 150, speed: 100},
{race: "Orc", name: "Xugarf", age: 34, speed: 80},
{race: "Orc", name: "Uram", age: 55, speed: 75},
{race: "Dwarf", name: "Grumpy", age: 111,  speed: 65},
{race: "Elf", name: "Keykalyn", age: 222, speed: 120},
{race: "Elf", name: "Oririe", age: 330, speed: 150}];
```
## Zadanie 4 

1. Napisz funkcję, która posortuje i zwróci tablicę `numbers`. 
2. Pamiętaj o zachowaniu zasad niezmienności (niemutowalności) i czystości funkcji.

## Zadanie 5

1. Wykorzystaj znane Ci wzorce Pattern Matchingu, żeby rozwiązać poniższe zadanie.
1. Napisz funkcje, która przyjmuje 2 parametry:

`imię` - np: Ala

`miesiąc` - np: styczeń
1. Funkcja ma zwracać:
```
jeżeli miesiąc to grudzien, styczen, luty: "Ala jezdzi na sankach"
jeżeli miesiąc to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
jeżeli miesiąc to czerwiec, lipiec, sierpien: "Ala sie opala"
jeżeli miesiąc to wrzesień, pazdzietnik, listopad: "Ala zbiera liscie"
```
1. Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.
1. Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami. Jeżeli miesiąc jest "innym słowem", funkcja niech zwraca "Ala uczy się JS".

## Zadanie 6
1. Stwórz funkcję `generateRandom(min, max)`, która będzie przyjmować dwie wartości - min i max. 
2. Funkcja powinna zwrócić losową liczbę z podanego przedziału. 
3. Do generowania losowej liczby możesz użyć wzoru: `Math.floor(Math.random()*(max-min+1)+min)`.
4. Wykorzystaj ją do utworzenia 10 liczb z przedziału 1 - 20. Jeżeli połowa z nich będzie większa od 10, wypisz tekst udało się, w przeciwnym razie wypisz w konsoli tekst niestety nie.
5. Do rozwiązania tego zadania wykorzystaj rekurencję. 