import React, {useEffect, useState} from 'react';
import Card from "../TopSale/Card";
import {Link, useParams} from "react-router-dom"
import "../TopSale/style.scss"
import './style.scss'
import data from '../../data.json'

const CatalogList = () => {

    const { category } = useParams();
    const [list, setList] = useState(data)

    const filterList = () => {
        const arr = data.filter(item => item.category === category);
        setList(arr)
    }

    useEffect(() => {
        filterList()
    }, [category])

    return (
        <div className="_container">
            <h2>Каталог</h2>
            <div className="catalog-list ">
                <nav>
                    <ul className="catalog-list__menu">
                        <Link to={"/catalog/sarms"} className="list__item">
                            SARM’S
                        </Link>
                        <Link to={"/catalog/pkt"} className="list__item">
                            ПКТ / ТЕСТОБУСТЕРЫ
                        </Link>
                        <Link to={"/catalog/energy"} className="list__item">
                            СТИМУЛЯТОРЫ ЦНС / ЭНЕРГИЯ
                        </Link>
                        <Link to={"/catalog/weight-loss"} className="list__item">
                            СНИЖЕНИЕ ВЕСА / ЖИРОСЖИГАТЕЛИ
                        </Link>
                        <Link to={"/catalog/ecdysterone"} className="list__item">
                            ЭКДИСТЕРОН
                        </Link>
                        <Link to={"/catalog/nootrop"} className="list__item">
                            НООТРОПЫ / ХОРОШАЯ ПАМЯТЬ
                        </Link>
                        <Link to={"/catalog/good-dream"} className="list__item">
                            ХОРОШИЙ СОН / НАСТРОЕНИЕ
                        </Link>
                        <Link to={"/catalog/vitamins"} className="list__item">
                            ВИТАМИНЫ И МИНЕРАЛЫ
                        </Link>
                    </ul>
                </nav>
                <section className="catalog-list__card-list">
                    {
                        list.map((card) => {
                            return <Card key={card.id} descr={card.descr}
                                         name={card.name} img={card.img}
                                         category={category} id={card.id}/>
                        })
                    }
                </section>
            </div>
        </div>
    );
};

export default CatalogList;