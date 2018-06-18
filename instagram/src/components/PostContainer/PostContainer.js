import React from 'react';
import Post from './Post'
import './Post.css'

const PostContainer = (props) => {
	return (
		<div>
			{
				props.data.map(post => {
					return <Post commentHandler={props.commentHandler} key={post.timestamp} post={post} />
				})
			}
		</div>
	);
};

export default PostContainer;