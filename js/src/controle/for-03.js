const pedidos = [
    { id: 1, status: 'pendente' },
    { id: 2, status: 'enviado' },
    { id: 3, status: 'entregue' },
    { id: 4, status: 'cancelado' },
    { id: 5, status: 'pendente' },
]

for(let i = 0; i< pedidos.length; i++){
    let pedido = pedidos[i];

    if (pedido.status === 'pendente'){
        console.log(`Pedido ${pedido.id}: Aguardando Pagamento`)
    } else if (pedido.status === 'enviado'){
        console.log(`Pedido ${pedido.id}: `)
    } else if (pedido.status === 'entregue'){
        console.log(`Pedido ${pedido.id}: Pedido Entregue`)
    } else if (pedido.status === 'cancelado'){
        console.log(`Pedido ${pedido.id}: Pedido Cancelado`)
    } else{
        console.log(`Pedido ${pedido.id}: Status desconhecido `)
    }  
}

//Outra forma de fazer:
for(const pedido of pedidos){ // Vai percorrer todos os itens do objeto pedido
    if (pedido.status === 'pendente'){
        console.log(`Pedido ${pedido.id}: Aguardando Pagamento`)
    } else if (pedido.status === 'enviado'){
        console.log(`Pedido ${pedido.id}: `)
    } else if (pedido.status === 'entregue'){
        console.log(`Pedido ${pedido.id}: Pedido Entregue`)
    } else if (pedido.status === 'cancelado'){
        console.log(`Pedido ${pedido.id}: Pedido Cancelado`)
    } else{
        console.log(`Pedido ${pedido.id}: Status desconhecido `)
    }
}