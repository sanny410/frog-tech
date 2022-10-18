import React from 'react';
import { Link } from "react-router-dom";
import "./style.scss"

const Catalog = () => {
    return (
        <div className="app-catalog _container">
            <h2 className="title">Каталог</h2>
            <div className="catalog__list">
                <Link to={""}><div className="list__item lgd">
                    <p>SARM’S</p>
                </div></Link>
                <Link to={""}><div className="list__item icariin">
                    <p>ПКТ / ТЕСТОБУСТЕРЫ / ЛИБИДО</p>
                </div></Link>
                <Link to={""}><div className="list__item dmba">
                    <p>СТИМУЛЯТОРЫ ЦНС/ ЭНЕРГИЯ</p>
                </div></Link>
                <Link to={""}><div className="list__item lipo-star">
                    <p>СНИЖЕНИЕ ВЕСА / ЖИРОСЖИГАТЕЛИ</p>
                </div></Link>
                <Link to={""}><div className="list__item ecd">
                    <p>ЭКДИСТЕРОН</p>
                </div></Link>
                <Link to={""}><div className="list__item alpha-gpc">
                    <p>НООТРОПЫ / ХОРОШАЯ ПАМЯТЬ</p>
                </div></Link>
                <Link to={""}><div className="list__item htp">
                    <p>ХОРОШИЙ СОН/ НАСТРОЕНИЕ</p>
                </div></Link>
                <Link to={""}><div className="list__item pau-d-arco">
                    <p>СПЕЦ ДОБАВКИ</p>
                </div></Link>
            </div>
        </div>
    );
};

export default Catalog;