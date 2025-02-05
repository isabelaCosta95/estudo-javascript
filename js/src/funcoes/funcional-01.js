// Função para executar todas as funções
// Funções sendo usadas de parâmetro

function executarTudo(...funcoes) {
    for(let funcao of funcoes){
        funcao();
    }
    // Mesma forma: funcoes.forEach((funcao) => funcao());
}

const bomDia = () => console.log('Bom Dia');
const bomTarde = () => console.log('Bom Tarde');

function boaNoite(){
    console.log('Boa Noite');
}

executarTudo(bomDia, bomTarde, boaNoite);