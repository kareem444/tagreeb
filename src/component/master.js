import React, { Component } from 'react';
import About from './about/about'
import Footer from './footer/footer'
import Home from './home/home'
import Profile from './profile/profile'
import Work from './work/work'
import Social from './social/social'
import Portfolio from './portfolio/portfolio'

class Master extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default Master;