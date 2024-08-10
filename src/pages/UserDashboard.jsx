// src/pages/UserDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewPolicies = () => {
    navigate('/policy'); // Redirect to the policies page
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome</h1>
      <div className="dashboard-content">
        <h2>Insurance Plans</h2>
        <table className="insurance-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Plan</th>
              <th>Information</th>
              <th>Price</th>
              <th>Statistical Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Health Insurance</td>
              <td>Basic Health Plan</td>
              <td>Coverage for hospital stays, surgeries, and routine check-ups</td>
              <td>$150/month</td>
              <td>80% satisfaction rate</td>
            </tr>
            <tr>
              <td>Health Insurance</td>
              <td>Premium Health Plan</td>
              <td>Extended coverage including dental and vision</td>
              <td>$250/month</td>
              <td>85% satisfaction rate</td>
            </tr>
            <tr>
              <td>Life Insurance</td>
              <td>Term Life Plan</td>
              <td>Coverage for a specified term with fixed premiums</td>
              <td>$20/month</td>
              <td>90% satisfaction rate</td>
            </tr>
            <tr>
              <td>Life Insurance</td>
              <td>Whole Life Plan</td>
              <td>Lifetime coverage with cash value component</td>
              <td>$45/month</td>
              <td>92% satisfaction rate</td>
            </tr>
          </tbody>
        </table>

        <h2>Manage Your Account</h2>
        <button className="dashboard-button">View Profile</button>
        <button className="dashboard-button">Update Information</button>
        <button className="dashboard-button" onClick={handleViewPolicies}>View Your Policies</button>
      </div>
    </div>
  );
};

export default UserDashboard;
