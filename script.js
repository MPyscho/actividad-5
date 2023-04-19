let nombre = prompt("introduzca su nombre");
let nombreReverso = "";

for (let i = nombre.length - 1; i >= 0; i--) {
  nombreReverso += nombre[i];
}

console.log("¡Adiós " + nombreReverso + "!");
