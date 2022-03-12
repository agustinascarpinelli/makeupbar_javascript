class UserRegistration{
    constructor(name, lastName, birthDate, email,password){
        this.email=email; 
        this.password=password;
        this.name=name;
        this.lastName=lastName;
        this.birthDate=birthDate;
        
    }
}
let newUser=[]
let preUser=new UserRegistration('admin','2022-02-24','admin@admin','123456')
newUser.push(preUser)
let entry=true; 

//FUNCION PARA BUSCAR UN USUARIO

let registrationButton=document.getElementById ("registrationButton")
let registrationForm=document.getElementById ("registrationForm")
let registrationContainer=document.getElementById("registrationContainer")
let registrationPassword=document.getElementById("registrationPassword")
let registrationPassword2=document.getElementById("registrationPassword2")
let loginButton=document.getElementById("loginButton")
let loginForm=document.getElementById("loginForm")
let loginContainer=document.getElementById("loginContainer")


registrationForm.addEventListener('submit', (e)=>{
e.preventDefault()
let dataForm=new FormData(e.target)
let password=document.getElementById("registrationPassword").value;
let password2=document.getElementById("registrationPassword2").value

if (password!==password2){
    let alerta2=document.getElementById("alerta2")
    alerta2.innerText+="Las contraseñas deben ser iguales"
}
else{
const user=new UserRegistration(dataForm.get('registrationName'),dataForm.get('registrationLastName'),dataForm.get('registroBirthDate'),dataForm.get('registrationEmail'),dataForm.get('registrationPassword'))
newUser.push(user)
console.log(newUser)
if (localStorage.getItem('userRegistration')){
    newUser=JSON.parse(localStorage.getItem('userRegistration'))
}
else{
    localStorage.setItem('UserRegistration', JSON.stringify(newUser))
}

registrationButton.innerHTML+=`
<a href="index.html"></a>`
}
})
