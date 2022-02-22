let usuarios=["agustina"];
let inicio=false;
let usuario;

class Usuarios{
    constructor (nombre, apellido, edad, email){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.email= email;
    }
}


const usuario1 =new Usuarios("agustina","scarpinelli",26,"agustina.scarpinelli@gmail.com");

//CONSTRUCCION DEL ARRAY1 DE USUARIOS
const array1= [usuario1];

//FUNCION PARA INGRESAR UN USUARIO
function ingresarUsuario(){
    let nuevoUsuario;
    nombre=prompt("introduzca su nombre");
    apellido=prompt ("introduzca su apellido");
    edad=parseInt (prompt("Introduzca su edad"));
    email=prompt("Introduzca su email");
    nuevoUsuario=new Usuarios (nombre, apellido, edad,email);
    array1.push(nuevoUsuario);
    alert(`Bienvenido ${nuevoUsuario.nombre}`);
}
//FUNCION PARA BUSCAR UN USUARIO
function buscarUsuario(){
    let nombre=prompt("Ingrese su nombre: ")
    let apellido=prompt("Ingrese su apellido: ")
array1.forEach(persona=>{
   
        if (persona.nombre===nombre && persona.apellido===apellido){
            alert(`Bienvenido nuevamente ${persona.nombre}!`)
        }
        else{
            alert ("Usuario no encontrado")
            inicio=true;
        }
 }
 
)
}

//CICLO DO/WHILE PARA BUSCAR UN INGRESAR O REGISTRARSE
do{
    usuario=parseInt(prompt ("Ingrese la opcion correcta:\n1) Ya estoy registrado \n2) Deseo registrarme"));
   if (usuario===1){
           buscarUsuario();
       
   }
   else if(usuario===2){
       ingresarUsuario();
   }
   else{
       alert("Opcion ingresada incorrecta");
   }
   }
   while (usuario<1 || usuario >2 || isNaN(usuario) || inicio===true);
   
