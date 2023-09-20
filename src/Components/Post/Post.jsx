import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const { name, email, id, username } = post;
  
  const navigate = useNavigate();
  const handlePostDetails = () => {
    navigate(`/post/${id}`);
  }

  return (
    <div className='post'>
      <h4><small>id: {id}</small></h4>
      <h2>Name: {name}</h2>
      <h3>UserName: { username}</h3>
      <h3><small>E-mail: {email} </small></h3>
      <Link to={`/post/${id}`}>
        <button onClick={handlePostDetails}>Post details</button>
       </Link>
    </div>
  );
};

export default Post;