import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const id = localStorage.getItem("id"); // Make sure this is stored at login
        const response = await axios.get(`/userId/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        setUser(response.data.data); // Make sure this matches your API structure
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found or not logged in.</div>;

 

return (
  <div className="user-profile-container">
    <div className="profile-header">
      <img
        src="/assets/images/agent2.jpg"
        alt="Profile"
        className="profile-img"
      />
      <div>
        <h2 className="profile-name">{user.firstName} {user.lastName}</h2>
        <p className="profile-username">@{user.userName}</p>
      </div>
    </div>
    <div className="profile-info">
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Contact No:</strong> {user.contact_No || '-'}</p>
      <p><strong>Status:</strong> {user.Status ? 'Active' : 'Inactive'}</p>
      {user.role && <p><strong>Role:</strong> {user.role.role_name}</p>}
    </div>
  </div>
);

};
