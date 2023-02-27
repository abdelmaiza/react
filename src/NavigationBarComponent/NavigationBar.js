import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faEnvelope} />
                   </a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faSignInAlt} />
                   </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default NavigationBar;