let chave = true;
let corajoso = true;

if(chave && corajoso){
    console.log('Deu certo! Báu aberto');
}

if(!chave && corajoso){
    console.log('Tentou, mas não conseguiu');
}

if(chave && !corajoso){
    console.log('Tentou, mas não conseguiu');
}

if(!chave && !corajoso){
    console.log('Nem tentou');
}