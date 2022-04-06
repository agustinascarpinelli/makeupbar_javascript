let contact = document.getElementById("contact");
contact.innerHTML += `
<h1>CONTACTO</h1>
<p><ion-icon name="logo-whatsapp"></ion-icon> <a href="https://wa.me/1150413703?text=¡Hola! queria hacer una consulta...">1150413703</a>
<p><ion-icon name="mail-outline"></ion-icon><a href="mailto:agus.sc@live.com.ar?subject:Contacto&body=Hola!Queria hacer una consulta..."> hola@makeupbar.com.ar</a>
<div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre">
</div>
<div class="mb-3">
  <input type="email" required="true" class="form-control" id="exampleFormControlInput2" placeholder="Email">
</div>
<div class="mb-3">
  <input type="number" class="form-control" id="exampleFormControlInput3" placeholder="Telefono">
</div>
<div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje"></textarea>
</div>
<div class="col-auto">
    <input type="submit" class="button3" id="send" value="Enviar"/>
  </div>
  `;
let buttonSend = document.getElementById("send");
buttonSend.onclick = () => {
  swal.fire({
    title: "Gracias por escribirnos!",
    color: "#C24660",
    text: "Nos pondremos en contacto a la brevedad",
    icon: "success",
    background: "#EEEEED",
  });
};
