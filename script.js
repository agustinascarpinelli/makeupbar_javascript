let usuarios=["agustina"];
let inicio=false;
let usuario;

do{
 usuario=parseInt(prompt ("Ingrese la opcion correcta:\n1) Ya estoy registrado \n2) Deseo registrarme"));
if (usuario===1){
    let usuarioViejo=prompt("Ingrese su numbre: ")
    let indice=usuarios.indexOf(usuarioViejo)
    if (indice!==-1){
        alert(`Bienvenido nuevamente ${usuarioViejo}`)
    }
    else{
        alert("Usuario no encontrado")
        inicio=true;
    }
}
else if(usuario===2){
let nuevoUsuario=prompt("Ingrese su nombre: ")
usuarios.push(nuevoUsuario)
alert(`Bienvenido ${nuevoUsuario}`);
inicio=false;
}
else{
    alert("Opcion ingresada incorrecta")
}
}
while (usuario<1 || usuario >2 || isNaN(usuario) || inicio===true);

