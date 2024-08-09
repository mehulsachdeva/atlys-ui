import styles from "./index.module.css"
import LoginForm from "components/common/core/LoginForm"

const Login = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img className={styles.image} src="/images/logo.png" alt="logo" />
			</div>
			<div className={styles.subContainer}>
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
