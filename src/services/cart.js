// Quais ações o meu carrinho pode fazer?

// Casos de uso:

// ✅ -> Adicionar item

async function addItem(userCart){
    userCart.push(item);
}

// -> Calcular o total

async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);
    console.log(result);
}

// -> Deletar item - diminui um item

async function deleteItem(userCart,name) {
    
}

// -> Remover um item

async function removeItem(userCart, index) {
    
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}