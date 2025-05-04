import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ViewProperty = () => {
  const [property, setProperty] = useState([]);

  const getAllProperty = async () => {
    try {
      const res = await axios.get("/property/viewproperty/" + localStorage.getItem("id"));
      setProperty(res.data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  return (
    <div id="fh5co-properties" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
            <h3>Newest Properties</h3>
            <p>
              Welcome to our exclusive property listings, where you can find the perfect home or investment opportunity in Gujarat. Browse through a wide range of verified properties, including luxurious apartments, independent houses, villas, and commercial spaces.
            </p>
          </div>
        </div>
        <div className="row">
          {property.map(prop => (
            <div key={prop._id} className="col-md-4 animate-box fadeInUp animated">
              <div className="property">
                <Link to={`/admin/updateproperty/${prop._id}`} className="fh5co-property" style={{ backgroundImage: `url(${prop.PropertyImage})` }}>
                  <span className="status">Sale</span>
                  <ul className="list-details">
                    <li>{prop.rooms} Rooms</li>
                    <li>{prop.bathrooms} Bathrooms</li>
                    {/* <li><button className='nav-btn'><Link to={`/admin/updateproperty/${prop._id}`}>Update</Link></button></li> */}
                     
                  </ul>
                </Link>
                <div className="property-details">
                  <h3 style={{color:"#092635"}}>{prop.property_name}</h3>
                  <span className="price" style={{color:"#D70654"}}>₹{prop.basePrice}</span>
                  <p style={{color:"#2C3930"}}>{prop.description}</p>
                  <span className="address">
                    <i className="icon-map" /><b style={{color:"#092635"}}>{prop.cityId.name}  ,{prop.stateId.name}</b>
                    <p style={{color:"#27445D"}}>{prop.address}</p>
                  </span>
                  <button className='view-btn' style={{height:"40px",textAlign:"center"}}>
                       <Link to={`/admin/updateproperty/${prop._id}`}>Update Property</Link>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
