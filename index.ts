let cantidadIntentos: number = 1;
let respuesta: string;

while (cantidadIntentos < 4 && respuesta !== "eureka") {
  respuesta = prompt("ingrese la clave");
  cantidadIntentos++;
  cantidadIntentos = cantidadIntentos + 1;
}

if (respuesta === "eureka") {
  console.log("clave correcta, bienvenido");
} else {
  console.log("has agotado todos los intentos");

