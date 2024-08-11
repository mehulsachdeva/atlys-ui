import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "contexts/auth"
import Login from "components/pages/Login"
import Dashboard from "components/pages/Dashboard"

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
