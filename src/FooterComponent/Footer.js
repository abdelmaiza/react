import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="footer-section-heading">À PROPOS</h5>
            <ul className="list-unstyled text-left">
              <li><a href="#">Qui sommes-nous ?</a></li>
              <li><a href="#">Notre histoire</a></li>
              <li><a href="#">Nos valeurs</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-section-heading">INFORMATIONS LÉGALES</h5>
            <ul className="list-unstyled text-left">
              <li><a href="#">Conditions générales d'utilisation</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-section-heading">NOS SOLUTIONS PROS</h5>
            <ul className="list-unstyled text-left">
              <li><a href="#">Solution 1</a></li>
              <li><a href="#">Solution 2</a></li>
              <li><a href="#">Solution 3</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-section-heading">DES QUESTIONS ?</h5>
            <ul className="list-unstyled text-left">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Nous contacter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top"></div> {/* add border-top div here */}
      <div className="container">
              <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
