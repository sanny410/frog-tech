import React from 'react';
import { Link } from "react-router-dom";
import "./style.scss"

const HomePage = () => {
    return (
        <div className="app__home-page">
            <div className="_container">
            <div className="home-page">
                    <h1 className="home-page__title">Раздвигаем любые грани c FROG TECH</h1>
                    <h3 className="home-page__subtitle">Компания Frog Tech™ - это крупный российский производитель добавок
                        для здоровья, красоты и больших результатов в спорте.</h3>
                    <Link to="/catalog"><button className="home-page__button">Смотреть каталог</button></Link>
            </div>
            </div>
        </div>
    );
};

export default HomePage;