const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!');
});

console.log('Antes da promessa');
// Código não fica esperando a promessa ser resolvida, ele continua seguindo o código e depois quando ela é resolvida, ele executa
promessaSimples.then((resultado) => console.log(resultado));
console.log('Depois da promessa');