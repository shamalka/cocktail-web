import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./scenes/Home";
import 'antd/dist/antd.css';
import './index.css';
import { Provider, useDispatch, useSelector } from "react-redux";
import { setFavoriteCocktailData } from "./features/cocktailData";

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        addToFaviorite()
    },[])

    const addToFaviorite = () => {
        const favoritesArray = localStorage.getItem('faviorite_cocktails') !== null ? JSON.parse(localStorage.getItem('faviorite_cocktails')) : []
        dispatch(setFavoriteCocktailData(favoritesArray))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
