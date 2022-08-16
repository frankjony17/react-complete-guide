import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  return (
      <AuthContext.Consumer>
          {(authContext) =>
              <nav className={classes.nav}>
                  <ul>
                      {authContext.isLoggedIn && (
                          <li>
                              <a href="/">Users</a>
                          </li>
                      )}
                      {authContext.isLoggedIn && (
                          <li>
                              <a href="/">Admin</a>
                          </li>
                      )}
                      {authContext.isLoggedIn && (
                          <li>
                              <button onClick={props.onLogout}>Logout</button>
                          </li>
                      )}
                  </ul>
              </nav>
          }
      </AuthContext.Consumer>
  );
};

export default Navigation;
