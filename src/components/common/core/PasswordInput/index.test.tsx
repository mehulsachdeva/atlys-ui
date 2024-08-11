import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import PasswordInput from "."

describe("Password Input", () => {
	const props = { placeholder: "Test placeholder", onChange: jest.fn() }
	test("rendered", () => {
		render(<PasswordInput {...props} />)
		expect(screen.getByPlaceholderText(props.placeholder)).toBeInTheDocument()
	})
	test("onChange called", () => {
		render(<PasswordInput {...props} />)
		const inputElement = screen.getByPlaceholderText(props.placeholder)
		fireEvent.change(inputElement, { target: { value: "New value" } })
		expect(props.onChange).toHaveBeenCalled()
	})
	test("password visible on toggle click", () => {
		render(<PasswordInput {...props} />)
		const inputElement = screen.getByPlaceholderText(props.placeholder)
		const toggleElement = document.querySelector(".togglePassword")
		expect(inputElement).toHaveAttribute("type", "password")
		toggleElement && fireEvent.click(toggleElement)
		expect(inputElement).toHaveAttribute("type", "text")
	})
})
