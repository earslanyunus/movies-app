import React from 'react';

function Comments({comment}) {
    return (
        <div className='flex'>
            {/*profile picture*/}
            <div>
                <img src={comment.profilePicture} alt='' className='w-10 h-10 rounded-full' />
            </div>
            {/*comment and info*/}
            <div className='flex flex-col'>
                {/*username and day*/}
                <div className='flex justify-between'>
                    <p>{comment.username}</p>
                    <p>{comment.day}</p>
                </div>
                    {/*comment*/}
                    <div>
                        <p>{comment.comment}</p>
                    </div>
                </div>
            </div>
            );
            }

            export default Comments;