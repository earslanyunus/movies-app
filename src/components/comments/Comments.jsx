import React from 'react';

function Comments({comment}) {

    return (
        <div className='flex gap-3'>
            {/*profile picture*/}
            <div className='w-10 h-10 flex'>
                <img src={comment.profilePicture} alt='' className='w-full  rounded-full' />
            </div>
            {/*comment and info*/}
            <div className='flex flex-col w-full'>
                {/*username and day*/}
                <div className='flex justify-between'>
                    <p>{comment.username}</p>
                    <p>{comment.day}</p>
                </div>
                    {/*comment*/}
                    <div>
                        {/*if character count>50 */}
                        <p>{comment.comment}</p>
                    </div>
                </div>
            </div>
            );
            }

            export default Comments;