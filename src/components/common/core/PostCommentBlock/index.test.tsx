import "@testing-library/jest-dom"
import { render, within, fireEvent } from "@testing-library/react"
import PostCommentBlock from "."

describe("Post Comment Block", () => {
	const props = { onPost: jest.fn() }
	test("rendered", () => {
		render(<PostCommentBlock {...props} />)
		const buttonElement = document.querySelector(".button")
		expect(within(buttonElement as any).queryByText(/Post/i)).toBeInTheDocument()
	})
	test("onChange called", () => {
		render(<PostCommentBlock {...props} />)
		const buttonElement = document.querySelector(".button")
		fireEvent.click(within(buttonElement as any).queryByText(/Post/i) as any)
		expect(props.onPost).toHaveBeenCalledTimes(1)
	})
})
