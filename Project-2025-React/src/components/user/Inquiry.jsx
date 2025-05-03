import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';


export const Inquiry = () => {
  const { id } = useParams(); // Property ID
  const { register, handleSubmit, reset } = useForm();
  const [property, setProperty] = useState({});
  const [userId, setUserId] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    const userId=localStorage.getItem("id");
    setUserId(userId);

    
  }, []);

  const submitHandler = async (data) => {
    console.log("form...",data);
    try {
      const res = await axios.post("/inquiry", {
        propertyId: id,
        userId,
        contact: data.contact,
        message: data.message,
      });

      alert("Inquiry sent successfully!");
      navigate("/");
    
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Failed to send inquiry.");
    }
  };

  useEffect(() => {
    axios.get(`/property/getproperty/${id}`)
      .then(response => setProperty(response.data.data || {}))
      .catch(error => console.error("Error fetching property details:", error));
  }, [id]);

  return (
    
  
    <div className="inquiry-container">
      <form className="inquiry-form" onSubmit={handleSubmit(submitHandler)}>
        <h3>Inquire about this property</h3>

        <label>Property Name</label>
        <input type="text" value={property.property_name || 'Loading...'} readOnly />

        <label>Your Contact</label>
        <input type="text" {...register("contact", { required: true })} required />

        <label>Message</label>
        <textarea rows="5" {...register("message", { required: true })} required></textarea>

        <button type="submit">Send Inquiry</button>
      </form>

      {/* Right-side image */}
      <div className="inquiry-image">
        <img src="/assets/images/inquiry.jpg" alt="Property" />
      </div>
    </div>

  
  );
};
