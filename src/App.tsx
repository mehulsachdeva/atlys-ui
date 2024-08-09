import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "components/containers/Login"
import Dashboard from "components/containers/Dashboard"

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	)
}

export default App
