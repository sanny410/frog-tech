import React from 'react';
import './style.scss'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="app-header">
            <nav className="header_menu _container">
                <ul className="menu__list">
                    <li className="menu__item">
                        <Link to="/"><img className="header-logo" src={require('../../assets/icons/output-onlinepngtools.png')} alt="" /></Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li className="menu__item">
                       <Link to="/delivery"> Оплата и доставка</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/about-us">О нас</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                    <li className="header__contacts menu__item">
                        <div>+79623832239 - Опт</div>
                        <div>+79673410183 - Розница</div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;