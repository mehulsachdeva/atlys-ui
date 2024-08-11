import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Input from "."

describe("Button", () => {
	const props = { type: "text", onChange: jest.fn() } as any
	test("rendered", () => {
		render(<Input {...props} />)
		const inputElement = document.querySelector(`.input[type=${props.type}]`)
		expect(inputElement).toBeInTheDocument()
	})
	test("rendered with value", () => {
		render(<Input {...props} value="Test value" />)
		const inputElement = document.querySelector(`.input[type=${props.type}]`)
		expect(inputElement).toHaveAttribute("value", "Test value")
	})
	test("onChange called", () => {
		render(<Input {...props} value="Test value" />)
		const inputElement = document.querySelector(`.input[type=${props.type}]`)
		inputElement && fireEvent.change(inputElement, { target: { value: "New value" } })
		expect(props.onChange).toHaveBeenCalledTimes(1)
	})
})
