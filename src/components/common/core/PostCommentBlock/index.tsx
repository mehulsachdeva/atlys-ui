import React, { memo, useState } from "react"
import styles from "./index.module.css"
import CommentInput from "../CommentInput"
import Button from "components/common/shared/Button"

interface PostCommentBlockType {
	onPost: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PostCommentBlock = (props: PostCommentBlockType) => {
	const { onPost } = props
	const [comment, setComment] = useState("")

	return (
		<div className={styles.container}>
			<div className={styles.title}>Create Post</div>
			<div>
				<CommentInput comment={comment} onChange={setComment} />
			</div>
			<div className={styles.button}>
				<Button width={111} onClick={onPost}>
					Post
				</Button>
			</div>
		</div>
	)
}

export default memo(PostCommentBlock)
