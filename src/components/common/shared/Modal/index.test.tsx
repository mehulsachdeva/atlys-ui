import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Modal from "."

describe("Modal", () => {
	const props = { onClose: jest.fn() }
	test("rendered when isOpen is true", () => {
		render(
			<Modal {...props} isOpen>
				Test modal
			</Modal>,
		)
		expect(screen.getByText(/Test modal/i)).toBeInTheDocument()
	})
	test("not rendered when isOpen is false", () => {
		screen.debug()
		render(
			<Modal {...props} isOpen={false}>
				Test modal
			</Modal>,
		)
		expect(screen.queryByText(/Test modal/i)).not.toBeInTheDocument()
	})
	test("onClose called", () => {
		render(
			<Modal {...props} isOpen>
				Test modal
			</Modal>,
		)
		const closeButton = document.querySelector(".closeButton")
		closeButton && fireEvent.click(closeButton)
		expect(props.onClose).toHaveBeenCalledTimes(1)
	})
})
