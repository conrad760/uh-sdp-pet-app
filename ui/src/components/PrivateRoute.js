import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ auth, roles, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth &&
        ((roles === 'ROLE_User' && rest.path.startsWith('/user')) ||
          (roles === 'ROLE_Employee' && rest.path.startsWith('/employee'))) ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  roles: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
