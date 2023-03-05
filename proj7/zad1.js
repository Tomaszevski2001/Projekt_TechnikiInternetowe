1
Ćwiczenie 8
Celem ćwiczeń jest zapoznanie z podstawami języka JavaScript oraz wykorzystanie języka do manipulowania
drzewem DOM.
Dokumentację do JS można znaleźć na stronie: http://www.w3schools.com/jsref/default.asp
I.
1.
Zadanie polega na wyświetleniu przywitania na stronie zgodnego z porą dnia. Godzinę uzyskujemy wykorzystując
obiekt Date() i jego metodę getHours(). Jeżeli jest przed godziną 10 wyświetlamy komunikat "Good morning", jeżeli
przed 20 – "Good day", w pozostałych wypadkach "Good evening".
Następnie komunikat musimy wstawić do pustego akapitu wykorzystując metodę getElementById() oraz właściwość
innerHTML.
Przycisk tworzymy znacznikiem <button></button>
<div>
<p>Naciśnij przycisk, żeby uzyskać przywitanie zgodne z porą dnia:</p>
<button onclick="myFunction()">Spróbuj</button>
<p id="demo"></p>
<script>
function myFunction() {
let greeting;
let time = new Date().getHours();
if (time < 10) {
greeting = "Good morning";
} else if (time < 20) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;
}
</script>
</div>