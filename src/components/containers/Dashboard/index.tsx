import React from "react"
import styles from "./index.module.css"

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>Hello Jane</div>
				<div className={styles.subTitle}>
					How are you doing today? Would you like to share something with the community 🤗
				</div>
			</div>
		</div>
	)
}

export default Dashboard
