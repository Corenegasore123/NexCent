import React from "react";
import { Fragment } from "react/jsx-runtime";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Community from "./Community.jsx";
import Cards from "./CommunityCards.jsx";
import community from "../../data/community.js";

const Home = () => {

    const cards = community.map(card => {
        return(
            <Cards
                key = {card.id}
                icon = {card.icon}
                title = {card.title}
                description = {card.description}
            />
        )
    })
    return ( 
        <Fragment>
                <div className = "bg-gray-100 pb-4">
                    <Navbar />
                    <HeroSection />
                </div>
            <Clients />
            <Community />
            <div className = "flex flex-wrap md:gap-40 justify-center my-10 gap-20">
                {cards}
            </div>
        </Fragment>
    );
}
 
export default Home;