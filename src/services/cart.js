// Adicionar item ao carrinho
function addItem(userCart, item) {
    userCart.push(item);
}

// Calcular o total do carrinho
function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total do carrinho: ${result}`);
}

// Deletar um item (diminuir quantidade)
function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index,1);
    }
}

// Remover um item completamente
function removeItem(userCart, index) {
    if (index >= 0) {
        userCart.splice(index, 1);
    }
}

export { addItem, calculateTotal, deleteItem, removeItem };
