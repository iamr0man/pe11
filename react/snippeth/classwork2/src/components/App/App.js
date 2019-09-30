import React from 'react';
import './App.css';
import Header from '../Header';
import PricingHeader from '../PricingHeader';
import Main from "../Main/index";

function App() {
    return (
        <div>
            <Header/>
            <PricingHeader/>
            <Main/>
        </div>
    );
}

export default App;
