import { memo, useState, useEffect, useCallback, useContext } from "react"
import styles from "./index.module.css"
import { AuthContext } from "contexts/auth"
import PasswordInput from "../PasswordInput"
import Input from "components/common/shared/Input"
import Button from "components/common/shared/Button"
import { ArrowRight } from "components/common/icons/ArrowRight"

export type DefaultFormType = "login" | "register"

type ErrorType = {
	email?: boolean
	username?: boolean
	password?: boolean
}

interface LoginCardType {
	defaultForm?: DefaultFormType
	onSuccess?: () => void
}

const LoginCard = (props: LoginCardType) => {
	const { defaultForm = "login", onSuccess } = props
	const [isLoginForm, setIsLoginForm] = useState(defaultForm === "login")
	const [values, setValues] = useState({ email: "", username: "", password: "" })
	const [errors, setErrors] = useState<ErrorType>({
		email: false,
		username: false,
		password: false,
	})
	const { login, register } = useContext<any>(AuthContext)
	const areFieldsEmpty =
		!values.password || !values.username.trim() || (!isLoginForm && !values.email.trim())

	useEffect(() => {
		setErrors((curr) => ({ ...curr, email: false }))
	}, [values.email])

	useEffect(() => {
		setErrors((curr) => ({ ...curr, username: false }))
	}, [values.username])

	useEffect(() => {
		setErrors((curr) => ({ ...curr, password: false }))
	}, [values.password])

	useEffect(() => {
		setErrors({ email: false, username: false, password: false })
	}, [isLoginForm])

	const handleChange = useCallback((key: string, value: string) => {
		setValues((curr) => ({ ...curr, [key]: value }))
	}, [])

	const handleSubmitClick = useCallback(() => {
		let errors: ErrorType = {}
		if (!isLoginForm && !values.email) {
			errors.email = true
		}
		if (!values.username) {
			errors.username = true
		}
		if (!values.password) {
			errors.password = true
		}
		if (Object.keys(errors).length > 0) {
			setErrors((curr) => ({ ...curr, ...errors }))
		} else {
			if (isLoginForm) {
				login(values, onSuccess)
			} else {
				register(values, onSuccess)
			}
		}
	}, [values, isLoginForm, areFieldsEmpty, onSuccess])

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
									error={errors.email}
									onChange={(e) => handleChange("email", e.target.value.trim())}
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
								error={errors.username}
								onChange={(e) => handleChange("username", e.target.value.trim())}
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
							error={errors.password}
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
