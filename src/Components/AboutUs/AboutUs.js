import React from 'react';
import './style.scss'

const AboutUs = () => {
    return (
        <div className="page__about-us">
            <div className="_container">
                <h2 className="title">Frog Tech - современный бренд спортивного питания</h2>
                <h3 className="subtitle">Наши бренды</h3>
                <div className="about-us__brands">
                    <img className="logo" src={require("../../assets/logo.png")} alt="" />
                    <img className="logo" src={require("../../assets/icons/Logo.jpg")} alt="" />
                </div>
            </div>
                <div className="about-us about-us__platinum">
                    <div className="_container">
                        <div className="platina-info info">
                            <img className="logo" src={require("../../assets/icons/logoPlatinaWithoutFon.png")} alt="" />
                            <p className="text">FROGTECH Platinum - это первоклассное качество добавок, изумительный внешний вид.</p>
                            <p className="text">В ассортименте представлено 17 позиций от SARM’S до ноотропов. </p>
                            <p className="text">Премиум линейка спортивного питания, которая поможет вам достичь потрясающих результатов в спорте. </p>
                        </div>
                </div>
            </div>
            <div className="about-us about-us__green-frog">
                <div className="_container">
                    <div className="green-info info">
                        <img className="logo" src={require("../../assets/logo.png")} alt="" />
                        <p className="text">FROGTECH Green Line - наша классика, существующая уже с 2016 года.</p>
                        <p className="text">В её производстве используется импортное самое качественное сырьё. Наши клиенты отмечают её эффективность. Данная линейка достаточно широкая, каждый найдёт в ней добавку для себя. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;