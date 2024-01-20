import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p style={{fontSize: "12px", textAlign: 'center', marginTop: "30px"}}>Dont't have an account ? <a>Sign Up</a></p>
  </React.StrictMode>,
  document.getElementById('root')
);

