import { createSlice } from "@reduxjs/toolkit";

export const accountItemsSlice = createSlice({
    name: 'accountItems',
    initialState: {
        allAccountItems: []
    },
    reducers: {
        increment: (state) => {
            state += 1
        },
        decrement: (state) => {
            state -= 1
        },
        incrementByAmount: (state, action) => {
            state += action.payload
        },
        fetchAllItems: (state, action) => {
            state.allAccountItems = action.payload
        }
    }
})

//destructure the actions
export const { increment, decrement, incrementByAmount, fetchAllItems } = accountItemsSlice.actions

//get the value of the state
export const getAccountCount = (state) => {
    return state.accountItems
}

//fetch the state with a thunk
export const fetchTest = () => async (dispatch) => {
        let jwtToken = "Bearer" + " " + localStorage.getItem("jwt")
        const response = await fetch('http://localhost:4202/account-items/', {
            method: "GET",
            headers: {
                authorization: jwtToken
            }
        })
            .then((response) => response.json())
            .catch((error) => console.error(error)) 
        // console.log(response.body.allAccountItems)
        dispatch(fetchAllItems(response.body.allAccountItems))
}