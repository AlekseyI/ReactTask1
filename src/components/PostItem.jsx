import React from 'react';

const PostItem = ({post, ...props}) => {
    return (
        <li>
            <a href="#" {...props}> {post.title}</a>
        </li>
    );
};

export default PostItem;