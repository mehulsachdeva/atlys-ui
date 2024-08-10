import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import LoginCard from "."

describe("Login Card Component", () => {
	const props = {
		onSuccess: jest.fn(),
	}

	test("is rendered", () => {
		render(<LoginCard {...props} />)
		expect(screen.getByText(/WELCOME BACK/i)).toBeInTheDocument()
	})

	test("is rendered with default login form", () => {
		render(<LoginCard {...props} defaultForm="login" />)
		expect(screen.getByText(/WELCOME BACK/i)).toBeInTheDocument()
	})

	test("is rendered with default register form", () => {
		render(<LoginCard {...props} defaultForm="register" />)
		expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument()
	})

	test("on success is called on button click", () => {
		render(<LoginCard {...props} defaultForm="login" />)
		fireEvent.click(screen.getByText(/Login now/i))
		expect(props.onSuccess).toHaveBeenCalledTimes(1)
	})
})
