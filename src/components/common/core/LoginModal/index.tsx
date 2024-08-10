import { memo } from "react"
import styles from "./index.module.css"
import LoginCard from "../LoginCard"
import Modal from "components/common/shared/Modal"

interface LoginModalType {
	isOpen: boolean
	onClose: () => void
}

const LoginModal = (props: LoginModalType) => {
	const { isOpen, onClose } = props

	return (
		<Modal isOpen={isOpen} onClose={onClose} portal>
			<div className={styles.container}>
				<LoginCard />
			</div>
		</Modal>
	)
}

export default memo(LoginModal)
