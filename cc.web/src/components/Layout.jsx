import Header from '../views/Header';
import { Footer } from '.';
import React, { Component } from 'react'

class Layout extends Component {

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div style={{ minHeight: 'calc(100vh - 155px)' }}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout;