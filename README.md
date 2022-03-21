<p>Realizacja zadania <b>Aplikacja webowa umożliwiająca ocenę otrzymywanych świadczeń medycznych</b></p>

<h1>Opis zadania</h1>
<ul>
<li>
Na podstawie otrzymanych materiałów dodatkowych przygotuj style, których użyjesz w widokach</li>
<li>
Zaprojektuj i zaimplementuj widok listy otrzymanych świadczeń medycznych obejmujący: Nazwę świadczenia (z pola Benefit), Dostawcę (z pola Provider), Miejsce: (z połączonych pól Place + Address + Locality), Datę (z pola Dates.Date), Aktualną ocenę (z pola Case) </li>
<li>Dla każdego elementu listy pozwól na wybór oceny w skali 1 – 5. Po kliknięciu oceny (★) wykonaj zapytanie do API i pobierz dane odpowiedzi, na podstawie których określisz czy wystawienie oceny się powiodło. W przypadku błędu wyświetl informację o jego przyczynie </li>
<li>Przykładowe źródło danych opisane jest na https://api.nfz.gov.pl/app-itl-api/swagger-docs gdzie listę świadczeń opisuje grupa „Terminy leczenia” (metoda Queues) odfiltrowana tak by zwrócić wszystkich wyniki dla miejscowości Gliwice i placówek w których udzielane są świadczenia tylko dzieciom natomiast wystawienie oceny to grupa „Info” (metoda Version) gdzie wersja minor to wystawiana ocena a wersja major to zawsze 1 </li>
<br />
<p>W następującym repozytorium został odtworzony rozwój mojej realizacji zadania.</p>