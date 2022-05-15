var input = document.querySelector('.text-container')
var emtpyText = document.querySelector('.simple-text')
var formulario = document.querySelector('.formulario')
var lista = document.querySelector('.list-contain')

input.focus()


function validar() {
    var userInput = input.value
    if (userInput === '') {
        alert('ingrese un texto por favor')
    }
    else {
        if (emtpyText.textContent === '') {
            emtpyText.textContent = `${userInput}`
            document.getElementsByClassName("text-container")[0].value = "";
        } else {
            var li = document.createElement('li')
            li.textContent = `${userInput}`
            lista.insertAdjacentElement('afterbegin', li)
            document.getElementsByClassName("text-container")[0].value = "";
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









