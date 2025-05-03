import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


export const PropertyInfo = () => {
  
       const { id } = useParams();
      const [property, setProperty] = useState(null);
    
      useEffect(() => {
        axios.get(`/property/getproperty/${id}`)
          .then(response => {
            console.log("Property data:", property);

            console.log(response.data); 
            setProperty(response.data.data);
          })
          .catch(error => {
            console.error("Error fetching property details:", error);
          });
        }, [id]);  
    
      if (!property) {
        return <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>Loading property details...</p>;
      }
    
      return (
<div className="property-container">
    <h1 className="property-header">Find Your Dream Property  Fast, Easy & Hassle-Free! 🏡🚀</h1>
    <br/><br/>

    <div className="property-content">
        {/* Left Side - Property Details */}
        <div className="property-details">
            <h1>{property.property_name}</h1>
            <br/>
            <h4>₹{property.basePrice}</h4>
            <h5 style={{color:"#205781"}}>{property.description}</h5>
            <ul>
                {property.rooms && <li><b>Rooms:</b> {property.rooms}</li>}
                {property.bathrooms && <li><b>Bathrooms:</b> {property.bathrooms}</li>}
                {property.cityId?.name && property.stateId?.name && (
                <li><b>Location:</b> {property.cityId.name}, {property.stateId.name}</li>
              )}

                {property.address && <li><b>Address:</b> {property.address}</li>}
            </ul>
            <Link to={`/user/inquiry/${id}`} className="contact-button">Contact</Link>
        </div>

        {/* Right Side - Property Image */}
        <div
            className="property-image"
            style={{
                backgroundImage: property.PropertyImage
                    ? `url(${property.PropertyImage})`
                    : "url('/default-image.jpg')"
            }}
        />
    </div>
</div>

      
      );
    }
