import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroImage from './components/HeroImage';
import FullForm from './components/FullForm';
//
function App() {
    return (
        <div className="App">

            <input type="hidden" className="logged-in-user"  />
            <input type="hidden" className="logged-in-user"  />
            <input type="hidden" className="selected-entry-id"  />
            <HeroImage />
            <FullForm />
        </div>
    );
}

export default App;
