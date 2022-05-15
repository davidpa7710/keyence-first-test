var input = document.querySelector('.text-container')
var btn = document.querySelector('.btn-container')
var emtpyText = document.querySelector('.simple-text')
var formulario = document.querySelector('.formulario')
var lista = document.querySelector('.list-contain')


function validar() {
    var userInput = input.value
    if (userInput === '') {
        alert('ingrese un texto por favor')
    }
    else {
        if (emtpyText.textContent === '') {
            emtpyText.textContent = `Usted ingreso el texto: ${userInput}`
            console.log(' el elemento no esta ocupado');
        } else {
            var li = document.createElement('li')
            li.textContent = `Usted ingreso otro texto: ${userInput}`
            lista.insertAdjacentElement('afterbegin', li)
            console.log(' el elemento esta ocupado se inserto en otro elemento');
        }
    }

}
function keyPress(e) {
    if (e.keyCode == '13') {
        e.preventDefault();
        validar();
    }
}

window.addEventListener('keydown', keyPress)






btn.addEventListener('click', validar)


