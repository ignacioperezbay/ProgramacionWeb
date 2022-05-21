console.log("soy externo")
let parrafo1 = document. getElementById("pConId")
console.log(parrafo1)
let parrafo2 = document. getElementsByClassName("pConClass")
console.log(parrafo2)
let parrafo3 = document. getElementsByTagName("p")
console.log(parrafo3)
function cambiarTitular(){
let titular1 = document. getElementById("Titular")
titular1.innerText = "Otra Cosa"
}

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = "<h2>BU!!</h2>"
    contenedor.className = "Titulo2"
    let texto = "Hola"
    contenedor.append(texto)
}

function borrarPais(){
 let paises = document.getElementsByClassName("paises")
 paises[0].remove()
}



//ECMASCRIPT 6
//Template Literal

document.body.append(`El nombre de usuario es ${nombreUsuario} y su edad es ${edadUsuario}`)
//query = Consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)