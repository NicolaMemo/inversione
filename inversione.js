// Definizione di una funzione chiamata inversione_stringa con un parametro denominato str
function inversione_stringa(str) {
    // Converte la stringa in un array di singoli caratteri
    var vettoreCaratteri = str.split("");
    
    // Inverte l'ordine degli elementi all'interno dell'array
    var vettoreInertito = vettoreCaratteri.reverse();
    
    // Unisce gli elementi dell'array per formare una stringa invertita
    var stringaInvertita = vettoreInertito.join("");
    
    // Restituisce la stringa invertita come risultato della funzione
    return stringaInvertita;
}

// Stampa il risultato della chiamata alla funzione inversione_stringa con l'argomento "w3resource" sulla console
console.log("Risultato di inversione_stringa(\"w3resource\"): ", inversione_stringa("w3resource"));

// Stampa il risultato della chiamata alla funzione inversione_stringa con l'argomento "www" sulla console
console.log("Risultato di inversione_stringa(\"www\"): ", inversione_stringa("www"));

// Stampa il risultato della chiamata alla funzione inversione_stringa con l'argomento "JavaScript" sulla console
console.log("Risultato di inversione_stringa(\"JavaScript\"): ", inversione_stringa("JavaScript"));
