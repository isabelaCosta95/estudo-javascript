// é possível colocar qualquer coisa dentro de um array

function bomDia(){
    return 'Bom Dia';
}

const lista = [bomDia, 2, 'texto', {nome: 'João'}];
console.log(lista.length);

console.log(lista[0]())