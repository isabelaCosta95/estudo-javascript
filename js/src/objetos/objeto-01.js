// objetos literais

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);

// É possível modificar os atributos do objeto mesmo ele sendo uma constante
pessoa.nome = 'Maria';
pessoa.estado = 'SP';

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);


// Para não ser possível alterar os dados do objeto
const pessoa2 = Object.freeze({
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
});

console.log(pessoa2);