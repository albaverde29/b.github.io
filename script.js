// Funzione per la lettura della poesia ad alta voce
document.getElementById('read-aloud').addEventListener('click', function() {
    const poetryText = [
        "Sempre caro mi fu quest'ermo colle,",
        "E questa siepe, che da tanta parte",
        "Del resto dell'orizzonte il guardo esclude.",
        "Ma sedendo e mirando, interminati",
        "Spazi di là da quella, e sovrumani",
        "Silenzio, e profondissima quiete,",
        "io nel pensier mi fingo."
    ];

    const speech = new SpeechSynthesisUtterance(poetryText.join(' '));
    speech.lang = 'it-IT';
    window.speechSynthesis.speak(speech);
});

// Aggiungere il comportamento per evidenziare il tooltip e la descrizione delle parole
const verses = document.querySelectorAll('.verse');

verses.forEach(function(verse) {
    verse.addEventListener('mouseover', function() {
        const tooltip = verse.getAttribute('data-tooltip');
        console.log(tooltip);  // Puoi decidere di mostrare il tooltip in un altro modo, ad esempio in un div apposito
    });
});
