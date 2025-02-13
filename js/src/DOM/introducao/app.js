// Alerta
function saudacao() {
    alert('Alerta');
}
window.saudacao(); // Mesmo efeito de saudacao();

// Alerta com o endereço que você está
alert(location.href);

// Alerta com o Tamanho da Janela do navegador
function tamanhoJanela() {
    alert(window.innerWidth);
}
tamanhoJanela();

// Mudando o estilo com JS
document.body.style.color = "red";

// Mudando o texto com JS
document.getElementById("titulo").innerText = "Novo Título";

// Confirm
if(confirm('Deseja ir para o google?')){
    location.href = "https://www.google.com.br";
}

// Child Nodes
console.log(document.body.childNodes);
document.body.childNodes[1].textContent = "Novo Texto do Parágrafo 2";
document.body.childNodes[1].innerText = "Novo Texto do Parágrafo";
console.log(document.documentElement.lang);

