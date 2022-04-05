
const orderCart = document.getElementById('orderCart');
const client = document.getElementById('client');
const email = document.getElementById('email');
const finishOrderBtn = document.getElementById('finish-order');
const disc=document.getElementById("discount").value;
const total=document.getElementById('total')
const orderList = document.querySelector("#orderList tbody");


loadEvents();

function loadEvents() {
    document.addEventListener('DOMContentLoaded',readLocalStorageOrder())
    calculate();
    orderCart.addEventListener('click', (e) => {  if(e.target.classList.contains("btn-clear")){
        deleteProductOrder(e.target.getAttribute("data-id"))
           e.target.parentElement.parentElement.remove();
          calculate();
      } });
     
      listenButtonsOrderCart();
      
    finishOrderBtn.addEventListener('click', finishOrder);

}
   
function listenButtonsOrderCart(){
    orderCart.addEventListener("click",(e)=>{
      if(e.target.classList.contains("btn-less")){
        subtractProduct(e.target.getAttribute("data-id"));
      }
      if (e.target.classList.contains("btn-inc")){
        increaseProduct(e.target.getAttribute("data-id"));
            }})}

function readLocalStorageOrder(){

    shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'))
    shoppingCart.forEach(function (element){
        let{img,name,price,amount,id}= element;
      
        const row = document.createElement('tr');
        row.innerHTML= `
            <td>
                <img src="${img}" width=100>
            </td>
            <td>${name}</td>
            <td>${price}</td>
            <td>
           <div class="amnt"><button class="btn-less btnc" data-id="${id}">-</button>  <p class="card-text">${amount}</p> <button class="btn-inc btnc" data-id="${id}">+</button></div>
            </td>
            <td id='subtotals'>$${price * amount}</td>
            <td>
                <a href="#" class="btn-clear btnoc" style="font-size:30px" data-id="${id}">x</a>
            </td>
        `;
        orderList.appendChild(row);

    });
    

   
   
}
function finishOrder() {
    
    if (shoppingCart.length === 0) {
        Swal.fire({
            type: 'error',
            title: 'No has agregado productos',
            text: 'Selecciona productos para poder seguir con la compra',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "allProducts.html";
        })
    }
    else if (client.value === '' || email.value === '') {
        Swal.fire({
            type: 'error',
            title: 'No ha ingresado sus datos',
            text: 'Ingrese todos los campos requeridos para poder procesar la compra',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
       
        emailjs.init("2-YWq3evFeI2uU8gy");
            
        
       
        const textArea = document.createElement('textarea');
        textArea.id = "detailOrder";
        textArea.name = "detailOrder";
        textArea.cols = 60;
        textArea.rows = 10;
        textArea.hidden = true;
        shoppingCart=JSON.parse(localStorage.getItem("shoppingCart"))

     
        textArea.innerHTML = generateTable(shoppingCart).innerHTML;
       

        orderCart.appendChild(textArea);

   
        document.getElementById('process-pay')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                const loadingGif = document.querySelector('#loading');
                loadingGif.style.display = 'block';

                const send = document.createElement('img');
                send.src = '../imagenes/email.gif';
                send.style.display = 'block';
                send.width = '20';

                const serviceID = 'service_ld2hgjg';
                const templateID = 'template_pot36v5';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                       loadingGif.style.display = 'none';
                        document.querySelector('#loaders').appendChild(send);

                        setTimeout(() => {
                            shoppingCart.length=0;
                            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
                            send.remove();
                            window.location = "index.html";
                        }, 2000);
                    }, (err) => {
                        loadingGif.style.display = 'none';
                        alert("Error al enviar el email\r\n Response:\n " + JSON.stringify(err));
                    });
            });
    }
}




    const deleteProductOrder=(productClear)=>{
        shoppingCart=shoppingCart.filter((element)=>element.id!==Number(productClear));
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        document.querySelector(".amount").textContent=0;
        showShoppingCart();
        
        
      }

      

      function calculate(){
let totalOrder=0
        shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'))
        shoppingCart.forEach(function (products){
            
                let element = Number(products.price * products.amount);
                totalOrder = totalOrder + element;
                
            })
            
                
            document.getElementById('total').value = "$ " + totalOrder.toFixed(2);
        
      }

      function generateTable(shoppingCart) {
        let div = document.createElement("div");
    
        let table = document.createElement("table");
        
        table.innerHTML += `<table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Sub total</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>`;
    
        const body = table.childNodes[3];
    
       
    
        table.appendChild(body);
        div.appendChild(table);
        return div;}

      

  