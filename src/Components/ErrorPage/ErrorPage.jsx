import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>Oops!!!!</h2>
      <h5>{ error.data}</h5>
      <h5>{ error.status}</h5>
      <h5>{error.statusText}</h5>
      <Link to={'/'}>
      <button>Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;