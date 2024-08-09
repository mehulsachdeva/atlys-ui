import React, { memo, useState } from "react"
import styles from "./index.module.css"
import CommentBox from "../CommentBox"
import Button from "components/common/shared/Button"

interface PostCommentType {
	onPost: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PostComment = (props: PostCommentType) => {
	const { onPost } = props
	const [comment, setComment] = useState("")

	return (
		<div className={styles.container}>
			<div className={styles.title}>Create Post</div>
			<div>
				<CommentBox comment={comment} onChange={setComment} />
			</div>
			<div className={styles.button}>
				<Button width={111} onClick={onPost}>
					Post
				</Button>
			</div>
		</div>
	)
}

export default memo(PostComment)
