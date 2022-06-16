const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username", //Acá se debería poner el mail y la clave desde el que se enviará el mail
        Password : "password",
        To : 'them@website.com', //Acá donde vamos a recibir la consulta del cliente
        From : document.getElementById("email").value,
        Subject : "Thanks for signing up",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
}