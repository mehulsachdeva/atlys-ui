import styles from "./index.module.css"
import LoginCard from "components/common/core/LoginCard"

const Login = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img className={styles.image} src="/logo.png" alt="logo" />
			</div>
			<div className={styles.card}>
				<LoginCard />
			</div>
		</div>
	)
}

export default Login
