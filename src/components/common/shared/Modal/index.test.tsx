import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Modal from "."

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe("Modal", () => {
	const props = { animationSpeed: 200, onClose: jest.fn() }

	describe("isOpen is true", () => {
		test("rendered", () => {
			render(
				<Modal {...props} isOpen>
					Test modal
				</Modal>,
			)
			expect(screen.getByText(/Test modal/i)).toBeInTheDocument()
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
		test("document is unscrollable", async () => {
			render(
				<Modal {...props} isOpen>
					Test modal
				</Modal>,
			)
			await delay(props.animationSpeed + 100)
			expect(document.body).toHaveStyle("position: relative")
			expect(document.body).toHaveStyle("overflow: hidden")
		})
	})

	describe("isOpen is false", () => {
		test("not rendered", () => {
			render(
				<Modal {...props} isOpen={false}>
					Test modal
				</Modal>,
			)
			expect(screen.queryByText(/Test modal/i)).not.toBeInTheDocument()
		})
		test("document is scrollable", async () => {
			render(
				<Modal {...props} isOpen={false}>
					Test modal
				</Modal>,
			)
			expect(document.body).not.toHaveStyle("position: relative")
			expect(document.body).not.toHaveStyle("overflow: hidden")
		})
	})
})
