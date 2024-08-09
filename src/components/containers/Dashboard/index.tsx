import styles from "./index.module.css"
import PostComment from "components/common/core/PostComment"

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>Hello Jane</div>
				<div className={styles.subTitle}>
					How are you doing today? Would you like to share something with the community 🤗
				</div>
			</div>
			<div className={styles.postBlock}>
				<PostComment onPost={() => {}} />
			</div>
		</div>
	)
}

export default Dashboard
