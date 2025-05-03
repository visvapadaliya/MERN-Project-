import React from 'react'
import { use } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const AdminNavbar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const logoutHandler=()=>{

    localStorage.clear();
    navigate('/login');
  }

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
                      <Link to='/admin'>Home </Link>
                    </li>
                    <li>
                      <a href="properties.html" className="fh5co-sub-ddown">
                        Drop-Down
                      </a>
                      <ul className="fh5co-sub-menu">
                        <li>
                          <a href="#">Family</a>
                        </li>
                        <li>
                          <a href="#">CSS3 &amp; HTML5</a>
                        </li>
                        <li>
                          <a href="#">Angular JS</a>
                        </li>
                        <li>
                          <a href="#">Node JS</a>
                        </li>
                        <li>
                          <a href="#">Django &amp; Python</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='property' id='fh5co-properties'>Propertys</Link>
                    </li>
                    <li>
                    <Link to='viewproperty'>View Property</Link>
                    </li>
                    <li>
                      {/* <a href="#">Report</a> */}
                      <Link to='dashbord'>Dashbord</Link>
                    </li>
                    <li>
                      <Link to='manageuser'>ManageUser</Link>
                    </li>
                    <li>
                    <button className='nav-btn' onClick={()=>{logoutHandler()}}>Logout</button>
                   </li>
                    
                  </ul>
                  
                </nav>
              </div>
            </div>
          </header>
          {/* end:header-top */}
          {location.pathname === '/admin' ? (
          <aside id="fh5co-hero" className="js-fullheight" style={{ height: 730 }}>
    <div className="flexslider js-fullheight" style={{ height: 730 }}>
    <ul className="slides">
    
    
    <li
      style={{
        backgroundImage: "url(public/assets/images/agent.jpg)",
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
    ) :null}
    <br/><br/><br/>    
        <Outlet></Outlet>
          <div>
                          <footer>
                    <div id="footer">
                      <div className="container">
                        <div className="row row-bottom-padded-md">
                          <div className="col-md-3">
                            <h3 className="section-title">About Homestate</h3>
                            <p>
                            We offer a wide range of verified listings, from luxury homes to budget-friendly apartments and commercial spaces. With expert guidance, transparent deals, and the latest market insights, we make your property journey smooth and hassle-free. Whether you're a first-time buyer or an experienced investor, we help you find the best real estate opportunities.
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
