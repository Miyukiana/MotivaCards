// Liste mit motivierenden Sprüchen
const quotes = [
    "Glaube an dich selbst und du wirst Wunder vollbringen.",
    "Jeder Tag ist eine neue Chance, dein Leben zu verbessern.",
    "Du bist stärker, als du denkst.",
    "Setze dir große Ziele und arbeite jeden Tag daran.",
    "Der erste Schritt zu Erfolg ist, es zu versuchen.",
    "Sei du selbst. Alle anderen gibt es schon.",
    "Erfolg ist das Ergebnis von harter Arbeit und Geduld.",
    "Jeder Fehler ist eine Lektion für die Zukunft.",
    "Lächle – dein Glück beginnt mit dir!", "Eine 1000 Kilometer lange Reise beginnt mit dem ersten Schritt."
];

// Funktion, um eine zufällige Karte anzuzeigen
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("green").textContent = quotes[randomIndex];
}

// Array mit vorgegebenen Farben
const colors = ['rgb(146, 192, 47)', 'mediumorchid', 'palevioletred', 'rgb(51, 178, 204)'];

// Funktion, um eine zufällige Farbe aus dem Array auszuwählen
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Wende die zufällige Farbe auf die Überschrift an, sobald der DOM vollständig geladen ist
window.onload = function() {
    // Ändere die Farbe der Überschrift beim Laden der Seite
    document.getElementById('random-heading').style.color = getRandomColor();

    // Setze ein Intervall, das alle 5 Sekunden die Farbe ändert
    setInterval(function() {
        document.getElementById('random-heading').style.color = getRandomColor();
    }, 5000); // 5000 Millisekunden = 5 Sekunden

    // Füge Event-Listener zum Button hinzu, damit beim Klicken die Farbe auch geändert wird
    document.querySelector('button').addEventListener('click', function() {
        document.getElementById('random-heading').style.color = getRandomColor();
    });
};

// Automatisch beim Laden der Seite eine Karte generieren
generateQuote();