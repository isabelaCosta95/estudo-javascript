const livro = {
    titulo: 'O Senhor dos Anéis',
    // Objeto dentro do objeto
    autor: {
        nome: 'J.R.R Tolkien',
        idade: 81,
    },
    // Array dentro do objeto
    generos: ['Fantasia', 'Aventura', 'Ficção'],
    publicado: true,
    anoPublicacao: 1954,
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor.nome}`); // Navegando dentro do objeto
console.log(`Publicado: ${livro.publicado ? 'Sim' : 'Não'}`);

if(livro.publicado) {
    console.log(`Ano de Publicação ${livro.anoPublicacao}`);
    console.log(`Gênero: ${livro.generos.join(', ')}`) 
}

console.log(JSON.stringify(livro));
console.log(JSON.stringify(livro, null, 2)); // JSON Formatado