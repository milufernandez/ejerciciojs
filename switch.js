let precio1 = Number(prompt("Ingrese precio de producto 1:"));
let precio2 = Number(prompt("Ingrese precio de producto 2:"));
let precio3 = Number(prompt("Ingrese precio de producto 3:"));
let precio4 = Number(prompt("Ingrese precio de producto 4:"));
let precio5 = Number(prompt("Ingrese precio de producto 5:"));

function suma() {
  const suma = precio1 + precio2 + precio3 + precio4 + precio5;
  console.log("El precio del producto 1 es: $" + precio1);
  console.log("El precio del producto 2 es: $" + precio2);
  console.log("El precio del producto 3 es: $" + precio3);
  console.log("El precio del producto 4 es: $" + precio4);
  console.log("El precio del producto 5 es: $" + precio5);
  console.log(
    "La suma de los 5 productos que ingresó es de: $" + suma
  );

  alert(
    "La suma de los 5 productos que ingresó es de: $" + suma
  );
}

suma();