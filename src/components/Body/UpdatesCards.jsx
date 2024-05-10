import React from "react";
import { Fragment } from "react/jsx-runtime";

const UpdatesCards = (props) => {

    const img_src = `/body-images/${props.img}`

    return (  
        <Fragment>
            <div>
                <img src={img_src} alt="" />
                <div className = "relative bottom-24 shadow-xl bg-gray-100 max-w-[317px] h-[176px] mr-auto ml-auto p-5 rounded-lg">
                    <p className = "text-gray-600 font-[600] text-[20px] text-center mb-5">{props.desc}</p>
                    <p className = "text-center font-[600] text-[20px] text-green-600">Read More &rarr;</p>
                </div>
            </div>
        </Fragment>
    );
}
 
export default UpdatesCards;