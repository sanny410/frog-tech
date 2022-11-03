import React  from 'react';
import './style.scss'
import {Link} from "react-router-dom";

const Card = ({ descr,  name, img, category, id }) => {

    return (
        <div className="card">
            <img className="card__image" src={`${img[0]}`} alt=""/>
            <div className="card__item">
                <h4 className="card__title">{name}</h4>
                <div className="card__descr">{descr}</div>
                <Link to={`/catalog/${category}/${id}`}><button className="btn btn_buy">Подробнее</button></Link>
            </div>
        </div>
    );
};

export default Card;