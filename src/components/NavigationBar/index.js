import React, { useEffect, useState } from "react";
import cocktailIcon from "./../../img/cocktail.png"
import SearchBar from "./components/SearchBar";
import { Space } from "antd";

const NavigationBar = () => {

    return (
        <div className="fixed flex items-center lg:h-14 justify-center h-24 w-screen bg-gray-200">
            <div className="w-8/12 lg:flex items-center justify-center">
                <div className="flex-1 lg:justify-center justify-items-end">
                    <Space>
                        <img src={cocktailIcon} className="w-10 h-10 mr-3" />
                        <p className="font-lobster text-2xl">Cocktail Hub</p>
                    </Space>
                </div>
                <div className="flex-1">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
