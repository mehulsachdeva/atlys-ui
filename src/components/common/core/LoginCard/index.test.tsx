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
	describe("Login", () => {
		const type = "login"
		test("render", () => {
			customRender(<LoginCard defaultForm={type} />)
			expect(screen.getByText(/WELCOME BACK/i)).toBeInTheDocument()
		})
		test("login not called when fields are missing", () => {
			customRender(<LoginCard defaultForm={type} />)
			fireEvent.click(screen.getByText(/Login now/i))
			expect(login).toHaveBeenCalledTimes(0)
		})
		test("login called when fields are filled", () => {
			customRender(<LoginCard defaultForm={type} />)
			const usernameElement = screen.getByPlaceholderText(/Enter your email or username/i)
			const passwordElement = screen.getByPlaceholderText(/Enter your password/i)
			fireEvent.change(usernameElement, { target: { value: users[0].username } })
			fireEvent.change(passwordElement, { target: { value: users[0].password } })
			fireEvent.click(screen.getByText(/Login now/i))
			expect(login).toHaveBeenCalledTimes(1)
		})
	})

	describe("Register", () => {
		const type = "register"
		test("render", () => {
			customRender(<LoginCard defaultForm={type} />)
			expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument()
		})
		test("register not called when fields are missing", () => {
			customRender(<LoginCard defaultForm={type} />)
			const buttonElement = document.querySelector(".button")
			fireEvent.click(within(buttonElement as any).getByText(/Continue/i))
			expect(register).toHaveBeenCalledTimes(0)
		})
		test("register called when fields are missing", () => {
			customRender(<LoginCard defaultForm={type} />)
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
})
