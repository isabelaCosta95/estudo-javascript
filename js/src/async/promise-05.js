function fatosDoChuckNorris() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => data.value);
};

const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();
 
// Espera as 3 promessas serem resolvidas para mostrar o resultado de uma vez
Promise.all([fato1, fato2, fato3]).then(console.log);