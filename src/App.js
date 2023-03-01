import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './NavigationBarComponent/NavigationBar';
import MainContent from './MainContentComponent/MainContent'
import Footer from './FooterComponent/Footer'
import Authentication from './AuthenticationComponent/Authentication'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <MainContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
