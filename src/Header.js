import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to='/' className="nostyleLinks">Regatta Library</Link></h1>
        <nav>
          
        </nav>
      </header>
    )
  }
}
