import { memo } from "react"
import styles from "./index.module.css"
import Modal from "components/common/shared/Modal"
import LoginCard, { DefaultFormType } from "../LoginCard"

interface LoginModalType {
	isOpen: boolean
	defaultForm?: DefaultFormType
	onClose: () => void
}

const LoginModal = (props: LoginModalType) => {
	const { isOpen, defaultForm, onClose } = props

	return (
		<Modal isOpen={isOpen} onClose={onClose} portal>
			<div className={styles.container}>
				<LoginCard defaultForm={defaultForm} onSuccess={onClose} />
			</div>
		</Modal>
	)
}

export default memo(LoginModal)
