const containerProducts = document.querySelector(".containerProducts");
const sidebar = document.querySelector(".sidebar");
const btnShopping = document.querySelector(".btnShopping");
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

btnShopping.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const showShoppingCart = () => {
  if (shoppingCart.length === 0) {
    sidebar.innerHTML = `<div class="shopping-box empty "><h2 class="mb-2" ><ion-icon name="alert-circle-outline"></ion-icon> Aun no has agregado productos</h2></div>`;
  } else {
    sidebar.innerHTML = "";
    let total = 0;
    shoppingCart.forEach((element) => {
      let { img, name, price, amount, id } = element;
      total += price * amount;
      sidebar.innerHTML += `
        <div class="shopping-box card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${img}" class="shopping-box-img img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
       <div class="amnt"><button class="btn-less btnc" data-id="${id}">-</button>  <p class="card-text">${amount}</p> <button class="btn-inc btnc" data-id="${id}">+</button></div>
        <p class="card-text">$<span>${price}</span></p>
        <p class="subtotal">Subtotal: $${price * amount}</p>
        <button class="btn-clear btnc2" data-id="${id}">BORRAR</button>
      </div>
    </div>
  </div>
  </div>
  
  
        `;
    });
    sidebar.innerHTML += `<button class="btn-clearAll btnc2">Limpiar carrito </button>`;
    sidebar.innerHTML += `<p class="totalAm">El total es :$ ${total}</p>`;
    sidebar.innerHTML += `<button class="btn-finish btnc3">Finalizar compra </button>`;
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    increaseNumberShoppingCart();
  }
};

const subtractProduct = (productLess) => {
  let productAlready = shoppingCart.find(
    (element) => element.id === Number(productLess)
  );

  if (productAlready) {
    productAlready.amount--;
  }
  if (productAlready.amount === 0) {
    clearProduct(productLess);
  }

  showShoppingCart();
};

const increaseProduct = (productAdd) => {
  let productAlready = shoppingCart.find(
    (element) => element.id === Number(productAdd)
  );
  productAlready.amount++;
  showShoppingCart();
};

const clearProduct = (productClear) => {
  shoppingCart = shoppingCart.filter(
    (element) => element.id !== Number(productClear)
  );
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  document.querySelector(".amount").textContent = 0;
  showShoppingCart();
};

const clearCart = () => {
  shoppingCart.length = 0;
  let total = 0;
  document.querySelector(".amount").textContent = total;

  showShoppingCart();
};
const processOrder = () => {
  location.href = "order.html";
};

const listenButtonsSideBar = () => {
  sidebar.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-less")) {
      subtractProduct(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-inc")) {
      increaseProduct(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-clear")) {
      clearProduct(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-clearAll")) {
      clearCart(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-finish")) {
      processOrder();
    }
  });
};

const increaseNumberShoppingCart = () => {
  let total = shoppingCart.reduce((acc, ite) => acc + ite.amount, 0);
  document.querySelector(".amount").textContent = total;
};

showShoppingCart();
listenButtonsSideBar();
