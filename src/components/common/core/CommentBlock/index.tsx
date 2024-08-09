import { memo } from "react"
import styles from "./index.module.css"
import CommentBox from "../CommentBox"
import { formatCommentTimestamp } from "utils/comment"
import { KebabMenu } from "components/common/icons/KebabMenu"
import { ChatBubble } from "components/common/icons/ChatBubble"

type CommentType = {
	id: number
	created_by: { name: string; picture?: string }
	created_at: string
	updated_at?: string
	highlighter?: string
	comment: string
	replies?: number
	edited: boolean
}

interface CommentBlockType {
	data: CommentType
}

const CommentBlock = (props: CommentBlockType) => {
	const { data } = props
	const timestamp = formatCommentTimestamp(data.created_at)

	if (!data) return null
	return (
		<div className={styles.container}>
			<div className={styles.meta}>
				<div className={styles.user}>
					<div className={styles.picture} />
					<div>
						<div className={styles.userName}>{data.created_by?.name}</div>
						{timestamp ? <div className={styles.timestamp}>{timestamp}</div> : null}
					</div>
				</div>
				<div className={styles.menu}>
					<KebabMenu />
				</div>
			</div>
			<div className={styles.comment}>
				<CommentBox highlighter={data.highlighter} comment={data.comment} readOnly />
			</div>
			{!!data?.replies ? (
				<div className={styles.replies}>
					<ChatBubble />
					<div>{data.replies} replies</div>
				</div>
			) : null}
		</div>
	)
}

export default memo(CommentBlock)
