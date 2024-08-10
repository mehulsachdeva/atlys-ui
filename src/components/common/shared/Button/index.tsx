import React, { memo, CSSProperties } from "react"
import styles from "./index.module.css"
import { convertToPixels } from "utils"

interface ButtonType {
	width?: string | number
	children?: React.ReactNode
	disabled?: boolean
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonType) => {
	const { width = "max-content", children, disabled, onClick } = props

	return (
		<button
			style={{ "--width": convertToPixels(width) } as CSSProperties}
			className={`${styles.button} ${disabled ? styles.disabled : ""}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default memo(Button)
