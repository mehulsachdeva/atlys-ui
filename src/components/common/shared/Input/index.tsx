import React, { memo, CSSProperties } from "react"
import styles from "./index.module.css"

interface InputType {
	type: "text" | "email" | "password"
	fontSize?: string | number
	padding?: string | number
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputType) => {
	const { type, fontSize = 16, padding = 12, placeholder, value, onChange } = props

	return (
		<input
			style={
				{
					"--padding": typeof padding === "number" ? `${padding}px` : padding,
					"--font-size": typeof fontSize === "number" ? `${fontSize}px` : fontSize,
				} as CSSProperties
			}
			className={styles.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default memo(Input)
