## Zadanie 1

1. Stwórz klasę BankAccount, która symuluje działanie konta bankowego. 
1. Klasa powinna mieć prywatne składniki do przechowywania numeru konta oraz stanu środków (saldo) i wykorzystywać get oraz set do zarządzania tymi właściwościami.

#### Wymagania:
##### Prywatne Składniki:

1. Prywatny składnik `#accountNumber` przechowujący numer konta.
2. Prywatny składnik `#balance` przechowujący saldo konta.

##### Konstruktor:
1. Konstruktor przyjmujący numer konta i opcjonalne początkowe saldo.
1. Ustaw początkowe saldo na 0, jeśli nie zostanie podane.

##### Składnik get i set dla Salda:
1. Użyj `get balance()` do zwracania aktualnego salda.
1. Użyj `set balance(newBalance)` do walidacji i ustawienia nowego salda.

##### Metody do Wpłat i Wypłat:
1. Metoda `deposit(amount)`, która umożliwia wpłatę środków na konto.
1. Metoda `withdraw(amount`), która umożliwia wypłatę środków z konta.

##### Wyświetlanie Informacji o Koncie:
1. Metoda `displayAccountInfo()` do wyświetlania informacji o koncie.

###### Przykład użycia:
```js
const myAccount = new BankAccount("123456789");
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.balance = -20; // powinno wyświetlić błąd
myAccount.displayAccountInfo();
```
