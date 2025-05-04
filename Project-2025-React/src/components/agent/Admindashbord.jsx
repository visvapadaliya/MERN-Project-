import axios from 'axios';
import React, { useEffect, useState } from 'react'



export const Admindashbord = () => {

  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalProperties: 0,
    soldProperties: []
  });

  const fetchSummary = async () => {
    try {
      const response = await axios.get('/dashbord');
      setSummary(response.data);
    } catch (error) {
      console.error('Failed to fetch admin summary:', error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card blue">
          <h2>{summary.totalProperties}</h2>
          <p style={{color:"#000", fontSize:"20px"}}>Total Properties</p>
        </div>
        <div className="card green">
          <h2>{summary.totalUsers}</h2>
          <p style={{color:"#000", fontSize:"20px"}}>Total Users</p>
        </div>
        <div className="card yellow">
          <h2>{summary.soldProperties.length}</h2>
          <p style={{color:"#000", fontSize:"20px"}} >Sold Properties</p>
        </div>
      </div>

      <div className="sold-list">
        <h3>Sold Properties</h3>
        <ul>
          {summary.soldProperties.map((property, index) => (
            <li key={index}>
              <strong>{property.name}</strong> — Sold to: <em>{property.soldTo?.name || 'N/A'}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admindashbord;

