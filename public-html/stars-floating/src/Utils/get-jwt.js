/*
User email and password info sent to server and receives JWt that is stored in local storage
*/

export const getJwt = () => {
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
                if (data.token) {
                    localStorage.setItem("jwt", data.token) //saves jwt token to localstorage
                } else {
                    console.log(data.message)
                }
            })
            .catch((error) => console.error(error))
    })
}