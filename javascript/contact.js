let contact = document.getElementById("contact");
contact.innerHTML += `
<h1>CONTACTO</h1>
<p><ion-icon name="logo-whatsapp"></ion-icon> <a href="https://wa.me/1150413703?text=¡Hola! queria hacer una consulta...">1150413703</a></p>
<p><ion-icon name="mail-outline"></ion-icon><a href="mailto:agus.sc@live.com.ar?subject:Contacto&body=Hola!Queria hacer una consulta..."> hola@makeupbar.com.ar</a></p>
<form>
<div class="mb-3">
  <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Nombre">
</div>
<div class="mb-3">
  <input type="email" class="form-control validate-email"  title="Por favor, solo proporciona una dirección de correo" required="true" class="form-control" id="exampleFormControlInput2" placeholder="Email">
</div>
<div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required="true" placeholder="Mensaje"></textarea>
</div>
<div class="col-auto">
    <input type="submit" class="button3" id="send" value="Enviar"/>
    </form>
  </div>
  `;

const input1=document.getElementById("exampleFormControlInput1")
const input2=document.getElementById("exampleFormControlInput2")
const input3=document.getElementById("exampleFormControlTextarea1")




let buttonSend = document.getElementById("send");
buttonSend.addEventListener('click', (e) => {
  e.preventDefault();
  if ((input1.value!="")&&(input2.value!="")&&(input3.value!="")){

  swal.fire({
    title: "¡Gracias por escribirnos!",
    color: "#C24660",
    text: "Nos pondremos en contacto a la brevedad",
    background: "#EEEEED",
    showConfirmButton:false,
    timer:2000,
  }); 
  setTimeout(()=>{
  window.location="index.html";},2000)}
  else {
    
    swal.fire({
      title: "Por favor complete todos los campos",
      color: "#C24660",
      background: "#EEEEED",
      showConfirmButton:false,
      timer:2000,
    }); 
  }

})
