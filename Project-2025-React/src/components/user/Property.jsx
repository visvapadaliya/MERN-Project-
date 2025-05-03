import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

export const Property = () => {
  const{register,handleSubmit}=useForm();
    const [properties, setProperties] = useState([]);
     const [states, setstates] = useState([]);
     const [cities, setcities] = useState([]);
     const [areas, setareas] = useState([]);
    const navigate=useNavigate();
    const { categoryId } = useParams();   
  const location = useLocation();
    const [property, setProperty] = useState([]);
  
     useEffect(()=>{
            getAllStates()
        },[])
  
        const submintHandler = async (data) => {
          try {
            console.log("Sending filter data:", data); 
        
            const res = await axios.get(`/property/filters`, {
              params: {
                stateId: data.stateId || "",  
                cityId: data.cityId || "",
                areaId: data.areaId || "",
                categoryId: data.categoryId || "",
              },
            });
        
            console.log("Filtered Properties:", res.data);
        
            if (res.data.data.length === 0) {
              alert("No properties found! Try a different location.");
              return;
            }
            
          
         
          setProperty(res.data.data);
        
          } catch (error) {
            
            alert("Error fetching properties. Please check the API.");
          }
        };
        
  
    const logoutHandler=()=>{
  
      localStorage.clear();
      navigate('/login');
    }
  
    const getAllStates=async()=>{
  
      const res=await axios.get("/state/allstate");
     
      setstates(res.data.data);
  };
  const getCityByState=async(id)=>{
  
    const res =await axios.get("/city/getcitybystate/" + id);
    console.log("city response....",res.data);
    setcities(res.data.data);
  };
  const getAreaByCity =async(id)=>{
  
    const res=await axios.get("/area/getareabycity/" + id);
    console.log(res.data);
    setareas(res.data.data);
  
  };
  
  

  const getAllProperty = async () => {
    try {
      const res = await axios.get(`/property/category/${categoryId}`);
      setProperty(res.data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    if (location.state?.properties && location.state.properties.length > 0) {
      console.log("Using filtered properties from location.state");
      setProperty(location.state.properties);
    } else if (categoryId) {
      console.log("Fetching properties based on category");
      getAllProperty();
    }
  }, [categoryId, location.state]);


  return (
    <>
    <aside id="fh5co-hero" className="js-fullheight" style={{ height: 730 }}>
<div className="flexslider js-fullheight" style={{ height: 730 }}>
<ul className="slides">


<li
  style={{
    backgroundImage: "url('/assets/images/user.jpg')", 
    backgroundRepeat: "no-repeat",
    backfaceVisibility: "visible",
    width: "100%",
    float: "left",
    marginRight: "-100%",
    position: "relative",
    opacity: 1,
    display: "block",
    height: "100%",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  }}
  data-thumb-alt=""
  className="flex-active-slide"
>
  <div className="container-fluid">
    <div className="row">


    <form onSubmit={handleSubmit(submintHandler)}>
      <div className='search'>
    <div className="search-bar">
<div className="search-item">
    <span className="icon"><svg width="25" height="25" className="icon" viewBox="0 0 24 24" fill="none" stroke="navy" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.632 12 22 12 22C12 22 19 13.632 19 9C19 5.13401 15.866 2 12 2Z"/>
  <circle cx="12" cy="9" r="3"/>
</svg>
</span>
    <select {...register("stateId")}
    onChange={(event)=>{getCityByState(event.target.value);}}>

       <option>STATE</option>
                       {
                            states?.map((state)=>{
                            return <option key={state._id} value={state._id}>{state.name}</option>
                            })
                        }
    </select>
  </div>
  <div className="search-item">
    <span className="icon">🌆</span>
    <select  {...register("cityId")}
    onChange={(event)=>{getAreaByCity(event.target.value); }}>
                             <option>CITY</option>
                        {
                          cities?.map((city)=>{
                          return <option key={city._id} value={city._id}>{city.name}</option>})
                        }

    </select>
  </div>
  <div className="search-item">
    <span className="icon">🏡</span>
    <select {...register("areaId")}>
                       <option>AREA</option>
                        {
                        areas?.map((area)=>{
                            return <option key={area._id} value={area._id}>{area.name}</option>
                        })
                        }
                     </select>
  </div>
  <button className="search-button" style={{background:"none",border:"none"}} type='submit'>
    <i>🔍</i>
    Search
  </button>
</div>
</div>
</form>
    </div>
  </div>
</li>
</ul>


</div>
</aside>
    <div id="fh5co-properties" className="fh5co-section-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
          <h3>View All Properties</h3>
          <p>
            Browse through a wide range of verified properties, including luxurious apartments, independent houses, villas, and commercial spaces.
          </p>
        </div>
      </div>
      <div className="row">
        {property.length > 0 ? (
          property.map(prop => (
            <div key={prop._id} className="col-md-4 animate-box fadeInUp animated">
              <div className="property">
                <Link to={`/user/showproperty/${prop._id}`} className="fh5co-property" style={{ backgroundImage: `url(${prop.PropertyImage})` }}>
                  <span className="status">Sale</span>
                  <ul className="list-details">
                    <li>{prop.rooms} Rooms</li>
                    <li>{prop.bathrooms} Bathrooms</li>
                  </ul>
                </Link>
                <div className="property-details">
                  <h3 style={{color:"#092635"}}>{prop.property_name}</h3>
                  <span className="price" style={{color:"#D70654"}}>₹{prop.basePrice}</span>
                  <p style={{color:"#2C3930"}}>{prop.description}</p>
                  <span className="address">
                    <i className="icon-map" />
                    <b style={{color:"#092635"}}>{prop.cityId.name}, {prop.stateId.name}</b>
                    <p style={{color:"#27445D"}}>{prop.address}</p>
                  </span>
                  <button className='view-btn' style={{height:"40px",textAlign:"center"}}>
                    <Link to={`/user/showproperty/${prop._id}`}>View Property</Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>No properties found for the selected filters.</p>
        )}
      </div>
    </div>
  </div>
  </>
  );
};

  

