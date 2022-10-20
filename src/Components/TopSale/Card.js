import React  from 'react';
import './style.scss'

const Card = ({ descr,  name, img }) => {

    return (
        <div className="card">
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