import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
            <div className="d-flex justify-content-end">
              <div className="navbar-nav">
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default NavigationBar;