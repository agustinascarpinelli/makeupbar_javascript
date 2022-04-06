const orderCart = document.getElementById("orderCart");
const client = document.getElementById("client");
const email = document.getElementById("email");
const finish = document.getElementById("finish");
const total = document.getElementById("total");
const orderList = document.querySelector("#orderList tbody");
const discountOrder = document.getElementById("discountOrder");

loadEvents();

function loadEvents() {
  document.addEventListener("DOMContentLoaded", readLocalStorageOrder());
  calculate();
  orderCart.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-clear")) {
      clearProduct(e.target.getAttribute("data-id"));
      e.target.parentElement.parentElement.remove();
      calculate();
      if (shoppingCart.length === 0) {
        discountACorder();
      }
    }
  });
  finish.addEventListener("click", (e) => {
    if (e.target.classList.contains("finish-order")) {
      finishOrder(e);
    }
  });

  listenButtonsOrderCart();
}

function listenButtonsOrderCart() {
  orderCart.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-less")) {
      subtractProduct(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-inc")) {
      increaseProduct(e.target.getAttribute("data-id"));
    }
  });
}

function readLocalStorageOrder() {
  shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  shoppingCart.forEach(function (element) {
    let { img, name, price, amount, id } = element;

    const row = document.createElement("tr");
    row.innerHTML = `
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
function finishOrder(e) {
  if (shoppingCart.length === 0) {
    e.preventDefault();
    Swal.fire({
      type: "error",
      title: "No has agregado productos",
      text: "Selecciona productos para poder seguir con la compra",
      showConfirmButton: false,
      timer: 2000,
    }).then(function () {
      window.location = "allProducts.html";
    });
  } else if (client.value === "" || email.value === "") {
    e.preventDefault();
    Swal.fire({
      type: "error",
      title: "No ha ingresado sus datos",
      text: "Ingrese todos los campos requeridos para poder procesar la compra",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    emailjs.init("2-YWq3evFeI2uU8gy");

    document
      .getElementById("process-pay")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const serviceID = "service_ld2hgjg";
        const templateID = "template_pot36v5";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            Swal.fire({
              title: "Gracias por su compra!",
              text: "Se le ha enviado un mail con el detalle de la compra",
              showConfirmButton: false,
              timer: 5000,
            });

            setTimeout(() => {
              shoppingCart.length = 0;
              sessionStorage.clear();
              localStorage.setItem(
                "shoppingCart",
                JSON.stringify(shoppingCart)
              );
              window.location = "index.html";
            }, 2000);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
      });
  }
}

function calculate() {
  let totalOrder = 0;

  shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  shoppingCart.forEach(function (products) {
    let element = Number(products.price * products.amount);
    totalOrder = totalOrder + element;
  });
  document.getElementById("total").value = "$ " + totalOrder.toFixed(2);
  let dis = totalOrder * 0.1;
  let totalDis = totalOrder - dis;
  calculateDiscount();
  let cupon = sessionStorage.getItem("discountAC");
  if (cupon === "Acepted") {
    document.getElementById("total").value = "$ " + totalDis.toFixed(2);
    document.getElementById("discount").value = "ABRILMKB";
  }
}
function discountACorder() {
  document.getElementById("discount").value = "";
  sessionStorage.clear();
}
function calculateDiscount() {
  discountOrder.addEventListener("click", (e) => {
    if (e.target.classList.contains("discountOrderCart")) {
      let disc = document.getElementById("discount").value;
      if (disc === "ABRILMKB") {
        sessionStorage.setItem("discountAC", "Acepted");
      } else if (disc === "") {
        sessionStorage.setItem("discountAC", "Deny");
      } else {
        Swal.fire({
          type: "error",
          title: "Codigo ingresado incorrecto",
          text: "Ingrese un codigo valido",
          showConfirmButton: false,
          timer: 2000,
        });
        sessionStorage.setItem("discountAC", "Deny");
      }
    }
  });
}
