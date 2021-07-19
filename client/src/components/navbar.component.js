import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Job Listing</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/read" className="nav-link">View Job Postings</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create job Postings</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}