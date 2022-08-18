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
        <div className="card__item">
            <div className={(sale === true) ? "card__sale": "card__sale hide"}>Распродажа</div>
            <img className="card__image" src={`${img}`} alt=""/>
            <h4 className="card__title">{name}</h4>
            <div className="card__descr">{descr}</div>
            <div className="card__price-block">
                <div>Цена:</div>
                <div className={(sale === true) ? "card__price old" : "card__price"}>{price}</div>
                <div className={(sale === true) ? "card__discount-price": "card__discount-price hide"}>{newPrice}</div>
            </div>
            <div className={(counter > 0) ? "card__counter" : "card__counter hide"}>
                <img onClick={() => setCounter(counter => counter - 1)}
                     src={require("../../assets/icons/left.png")} alt="" />
                <span>{counter}</span>
                <img onClick={() => setCounter(counter => counter + 1)}
                     src={require("../../assets/icons/right.png")} alt="" />
            </div>
            <button onClick={() => setCounter(counter => counter + 1)}
                className="btn btn_buy">Купить</button>
        </div>
    );
};

export default Card;