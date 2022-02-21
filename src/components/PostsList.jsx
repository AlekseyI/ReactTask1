import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, showPost}) => {
    return (
        <ul className="post-list">
            {
                posts.map(post =>
                    <PostItem onClick={() => showPost(post)} key={post.id} post={post}/>
                )
            }
        </ul>
    );
};

export default PostsList;