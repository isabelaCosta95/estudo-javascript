// Operadores Lógicos

// AND 
const planejamentoConcluido = true;
const estaSol = false;
const todosEstaoBem = true;

// Se todas as variaveis forem true, tem picnic também será, caso uma delas seja falsa, temPicnic se tornará falso
const temPicnic = planejamentoConcluido && estaSol && todosEstaoBem;
console.log('Vamos fazer Picnic?', temPicnic);

// OR
const estudei = false;
const liUmLivro = true;

// Basta um ser true para que diaProdutivo seja true também
const diaProdutivo = estudei || liUmLivro; 
console.log('Foi um dia produtivo?', diaProdutivo);

// NOT
const estouCansado = true;
console.log('Vou para academia?', !estouCansado);

// XOR
// Ou exclusivo, será um ou outro
// Único cenário que vai dar true, é quando apenas uma das variáveis for true
const usandoCalca = true;
const usandoBermuda = false;

const vestidoCorretamente = usandoCalca !== usandoBermuda;
console.log('Estou vestido corretamente?', vestidoCorretamente)
