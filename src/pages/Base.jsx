import React, { useContext, useEffect } from 'react'
import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"
import style from '../css/base.module.css'
import { firebaseUserGetCurrentUser } from '../api/Users'
import { firebaseServiceGetServices } from '../api/Services'
import currentUserContext from '../dataManager/context/currentUserContext'

const Base = ({ children }) => {
	const { login } = useContext(currentUserContext)

	useEffect(() => {
		// Get current user
		firebaseUserGetCurrentUser(login)

		// Get list of service
		firebaseServiceGetServices()

		// if (data) {
		// 	console.log(data)
		// } else {
		// 	console.log(error)
		// }
	}, [])

	return(
		<>
			<Navbar />
		
			<main className={style.content}>
				{ children }
			</main>

			<Footer />
		</>
	)
}

export default Base