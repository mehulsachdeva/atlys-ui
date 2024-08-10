import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LoginModal from "."

describe("Login Modal", () => {
	const props = {
		isOpen: true,
		onClose: jest.fn(),
	}

	test("is not rendered when isOpen is false", () => {
		render(<LoginModal {...props} isOpen={false} />)
		expect(screen.queryByText(/WELCOME BACK/i)).not.toBeInTheDocument()
	})

	test("is rendered when isOpen is true", () => {
		render(<LoginModal {...props} />)
		expect(screen.queryByText(/WELCOME BACK/i)).toBeInTheDocument()
	})
})
