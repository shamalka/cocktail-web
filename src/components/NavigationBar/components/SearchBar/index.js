import React, { useCallback } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Button from "../../../Button";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../../../features/searchData";
import { debounce } from "lodash";

const SearchBar = () => {

    const dispatch = useDispatch();

    const onChangeSearchText = (e) => {
        dispatch(setSearchData(e.target.value))
    }

    const debouncedChangeHandler = useCallback(
        debounce(onChangeSearchText, 800)
        , []);

    return (
        <div className="shadow rounded-3xl bg-white h-10 flex items-center w-full md:w-full lg:w-[32rem] float-right" onChange={debouncedChangeHandler}>
            <div className="m-4 flex w-screen">
                <input
                    data-testid="searchbar-input"
                    className="appearance-none mr-2 h-8 w-full rounded-lg py-2 px-3 bg-white text-black focus:outline-none focus:shadow-outline "
                    placeholder="Search Cocktails"
                />
                <Button className="bg-white h-8 w-8 rounded-full hover:opacity-50" icon={<SearchOutlined className="text-md justify-center" />} />
            </div>
        </div>
    );
};

export default SearchBar;
