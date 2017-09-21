import * as React from 'react';
import { Link } from 'react-router';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-inverse bg-primary fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  /**
   *
   * Example of navbarr
   *
   return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-inverse bg-primary">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/todo">todo</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item btn-group">
                <a className="dropdown-toggle nav-link" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
      </div>
    </nav>
  );
   */
}
