import React from 'react'
import {useDispatch} from 'react-redux'
import {Button} from "react-bootstrap"
import {httpConfig} from "../../utils/http-config";
import {getAuth} from "../../../../store/authSlice";
import "../sign-in/menuStyle.css"

export const SignOut = () => {
	const dispatch = useDispatch()
	const signOut = () => {
		httpConfig.get('/apis/sign-out/').then(reply => {

			if (reply.status === 200) {
				window.localStorage.removeItem('authorization')
				dispatch(getAuth(null))
				window.location = '/'

			}
		})
	}

	return(
		<>
				<Button onClick={signOut} size="lg" className='star-button signInOutButton border-0'>
					Sign Out Profile&nbsp;&nbsp;
				</Button>
		</>
	)
}
