// Problema 3: calcular la transpuesta de una matriz (lista de listas), usando funciones lambda (arrow functions)

const transponer = (X) => X[0].map((_, colIndex) => X.map((fila) => fila[colIndex]));

const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('Matriz original X:');
console.log(X);

console.log('\nMatriz transpuesta XT:');
console.log(transponer(X));
