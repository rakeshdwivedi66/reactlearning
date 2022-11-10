import React, { Component } from "react";

const  NavBar = ({totalCounters,totalQuantity}) => {
    return ( <nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge bg-pill bg-secondary m-2">Products: {totalCounters}</span>
        <span className="badge bg-pill bg-secondary">Quantity: {totalQuantity}</span>
      </a>
    </div>
  </nav> );
}
 
export default NavBar;
