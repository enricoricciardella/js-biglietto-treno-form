// Funzione per calcolare il prezzo del biglietto e visualizzarlo in console
function calcolaPrezzoBiglietto(event) {
    
    event.preventDefault();
    let km = Number(document.getElementById("km").value);
    let eta = Number(document.getElementById("eta").value);

    // Prezzo base al km
    const prezzoPerKm = 0.21;
    let prezzoTotale = km * prezzoPerKm;

    // Applico sconti in base all'età
    if (eta < 18) {
        prezzoTotale = prezzoTotale * 80 / 100; // Sconto 20% per i minorenni
    } else if (eta > 65) {
        prezzoTotale = prezzoTotale * 60 / 100; // Sconto 40% per gli over 65
    }

    // Mostro il risultato in console con due decimali
    console.log(`Dati inseriti: Chilometri = ${km}, Età = ${eta}`);
    console.log(`Il prezzo totale del biglietto è: €${prezzoTotale.toFixed(2)}`);
}
