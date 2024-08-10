import { lazy, Suspense, useState, useCallback, useContext } from "react"
import styles from "./index.module.css"
import { AuthContext } from "contexts/auth"
import PostCommentBlock from "components/common/core/PostCommentBlock"
import PostedCommentBlock from "components/common/core/PostedCommentBlock"
import { comments } from "./mock"

const LoginModal = lazy(() => import("components/common/core/LoginModal"))

const Dashboard = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const { user } = useContext<any>(AuthContext)

	const handleOpenLoginModal = useCallback(() => {
		if (user.logged) return
		setIsLoginModalOpen(true)
	}, [user])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.title}>Hello {user?.username}</div>
					<div className={styles.subTitle}>
						How are you doing today? Would you like to share something with the community 🤗
					</div>
				</div>
				<div className={styles.post}>
					<PostCommentBlock onPost={handleOpenLoginModal} />
				</div>
				<div className={styles.comments}>
					{comments.map((comment) => {
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
