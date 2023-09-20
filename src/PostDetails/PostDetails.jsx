import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { name, id, email, website } = post
  console.log(post);

  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1)
  }
  const {postId} = useParams();
  console.log(postId);
  return (
    <div className='post'>
      <h3>Post details about: {id} </h3>
      <h2>Name: {name} </h2>
      <h5>E-mail: {email} </h5>
      <h4>Visit Us: {website} </h4>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;