import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Full SWtack Application</a>
        <form className="form-inline d-flex">
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button>
        </form>
      </nav>
    </div>
  );
}
