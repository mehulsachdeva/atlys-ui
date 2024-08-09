import { memo, useState, useCallback } from "react"
import styles from "./index.module.css"
import PasswordInput from "../PasswordInput"
import Input from "components/common/shared/Input"
import Button from "components/common/shared/Button"

interface LoginCardType {
	onSubmit: () => void
}

const LoginCard = (props: LoginCardType) => {
	const { onSubmit } = props
	const [values, setValues] = useState({ username: "", password: "" })

	const handleChange = useCallback((key: string, value: string) => {
		setValues((curr) => ({ ...curr, [key]: value }))
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div>
					<div className={styles.header}>WELCOME BACK</div>
					<div className={styles.subHeader}>Log into your account</div>
				</div>
				<div>
					<div className={styles.inputBox}>
						<label className={styles.inputLabel}>Email or Username</label>
						<div className={styles.input}>
							<Input
								type="text"
								value={values.username}
								placeholder="Enter your email or username"
								onChange={(e) => handleChange("username", e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.inputBox}>
						<div className={styles.passwordLabel}>
							<label className={styles.inputLabel}>Password</label>
							<div className={`${styles.inputLabel} ${styles.forgotPassword}`}>
								Forgot password?
							</div>
						</div>
						<div>
							<PasswordInput
								value={values.password}
								onChange={(e) => handleChange("password", e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.button}>
						<Button width="100%" onClick={onSubmit}>
							Login now
						</Button>
					</div>
					<div className={styles.switchSection}>
						Not registered yet? <span>Register</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(LoginCard)
