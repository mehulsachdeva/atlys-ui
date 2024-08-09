import { useCallback } from "react"
import styles from "./index.module.css"
import { useNavigate } from "react-router-dom"
import LoginCard from "components/common/core/LoginCard"

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
			<div className={styles.card}>
				<LoginCard onSubmit={handleSubmit} />
			</div>
		</div>
	)
}

export default Login
