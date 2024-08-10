import ReactDOM from "react-dom"
import { PORTAL_ID } from "constants/index"

interface PortalType {
	children: JSX.Element
	disabled?: boolean
}

const Portal = (props: PortalType) => {
	const { children, disabled = false } = props
	const portalElement = document.getElementById(PORTAL_ID)

	if (!portalElement || !children) return null
	if (disabled) return children
	return ReactDOM.createPortal(children, portalElement)
}

export default Portal
