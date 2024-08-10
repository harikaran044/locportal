import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        navigate('/login'); // Redirect to login if no token is found
        return;
      }

      const response = await axios.get('http://localhost:8081/api/policies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.length > 0) {
        setPolicies(response.data);
        setError(''); // Clear any previous error
      } else {
        setError('No available policies for this account.');
        setPolicies([]); // Clear the list if no policies are found
      }
    } catch (error) {
      console.error('Error fetching policies:', error);
      setError('Failed to load policies. Please try again later.');
    }
  };

  useEffect(() => {
    fetchPolicies();
  }, [navigate]);

  return (
    <div className='policies-container'>
      <h1>Your Policies</h1>
      
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {policies.map((policy) => (
            <li key={policy.id}>
              <h3>{policy.name}</h3>
              <p>{policy.email}</p>
              <p>{policy.phoneNumber}</p>
              <p>{policy.age}</p>
              <p>{policy.gender}</p>
              <p>{policy.nationality}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Policies;
