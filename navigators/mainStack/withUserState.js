import React from 'react';
import { useSelector } from 'react-redux';
import MainStackLoggedIn from './childs/MainStackLoggedIn';  // Component for logged-in users
import MainStackLoggedOut from './childs/MainStackLoggedOut'; // Component for logged-out users

const withUserState = () => {
  return (props) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    // Pass down userState and conditionally render based on login status
    if (!isLoggedIn) {
      return <MainStackLoggedOut {...props} />;
    } else {
      return <MainStackLoggedIn {...props} />;
    }
  };
};

export default withUserState;
