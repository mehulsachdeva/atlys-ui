import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { users as mockUsers } from "./mock"

interface AuthContextType {
	children: React.ReactNode
}

type UserType = {
	logged?: boolean
	username: string
	email?: string
	password: string
}

const AuthContext = createContext({})

const initializeUser = () => {
	if (typeof localStorage === "undefined") return
	let user = { logged: false }
	try {
		const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}")
		if (loggedUser.username) {
			user = { ...loggedUser, logged: true }
		}
	} catch (err) {}
	return user
}

const AuthContextProvider = (props: AuthContextType) => {
	const { children } = props
	const [user, setUser] = useState(initializeUser())
	const navigate = useNavigate()

	useEffect(() => {
		let users
		try {
			users = JSON.parse(localStorage.getItem("users") || "[]")
		} catch (err) {}
		if (!users?.length) {
			users = mockUsers
		}
		localStorage.setItem("users", JSON.stringify(users))
	}, [])

	/* Validate user login which gives user data and redirect accordingly */
	const login = (user: UserType, callback?: () => void) => {
		const authenticatedUser = authenticate(user.username, user.password)
		if (!authenticatedUser) return false
		delete authenticatedUser.password
		localStorage.setItem("logged_user", JSON.stringify(authenticatedUser))
		setUser({ ...authenticatedUser, logged: true })
		navigate("/dashboard")
		callback?.()
		return authenticatedUser
	}

	/* Register user and redirect accordingly */
	const register = (user: UserType, callback?: () => void) => {
		let users = [user]
		try {
			const currentUsers = JSON.parse(localStorage.getItem("users") || "[]")
			users.push(...currentUsers)
		} catch (err) {}
		localStorage.setItem("users", JSON.stringify(users))
		login(user, callback)
	}

	/* Invalidate the user and redirect accordingly */
	const logout = (redirectToLogin = false) => {
		localStorage.removeItem("logged_user")
		setUser({ logged: false })
		redirectToLogin && navigate("/")
	}

	/* Here username can be email as well */
	const authenticate = (username: string, password: string) => {
		let user = null
		try {
			username = username.toLowerCase()
			const users = JSON.parse(localStorage.getItem("users") || "[]")
			const authenticatedUser = users.find((user: UserType) => {
				return (
					(user.username.toLowerCase() === username || user.email?.toLowerCase() === username) &&
					user.password === password
				)
			})
			if (authenticatedUser) {
				user = authenticatedUser
			}
		} catch (err) {}
		return user
	}

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthContextProvider }
