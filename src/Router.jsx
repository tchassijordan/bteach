import React, { useEffect } from 'react'
import { Routes, Route, Redirect } from "react-router-dom";

import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import SignupClient from './pages/signupClient/SignupClient'
import SignupRepeater from './pages/signupRepeater/SignupRepeater'
import ClientProfile from './pages/clientProfile/ClientProfile'
import RepeaterProfile from './pages/repeaterProfile/RepeaterProfile'
import SearchRepeaters from './pages/searchRepeaters/SearchRepeaters'
import SearchClients from './pages/searchClients/SearchClients'
import Error404 from './pages/error404/Error404'



const Router = () => {

	return(
		<Routes>

			<Route path="/" >
				<Route index element={<Home />} />
				<Route path="sign_in" element={<Signin />} />

				<Route path="repeater">
					<Route  path="sign_up" element={<SignupRepeater />} />
					<Route  path="profile/:repeaterName" element={<RepeaterProfile />} />
				</Route>

				<Route path="client">
					<Route  path="sign_up" element={<SignupClient />} />
					<Route  path="profile/:clientName" element={<ClientProfile />} />
				</Route>

				<Route path="search">
					<Route  path="clients" element={<SearchClients />} />
					<Route  path="repeaters" element={<SearchRepeaters />} />
				</Route>

				<Route  path="*" element={<Error404 />} />
			</Route>

		</Routes>
	)
}

export default Router