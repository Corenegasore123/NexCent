import React from "react";

const Clients = () => {
    return (  
        <div className="mx-0">
            <div className = "flex flex-col gap-3 mt-10">
                <h4 className = "text-gray-900 font-[600] text-[38px] text-center smallest:max-sm:text-[30px]">Our Clients</h4>
                <p className = "text-gray-500 text-center text-[18px] smallest:max-sm:text-[15px]">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className = "flex md:py-6 mt-4 lg:gap-20 items-center justify-center flex-wrap py-4 gap-10">
                <img src="/home-images/Logo 1.png" alt="" />
                <img src="/home-images/Logo 2.png" alt="" />
                <img src="/home-images/Logo 3.png" alt="" />
                <img src="/home-images/Logo 4.png" alt="" />
                <img src="/home-images/Logo 5.png" alt="" />
                <img src="/home-images/Logo 6.png" alt="" />
                <img src="/home-images/Logo 7.png" alt="" />
            </div>
        </div>
    );
}
 
export default Clients;