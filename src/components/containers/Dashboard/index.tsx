import { lazy, Suspense, useState, useCallback } from "react"
import styles from "./index.module.css"
import PostCommentBlock from "components/common/core/PostCommentBlock"
import PostedCommentBlock from "components/common/core/PostedCommentBlock"
import { data } from "./mock"

const LoginModal = lazy(() => import("components/common/core/LoginModal"))

const Dashboard = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false) // Can be kept in context

	const handleOpenLoginModal = useCallback(() => {
		setIsLoginModalOpen(true)
	}, [])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.title}>Hello Jane</div>
					<div className={styles.subTitle}>
						How are you doing today? Would you like to share something with the community 🤗
					</div>
				</div>
				<div className={styles.post}>
					<PostCommentBlock onPost={handleOpenLoginModal} />
				</div>
				<div className={styles.comments}>
					{data.map((comment) => {
						return (
							<PostedCommentBlock key={comment.id} data={comment} onClick={handleOpenLoginModal} />
						)
					})}
				</div>
			</div>
			<Suspense>
				<LoginModal
					isOpen={isLoginModalOpen}
					onClose={() => setIsLoginModalOpen(false)}
					defaultForm="register"
				/>
			</Suspense>
		</>
	)
}

export default Dashboard
