class products {
    constructor(parent,products){
        this.parent=parent;
        this.products=products;
    }
    showProducts(){
        this.products.forEach(product => this.createdcard(product));
    }
    createdcard(data){
        const cardEle = document.createElement("div");
        const img =document.createElement("img");
        img.src= data.image;
        img.alt= data.alt;

        cardEle.appendChild(img);
        this.parent.appendChild(cardEle);
    }
}

export default products;