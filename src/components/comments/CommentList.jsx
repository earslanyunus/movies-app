import React, {useState} from 'react';
import {useParams} from "react-router";
import Comments from "./Comments.jsx";

function CommentList() {
    const [comments, setComments] = useState([{
        id: 1,
        profilePicture: 'https://images.unsplash.com/photo-1678446332693-0952df3ffc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
        username: 'John Doe',
        day: '1 day ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci, asperiores, atque autem consequuntur culpa cumque doloribus ea eaque eligendi enim eos esse et eveniet exercitationem expedita fugiat hic id illum inventore ipsa iure laboriosam laborum magnam maiores minus molestiae natus necessitatibus neque nihil nobis non nulla officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium provident quae quas quasi quibusdam quidem quisquam quod ratione recusandae repellat repudiandae rerum saepe sapiente sed sequi sint sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis voluptas voluptate voluptates voluptatibus voluptatum?'
    }]);
    const {id} = useParams();
    return (
        <div>
            <textarea  placeholder='Write a comment' className='w-full rounded text-gray-900 py-2.5 px-3.5 rounded-lg border border-gray-300  placeholder:text-gray-500 focus:border-primary-300  focus:shadow-[0px_0px_0px_4px_#F4EBFF]'/>
            {comments.map((comment) => (
                <Comments key={comment.id} comment={comment}/>
                )
            )}

        </div>
    );
}

export default CommentList;