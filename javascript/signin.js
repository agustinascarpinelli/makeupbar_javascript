class Users{
constructor(email, contraseña){
    this.email=email;
    this.password=this.password;
}
}
let users =[]
let userAdmin= new Users ("admin@admin","123456")
users.push(userAdmin)
if (localStorage.getItem('usersRegistration')){
    users=JSON.parse(localStorage.getItem('usersRegistration'))
    }
    else{
        localStorage.setItem('usersRegistration',JSON.stringify(users))
    }

    
    loginForm.addEventListener('click',()=>{

    let loginEmail=document.getElementById("userEmail").value
    let loginPassword=document.getElementById("userPassword").value
    let usersStorage=JSON.parse(localStorage.getItem('usersRegister'))
    let login=false;
    do{
           usersStorage.forEach(person=>{
           if (person.email===loginEmail && person.password===loginPassword){
            console.log("usuario encontrado")
            console.log(`Datos del usuario:/nNombre:${person.name}:/nApellido:${person.LastName}/nFecha de nacimiento:${person.BirthDate}`)
            login=true;
           }

            else{
               let alert1=document.getElementById("alert1")
               alert1.innerText="Usuario Incorrecto"
                loginForm.reset()
            }
     })
    } while(login===false)


})
let sendEmail=document.getElementById("sendEmail")
let divEmail=document.getElementById("divEmail")

/*sendEmail.addEventListener('click',()=>{
    send();
    })

    const send=()=>{
        const { value: email } =  Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
          })
          
          if (email) {
            Swal.fire(`Entered email: ${email}`)
          }
    
    }*/