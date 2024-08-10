import { memo } from "react"
import styles from "./index.module.css"

interface UserAvatarType {
	name: string
	picture?: string
}

const UserAvatar = (props: UserAvatarType) => {
	const { name, picture } = props

	return (
		<div className={styles.container}>
			{picture ? (
				<img className={styles.image} loading="lazy" src={picture} alt={name} />
			) : (
				name?.[0]
			)}
		</div>
	)
}

export default memo(UserAvatar)
