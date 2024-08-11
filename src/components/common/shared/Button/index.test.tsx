import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Button from "."

describe("Button", () => {
	const props = { children: "Button", onClick: jest.fn() }
	test("rendered", () => {
		render(<Button {...props} />)
		expect(screen.getByText(props.children)).toBeInTheDocument()
	})
	test("onClick called", () => {
		render(<Button {...props} />)
		const buttonElement = screen.getByText(props.children)
		fireEvent.click(buttonElement)
		expect(props.onClick).toHaveBeenCalledTimes(1)
	})
	test("onClick not called when disabled", () => {
		render(<Button {...props} disabled />)
		const buttonElement = screen.getByText(props.children)
		fireEvent.click(buttonElement)
		expect(props.onClick).toHaveBeenCalledTimes(0)
	})
})
