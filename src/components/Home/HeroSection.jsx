import React from "react";
import { Fragment } from "react/jsx-runtime";

const HeroSection = () => {
    return ( 
        
        <Fragment>
            <div className = "flex pt-[12rem] gap-64 justify-center mt-0 smallest:max-xl:mx-0">

                <div className="max-w-3xl text-center md:px-7 px-16 md:max-xl:text-center xl:text-left">
                    <h1 className = "font-semibold md:text-[73px] text-[60px] max-w-3xl md:leading-[100px] leading-[70px] bg text-gray-600 md:pt-24 pt-1 mt-[-75px]">Lessons and insights <span className = "text-green-600">from 8 years</span></h1>
                    <p className = "text-gray-500 mt-4">Where to grow your business as a photographer: site or social media?</p>
                    <button className = "bg-green-600 text-white px-6 py-3 rounded md:mt-6 mt-5">Register</button>
                </div>

                <div className="... hidden xl:block">
                    <img src="/home-images/hero-illustration.png" alt="" className="xl:w-[450px] xl:h-[500px]"/>
                </div>

            </div>

            <div className = "flex gap-2 items-center justify-center mt-32">
                <img src="home-images/active dot.png" alt="" />
                <img src="home-images/inactive dot.png" alt="" />
                <img src="home-images/inactive dot.png" alt="" />
            </div>
        </Fragment>
    );
}
 
export default HeroSection;