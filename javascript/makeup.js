class Makeup{
    constructor(title,brand,code,description, img,img2, price, stock, id){
        this.title=title;
        this.brand=brand;
        this.code=code;
        this.description=description;
        this.img=img;
        this.img2=img2;
        this.price=price;
        this.stock=stock;
        this.id=id;
    }
}


let divProducts=document.getElementById('makeup-products');

async function showProducts(){
       const response=await fetch('./json/products.json')
       return await response.json();
}
showProducts().then(products=>{
    divProducts.innerHTML+=`<h2>Todos los productos</h2>`
  products.forEach((product,index)=>{
    divProducts.innerHTML+=`
    <div class="card cardProduct" style="width: 18rem;">
<div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
<div class="card-body">
<h5 class="title">${product.title}</h5>
<p class="price">$<span> ${product.price}</span></p>
<p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
<button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
</div>
</div>` 
  })



    const btnAdd=document.querySelectorAll(".btnAdd")
    btnAdd.forEach((e)=>
        e.addEventListener("click",(e)=>{
            let card=e.target.parentElement;
            addToShoppingCart(card);
            
        })
    )
})

  showProducts();

  const addToShoppingCart=(card)=>{
    swal.fire({toast:true,text:"Producto agregado",color:"#C24660",showConfirmButton:false, background:"#D6B4B2",timer:1400})
    let product={
        name:card.querySelector(".title").textContent,
        price:Number(card.querySelector(".price span").textContent),
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

let filter1=document.getElementById('filter1');
let filter2=document.getElementById('filter2');
let filter3=document.getElementById('filter3');
let filter4=document.getElementById('filter4');
let filter0=document.getElementById('filter0');

filter0.addEventListener("click",(e)=>{
    async function showProducts(){
        const response=await fetch('./json/products.json')
        return await response.json();
 }
 showProducts().then(products=>{
    divProducts.innerHTML="";
     divProducts.innerHTML+=`<h2>Todos los productos</h2>`
   products.forEach((product,index)=>{
     divProducts.innerHTML+=`
     <div class="card cardProduct" style="width: 18rem;">
 <div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
 <div class="card-body">
 <h5 class="title">${product.title}</h5>
 <p class="price">$<span> ${product.price}</span></p>
 <p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
 <button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
 </div>
 </div>` 
   })
 
 
 
     const btnAdd=document.querySelectorAll(".btnAdd")
     btnAdd.forEach((e)=>
         e.addEventListener("click",(e)=>{
             let card=e.target.parentElement;
             addToShoppingCart(card);
             
         })
     )
 })

})
   
filter1.addEventListener("click",(e)=>{
    async function applyfilter1(){
        const response=await fetch('./json/products.json')
        return await response.json();
 }
 applyfilter1().then(products=>{
    divProducts.innerHTML="";
     divProducts.innerHTML+=`<h2>Bases y correctores</h2>`
   products.forEach((product,index)=>{ if(product.code===2 || product.code===3){
     divProducts.innerHTML+=`
     <div class="card cardProduct" style="width: 18rem;">
 <div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
 <div class="card-body">
 <h5 class="title">${product.title}</h5>
 <p class="price">$<span> ${product.price}</span></p>
 <p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
 <button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
 </div>
 </div>` 
   }})
 
 
 
     const btnAdd=document.querySelectorAll(".btnAdd")
     btnAdd.forEach((e)=>
         e.addEventListener("click",(e)=>{
             let card=e.target.parentElement;
             addToShoppingCart(card);
             
         })
     )
 })

})

filter2.addEventListener("click",(e)=>{
    async function applyfilter2(){
        const response=await fetch('./json/products.json')
        return await response.json();
 }
 applyfilter2().then(products=>{
    divProducts.innerHTML="";
     divProducts.innerHTML+=`<h2>Iluminadores, rubores y contornos</h2>`
   products.forEach((product,index)=>{ if(product.code===4 || product.code===5 || product.code===6){
     divProducts.innerHTML+=`
     <div class="card cardProduct" style="width: 18rem;">
 <div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
 <div class="card-body">
 <h5 class="title">${product.title}</h5>
 <p class="price">$<span> ${product.price}</span></p>
 <p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
 <button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
 </div>
 </div>` 
   }})
 
 
 
     const btnAdd=document.querySelectorAll(".btnAdd")
     btnAdd.forEach((e)=>
         e.addEventListener("click",(e)=>{
             let card=e.target.parentElement;
             addToShoppingCart(card);
             
         })
     )
 })

})


filter3.addEventListener("click",(e)=>{
    async function applyfilter3(){
        const response=await fetch('./json/products.json')
        return await response.json();
 }
 applyfilter3().then(products=>{
    divProducts.innerHTML="";
     divProducts.innerHTML+=`<h2>Labiales</h2>`
   products.forEach((product,index)=>{ if(product.code===1 ){
     divProducts.innerHTML+=`
     <div class="card cardProduct" style="width: 18rem;">
 <div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
 <div class="card-body">
 <h5 class="title">${product.title}</h5>
 <p class="price">$<span> ${product.price}</span></p>
 <p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
 <button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
 </div>
 </div>` 
   }})
 
 
 
     const btnAdd=document.querySelectorAll(".btnAdd")
     btnAdd.forEach((e)=>
         e.addEventListener("click",(e)=>{
             let card=e.target.parentElement;
             addToShoppingCart(card);
             
         })
     )
 })

})

    
filter4.addEventListener("click",(e)=>{
    async function applyfilter4(){
        const response=await fetch('./json/products.json')
        return await response.json();
 }
 applyfilter4().then(products=>{
    divProducts.innerHTML="";
     divProducts.innerHTML+=`<h2>Mascaras de pestañas y paletas de sombras</h2>`
   products.forEach((product,index)=>{ if(product.code===8 || product.code===7 ){
     divProducts.innerHTML+=`
     <div class="card cardProduct" style="width: 18rem;">
 <div class="img-prod-div"><img src="./imagenes/img-0${product.code}/${product.img}" class="imgProd card-img-top" alt="..."> </div>
 <div class="card-body">
 <h5 class="title">${product.title}</h5>
 <p class="price">$<span> ${product.price}</span></p>
 <p class="priceMin">6 cuotas sin interes de $${(product.price/6).toFixed(2)}</p>
 <button class="button3 btnAdd" data-id="${product.id}">Agregar al carrito</button>
 </div>
 </div>` 
   }})
 
 
 
     const btnAdd=document.querySelectorAll(".btnAdd")
     btnAdd.forEach((e)=>
         e.addEventListener("click",(e)=>{
             let card=e.target.parentElement;
             addToShoppingCart(card);
             
         })
     )
 })

})