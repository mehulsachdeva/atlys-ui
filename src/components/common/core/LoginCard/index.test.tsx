import React from "react"
import "@testing-library/jest-dom"
import { AuthContext } from "contexts/auth"
import { render, screen, fireEvent, within } from "@testing-library/react"
import LoginCard from "."
import { users } from "contexts/auth/mock"

const login = jest.fn()
const register = jest.fn()

const customRender = (children: React.ReactNode) => {
	return render(<AuthContext.Provider value={{ login, register }}>{children}</AuthContext.Provider>)
}

describe("Login Card", () => {
	const props = {}

	test("is rendered", () => {
		customRender(<LoginCard {...props} />)
		expect(screen.getByText(/WELCOME BACK/i)).toBeInTheDocument()
	})

	test("is rendered with default login form", () => {
		customRender(<LoginCard {...props} defaultForm="login" />)
		expect(screen.getByText(/WELCOME BACK/i)).toBeInTheDocument()
	})

	test("is rendered with default register form", () => {
		customRender(<LoginCard {...props} defaultForm="register" />)
		expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument()
	})

	test("login is not called when fields aren't filled", () => {
		customRender(<LoginCard {...props} defaultForm="login" />)
		fireEvent.click(screen.getByText(/Login now/i))
		expect(login).toHaveBeenCalledTimes(0)
	})

	test("register is not called when fields aren't filled", () => {
		customRender(<LoginCard {...props} defaultForm="register" />)
		const buttonElement = document.querySelector(".button")
		fireEvent.click(within(buttonElement as any).getByText(/Continue/i))
		expect(register).toHaveBeenCalledTimes(0)
	})

	test("login is called when fields are filled", () => {
		customRender(<LoginCard {...props} defaultForm="login" />)
		const usernameElement = screen.getByPlaceholderText(/Enter your email or username/i)
		const passwordElement = screen.getByPlaceholderText(/Enter your password/i)
		fireEvent.change(usernameElement, { target: { value: users[0].username } })
		fireEvent.change(passwordElement, { target: { value: users[0].password } })
		fireEvent.click(screen.getByText(/Login now/i))
		expect(login).toHaveBeenCalledTimes(1)
	})

	test("register is called when fields are filled", () => {
		customRender(<LoginCard {...props} defaultForm="register" />)
		const emailElement = screen.getByPlaceholderText(/Enter your email/i)
		const usernameElement = screen.getByPlaceholderText(/Choose a preferred username/i)
		const passwordElement = screen.getByPlaceholderText(/Choose a strong password/i)
		fireEvent.change(emailElement, { target: { value: users[0].email } })
		fireEvent.change(usernameElement, { target: { value: users[0].username } })
		fireEvent.change(passwordElement, { target: { value: users[0].password } })
		const buttonElement = document.querySelector(".button")
		fireEvent.click(within(buttonElement as any).getByText(/Continue/i))
		expect(register).toHaveBeenCalledTimes(1)
	})
})
