import React from 'react';
import './style.scss'
import data from '../../data.json'
import Card from "./Card";

const TopSale = () => {
    const list = data.filter(item => item.topSale === true)

    return (
        <div className="app__top-sale">
            <div className="top-sale__container _container">
                <h2 className="top-sale__title">Топ продаж</h2>
                <div className="top-sale__list">
                    {list.map(item => {
                        return <Card key={item.id}
                                     id={item.id}
                                     name={item.name}
                                     descr={item.descr}
                                     img={item.img}
                                     category={item.category}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopSale;