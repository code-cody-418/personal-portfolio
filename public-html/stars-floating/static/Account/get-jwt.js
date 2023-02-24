/*
User email and password info sent to server and receives JWt that is stored in local storage
*/

let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let formData = document.getElementById("submitAuth")

let url = "http://localhost:4202/sign-in/"

const postAuth = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

formData.addEventListener('click', () => {
    postAuth(url,
        { email: emailInput.value, password: passwordInput.value }
    )
        .then((data) => {
            localStorage.setItem("jwt", data.token) //saves jwt token to localstorage
        })
        .catch((error) => console.error(error))
})