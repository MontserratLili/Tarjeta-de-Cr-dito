function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    var x = creditCardNumber.length;
    var cadenaInvertida = "";
      while (x>=0) {
        cadenaInvertida = cadenaInvertida + creditCardNumber.charAt(x);
        x--;
      }
        console.log(cadenaInvertida);
  }



// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
