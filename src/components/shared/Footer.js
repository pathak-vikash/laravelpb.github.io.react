import React from 'react'

function Footer() {
    return(
      <footer className="footer-container white-text-container">
        <div className="container">
          <div className="row">
      
          
            <div className="col-xs-12">
              <h3>{process.env.REACT_APP_WEBSITE_NAME}</h3>
      
              <div className="row">
                <div className="col-xs-12 col-sm-7">
                  {/* <p><small>Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></small>
                  </p> */}
                </div>
                <div className="col-xs-12 col-sm-5">
                  <p className="text-right">
                    <a href="https://www.facebook.com/laravellivepb" target="_blank" className="social-round-icon white-round-icon fa-icon" title="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/Laravelpb" target="_blank" className="social-round-icon white-round-icon fa-icon" title="">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/laravelpb" target="_blank" className="social-round-icon white-round-icon fa-icon" title="">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;