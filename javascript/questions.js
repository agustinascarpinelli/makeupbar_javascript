let questions = document.getElementById("questions");
questions.innerHTML += `
<h1>Preguntas Frecuentes</h1>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ¿Cuales son los metodos de pago aceptados?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
      <li>Tarjetas de credito y debito a traves de Mercado Pago (para saber si tenes cuotas sin interes podes checkear las promociones vigentes en www.mercadopago.com.ar/cuotas)
      </li>
      <li>Rappipago y Pagofacil a traves de Mercado Pago ¡No aplica descuento!
      </li>
      <li>Efectivo: Podes abonar tu compra eligiendo envio por moto, al recibir tu compra (GBA Y CABA).
      </li>
      <li>Transferencia/ deposito bancario: Los datos bancarios te los informaremos via email para que puedas completar el pago.
      </li>
      <li>Abonando en efectivo,deposito o transferencia bancaria tenes un 20% de descuento sobre los precios de nuestra tienda online (el descuento se calcula automaticamente al momento del checkout, no hace falta ingresar ningun cupon.)
      </li>
      </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        ¿Como son los envios?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
      <li>Correo Argentino: Realizamos envios a todo el pais a traves de Correo Argentino. A domicilio o a sucursal.Una vez recibida la confirmacion de pago de la orden, el pedido es despachado dentro de las 72 hs habiles.El codigo de seguimiento de tu pedido sera informado via email.
      </li>
      <li>Si estas en CABA o en GBA podes elegir entre estas dos opciones:
      <ul>
      <li> Moto: Realizamos envios por moto dentro de CABA ($300) Y GBA($600/$800 segun zona).
      </li>
      <li> Retiro en sucursal: Estamos en Guatemala 4827, CABA.Podes realizar tu compra online y retirar la misma sin costo.
      </li>
      </ul>
      </li>
      </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        ¿Los productos que venden son originales?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">TODOS los productos que vendemos son 100% originales.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
       ¿Que pasa si no tienen stock del producto que quiero?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Podes anotarte en el producto que quieras con tu mail, donde dice "Avisarme cuando haya stock". Una vez que recibamos stock, se te enviara una notificacion automatica avisandote que el producto volvio a ingresar</div>
    </div>
  </div>
  <div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingFive">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
     ¿Los productos tienen cambio?
    </button>
  </h2>
  <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">Una vez retirado/recibido no ofrecemos cambios ni devoluciones de nuestros productos</div>
  </div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingSix">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
   ¿No respondimos tu duda?
  </button>
</h2>
<div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Dejanos tu consulta <a href="contact.html">aqui</a> para que podamos ayudarte</div>
</div>
</div>
</div>`;
