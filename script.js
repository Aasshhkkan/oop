import { fechData } from "./utils/httpReq.js";
import products from "./models/products.js";
import Cart from "./models/cart.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productsData = await fechData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productInstance = new products(productsNode, productsData,cartInstance);
  console.log(cartInstance);
  productInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
