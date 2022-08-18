import React from 'react';
import './style.scss'
import data from '../../data.json'
import Card from "./Card";

const TopSale = () => {
    return (
        <div className="app__top-sale">
            <div className="top-sale__container _container">
                <h2 className="top-sale__title">Топ продаж</h2>
                <div className="top-sale__list">
                    {data.map(item => {
                        return <Card key={item.id}
                                     name={item.name}
                                     descr={item.descr}
                                     price={item.price}
                                     img={item.img}
                                     sale={item.sale}
                                     discount={item.discount}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopSale;