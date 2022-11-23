import React, { useState, useEffect } from "react";
import { AppstoreAddOutlined, ProfileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import NavigationBar from "../../components/NavigationBar";
import Content from "./components/Content";

const Home = () => {
    return (
        <div className="flex bg-white">
            <div className="z-20">
            <NavigationBar/>
            </div>
            <div className="pt-14 w-screen flex justify-center z-10">
                <Content/>
            </div>
        </div>
    );
};

export default Home;
