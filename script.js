import products from "./models/products.js";
import { fechData } from "./utils/httpreq.js"
const productsNode=document.getElementById("products");
async function render (){
   const productData=await fechData();
   const productsInstance= new products(productsNode,productData);
   productsInstance.showProducts();

}
document.addEventListener("DOMContentLoaded", render)
