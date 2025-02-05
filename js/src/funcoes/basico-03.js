// Operador ternário

function maiorNumero(a, b){
    return a > b ? a : b; // Se a for maior que b, vai retornar a, se não, vai retornar b
}

console.log(maiorNumero(59, 20));

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
}

console.log(parOuImpar(7));
console.log(parOuImpar(8));