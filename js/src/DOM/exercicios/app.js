let elemento = document.querySelector("#titulo");
console.log(elemento);

let div = document.querySelectorAll("div");
console.log(div);

let cor = document.querySelector("#titulo > i > u");
cor.style.color = "red";
cor.style.background = "blue";
console.log(cor);

let classe = document.querySelector(".noticia > h1");
console.log(classe.innerText); // Não aparece as tags dentro, ignora o HTML, só mostra o texto
console.log(classe.innerHTML); // Aparece tudo, inclusive as tags dentro
console.log(classe.outerHTML); // Aparece o elemento inteiro, inclusive o h1

classe.innerText = "Novo Texto";
classe.innerHTML = "Novo <i> Texto </i>";

let imagem = document.querySelector("#noticia");
imagem.src = "new_2.png";
console.log(imagem.alt);

document.querySelector("#titulo").innerHTML = imagem.alt;