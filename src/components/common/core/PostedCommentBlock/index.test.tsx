import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { formatCommentTimestamp } from "utils/comment"
import PostedCommentBlock from "."

const data = {
	id: 1,
	created_by: 100,
	created_by_user: { username: "Test name", picture: "https://test.example.com/demo.png" },
	created_at: "2024-08-09T12:18:37.952Z",
	updated_at: "2024-08-09T12:18:37.952Z",
	highlighter: "👋",
	comment: "Test comment",
	replies: 10,
}

describe("Posted Comment Block", () => {
	const props = { data, onClick: jest.fn() }
	test("rendered", () => {
		render(<PostedCommentBlock {...props} />)
		const element = document.querySelector(".textarea")
		expect(element).not.toHaveAttribute("contenteditable")
		expect(screen.getByText(data.created_by_user.username)).toBeInTheDocument()
		expect(screen.getByText(data.comment)).toBeInTheDocument()
		expect(screen.getByText(data.highlighter)).toBeInTheDocument()
		expect(screen.getByText(`${data.replies} comments`)).toBeInTheDocument()
		const imageElement = screen.getByAltText(data.created_by_user.username)
		expect(imageElement).toHaveAttribute("src", data.created_by_user.picture)
		const timestamp = formatCommentTimestamp(data.updated_at)
		timestamp && expect(screen.getByText(timestamp)).toBeInTheDocument()
	})
	test("rendered if edited", () => {
		render(
			<PostedCommentBlock
				{...props}
				data={{ ...props.data, updated_at: "2024-08-09T12:19:37.952Z" }}
			/>,
		)
		expect(screen.getByText(/Edited/i)).toBeInTheDocument()
	})
	test("render for 1 reply", () => {
		render(<PostedCommentBlock {...props} data={{ ...props.data, replies: 1 }} />)
		expect(screen.getByText(/1 comment/i)).toBeInTheDocument()
	})
})
