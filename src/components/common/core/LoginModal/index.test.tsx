import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LoginModal from "."
import { PORTAL_ID } from "constants/index"

describe("Login Modal", () => {
	const props = {
		isOpen: true,
		onClose: jest.fn(),
	}

	beforeEach(() => {
		const portalRoot = document.createElement("div")
		portalRoot.id = PORTAL_ID
		document.body.appendChild(portalRoot)
	})

	afterEach(() => {
		const portalRoot = document.getElementById(PORTAL_ID)
		portalRoot && document.body.removeChild(portalRoot)
	})

	test("is not rendered when isOpen is false", () => {
		render(<LoginModal {...props} isOpen={false} />)
		expect(screen.queryByText(/WELCOME BACK/i)).not.toBeInTheDocument()
	})

	test("is rendered when isOpen is true", () => {
		render(<LoginModal {...props} />)
		expect(screen.queryByText(/WELCOME BACK/i)).toBeInTheDocument()
	})
})
