import React from 'react';
import {useParams} from "react-router";
import Comments from "./Comments.jsx";

function CommentList() {
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    return (
        <div>
            {comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />

            ))}
        </div>
    );
}

export default CommentList;