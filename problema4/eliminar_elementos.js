// Problema 4: eliminar elementos indicados de una lista, usando funciones lambda (arrow functions)
// Los elementos de "aBorrar" que no existan en la lista original simplemente se ignoran.

const eliminarElementos = (lista, aBorrar) => lista.filter((elem) => !aBorrar.includes(elem));

const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const aBorrar = ['amarillo', 'cafe', 'blanco'];

console.log('Lista original:');
console.log(colores);

console.log('\nElementos a borrar:');
console.log(aBorrar);

console.log('\nLista resultante:');
console.log(eliminarElementos(colores, aBorrar));
