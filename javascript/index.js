const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "button1",
 
  },
  buttonsStyling: false
})

Swal.fire({
    html:
    '<p color:"#C24660">Ingresando a tu cuenta en MUB tenes un 10%OFF</p>'+
    '<a class="button2" href="signup.html">Suscribirme</a> ' +
    '<a class="button2" href="signin.html">Ingresar</a> ',
    imageUrl: 'imagenes/logodiscount.png',
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: 'logo discount',
    background:"#EEEEED",
    
  


  })