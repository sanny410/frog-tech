import React from 'react';
import './style.scss'

const CatalogList = () => {
    return (
        <nav className="main-page__catalog">
            <ul className="catalog__list">
                <h3 className="menu__title">Категории</h3>
                <li className="list__item">SARM'S</li>
                <li className="list__item">Стимуляторы</li>
                <li className="list__item">ПКТ/Бустеры либидо</li>
                <li className="list__item">Жиросжигатели</li>
                <li className="list__item">Экдистерон</li>
                <li className="list__item">Витамины и минералы</li>
                <li className="list__item">Сон / Настроение</li>
            </ul>
            <ul className="catalog__list">
                <h3 className="menu__title">Бренды</h3>
                <li className="list__item">Platinum Frogtech</li>
                <li className="list__item">Green Frogtech </li>
                <li className="list__item">MYBODY</li>
            </ul>
        </nav>
    );
};

export default CatalogList;