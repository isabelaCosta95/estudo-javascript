const frutas = ['maça', 'banana', 'laranja', 'tomate'];
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
console.log(comida);

const index = comida.indexOf('tomate') // Retorna qual é o index
if(index !== -1){
    comida.slice(index, 1); // Exclui elementos, indicando de onde começa e quantos elementos ele vai excluir
}

comida.sort(); // Ordena
console.log(comida);

console.log(typeof comida); // retorna Object!