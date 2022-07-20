import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderActions = () => {
    return (
        <AwesomeSlider>
            <div>
                <img className="slider__image"
                     src={require("../../assets/2.jpg")} alt=""/>
            </div>
            <div>
                <img className="slider__image"
                     src={require("../../assets/1.jpg")} alt=""/>
            </div>
            <div>
                <img className="slider__image"
                     src={require("../../assets/3.jpg")} alt=""/>
            </div>
        </AwesomeSlider>
    );
};

export default SliderActions;