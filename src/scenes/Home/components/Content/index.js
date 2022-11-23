import { ReloadOutlined, HeartFilled } from "@ant-design/icons";
import { Tooltip, Drawer } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button";
import { setCocktailData } from "../../../../features/cocktailData";
import CocktailList from "./components/CocktailList";
import FavoriteCocktailsList from "./components/FavoriteCocktailsList";
import NotFound from "../../../../components/NotFound";

const Content = () => {

    // const [cocktailData, setCocktailData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const dispatch = useDispatch();

    const searchText = useSelector(
        (state) => state.searchData.searchText
    )

    const cocktailData = useSelector(
        (state) => state.cocktailData.data
    )

    useEffect(() => {
        console.log('search', searchText)
        if (searchText === '') {
            fetchRandomCocktails()
        } else {
            fetchCocktailData()
        }
    }, [searchText])

    const fetchCocktailData = () => {
        setIsLoading(true)
        axios.get("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + searchText).then(response => {
            dispatch(setCocktailData(response.data.drinks))
            setIsLoading(false)
        }).catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    }

    const cocktailDataTmpArray = []

    const fetchRandomCocktails = () => {
        setIsLoading(true)
        axios.get("https://thecocktaildb.com/api/json/v1/1/random.php").then(response => {
            cocktailDataTmpArray.push(response.data.drinks[0])
            if (cocktailDataTmpArray.length < 5) {
                fetchRandomCocktails()
            } else {
                setIsLoading(false)
                dispatch(setCocktailData(cocktailDataTmpArray))
            }
        }).catch(error => {
            console.log(error)
            setIsLoading(false)
        })
    }

    const onClickRefreshButton = () => {
        dispatch(setCocktailData([]))
        fetchRandomCocktails()
    }

    const showDrawer = () => {
        console.log('shooww')
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    return (
        <div className="w-8/12 h-screen">
            <div className="w-auto h-10 lg:mt-5 mt-10 flex">
                <div className="flex-1 justify-items-end">
                    <p className="font-poppins font-bold lg:text-2xl md:text-xl text-sm">5 Random cocktails for you.. Stay tipsy</p>
                </div>
                <div className="flex-1 items-center">
                    <Tooltip placement="top" title={"Refresh"}>
                        <Button onClick={onClickRefreshButton} className="shadow bg-gray-200 h-8 w-8 mr-3 mt-2 rounded-full hover:opacity-50 float-right" icon={<ReloadOutlined className="text-md" />} />
                    </Tooltip>
                    <Tooltip placement="top" title={"Favorites"}>
                        <Button onClick={showDrawer} className="shadow bg-gray-200 h-8 w-8 mr-3 mt-2 rounded-full hover:opacity-50 float-right" icon={<HeartFilled className="text-md text-red-400" />} />
                    </Tooltip>
                    <Drawer title="Favorite Cocktails" placement="right" onClose={onClose} visible={openDrawer}>
                        <FavoriteCocktailsList />
                    </Drawer>
                </div>
            </div>

            {cocktailData !== null ? <CocktailList cocktailData={cocktailData} isLoading={isLoading} /> : <NotFound />}
        </div>
    );
};

export default Content;
