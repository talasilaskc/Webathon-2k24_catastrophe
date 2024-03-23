import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './Login.css';
function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  let navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/alumni/login', { username, password });
      if (response.data.message === 'Login success') {
        setMessage(response.data.message);
        // Redirect to dashboard page
        navigate('/dashboard');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className=' container align-center content-align-center'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" className='w-100' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"  className='w-100'value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='w-100'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginForm;