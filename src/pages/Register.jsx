import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])(?=.{8,20})/;
    return regex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      window.alert('Password must contain at least one letter, one symbol, and be between 8 and 20 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/auth/register', {
        name,
        email,
        password,
        phone,
        address,
      });

      const message = response.data; // Capture the response message
      console.log("User Registered successfully"); // Log the message to the console
      window.alert(message); // Display the message to the user

      if (message === 'User registered successfully!') {
        navigate('/'); // Redirect to the home page if registration is successful
      }
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      window.alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Register</h1>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='button' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
