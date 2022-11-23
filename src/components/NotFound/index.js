import React from "react";
import emptyBox from './../../img/box.png'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-1/2">
            <div>
                <div className="flex items-center justify-center mb-5" >
                <img src={emptyBox} className="w-24 h-24" />
                </div>
                <p className="font-poppins text-lg">Sorry.. Cocktail not found</p>
            </div>
        </div>
    );
};

export default NotFound;
