import React, {Component} from 'react';
import PropTypes from 'prop-types';

var divStyle = {
//color: 'white',
backgroundImage: 'url(img/home-bg.jpg)',
WebkitTransition: 'all', // note the capital 'W' here
msTransition: 'all' // 'ms' is the only lowercase vendor prefix
//background-image: url('img/home-bg.jpg')"
};

class Header extends Component {
  render() {
    return(
      <div>
        <header className="masthead" style={divStyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default Header;
