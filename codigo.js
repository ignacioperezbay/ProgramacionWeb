document.getElementById('nombreIngresado').value = 
localStorage.getItem('nameUser')

function guardarData(){
    let valueIngresado = document.getElementById('nombreIngresado').value
    console.log(valueIngresado)
    localStorage.setItem('nameUser', valueIngresado)
    
}   

document.getElementById('apellidoIngresado').value = 
localStorage.getItem('apellidoUser')

function guardarData(){
    let valueIngresado = document.getElementById('apellidoIngresado').value
    console.log(valueIngresado)
    localStorage.setItem('apellidoUser', valueIngresado)
}   

document.getElementById('edadIngresada').value = 
localStorage.getItem('edadUser')

function guardarData(){
    let valueIngresado = document.getElementById('edadIngresada').value
    console.log(valueIngresado)
    localStorage.setItem('edadUser', valueIngresado)
}   


document.getElementById('sexoIngresado').value = 
localStorage.getItem('sexoUser')

function guardarData(){
    let valueIngresado = document.getElementById('sexoIngresado').value
    console.log(valueIngresado)
    localStorage.setItem('sexoUser', valueIngresado)
}   