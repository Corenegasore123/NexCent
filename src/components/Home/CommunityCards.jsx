import React from "react";

const Cards= (props) => {
    const icon_src = `/home-images/${props.icon}`
    return ( 
            <div className = "flex flex-col shadow-md rounded-xl w-[300px] pt-7 pb-3 px-5 gap-2 mx-0">
                <img src={icon_src} alt="" className = "w-12 mx-auto mb-5" />
                <h3 className = "text-[35px] font-[700] text-gray-700 text-center leading-9 mb-5">{props.title}</h3>
                <p className = "text-[18px] text-gray-600 text-center mb-5">{props.description}</p>
            </div> 
    );
}
 
export default Cards;