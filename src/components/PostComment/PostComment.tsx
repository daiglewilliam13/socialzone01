import React from "react";

interface CommentProps {
    props: string

}
const PostComment: FC<CommentProps> = (props: string) => {

    return(
        <p>{props}</p>
    )
}

export default PostComment;