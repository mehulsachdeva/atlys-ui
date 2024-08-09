import React, { memo, useEffect, useRef, CSSProperties } from "react"
import styles from "./index.module.css"
import { calcHeight } from "./helpers"
import { INPUT_DIMENSIONS } from "./constants"

interface CommentBoxType {
	comment?: string
	readOnly?: boolean
	onChange?: (comment: string) => void
}

const CommentBox = (props: CommentBoxType) => {
	const { comment, readOnly = true, onChange } = props
	const inputRef = useRef<any>(null)

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
		<div className={styles.container}>
			<div className={styles.label}>T</div>
			{!readOnly ? (
				<div
					style={
						{
							"--min-height": `${INPUT_DIMENSIONS.MIN_HEIGHT}px`,
							"--max-height": `${INPUT_DIMENSIONS.MAX_HEIGHT}px`,
							"--line-height": `${INPUT_DIMENSIONS.LINE_HEIGHT}px`,
						} as CSSProperties
					}
					className={styles.textarea}
					role="textbox"
					onInput={handleChange}
					contentEditable={!!readOnly}
				/>
			) : (
				<div className={styles.textarea}>{comment}</div>
			)}
		</div>
	)
}

export default memo(CommentBox)
