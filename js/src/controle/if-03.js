// Opções: inativo, ativo, banido ou pendente 
let statusUsuario = 'ativo';

if(statusUsuario == 'ativo'){
    console.log('Acesso permitido');
} else if(statusUsuario == 'inativo'){
    console.log('Conta Inativa, falar com o suporte');
} else if(statusUsuario == 'banido'){
    console.log('Acesso negado, Conta banida');
} else{
    console.log('Status desconhecido, tente novamente');
}