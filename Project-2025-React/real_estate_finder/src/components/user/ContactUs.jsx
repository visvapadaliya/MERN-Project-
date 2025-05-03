import React from 'react'

export const ContactUs = () => {
  return (
    <div id="fh5co-contact" className="fh5co-contact">
    <div className="half-contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center heading-section animate-box">
            <h3>Ask an agent, We're here to help 24/7</h3>
            <p>
            Finding the perfect home isn’t just about location—it’s about lifestyle, dreams, and possibilities. We make the journey seamless, so you can focus on what truly matters: your future.
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
  )
}
