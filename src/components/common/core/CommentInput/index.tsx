import React, { memo, useEffect, useRef, CSSProperties } from "react"
import styles from "./index.module.css"
import { calcHeight } from "./helpers"
import { DIMENSIONS } from "./constants"

interface CommentInputType {
	comment?: string
	highlighter?: string
	readOnly?: boolean
	onChange?: (comment: string) => void
}

const CommentInput = (props: CommentInputType) => {
	const { comment, highlighter, readOnly = false, onChange } = props
	const inputRef = useRef<any>(null)

	/* Adjust the input height based on line breaks */
	useEffect(() => {
		const adjustHeight = () => {
			if (!inputRef.current) return
			inputRef.current.style.height = calcHeight(inputRef.current.value) + "px"
		}
		inputRef.current?.addEventListener("keyup", adjustHeight)
		return () => inputRef.current?.removeEventListener("keyup", adjustHeight)
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
		const { innerText: value } = e.target as HTMLElement
		onChange?.(value)
	}

	return (
		<div
			style={
				{
					"--min-height": `${DIMENSIONS.MIN_HEIGHT}px`,
					"--max-height": `${DIMENSIONS.MAX_HEIGHT}px`,
					"--line-height": `${DIMENSIONS.LINE_HEIGHT}px`,
				} as CSSProperties
			}
			className={styles.container}
		>
			<div className={styles.highlighter}>{highlighter || "💬"}</div>
			{!readOnly ? (
				<div
					className={`${styles.textarea} ${styles.editable}`}
					role="textbox"
					onInput={handleChange}
					contentEditable
				/>
			) : (
				<div className={`${styles.textarea} ${styles.uneditable}`}>{comment}</div>
			)}
		</div>
	)
}

export default memo(CommentInput)
