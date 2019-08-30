import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts,loading}) => {
    if(loading){
        return(
            <div className="paging-loader">Loading...</div>
        )
    }
    return(
        <ul className="list-group mb-4">
        {posts.map(post=>(
            <li key={post.id} className="list-group-item">
            {post.title}
            </li>
        ))}
        </ul>
    );
}

export default Posts;