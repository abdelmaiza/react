import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faEnvelope, faHeart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faSearch} />
                     <span className="nav-link-text">Ma recherche</span>
                   </a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faHeart} />
                     <span className="nav-link-text">Mes favoris</span>
                   </a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faEnvelope} />
                     <span className="nav-link-text">Messages</span>
                   </a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">
                     <FontAwesomeIcon icon={faSignInAlt} />
                     <span className="nav-link-text">Se connecter</span>
                   </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default NavigationBar;