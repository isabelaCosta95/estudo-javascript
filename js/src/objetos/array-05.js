const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 120 },
    { nome: 'Tênis', preco: 200 },
    { nome: 'Boné', preco: 30 },
    { nome: 'Relógio', preco: 80 },
];

const maisBaratos = produtos.filter((produto) => produto.preco < 100);
console.log(maisBaratos);

console.log('Produtos com preço menor que 100 reais:');
maisBaratos.forEach((produto) => {
    console.log(`Produto: ${produto.nome}, Preço: ${produto.preco}`);
});

const maisCaros = produtos.filter((produto) => produto.preco > 100);
console.log(maisCaros);