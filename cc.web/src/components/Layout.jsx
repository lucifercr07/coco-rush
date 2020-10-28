import Header from '../views/Header';
import { Footer } from '.';
import React, { Component } from 'react'

class Layout extends Component {

  render() {
    return (
      <div>
        <Header {...this.props} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;