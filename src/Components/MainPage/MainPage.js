import React from 'react';
import CatalogList from "../CatalogList/CatalogList";
import SliderActions from "../Slider/SliderActions";
import './style.scss'

const MainPage = () => {
    return (
        <div className="app__main-page _container">
            <CatalogList />
            <SliderActions />
        </div>
    );
};

export default MainPage;