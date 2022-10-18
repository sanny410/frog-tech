import React from 'react';
import './style.scss'

const Contacts = () => {
    return (
        <div className="page__contacts _container">
            <h3 className="contacts-title">Полное фирменное наименование:</h3>
            <p className="contacts-subtitle">Общество с ограниченной ответственностью “НордФит”</p>
            <h3 className="contacts-title">Сокращенное фирменное наименование:</h3>
            <p className="contacts-subtitle">ООО “НордФит”</p>
            <h3 className="contacts-title">Сокращенное фирменное наименование на иностранном языке:</h3>
            <p className="contacts-subtitle">«NordFit» LLC</p>
            <h3 className="contacts-title">Юридический адрес:</h3>
            <p className="contacts-subtitle">195279, Россия, г Санкт-Петербург, пр-кт Ударников, 20 литер в, 3Н оф 18</p>
            <h3 className="contacts-title">Реквизиты</h3>
            <ul>
                <li>Телефон опт / розница : +7 962 383-22-39 / +7 967 341-01-83
                </li>
                <li>Email: frogtech@mail.ru</li>
                <li>ИНН / КПП: 7811259494 / 781101001</li>
                <li>ОГРН: 1157847416231</li>
            </ul>
        </div>
    );
};

export default Contacts;