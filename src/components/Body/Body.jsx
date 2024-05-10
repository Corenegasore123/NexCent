import React from "react";
import { Fragment } from "react/jsx-runtime";
import Unlock from "./Unlock";
import Achievements from "./Achievements";
import Calendar from "./Calendar";
import Customer from "./Customer";
import Updates from "./Updates";
import UpdatesCards from "./UpdatesCards";
import updates from "../../data/updates";

const Body = () => {

    const UpCards = updates.map(UpCard => {
        return(
            <UpdatesCards 
                key = {UpCard.id}
                img = {UpCard.img}
                desc = {UpCard.desc}
            />
        )
    })
    return (  
        <Fragment>
            <Unlock />
            <Achievements />
            <Calendar />
            <Customer />
            <Updates />
            <div className = "flex flex-wrap md:gap-20 justify-center mb-0 gap-0">
                {UpCards}
            </div>
        </Fragment>
    );
}
 
export default Body;