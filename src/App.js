import React from 'react'
import {Route, Routes} from "react-router-dom";
import './App.scss';
import MainPage from "./Components/MainPage/MainPage";
import Catalog from "./Components/Stock/Catalog";
import FullCard from "./Components/FullCard/FullCard";
import Delivery from "./Components/Delivery/Delivery";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import CatalogList from "./Components/CatalogList/CatalogList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/404Page/Page404";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path={'/'} element={<MainPage />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/catalog/:category' element={<CatalogList />}/>
            <Route path='/stock' element={<Catalog />}/>
            <Route path='/catalog/:category/:id' element={<FullCard />}/>
            <Route path='/delivery' element={<Delivery />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
