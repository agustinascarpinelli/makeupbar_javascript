//let usuarios=["agustina"];
//let inicio=false;
//let usuario;

//class Usuarios{
  //  constructor (nombre, apellido, edad, email){
      //  this.nombre= nombre;
      //  this.apellido= apellido;
      //  this.edad= edad;
      //  this.email= email;//
    //}
//}


//const usuario1 =new Usuarios("agustina","scarpinelli",26,"agustina.scarpinelli@gmail.com");

//CONSTRUCCION DEL ARRAY1 DE USUARIOS
//const array1= [usuario1];

//FUNCION PARA INGRESAR UN USUARIO
//function ingresarUsuario(){
    //let nuevoUsuario;
    //nombre=prompt("introduzca su nombre");
    //apellido=prompt ("introduzca su apellido");
    //edad=parseInt (prompt("Introduzca su edad"));
    //email=prompt("Introduzca su email");
    //nuevoUsuario=new Usuarios (nombre, apellido, edad,email);
    //array1.push(nuevoUsuario);
    //alert(`Bienvenido ${nuevoUsuario.nombre}`);
//}
//FUNCION PARA BUSCAR UN USUARIO
//f//unction buscarUsuario(){
    //let nombre=prompt("Ingrese su nombre: ")
    //let apellido=prompt("Ingrese su apellido: ")
//array1.forEach(persona=>{
   
       // if (persona.nombre===nombre && persona.apellido===apellido){
           // alert(`Bienvenido nuevamente ${persona.nombre}!`)
        //}
        //else{
          //  alert ("Usuario no encontrado")
           // inicio=true;
        //}
 //}
 
//)
//}

//CICLO DO/WHILE PARA BUSCAR UN INGRESAR O REGISTRARSE
//do{
    //usuario=parseInt(prompt ("Ingrese la opcion correcta:\n1) Ya estoy registrado \n2) Deseo registrarme"));
   //if (usuario===1){
          //// buscarUsuario();
       
   //}
  // else if(usuario===2){
      //// ingresarUsuario();
   //}
  // else{
       ////alert("Opcion ingresada incorrecta");
   //}
   //}
  // while (usuario<1 || usuario >2 || isNaN(usuario) || inicio===true);
/// REGISTRO
class UsuarioRegistro{
    constructor(nombre, apellido, fechadenaciemiento, email,contraseña){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fechadenaciemiento=fechadenaciemiento
        this.email=email
        this.contraseña=contraseña;
    }
}
let usuarios=[]
let usuarioPredeterminado=new UsuarioRegistro('admin','2022-02-24','admin@admin','123456')
usuarios.push(usuarioPredeterminado)
let ingreso=true; 

//FUNCION PARA BUSCAR UN USUARIO



let usuarioCorrecto=true;
let registroBoton=document.getElementById ("registroBoton")
let registroFormulario=document.getElementById ("registroFormulario")
let registroContainer=document.getElementById("registroContainer")
let registroContraseña=document.getElementById("registroContraseña")
let registroContraseña2=document.getElementById("registroContraseña2")
let ingresoBoton=document.getElementById("ingresoBoton")
let ingresoFormulario=document.getElementById("ingresoFormulario")
let ingresoContainer=document.getElementById("ingresoContainer")
localStorage.setItem('UsuarioRegistro', JSON.stringify(usuarios))

registroFormulario.addEventListener('submit', (e)=>{
e.preventDefault()
let dataForm=new FormData(e.target)
let contraseña=document.getElementById("registroContraseña").value;
let contraseña2=document.getElementById("registroContraseña2").value

if (contraseña!==contraseña2){
    let alerta2=document.getElementById("alerta2")
    alerta2.innerText+="Las contraseñas deben ser iguales"
}
else{
const nuevoUsuario=new UsuarioRegistro(dataForm.get('registroNombre'),dataForm.get('registroApellido'),dataForm.get('registroNacimiento'),dataForm.get('registroEmail'),dataForm.get('registroContraseña'))
usuarios.push(nuevoUsuario)
console.log(usuarios)
localStorage.setItem('UsuarioRegistro', JSON.stringify(usuarios))
registroBoton.innerHTML+=`
<a href="index.html"></a>`

}
})
