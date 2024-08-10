import React, { memo } from "react"
import styles from "./index.module.css"
import UserAvatar from "../UserAvatar"
import CommentInput from "../CommentInput"
import { KebabMenu } from "components/common/icons/KebabMenu"
import { ChatBubble } from "components/common/icons/ChatBubble"
import { isValidDate } from "utils/date"
import { formatCommentTimestamp } from "utils/comment"

type CommentType = {
	id: number
	created_by: number // Created by user id
	created_by_user: { name: string; picture?: string } // Created by user details
	created_at: string
	updated_at?: string
	highlighter?: string
	comment: string
	replies?: number
}

interface PostedCommentBlockType {
	data: CommentType
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const PostedCommentBlock = (props: PostedCommentBlockType) => {
	const { data, onClick } = props
	const userDetails = data.created_by_user || {}
	const timestamp = formatCommentTimestamp(data.updated_at || data.created_at)
	const isEdited =
		isValidDate(new Date(data.created_at)) &&
		isValidDate(new Date(data.updated_at || "")) &&
		data.created_at !== data.updated_at

	if (!data) return null
	return (
		<div className={styles.container} onClick={onClick}>
			<div className={styles.meta}>
				<div className={styles.user}>
					<UserAvatar name={userDetails.name} picture={userDetails.picture} />
					<div>
						<div className={styles.userName}>{userDetails.name}</div>
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
				<CommentInput highlighter={data.highlighter} comment={data.comment} readOnly />
			</div>
			{!!data.replies ? (
				<div className={styles.replies}>
					<ChatBubble width={20} height={20} fill="#C5C7CA" />
					<div>
						{data.replies} comment{data.replies > 1 ? "s" : ""}
					</div>
				</div>
			) : null}
		</div>
	)
}

export default memo(PostedCommentBlock)
