console.log('Hola Caracola')


const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const btnSubmit = document.getElementById('btn-submit');
const parrafo = document.getElementById('p1')
const arrayContactos = []

console.log(inputName, inputEmail, inputMessage, btnSubmit, p1)

let user = {
    name: inputName.value,
    email: inputEmail.value,
    mensaje: inputMessage.value,
}
console.log(user)


function sendData(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify({
        name: inputName.value,
        email: inputEmail.value,
        mensaje: inputMessage.value,
    }))
    viewData()

    arrayContactos.push(JSON.parse(localStorage.getItem("user")))

    localStorage.setItem("arraySubido", JSON.stringify(
        arrayContactos
    ))

    let newArray = JSON.parse(localStorage.getItem("arraySubido"))

        console.log(newArray)

    for (let i = 0; i < newArray.length; i++) {
        
        
    }

    console.log(arrayContactos)
}
viewData()

btnSubmit.addEventListener('click', sendData)


function viewData() {
    const nameSaved = localStorage.getItem('name') 
    const emailSaved = localStorage.getItem('email')
    const messageSaved = localStorage.getItem('message')
    parrafo.innerText = 'Hola soy ' + nameSaved + ' este es mi email ' + emailSaved + " y " + messageSaved
}





