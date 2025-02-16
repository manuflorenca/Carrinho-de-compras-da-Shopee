import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = createItem("hotwheels ferrari", 20.99, 1);
const item2 = createItem("hotwheels lamborghini", 39.99, 3);

cartService.addItem(myCart, item1);
cartService.addItem(myCart, item2);

await cartService.deleteItem(myCart,item2.name);
await cartService.deleteItem(myCart,item1.name);


console.log("Shopee Cart TOTAL IS: ");
cartService.calculateTotal(myCart);


