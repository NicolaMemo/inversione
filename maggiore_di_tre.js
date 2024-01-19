// Definizione di una funzione chiamata string_reverse con un parametro denominato str
function string_reverse(str) {
    // Converte la stringa in un array di singoli caratteri
    var charactersArray = str.split("");
    
    // Inverte l'ordine degli elementi all'interno dell'array
    var reversedArray = charactersArray.reverse();
    
    // Unisce gli elementi dell'array per formare una stringa invertita
    var reversedString = reversedArray.join("");
    
    // Restituisce la stringa invertita come risultato della funzione
    return reversedString;
}

// Stampa il risultato della chiamata alla funzione string_reverse con l'argomento "w3resource" sulla console
console.log("Risultato di string_reverse(\"w3resource\"): ", string_reverse("w3resource"));

// Stampa il risultato della chiamata alla funzione string_reverse con l'argomento "www" sulla console
console.log("Risultato di string_reverse(\"www\"): ", string_reverse("www"));

// Stampa il risultato della chiamata alla funzione string_reverse con l'argomento "JavaScript" sulla console
console.log("Risultato di string_reverse(\"JavaScript\"): ", string_reverse("JavaScript"));
