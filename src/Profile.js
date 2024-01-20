import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve user ID from local storage
        const userId = JSON.parse(localStorage.getItem('user')).id;

        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const userData = await response.json();

        if (response.ok) {
          // Save user object in local storage
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        } else {
          console.error('Failed to fetch user data:', userData.error);
        }
      } catch (error) {
        console.error('Error during user data fetch:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='box'>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
