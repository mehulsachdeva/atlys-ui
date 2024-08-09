import React, { memo, useState, useLayoutEffect } from "react"
import styles from "./index.module.css"
import Input from "components/common/shared/Input"
import { Eye } from "components/common/icons/eye"

interface PasswordInputType {
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = (props: PasswordInputType) => {
	const [value, setValue] = useState(props.value || "")
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	useLayoutEffect(() => {
		setValue(props.value || "")
	}, [props.value])

	return (
		<div className={styles.container}>
			<Input
				type={!isPasswordVisible ? "password" : "text"}
				placeholder="Enter your password"
				value={value}
				padding="12px 40px 12px 12px"
				fontSize={value.length > 0 && !isPasswordVisible ? 21 : 16}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div className={styles.togglePassword} onClick={() => setIsPasswordVisible((curr) => !curr)}>
				<Eye />
				{isPasswordVisible ? <div className={styles.slash} /> : null}
			</div>
		</div>
	)
}

export default memo(PasswordInput)
