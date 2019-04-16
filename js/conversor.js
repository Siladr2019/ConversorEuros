const EURO = 1.12986;
var euros = prompt("Introduzca una cantidad de €:");
// Para que lo muestre en la consola
console.log(euros + "€(euros) son " + (euros * EURO) + "$(dolares).");
// Para que lo escriba en pantalla
document.write(euros + "€ son " + (euros * EURO) + "$.");