import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faEnvelope, faHeart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

function NavigationBar() {
   return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <div className="container-fluid">
         <div className="col-sm-6 col-md-2">
            <a className="navbar-brand" href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
            <button className="btn btn-primary ms-auto" type="button">
              Déposer une annonce
            </button>
         </div>
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
               <Link className="nav-link" to="/authentication">
                 <FontAwesomeIcon icon={faSignInAlt} />
                 <span className="nav-link-text">Se connecter</span>
               </Link>
             </li>
           </div>
         </div>
       </div>
     </nav>
   );
}

export default NavigationBar;
