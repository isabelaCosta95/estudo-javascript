const promessaRejeitada = new Promise((resolve, reject) => {
    reject('Promessa rejeitada');
});

console.log('Antes da promessa');
// Código não fica esperando a promessa ser resolvida, ele continua seguindo o código e depois quando ela é resolvida, ele executa
promessaRejeitada.catch((error) => console.log(error));
console.log('Depois da promessa');