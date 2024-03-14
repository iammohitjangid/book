import React from 'react';
import NavigationItem from '../navigationItems/navigationItem/NavigationItem';
const Profile = (props) => {
  return (
    <div>
      <NavigationItem
        link="/login"
        className="text-sm font-semibold leading-6 text-green-100"
      >
        Log in
      </NavigationItem>
      <NavigationItem
        link="/sign-up"
        className="text-sm font-semibold leading-6 text-green-100 margin-100"
      >
        Sign Up
      </NavigationItem>
    </div>
  );
};

export default Profile;
