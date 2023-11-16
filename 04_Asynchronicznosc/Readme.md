## Zadanie 1

1. W naszej redakcji internetowej chcielibyśmy móc w łatwy sposób przeszukać różne bazy zdjęć.
2. Zaimplementuj rozwiązanie, które w zależności od preferencji pozwoli przeszukać bazę zdjęć [Pexels](https://www.pexels.com/api/) 
lub bazę zdjęć [Pixabay](https://pixabay.com/api/docs/), po wybranej nazwie kategorii.
3. Wykonaj wszystkie wymagane kroki, żeby móc korzystać z API dla obu rozwiązań.

## Zadanie 2

1. Wyślij zapytanie po swój adres IP i poczekaj na odpowiedz.
2. Użyj serwisu `https://www.ipify.org/`.
3. Po otrzymaniu odpowiedzi odpytaj serwis `https://ip-api.com/` o szczegóły dla Twojego adresu IP.
4. Gdy dane z drugiego serwisu zostaną zwrócone wyrenderuj je.
5. Do czasu otrzymania drugiej odpowiedzi nie renderuj komponentu.

## Zadanie 3

1. Połącz sie z https://jsonplaceholder.typicode.com/ i pobierz użytkowników wykonując zapytanie na odpowiedni EndPoint.
2. Wypisz w konsoli to co dostałeś.

3. Robiąc pętlę po danych z odpowiedzi wygeneruj dla każdego użytkownika element wypełniając go odpowiednimi danymi.

```html
<article class="user-cnt" data-id="1">
    <h2 class="user-name">Przykładowy user</h2>

    <div class="user-address">
        Phone: <span class="user-phone">500 600 600</span><br>
        email: <a href="mailto: email@wp.pl" class="user-email">email@wp.pl</a>
    </div>

    <button type="button" class="btn user-show-posts">
        Show posts
    </button>

    <ul class="user-posts">
        <!-- tutaj będą posty użytkownika -->
    </ul>
</article>
```
4. W każdym elemencie jest przycisk `.show-posts`. Po kliknięciu w taki przycisk, pobierz posty dla danego usera (id usera pobierz z atrybutu data-id powyższego artykułu) i wrzuć je do tego kontenera do elementu `.user-posts`. Każdy taki post powinien mieć postać:

```html
<li class="post">
    <h3 class="post-title">Lorem ipsum dolor sit amet, consectetur</h3>
    <div class="post-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia pariatur debitis asperiores, natus impedit nostrum voluptatum architecto iste modi. Iusto voluptatem sequi iste voluptatum rem eaque, atque eum. Error.
    </div>
</li>
```

5. Po wrzuceniu postów rozwiń element `.user-posts` i zmień tekst na buttonie na "Hide posts".

6. Po ponownym kliknięciu w ten sam button, zwiń listę postów i zmień przycisk na "Show posts"