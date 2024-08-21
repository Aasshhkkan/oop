class products {
    constructor(parent,products){
        this.parent=parent;
        this.products=products;
        this.parent.addEventListener("click",this);
    }
    showProducts(){
        this.products.forEach(product => this.createdcard(product));
    }
    createdcard(data){
        const cardEle = document.createElement("div");
        const imgEle = this.productImg(data); 
        const infoEle = this.productInfo(data);
        cardEle.innerHTML=imgEle;
        cardEle.innerHTML+=infoEle; 
        this.parent.appendChild(cardEle);
    }
    productImg(data){
        const { image , alt} = data;
        const img = `<img alt=${alt} src=${image}>`;
        return img;
    }
    productInfo(data){
        const{ id, name , price} = data;
        const intoJSX=`
        <div id="product-info">
        <h3>${name}</h3>
        <div>
        <span>${price}</span>
        <button data-id=${id}>+</button></div>
        </div>`;
        return intoJSX
    }
    handleEvent(event){
        const element=event.target;
        if(element.tagName==="BUTTON"){
            this.addToCart(element.dataset.id)
        }
    }
    addToCart(id){
        console.log(id);
    }
}

export default products;