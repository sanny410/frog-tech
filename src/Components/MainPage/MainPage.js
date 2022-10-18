import React from 'react';
import './style.scss'
import TopSale from "../TopSale/TopSale";
import Benefits from "../Benefits/Benefits";
import HomePage from "../HomePage/HomePage";

const MainPage = () => {
    return (
        <div className="main-page">
            <HomePage />
            <TopSale />
            <Benefits />
        </div>
    );
};

export default MainPage;