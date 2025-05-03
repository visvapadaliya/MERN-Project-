import React, { useEffect, useState } from 'react'
import '../../assets/style.css'
import { Link, Links } from 'react-router-dom'
import axios from 'axios';


export default function Home() {

  const [property, setProperty] = useState([]);

  const getAllProperty = async () => {
    try {
      const res = await axios.get("/property/allproperty/");
      setProperty(res.data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  return (
   <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <header id="fh5co-header-section" className="sticky-banner">
          <div className="container">
            <div className="nav-header">
              <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark">
                <i />
              </a>
              <h1 id="fh5co-logo">
                <a href="index.html">
                  <i className="icon-home" />
                  Magic<span>Homes</span>
                </a>
              </h1>
             
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li className="active">
                    <Link to='/'>Home </Link>
                  </li>
                  <li>
                    <a href="#" className="fh5co-sub-ddown">
                      Propertys
                    </a>
                    <ul className="fh5co-sub-menu">
                      <li>
                        <a href="#fh5co-popular-properties">Buy Property</a>
                      </li>
                      <li>
                        <a href="#fh5co-properties">View Property</a>
                      </li>
                     
                    </ul>
                  </li>
                 
                  <li>
                  <a href="#fh5co-about">Agent</a>
                  </li>
                  
                  <li>
                  <a href="#fh5co-features">Services</a>
                  </li>

                  <li>
                  <a href="#fh5co-contact">ContactUs</a>
                  </li>
                 
                  <li>
                    <Link to='/login' className='btn'>Login</Link>
                  </li>
                </ul>
                
              </nav>
            </div>
          </div>
        </header>
        {/* end:header-top */}

        <aside id="fh5co-hero" className="js-fullheight" style={{ height: 730 }}>
<div className="flexslider js-fullheight" style={{ height: 730 }}>
<ul className="slides">
  
  
  <li
    style={{
      backgroundImage: 'url(public/assets/images/i1.jpg)',
      width: "100%",
      float: "left",
      marginRight: "-100%",
      position: "relative",
      opacity: 1,
      display: "block",
      height: "100%",
    }}
    data-thumb-alt=""
    className="flex-active-slide"
  >
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-4 col-md-offset-4 col-md-pull-4 js-fullheight slider-text animated fadeInUp"
          style={{ height: 730 }}
        >
          <div className="slider-text-inner">
            <div className="desc">
              <span className="status">Sale</span>
              <h1>New House in Ahemdabad, India</h1>
              <h2 className="price">₹40,000,00.00</h2>
              <p>
              Ahmedabad, a thriving metropolitan city, offers a perfect blend of modern living and rich heritage. Whether you’re looking for a luxurious apartment, a spacious villa, or a commercial property, Ahmedabad's real estate market has something for everyone.
              </p>
              <p className="details">
                <span>2000 ft sq</span>
                <span>4 Bedrooms</span>
                <span>3 Bathrooms</span>
                <span>2 Garage</span>
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>


</div>
</aside>





<div id="fh5co-popular-properties" className="fh5co-section-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
          <h3 style={{fontSize:"30px", color:"#5C7285"}}>Where your property preferences meet the perfect match</h3>
          {/* <p>
          A popular property is one that attracts high demand due to its prime location, modern amenities, and excellent connectivity.These properties often feature spacious layouts, premium construction, and facilities like swimming pools, gyms, landscaped gardens, and security. In metropolitan cities, luxury apartments, gated communities, and villas in well-developed areas are highly sought.
          </p> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 animate-box">
        <Link to={`/user/searchproperty/67c700f7cca791f3207f68f5`} className="fh5co-property" style={{ backgroundImage: `url("/assets/images/p1.jpg")` }}>

            
            <span className="status">Sale</span>
            <div className="prop-details">
              <span className="price">₹52,000,00</span>
              <h3>Residential</h3>
            </div>
          </Link>
        </div>
        <div className="col-md-4 animate-box">
        <Link to={`/user/searchproperty/67c7014acca791f3207f68f7`} className="fh5co-property" style={{ backgroundImage: `url("/assets/images/p2.jpg")` }}>
          
            <span className="status">Rent</span>
            <div className="prop-details">
              <span className="price">₹4,00,000</span>
              <h3>Commercial</h3>
            </div>
    </Link>
        </div>
        <div className="col-md-4 animate-box">
        <Link to={`/user/searchproperty/67c70185cca791f3207f68f9`} className="fh5co-property" style={{ backgroundImage: `url("/assets/images/p3.jpg")` }}>
           
            <span className="status">Sale</span>
            <div className="prop-details">
              <span className="price">₹10,00,000</span>
              <h3>Industrial</h3>
            </div>
        </Link>
        </div>
        
      </div>
    </div>
  </div>



        

        <div id="fh5co-features">
          <div className="container">
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-map" />
                  </span>
                  <div className="feature-copy">
                    <h3>Move House</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-browser" />
                  </span>
                  <div className="feature-copy">
                    <h3>Mortgage</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-wallet" />
                  </span>
                  <div className="feature-copy">
                    <h3>Make Money</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-piechart" />
                  </span>
                  <div className="feature-copy">
                    <h3>Business Home</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-genius" />
                  </span>
                  <div className="feature-copy">
                    <h3>Marketing</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-chat" />
                  </span>
                  <div className="feature-copy">
                    <h3>Explorer</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                      reprehenderit.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div
          id="fh5co-testimonial"
          style={{ backgroundColor:"#5C7285" }}
        >
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Happy Clients</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box-testimony animate-box">
                  <blockquote>
                    <span className="quote">
                      <span>
                        <i className="icon-quotes-right" />
                      </span>
                    </span>
                    <p><img
              className="img-responsive"
              src="../../public/assets/images/c3.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
                    "I couldn’t believe how quickly I found my dream home! The property finder made the whole process effortless. Within days, I was touring places that actually fit my wishlist. Highly recommended!"
                    </p>
                  </blockquote>
                  <p className="author">
                  Sarah M.
                   
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box-testimony animate-box">
                  <blockquote>
                    <span className="quote">
                      <span>
                        <i className="icon-quotes-right" />
                      </span>
                    </span>
                    <p><img
              className="img-responsive"
              src="../../public/assets/images/c2.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
                    "I have worked with agents before, but this was on another level. The platform was smart, fast, and incredibly easy to use. Thanks to the team, I finally have the perfect investment property!"
                    </p>
                  </blockquote>
                  <p className="author">
                    
                    Ahmed R.
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box-testimony animate-box">
                  <blockquote>
                    <span className="quote">
                      <span>
                        <i className="icon-quotes-right" />
                      </span>
                    </span>
                    <p><img
              className="img-responsive"
              src="../../public/assets/images/c1.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
                    "Finding a home in the city seemed impossible—until I tried this service. Every listing felt handpicked for me. The support team was so helpful, and I felt confident every step of the way!"
                    </p>
                  </blockquote>
                  <p className="author">
                  Priya K.
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div id="fh5co-properties" className="fh5co-section-gray">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
                    <h3>View All Properties</h3>
                    <p>
                      Welcome to our exclusive property listings, where you can find the perfect home or investment opportunity in Gujarat. Browse through a wide range of verified properties, including luxurious apartments, independent houses, villas, and commercial spaces.
                    </p>
                  </div>
                </div>
                <div className="row">
                  {property.map(prop => (
                    <div key={prop._id} className="col-md-4 animate-box fadeInUp animated">
                      <div className="property">
                        <Link to={`/user/showproperty/${prop._id}`} className="fh5co-property" style={{ backgroundImage: `url(${prop.PropertyImage})` }}>
                        
                          <span className="status">Sale</span>
                          <ul className="list-details">
                            <li>{prop.rooms} Rooms</li>
                            <li>{prop.bathrooms} Bathrooms</li>
                            
                            {/* <li><button className='nav-btn'><Link to={`/admin/updateproperty/${prop._id}`}>Book Property</Link></button></li> */}
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
                          <button className='view-btn' style={{height:"40px",textAlign:"center"}}><Link to={`/user/showproperty/${prop._id}`}>View Property</Link></button>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>
        <div id="fh5co-about" className="fh5co-agent">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
          <h3>Our Agents</h3>
          <p>
          Our professional team handles everything from property valuation and marketing to negotiations and legal paperwork, making the buying or selling process hassle-free. We specialize in luxury homes, budget-friendly apartments, and commercial spaces in prime locations.
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-3 text-center animate-box"
          data-animate-effect="fadeIn"
        >
          <div className="fh5co-staff">
            <img
              className="img-responsive"
              src="../../public/assets/images/agent1.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
            <h3>Jean Smith</h3>
            <p>
              Quos quia provident consequuntur culpa facere ratione maxime
              commodi voluptates id repellat
            </p>
            <p className="fh5co-social-icons">
              <a href="#">
                <i className="icon-twitter2" />
              </a>
              <a href="#">
                <i className="icon-facebook2" />
              </a>
              <a href="#">
                <i className="icon-instagram" />
              </a>
              <a href="#">
                <i className="icon-dribbble2" />
              </a>
              <a href="#">
                <i className="icon-youtube" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-sm-3 text-center animate-box"
          data-animate-effect="fadeIn"
        >
          <div className="fh5co-staff">
            <img
              className="img-responsive"
              src="../../public/assets/images/agent2.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
            <h3>Hush Raven</h3>
            <p>
              Quos quia provident consequuntur culpa facere ratione maxime
              commodi voluptates id repellat
            </p>
            <p className="fh5co-social-icons">
              <a href="#">
                <i className="icon-twitter2" />
              </a>
              <a href="#">
                <i className="icon-facebook2" />
              </a>
              <a href="#">
                <i className="icon-instagram" />
              </a>
              <a href="#">
                <i className="icon-dribbble2" />
              </a>
              <a href="#">
                <i className="icon-youtube" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-sm-3 text-center animate-box"
          data-animate-effect="fadeIn"
        >
          <div className="fh5co-staff">
            <img
              className="img-responsive"
              src="../../public/assets/images/agent3.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
            <h3>Alex King</h3>
            <p>
              Quos quia provident consequuntur culpa facere ratione maxime
              commodi voluptates id repellat
            </p>
            <p className="fh5co-social-icons">
              <a href="#">
                <i className="icon-twitter2" />
              </a>
              <a href="#">
                <i className="icon-facebook2" />
              </a>
              <a href="#">
                <i className="icon-instagram" />
              </a>
              <a href="#">
                <i className="icon-dribbble2" />
              </a>
              <a href="#">
                <i className="icon-youtube" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-sm-3 text-center animate-box"
          data-animate-effect="fadeIn"
        >
          <div className="fh5co-staff">
            <img
              className="img-responsive"
              src="../../public/assets/images/agent4.jpg"
              alt="Free HTML5 Templates by freeHTML5.co"
            />
            <h3>Hush Raven</h3>
            <p>
              Quos quia provident consequuntur culpa facere ratione maxime
              commodi voluptates id repellat
            </p>
            <p className="fh5co-social-icons">
              <a href="#">
                <i className="icon-twitter2" />
              </a>
              <a href="#">
                <i className="icon-facebook2" />
              </a>
              <a href="#">
                <i className="icon-instagram" />
              </a>
              <a href="#">
                <i className="icon-dribbble2" />
              </a>
              <a href="#">
                <i className="icon-youtube" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
        <div id="fh5co-blog-section" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>Recent From Blog</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                  est facilis maiores, perspiciatis accusamus asperiores sint
                  consequuntur debitis.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-bottom-padded-md">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="../../public/assets/images/p8.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="#">Properties for sale</a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21
                          <i className="icon-bubble2" />
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p>
                        <a href="#">Learn More...</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="../../public/assets/images/p4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="#">Modern Home</a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21
                          <i className="icon-bubble2" />
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p>
                        <a href="#">Learn More...</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix visible-sm-block" />
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="../../public/assets/images/p10.jpg"
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="#">15% Deal Discount For House</a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21
                          <i className="icon-bubble2" />
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p>
                        <a href="#">Learn More...</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix visible-md-block" />
            </div>
          </div>
        </div>
        {/* fh5co-blog-section */}
        <div id="fh5co-contact" className="fh5co-contact">
          <div className="half-contact">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-md-offset-0 text-center heading-section animate-box">
                  <h3>Ask an agent, We're here to help 24/7</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit est facilis maiores, perspiciatis accusamus asperiores
                    sint consequuntur debitis.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name=""
                          className="form-control"
                          id=""
                          cols={30}
                          rows={7}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="half-bg"
            style={{ backgroundImage: `url("/assets/images/c1.png")` }}
          />
        </div>
        <div>
                        <footer>
                  <div id="footer">
                    <div className="container">
                      <div className="row row-bottom-padded-md">
                        <div className="col-md-3">
                          <h3 className="section-title">About Homestate</h3>
                          <p>
                          We offer a wide range of verified listings, from luxury homes to budget-friendly apartments and commercial spaces.
                          </p>
                        </div>
                        <div className="col-md-3 col-md-push-1">
                          <h3 className="section-title">Links</h3>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Properties</a>
                            </li>
                            <li>
                              <a href="#">Agent</a>
                            </li>
                            <li>
                              <a href="#">Dashbord</a>
                            </li>
                           
                            <li>
                              <a href="#">FAQ / Contact</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3 className="section-title">Information</h3>
                          <ul>
                            <li>
                              <a href="#">Terms &amp; Condition</a>
                            </li>
                            <li>
                              <a href="#">License</a>
                            </li>
                            <li>
                              <a href="#">Privacy &amp; Policy</a>
                            </li>
                            <li>
                              <a href="#">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3 className="section-title">Newsletter</h3>
                          <p>Subscribe for our newsletter</p>
                          <form className="form-inline" id="fh5co-header-subscribe">
                            <div className="row">
                              <div className="col-md-12 col-md-offset-0">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                  />
                                  <Link to='/signup' className='btn'>
                                    <i className="icon-paper-plane" />
                                    </Link>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p className="fh5co-social-icons">
                            <a href="#">
                              <i className="icon-twitter2" />
                            </a>
                            <a href="#">
                              <i className="icon-facebook2" />
                            </a>
                            <a href="#">
                              <i className="icon-instagram" />
                            </a>
                            <a href="#">
                              <i className="icon-dribbble2" />
                            </a>
                            <a href="#">
                              <i className="icon-youtube" />
                            </a>
                          </p>
                          <p>
                            Copyright 2025<sup>&copy;</sup>  All Rights Reserved. <br />
                            Made with <i className="icon-heart3" /> by{" "}
                            <a href="http://freehtml5.co/" target="_blank">
                            
                            </a>{" "}
                            
                            <a href="http://blog.gessato.com/" target="_blank">
                              
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
                </div>     
      </div>
      {/* END fh5co-page */}
    </div>
  
  )
}
