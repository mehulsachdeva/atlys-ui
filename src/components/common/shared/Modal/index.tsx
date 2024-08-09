import { memo, useEffect, useState, useRef, CSSProperties } from "react"
import styles from "./index.module.css"
import Portal from "../Portal"

interface ModalType {
	isOpen: boolean
	children: React.ReactNode
	portal?: boolean
	animationSpeed?: number // To be in milliseconds
	onClose: () => void
}

const Modal = (props: ModalType) => {
	const { isOpen, children, portal = false, animationSpeed = 150, onClose } = props
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
	}, [isOpen])

	const component = (
		<div
			style={{ "--animation-speed": `${animationSpeed}ms` } as CSSProperties}
			className={`${styles.container} ${open ? styles.visible : ""}`}
		>
			<div className={styles.modal}>{children}</div>
		</div>
	)

	if (close) return null
	if (!portal) return component
	return <Portal>{component}</Portal>
}

export default memo(Modal)
