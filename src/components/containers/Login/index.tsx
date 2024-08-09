import { useCallback } from "react"
import styles from "./index.module.css"
import { useNavigate } from "react-router-dom"
import LoginForm from "components/common/core/LoginForm"

const Login = () => {
	const navigate = useNavigate()

	const handleSubmit = useCallback(() => {
		navigate("/dashboard")
	}, [navigate])

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img className={styles.image} src="/images/logo.png" alt="logo" />
			</div>
			<div className={styles.subContainer}>
				<LoginForm onSubmit={handleSubmit} />
			</div>
		</div>
	)
}

export default Login
