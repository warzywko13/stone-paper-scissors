# Gra kamień papier nożyce

## Secyfikacja
 Dane: 
 <ul>
    <li>GameReducerAction - stany reducera</li>
    <li>initialState - dane początkowe</li>
    <li>ChoiseAction - możliwe wybory dla gracza</li>
    <li>winOrLose - możliwe pozycje w których gracz wygrywa oraz przegrywa</li>
    <li>playerChoise - stan wyboru gracza</li>
    <li>aiChoise - stan wyboru ai</li>
    <li>gameState - stan czy gracz wygrał czy też przegrał</li>
    <li>isLoading - czekanie dokumentu na zakończenie animacji</li>
 </ul>

## Lista kroków

1. Zacznij algorytm.
2. Oczekuj na wybór gracza (papier, kamień, nożyce).
3. Po wybraniu odpowiedniego obiegu system uruchamia animację, podczas której
AI wybiera swój wybór, a następnie porównuje wyniki względem tabelicy "winOrLose".
4. Następnie system wykona 3 przypadki:
    <ul>
        <li>Jeśli w tablicy znajduje się przypadek win: Gracz, lose: AI system dopisze +1 do wyniku Gracza oraz wyświetli napis "Wygrałeś"</li>
        <li>Jeśli w tablicy znajduje się przypadek lose: AI, win: Gracz system dopisze +1 do wyniku AI oraz wyświetli napis "Przegrałeś"</li>
        <li>Jeśli żaden z przypadków się nie wykona system wypisze napis "Remis" i nie dopisze żadnej ze stron punktów</li>
    </ul>
5. System przez cały czas umożliwia użytkownikowi kliknięcie przycisku "Resetuj". Po jego wybraniu system zresetuje całą gre do stanu początkowego.

## Technologie
<ul>
    <li>Tailwind</li>
    <li>React</li>
</ul>