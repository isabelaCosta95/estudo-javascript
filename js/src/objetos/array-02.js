const frutas = ['maça', 'banana', 'laranja'];
console.log(frutas);

console.log(frutas[1]);
console.log(frutas.length);

frutas.push('uva');
console.log('push:', frutas);

console.log('pop', frutas.pop()); // Tira o último elemento
console.log(frutas);

frutas.unshift('manga'); // Coloca na primeira posição
console.log('unshift:', frutas);

console.log('shift', frutas.shift()); // Tira o primerio elemento da lista
console.log(frutas);