import { memo, useEffect, useState, useRef, CSSProperties } from "react"
import styles from "./index.module.css"
import { Cross } from "components/common/icons/Cross"

interface ModalType {
	isOpen: boolean
	children: React.ReactNode
	animationSpeed?: number // To be in milliseconds
	onClose: () => void
}

const Modal = (props: ModalType) => {
	const { isOpen, children, animationSpeed = 200, onClose } = props
	const [open, setOpen] = useState(false)
	const [close, setClose] = useState(true)
	const timeout = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (isOpen) {
			setClose(false)
			timeout.current = setTimeout(() => {
				setOpen(true)
			}, animationSpeed)
		} else {
			setOpen(false)
			timeout.current = setTimeout(() => {
				setClose(true)
			}, animationSpeed)
		}
		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current)
			}
		}
	}, [isOpen, animationSpeed])

	useEffect(() => {
		const body = document.body
		if (open) {
			body.style.position = "relative"
			body.style.overflow = "hidden"
		} else {
			body.style.removeProperty("position")
			body.style.removeProperty("overflow")
		}
		return () => {
			body.style.removeProperty("position")
			body.style.removeProperty("overflow")
		}
	}, [open])

	const component = (
		<div
			style={{ "--animation-speed": `${animationSpeed}ms` } as CSSProperties}
			className={`${styles.container} ${open ? styles.visible : ""}`}
		>
			<div className={styles.modal}>
				{children}
				<div className={styles.closeButton} onClick={onClose}>
					<Cross />
				</div>
			</div>
		</div>
	)

	if (close) return null
	return component
}

export default memo(Modal)
