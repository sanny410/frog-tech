import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="app__footer">
            <div className="footer__container _container">
            <nav className="footer__menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/delivery">Оплата и доставка</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/about-us">О нас</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </nav>
                <div>Получи бесплатную консультацию и запроси оптовый прайс!</div>
            <ul className="menu__list">
                <li className="menu__item contacts">
                            <img className="logo" src={require("../../assets/icons/email.png")} alt="" />
                            <span>frogtech@mail.ru</span>
                </li>
                <li className="menu__item contacts">
                        <img className="logo" src={require("../../assets/icons/phone.png")} alt="" />
                        <span>+79623832239</span>
                </li>
            </ul>
            </div>
            <div className="copyright _container">
                <p>© FROGTECH.RU - официальный сайт добавок FROG TECH</p>
            </div>
        </footer>
    );
};

export default Footer;