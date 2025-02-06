const promessaComTimeout = new Promise((resolve, reject) =>  {
    setTimeout(() => {
        resolve('Resolvida após 5 segundos');
    }, 5000);
});

promessaComTimeout.then((resultado) => console.log(resultado));