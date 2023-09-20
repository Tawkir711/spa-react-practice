import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const SingleUser = ({singleUser}) => {
  const { id, title, userId } = singleUser;

  const style = {
    border: '2px solid blue',
    padding: '10px',
    borderRadius: '20px'
  }

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/singleUser/${id}`);
  }


  return (
    <div style={style}>
      <h3>UserId: { userId}</h3>
      <h4>Id: {id}</h4>
      <h2>{title}</h2>
      <Link to={`/singleUser/${id}`}>
      <button onClick={handleShowDetails}>Show Details</button>
      </Link>
    </div>
  );
};

export default SingleUser;