const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "button1",
  },
  buttonsStyling: false,
});

Swal.fire({
  html: '<p color:"#C24660">Ingresando el codigo ABRILMKB tenes un 10% OFF en el total de tu compra</p>',
  imageUrl: "images/logodiscount.png",
  imageWidth: 150,
  imageAlt: "logo discount",
  background: "#EEEEED",
  showConfirmButton: false,
  timer: 2000,
});
