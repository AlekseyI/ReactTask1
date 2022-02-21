import React from 'react';

const PostBody = ({post}) => {
    return (
        <div className="post-body">
            {
                post ?
                <div>
                    <div>
                        id: {post.id }
                    </div>
                   <div>
                       userId: {post.userId }
                   </div>
                    <div>
                        <h1>{post.title}</h1>
                    </div>
                    <div>
                        {post.body}
                    </div>
                </div> : ''
            }
        </div>
    );
};

export default PostBody;