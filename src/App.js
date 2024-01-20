import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import "./App.css"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className='main'>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default App;
