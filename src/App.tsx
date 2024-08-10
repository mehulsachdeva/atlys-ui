import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "contexts/auth"
import Login from "components/containers/Login"
import Dashboard from "components/containers/Dashboard"

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</AuthContextProvider>
		</Router>
	)
}

export default App
