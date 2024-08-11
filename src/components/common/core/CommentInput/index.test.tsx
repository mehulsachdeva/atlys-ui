import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import CommentInput from "."

describe("Comment Input", () => {
	const props = {
		readOnly: false,
		onChange: jest.fn(),
	}
	test("render", () => {
		render(<CommentInput {...props} />)
		const element = document.querySelector(".textarea")
		expect(element).toHaveAttribute("contenteditable", "true")
		expect(screen.getByText("💬")).toBeInTheDocument()
	})
	test("readOnly with comment", () => {
		render(<CommentInput {...props} comment="test comment" readOnly />)
		expect(screen.getByText(/test comment/i)).toBeInTheDocument()
		expect(screen.getByText("💬")).toBeInTheDocument()
	})
	test("readOnly with comment and highlighter", () => {
		render(<CommentInput {...props} comment="test comment" highlighter="👋" readOnly />)
		expect(screen.getByText(/test comment/i)).toBeInTheDocument()
		expect(screen.getByText("👋")).toBeInTheDocument()
	})
})
