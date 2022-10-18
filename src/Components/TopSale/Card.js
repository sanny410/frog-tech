import React, {useEffect, useState} from 'react';
import './style.scss'

const Card = ({ descr, price, name, img, sale, discount}) => {
    const [counter, setCounter] = useState(0);
    const [newPrice, setNewPrice] = useState(price);

    useEffect(() => {
        if (sale === true) {
            setNewPrice(newPrice => Math.round(newPrice * (1 - discount)))
        }
    }, [])


    return (
        <div>
            <img className="card__image" src={`${img}`} alt=""/>
            <div className="card__item">
                <h4 className="card__title">{name}</h4>
                <div className="card__descr">{descr}</div>
                <button className="btn btn_buy">Подробнее</button>
            </div>
        </div>
    );
};

export default Card;