import React from "react";

const Achievements = () => {
    return (  
        <div className = "bg-gray-100 flex lg:flex-row flex-col xl:gap-[400px] justify-center items-center gap-[50px] py-20 mx-auto max-w-full">
            <div className="lg:pl-7 flex flex-col items-center">
                <h3 className = "font-[600] sm:text-[39px] leading-11 text-gray-700 max-w-[408px] smallest:max-sm: text-[20px]">Helping a local <span className = "text-green-600">business reinvest itself</span></h3>
                <p className = "font-[400] text-gray-900 md:text-[20px] smallest:max-sm:text-[15px]">We reached here with our hard work and dedication</p>
            </div>

            <div className = "grid lg:grid-cols-2 max-w-[600px] gap-7 grid-cols-1 lg:pr-7">
                <div className = "flex gap-5 items-center">
                    <div>
                        <img src="/body-images/members.png" alt="" />
                    </div>
                    <div>
                        <h2 className = "text-gray-700 font-[700] md:text-[30px]">2,245,341</h2>
                        <p className = "text-gray-600 font-[400] md:text-[18px]">Members</p>
                    </div>
                </div>

                <div className = "flex gap-5 items-center">
                    <div>
                        <img src="/body-images/clubs.png" alt="" />
                    </div>
                    <div>
                        <h2 className = "text-gray-600 font-[700] md:text-[30px]">46,328</h2>
                        <p className = "text-gray-600 font-[400] md:text-[18px]">Clubs</p>
                    </div>
                </div>

                <div className = "flex gap-5 items-center">
                    <div>
                        <img src="/body-images/bookings.png" alt="" />
                    </div>
                    <div>
                        <h2 className = "text-gray-600 font-[700] md:text-[30px]">828,867</h2>
                        <p className = "text-gray-600 font-[400] md:text-[18px]">Event Bookings</p>
                    </div>
                </div>

                <div className = "flex gap-5 items-center">
                    <div>
                        <img src="/body-images/payments.png" alt="" />
                    </div>
                    <div>
                        <h2 className = "text-gray-600 font-[700] md:text-[30px]">1,926,436</h2>
                        <p className = "text-gray-600 font-[400] md:text-[18px]">Payments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievements;