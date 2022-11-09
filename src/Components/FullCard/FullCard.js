import React, { useState, useEffect } from 'react';
import "./style.scss"
import {useParams} from "react-router-dom";
import data from "../../data.json";

const FullCard = () => {
    const { id } = useParams();
    const [card, setCard] = useState(data[0])


    const findCard = () => {
        const itemCard = data.find(item => item.id === Number(id))
        setCard(itemCard)
    }

    useEffect(() => {
        findCard()
    })


    return (
        <div className="full-card _container">
            <h2 className="full-card__title title">{card.name}</h2>
            <div className="full-card__photos">
                {
                    card.img.map((img, i) => {
                        return <img key={i} src={`${img}`} alt="" />
                    })
                }
            </div>
            <div className="full-card__description">
                <h3 className="description__subtitle">Информация о товаре</h3>
                {
                    card.info.map((text, i )=> {
                        return <p key={i} className="description__text">{text}</p>
                    })
                }
                <h3 className="description__subtitle">Эффекты и особенности:</h3>
                <ul>
                    {
                        card.effects.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                <h3 className="description__subtitle">Способ применения</h3>
                <p className="description__text">{card.modeOfApplication}</p>
                <p className="description__text">БАД. Не является лекарством</p>
            </div>
        </div>
    );
};

export default FullCard;