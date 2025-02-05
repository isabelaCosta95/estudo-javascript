const nomes = ['Camisa', 'Calça', 'Tênis', 'Boné'];
const quantidades = [2, 1, 1, 3];
const precos = [50, 120, 200, 30];
console.log('Arrays:', nomes, quantidades, precos);

// const item = {nomes: 'Camisa', quantidades: 2, precos: 50};

// Exercício For
const carrinho = [
    { nomes: 'Camisa', quantidades: 2, precos: 50 },
    { nomes: 'Calça', quantidades: 1, precos: 120 },
    { nomes: 'Tênis', quantidades: 1, precos: 200 },
    { nomes: 'Boné', quantidades: 3, precos: 30 },
];

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++){
    let item = carrinho[i];
    subtotal = item.quantidades * item.precos;
    totalCompra += subtotal;
    console.log(`Item: ${item.nomes} | Quantidade: ${item.quantidades} | Preço: ${item.precos}`)
}

console.log('Valor total do carrinho: ', totalCompra);