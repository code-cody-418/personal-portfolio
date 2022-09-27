import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../../store/authSlice'

/**
 * A custom hook to handle grabbing pertinent information from the jwt token stored in redux
 *
 * @returns {{authenticatedUser: {fullname: string, isAdmin: boolean, username: string, loginTime } | null, isLoading:
 *     boolean}} an object containing the auth object from the JWT token stored in redux | null if the user is not
 *     logged in, and a helper flag to help with react rendering and redirects
 */

export function useJwtToken () {

	const [isLoading, setIsLoading] = React.useState(true)
	const jwt = useSelector((state) => {
		return state.auth;
	})
	const authenticatedUser = jwt ?? null

	const dispatch = useDispatch();

	const initialEffects =  () => {
		async function getAuthFromRedux () {
			await dispatch(fetchAuth())
			setIsLoading(false)

		}
		getAuthFromRedux().catch(onerror => {console.error(onerror)})
	}

	React.useEffect(initialEffects, [dispatch])
	return {authenticatedUser, isLoading}

}
