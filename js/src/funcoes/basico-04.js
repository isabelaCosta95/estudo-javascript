function contarVogais(texto){
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    // função includes
    // Retorna true ou false dependendo se a expressão está contida
    // console.log('Isabela'.includes('bela'); --true

    for (const letra of texto){
        if (vogais.includes(letra)){
            contador ++;
        }
    }

    return contador;
}

console.log(contarVogais('javascript'));