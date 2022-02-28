
localStorage.setItem('UsuariosRegistro',JSON.stringify(usuarios))
ingresoFormulario.addEventListener('click',()=>{

    let ingresoEmail=document.getElementById("usuarioEmail").value
    let ingresoContraseña=document.getElementById("usuarioContraseña").value
    let usuariosDeStorage=JSON.parse(localStorage.getItem('UsuariosRegistro'))
    
    do{
           usuariosDeStorage.forEach(persona=>{
           if (persona.email===ingresoEmail && persona.contraseña===ingresoContraseña){
            console.log("usuario encontrado")
            console.log(`Datos del usuario:/nNombre:${persona.nombre}:/nApellido:${persona.apellido}/nFecha de nacimiento:${persona.fechadenacimiento}`)
            }
    
            else{
               let alerta2=document.getElementById("alerta2")
               alerta2.innerText="Usuario Incorrecto"
                ingreso=false;
                ingresoFormulario.reset()
            }
     })
    } while(ingreso===false)


})
let enviarEmail=document.getElementById("enviarEmail")
let divEmail=document.getElementById("divEmail")

enviarEmail.addEventListener('click',()=>{
divEmail.innerHTML=`
<label for="email" name="enviarEmail" id="enviarEmail">Ingresa tu email</label>
<input type="text"name="emailVerficacion" id="emailVerificacion" placeholder="Email">
<button type="submit" name="botonVerificacion" id ="botonVerificacion">Enviar</button>
`
})

let botonVerificacion=document.getElementById("botonVerificacion")

botonVerificacion.addEventListener('click', ()=>{

 divEmail.innerHTML=`
 <p>Se ha enviado un email para recuperar la contraseña</p>`

}
)
