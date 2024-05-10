import React from "react";

const Calendar = () => {
    return (  
        <div className = "my-16 flex justify-center items-center xl:flex-row xl:gap- flex-col gap-10 px-10">
            <div>
                <img src="/body-images/mobile-login.png" alt="" />
            </div>
            <div className="sm:px-0 px-20">
                <h3 className = "text-[25px] font-[600] sm:text-gray-900 sm:font-[600] sm:text-[36px] sm:w-[600px] sm:leading-10 mb-5">How to design your site footer like we did</h3>
                <p className = "w-[100px]sm:text-gray-700 sm:w-[600px] sm:leading-7 mb-10 lg:text-[20px] smallest:max-sm: w-[300px]">
                    Donec a eros justo. Fusce egestas tristique ultrices. 
                    Nam tempor, augue nec tincidunt molestie, massa 
                    nunc varius arcu, at scelerisque elit erat a magna. 
                    Donec quis erat at libero ultrices mollis. In hac 
                    habitasse platea dictumst. Vivamus vehicula leo dui, 
                    at porta nisi facilisis finibus. In euismod augue vitae 
                    nisi ultricies, non aliquet urna tincidunt. Integer in nisi 
                    eget nulla commodo faucibus efficitur quis massa. 
                    Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                    libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className = "bg-green-600 text-white px-6 py-3 rounded">Learn More</button>
            </div>
        </div>
    );
}
 
export default Calendar;