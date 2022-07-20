import React from 'react';
import './style.scss'

const Header = () => {

    return (
        <div className="app-header _container">
            <nav className="header_menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#">Акции</a>
                    </li>
                    <li className="menu__item">
                       <a href="#">Оплата и доставка</a>
                    </li>
                    <li className="menu__item">
                        <a href="#">Отзывы</a>
                    </li>
                    <li className="menu__item">
                        <img className="header-logo" src={require('../../assets/icons/Logo.jpg')} alt="" />
                    </li>
                    <li className="menu__item">
                        <a href="#">О нас</a>
                    </li>
                    <li className="menu__item">
                        <a href="#">Контакты</a>
                    </li>
                    <li className="menu__item">
                        <img className="menu-icon" src={require('../../assets/icons/user.png')} alt="Профиль"/>
                    </li>
                    <li className="menu__item">
                        <img className="menu-icon" src={require('../../assets/icons/shopping-cart.png')} alt="Корзина"/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;