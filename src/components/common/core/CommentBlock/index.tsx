import { memo } from "react"
import styles from "./index.module.css"
import CommentBox from "../CommentBox"
import { KebabMenu } from "components/common/icons/KebabMenu"
import { ChatBubble } from "components/common/icons/ChatBubble"
import { isValidDate, formatCommentTimestamp } from "utils/comment"

type CommentType = {
	id: number
	created_by: { name: string; picture?: string }
	created_at: string
	updated_at: string
	highlighter?: string
	comment: string
	replies?: number
}

interface CommentBlockType {
	data: CommentType
}

const CommentBlock = (props: CommentBlockType) => {
	const { data } = props
	const timestamp = formatCommentTimestamp(data.created_at)
	const isEdited =
		isValidDate(new Date(data.created_at)) &&
		isValidDate(new Date(data.updated_at)) &&
		data.created_at !== data.updated_at

	if (!data) return null
	return (
		<div className={styles.container}>
			<div className={styles.meta}>
				<div className={styles.user}>
					<div className={styles.picture} />
					<div>
						<div className={styles.userName}>{data.created_by?.name}</div>
						{timestamp ? (
							<div className={styles.timestamp}>
								<span>{timestamp}</span>
								{isEdited ? <span className={styles.editedLabel}>Edited</span> : null}
							</div>
						) : null}
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
					<div>
						{data.replies} comment{data.replies > 1 ? "s" : ""}
					</div>
				</div>
			) : null}
		</div>
	)
}

export default memo(CommentBlock)
