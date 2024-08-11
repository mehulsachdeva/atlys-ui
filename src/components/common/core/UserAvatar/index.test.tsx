import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import UserAvatar from "."

describe("User Avatar", () => {
	const props = { name: "Test name", picture: "https://test.example.com/demo.png" }
	test("rendered", () => {
		render(<UserAvatar {...props} />)
		const imageElement = screen.getByAltText(props.name)
		expect(imageElement).toHaveAttribute("src", props.picture)
	})
	test("rendered with no picture", () => {
		render(<UserAvatar {...props} picture={""} />)
		const imageElement = screen.queryByAltText(props.name)
		expect(imageElement).not.toBeInTheDocument()
		expect(screen.getByText(props.name[0])).toBeInTheDocument()
	})
})
