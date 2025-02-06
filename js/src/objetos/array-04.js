const pessoas = [
    { nomeCompleto: 'Isabela Costa' },
    { nomeCompleto: 'Maria Clara' },
    { nomeCompleto: 'Ingrid Pila' },
    { nomeCompleto: 'Giovana Modesto' },
]

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0]);

console.log(primeirosNomes);

function triplo(n){
    return n * 3;
}

const numeros = [1, 2, 3, 4];
const triplos = numeros.map(triplo);
console.log(triplos)

function multiplicaPor100(n){
    return n * 100;
}

const numeros2 = [1, 2, 3, 4, 5];
const cem = numeros2.map(multiplicaPor100);
console.log(cem);