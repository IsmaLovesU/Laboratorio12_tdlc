// Problema 2: ordenar una lista de diccionarios (objetos) respecto a un key, usando funciones lambda (arrow functions)

const ordenarPorKey = (lista, key) =>
  [...lista].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

const autos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];

console.log('Lista original:');
console.log(autos);

console.log("\nLista ordenada por key = 'model':");
console.log(ordenarPorKey(autos, 'model'));
