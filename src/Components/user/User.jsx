import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from '../singleUser/SingleUser';
import './User.css'

const User = () => {

  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3>Our Users: {user.length}</h3>
      <div className='id'>
        {
          user.map(singleUser => <SingleUser key={singleUser.id} singleUser={singleUser} ></SingleUser>)
        }
      </div>
    </div>
  );
};

export default User;