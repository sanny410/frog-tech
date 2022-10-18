import React from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import ProfileUser from "./Components/ProfileUser/ProfileUser";
import Catalog from "./Components/Stock/Catalog";
import Card from "./Components/Card/Card";
import Delivery from "./Components/Delivery/Delivery";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import CatalogList from "./Components/CatalogList/CatalogList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path={'/'} element={<MainPage />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/catalog/sarms' element={<CatalogList />}/>
            <Route path='/profile' element={<ProfileUser />}/>
            <Route path='/stock' element={<Catalog />}/>
            <Route path='/card/:id' element={<Card />}/>
            <Route path='/delivery' element={<Delivery />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
