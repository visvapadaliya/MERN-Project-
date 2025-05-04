import React from 'react'

export const Demo = () => {
  return (
    <div>
       <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">Property Form</li>
        </ol>
      </div> 
   <section className="content-header">
  <div className="container-fluid">
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Property Form</h1>
      </div>
     
    </div>
  </div>
  
</section>

  <section className="content">
  <div className="container-fluid">
    <div className="row">
     
      <div className="col-md-6">
        
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">Property Book</h3>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                fdprocessedid="x29url"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-envelope" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                fdprocessedid="kxsede"
              />
            </div>
            <p></p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  type="button"
                  className="btn btn-danger"
                  fdprocessedid="bpvf17"
                >
                  Property Type 
                </button>
              </div>
             
              <input
                type="text"
                className="form-control"
                fdprocessedid="absk1h"
              />
            </div>
    
            <p></p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  type="button"
                  className="btn btn-danger"
                  fdprocessedid="bpvf17"
                >
                  Description 
                </button>
              </div>
             
              <input
                type="text"
                className="form-control"
                fdprocessedid="absk1h"
              />
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                fdprocessedid="cle88g"
                placeholder='Buget'
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <p></p>
           
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                fdprocessedid="gdfke"
              />
              <span className="input-group-append">
                
              </span>
              <button
                  type="button"
                  className="btn btn-info btn-flat"
                  fdprocessedid="u7igc"
                >
                  Book Now
                </button>
            </div>
           
          </div>
        
        </div>
       
      </div>

    </div>
    
  </div>
  
</section>


  </div>
  
  )
}
