import React from 'react';
import './style.scss'

const Delivery = () => {
    return (
        <div className="page__delivery _container">
            <h2 className="title">Оплата и доставка</h2>
            <h3 className="subtitle">Доставка</h3>
            <div className="row">
                <ol className="list">
                    <li className="list__item">По всей России отправляем компаниями "Сдэк", "Пэк", "Деловые линии", "Байкал сервис"
                        или другой ТК по индивидуальной договорённости.</li>
                    <li className="list__item">По Санкт-Петербургу бесплатно курьерской службой "Достависта", "Яндекс такси" или до ПВЗ "Сдэк"</li>
                    <li className="list__item">Вам приходит смс с контактами курьера перед доставкой!</li>
                </ol>
                <div className="delivery__logo">
                    <img className="logo" src={require("../../assets/icons/сдэк.png")} alt="" />
                    <img className="logo" src={require("../../assets/icons/dostavista.png")} alt="" />
                    <img className="logo" src={require("../../assets/icons/logoPec.png")} alt="" />
                    <img className="logo" src={require("../../assets/icons/baicalLogo.png")} alt="" />
                </div>
            </div>
            <h3 className="subtitle">Оплата</h3>
            <div className="row">
                <div>
            <p>Вы можете оплатить свой заказ следующими способами:</p>
            <ol>
                <li>Безналичный расчёт по реквизитам</li>
                <li>Переводом на карту</li>
            </ol>
                </div>
            <img className="logo pay-logo" src={require("../../assets/icons/oplata.png")} alt="" />
            </div>
        </div>
    );
};

export default Delivery;