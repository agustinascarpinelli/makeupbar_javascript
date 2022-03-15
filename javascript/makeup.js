class Makeup{
    constructor(title,code,description, img, price, stock, id){
        this.title=title;
        this.code=code;
        this.description=description;
        this.img=img;
        this.price=price;
        this.stock=stock;
        this.id=id;
    }
}

const makeup= [];

let lorealLipStick=new Makeup("Loreal labial liquido", 01,"Labial liquido larga duracion Loreal Paris x 7 gr","../imagenes/img-01/loreal_lip01.jpg", 998.50,10,0101)
let rimmelLipStick=new Makeup("Rimmel lapiz labial", 01,"Lapiz labial Rimmel London x 4,2 gr","../imagenes/img-01/rimmel-lipstick-01.jpg",1350,10,0102)
let macLipStick=new Makeup("Mac lapiz labial",01,"Lapiz labial Mac Ultra duracion x 5 gr","../imagenes/img-01/mac_lip01.jpg",1890,10,0103)
let maybellineLipStick=new Makeup("Mayabelline labial liquido",01,"Labial liquido Maybelline Superstay x 8 gr","../imagenes/img-01/maybelline_lip01.jpg",1500,10,0104)
let covergirlLipStick=new Makeup("Covergirl labial liquido",01,"Labial liquido Covergirl matte x 7,5 gr ","../imagenes/img-01/covergirl_lip01.jpg",1750,10,0105)

makeup.push(lorealLipStick,rimmelLipStick,macLipStick,maybellineLipStick,covergirlLipStick)

const container=document.querySelector(".container")
const sidebar=document.querySelector(".sidebar")
const btnShopping=document.querySelector(".btnShopping")
let shoppingCart=JSON.parse(localStorage.getItem("shoppingCart")) || [];

 
  btnShopping.addEventListener("click", ()=>{
     sidebar.classList.toggle("active")

 })
let divProducts=document.getElementById('makeup-products');
const showProducts=()=>{
        makeup.forEach(product => {
         
        divProducts.innerHTML+=`
        <div class="card card${product.id}" style="width: 18rem;">
  <div class="img-prod-div"><img src=${product.img} class="imgProd card-img-top" alt="..."> <button class="color "></button><button class="color "></button><button class="color"></button></div>
  <div class="card-body">
    <h5 class="title">${product.title}</h5>
    <p class="description">${product.description}</p>
    <p class="price">$ ${product.price}</p>
    <button class="btnAdd btn btn-primary" data-id="${product.id}">Agregar al carrito</button>
  </div>
</div>`        
    });
    const btnAdd=document.querySelectorAll(".btnAdd")
    btnAdd.forEach((e)=>
        e.addEventListener("click",(e)=>{
            let card=e.target.parentElement;
            addToShoppingCart(card);
        })
    )
}
  showProducts();

  const addToShoppingCart=(card)=>{
    swal.fire({toast:true,text:"Producto agregado al carrito",showConfirmButton:false, background:"green",timer:1400})
    let product={
        name:card.querySelector(".title").textContent,
        price:Number(card.querySelector(".price").textContent),
        amount:1,
        img:card.parentElement.querySelector(".imgProd").src,
        id:Number(card.querySelector("button").getAttribute("data-id")),
    }
  
    let productAlready=shoppingCart.find((element)=>element.id===product.id)
    if(productAlready){
        productAlready.amount++
    }
    else{
        shoppingCart.push(product)
    }
    showShoppingCart();
}
const showShoppingCart=()=>{
  sidebar.innerHTML="";
  shoppingCart.forEach((element)=>{
      let{img,name,price,amount,id}= element;
      sidebar.innerHTML+=`
      <div class="shopping-box card mb-3" ">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${img}" class="shopping-box-img img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${amount}</p>
      <p class="card-text">$${price}</p>
      <button class="btn-clear" data-id="${id}>Borrar</button>
    </div>
  </div>
</div>
</div>
      `
  })
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}


 