import axios from "axios"

export const checkJwt = async () => {
    let jwtToken = "Bearer" + " " + localStorage.getItem("jwt")

    try {
        const response = await axios.get('http://localhost:4202/jwt/check/', {
            headers: {
                authorization: jwtToken
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}