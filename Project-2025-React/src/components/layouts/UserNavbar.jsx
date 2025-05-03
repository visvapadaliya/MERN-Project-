import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const UserNavbar = () => {
  const navigate=useNavigate();

  const logoutHandler=()=>{

    localStorage.clear();
    navigate('/login');
  }
  
  return (
    <>
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
                  <a href="properties.html" className="fh5co-sub-ddown">
                    Propertys
                  </a>
                  <ul className="fh5co-sub-menu">
                    <li>
                      <a href="#fh5co-hero">Search Property</a>
                    </li>
                    <li>
                      <a href="#fh5co-hero">Buy Property</a>
                    </li>
                    <li>
                      <Link to="/#fh5co-properties">View Property</Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                <Link to='agent#fh5co-about'>Agent</Link>
                </li>
                <li>
                  <Link to="contactus">ContactUs</Link>
                </li>

                <li>
                  <Link to="profile">Profile</Link>
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

      <aside id="fh5co-hero" className="js-fullheight" style={{ height: 730 }}>
  <div className="flexslider js-fullheight" style={{ height: 730 }}>
    <ul className="slides">
      <li
        style={{
          backgroundImage: "url('/assets/images/agent.jpg')", // Remove "public" from the path
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "visible",
          width: "100%",
          float: "left",
          marginRight: "-100%",
          position: "relative",
          opacity: 1,
          display: "block",
          height: "100%",
          backgroundSize: "cover", // Ensures the image covers the element properly
          backgroundPosition: "center", // Centers the image
        }}
        className="flex-active-slide"
      >
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text animated fadeInUp"
              style={{ height: 730 }}
            >
              <div className="slider-text-inner">
                <h2 className="heading-title">Find Your Magic Homes  <i className="icon-home" /></h2>
                <p className="fh5co-lead"> 
                      Developed with <i className="icon-heart3" />  by the experts at{" "}
                      <a href="https://yourrealestatewebsite.com" target="_blank">
                        YourRealEstateFinder  
                    </a>
                  </p>

              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ol className="flex-control-nav flex-control-paging" />
    <ul className="flex-direction-nav">
      <li className="flex-nav-prev">
        <a className="flex-prev flex-disabled" href="#" tabIndex={-1}>
          Previous
        </a>
      </li>
      <li className="flex-nav-next">
        <a className="flex-next flex-disabled" href="#" tabIndex={-1}>
          Next
        </a>
      </li>
    </ul>
  </div>
</aside>







      <Outlet></Outlet>
      
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
    {/* END fh5co-page */}
  </div>
  </>
  )
}
