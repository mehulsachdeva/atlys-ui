import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LoginModal from "."

describe("Login Modal", () => {
	const props = { onClose: jest.fn() }
	test("rendered when isOpen is true", () => {
		render(<LoginModal {...props} isOpen />)
		expect(screen.queryByText(/WELCOME BACK/i)).toBeInTheDocument()
	})
	test("not rendered when isOpen is false", () => {
		render(<LoginModal {...props} isOpen={false} />)
		expect(screen.queryByText(/WELCOME BACK/i)).not.toBeInTheDocument()
	})
})
