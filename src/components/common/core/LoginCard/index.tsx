import { memo, useState, useCallback, useContext } from "react"
import styles from "./index.module.css"
import { AuthContext } from "contexts/auth"
import PasswordInput from "../PasswordInput"
import Input from "components/common/shared/Input"
import Button from "components/common/shared/Button"
import { ArrowRight } from "components/common/icons/ArrowRight"

export type DefaultFormType = "login" | "register"

interface LoginCardType {
	defaultForm?: DefaultFormType
	onSuccess?: () => void
}

const LoginCard = (props: LoginCardType) => {
	const { defaultForm = "login", onSuccess } = props
	const [isLoginForm, setIsLoginForm] = useState(defaultForm === "login")
	const [values, setValues] = useState({ email: "", username: "", password: "" })
	const { login, register } = useContext<any>(AuthContext)

	const handleChange = useCallback((key: string, value: string) => {
		setValues((curr) => ({ ...curr, [key]: value }))
	}, [])

	const handleSubmitClick = useCallback(() => {
		if (isLoginForm) {
			login(values)
		} else {
			register(values)
		}
		onSuccess?.()
	}, [values, isLoginForm, onSuccess])

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div>
					<div className={styles.header}>{isLoginForm ? "WELCOME BACK" : "SIGN UP"}</div>
					<div className={styles.subHeader}>
						{isLoginForm ? "Log into your account" : "Create an account to continue"}
					</div>
				</div>
				<div>
					{!isLoginForm ? (
						<div className={styles.inputBox}>
							<label className={styles.inputLabel}>Email</label>
							<div className={styles.input}>
								<Input
									type="text"
									value={values.email}
									placeholder="Enter your email"
									onChange={(e) => handleChange("email", e.target.value)}
								/>
							</div>
						</div>
					) : null}
					<div className={styles.inputBox}>
						<label className={styles.inputLabel}>
							{isLoginForm ? "Email or Username" : "Username"}
						</label>
						<div className={styles.input}>
							<Input
								type="text"
								value={values.username}
								placeholder={
									isLoginForm ? "Enter your email or username" : "Choose a preferred username"
								}
								onChange={(e) => handleChange("username", e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.inputBox}>
						<div className={styles.passwordLabel}>
							<label className={styles.inputLabel}>Password</label>
							{isLoginForm ? (
								<div className={`${styles.inputLabel} ${styles.forgotPassword}`}>
									Forgot password?
								</div>
							) : null}
						</div>
						<PasswordInput
							value={values.password}
							placeholder={isLoginForm ? "Enter your password" : "Choose a strong password"}
							onChange={(e) => handleChange("password", e.target.value)}
						/>
					</div>
					<div className={styles.buttonWrapper}>
						<Button width="100%" onClick={handleSubmitClick}>
							{isLoginForm ? "Login now" : "Continue"}
						</Button>
					</div>
					<div className={styles.switchWrapper}>
						{isLoginForm ? "Not registered yet?" : "Already have an account?"}{" "}
						<span className={styles.switch} onClick={() => setIsLoginForm((curr) => !curr)}>
							{isLoginForm ? "Register" : "Login"}
							<ArrowRight width="1.1em" height="1.1em" />
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(LoginCard)
