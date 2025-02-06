// Função assíncrona que busca um fato aleatório do Chuck Norris
async function fatosDoChuckNorris() {
    // Faz uma requisição à API pública de piadas do Chuck Norris
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    
    // Converte a resposta para JSON
    const data = await resp.json();
    
    // Retorna o valor da piada
    return data.value;
}

// Função assíncrona que obtém três fatos do Chuck Norris em sequência
async function obterFatosEmSequência() {
    // Cada chamada à API aguarda a anterior ser concluída antes de prosseguir
    const fato1 = await fatosDoChuckNorris();
    const fato2 = await fatosDoChuckNorris();
    const fato3 = await fatosDoChuckNorris();
    
    // Retorna um array contendo uma identificação e os três fatos
    return ['Sequência', fato1, fato2, fato3];
}

// Paralelo é mais rápido do que em sequência
// Função assíncrona que obtém três fatos do Chuck Norris em paralelo
async function obterFatosEmParalelo() {
    // Cria uma promessa resolvida com o rótulo "paralelo"
    const label = Promise.resolve('paralelo');
    
    // Inicia todas as chamadas à API simultaneamente (sem aguardar a anterior terminar)
    const fato1 = fatosDoChuckNorris();
    const fato2 = fatosDoChuckNorris();
    const fato3 = fatosDoChuckNorris();
    
    // Aguarda todas as promessas serem resolvidas ao mesmo tempo e retorna os resultados
    return Promise.all([label, fato1, fato2, fato3]);
}

// Chama a função que obtém os fatos em sequência e exibe o resultado no console
obterFatosEmSequência().then(console.log);

// Chama a função que obtém os fatos em paralelo e exibe o resultado no console
obterFatosEmParalelo().then(console.log);
