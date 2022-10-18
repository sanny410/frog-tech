import React from 'react';
import './style.scss'

const Benefits = () => {
    return (
        <div className="app__benefits">
            <div className="_container">
                <h2 className="title">Почему мы</h2>
                    <ul className="benefits__list">
                        <li className="list__item">Большой ассортимент</li>
                        <li className="list__item">Максимально доступная цена при высочайшем качестве</li>
                        <li className="list__item">Качественная продукция</li>
                        <li className="list__item">Высокий уровень сервиса</li>
                        <li className="list__item">Контроль качества и чистоты сырья</li>
                        <li className="list__item">Проведение исследований эффективности</li>
                    </ul>
            </div>
        </div>
    );
};

export default Benefits;