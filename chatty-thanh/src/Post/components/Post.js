import React from 'react';
import './Post.css';


const Post = (props) => {
return (
        <div className="panel panel-default post-body">
        <div className="panel-body">
        {
                 props.postBody.map( (postPart, idx) => {
return (
        <div key={idx}>{postPart}</div>
)
                 })
        }
        </div>
        </div>
        )
};

export default Post;

