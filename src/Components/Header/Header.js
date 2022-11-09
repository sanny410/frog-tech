import React from 'react';
import './style.scss'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="app-header">
            <div className="app-header_container _container">
                <div className="header-logo">
                    <Link to="/"><img className="hlogo" src={require('../../assets/icons/output-onlinepngtools.png')} alt="" /></Link>
                </div>
                <nav className="header_menu">
                    <ul className="menu__list">
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
                    </ul>
                </nav>
                <div className="header__contacts">
                    <div className="contact">+79623832239 - Опт</div>
                    <div className="contact">+79673410183 - Розница</div>
                </div>
            </div>
        </div>
    );
};

export default Header;