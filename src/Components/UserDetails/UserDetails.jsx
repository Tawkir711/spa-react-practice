import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {

  const user = useLoaderData();
  const { id, title } = user;


  const navigate = useNavigate();
  const handleGo = () => {
    navigate(-1);
  }
   const { userId } = useParams();
   console.log(userId);

  return (
    <div className='post'>
      <h2>Details about user: {id} </h2>
      <h2>Title: {title}</h2>
      <button onClick={handleGo}>Go Back</button>
    </div>
  );
};

export default UserDetails;