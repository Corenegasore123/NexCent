import React from "react";

const MainFooter = () => {
    return (  
        <div className = "bg-gray-800 flex gap-[50px] py-20 justify-center items-center 2xl:flex-row flex-col 2xl:gap-[300px]">

            <div className = "flex flex-col gap-5">
                <div className = "flex items-center gap-2">
                    <img src="/footer-images/logo.png" alt="" className = "w-11 h-7"/>
                    <p className = "text-white font-bold text-3xl">NexCent</p>
                </div>
                <div>
                    <p className = "text-gray-200 font-[400] text-[14px]">Copyrights &copy; 2020 NexCent Ltd.</p>
                    <p className = "text-gray-200 font-[400] text-[14px]">All rights reserved</p>
                </div>
                <div className = "flex gap-4">
                    <a href="#"><img src="/footer-images/instagram.png" alt="" className = "bg-gray-700 p-2 rounded-full"/></a>
                    <a href="#"><img src="/footer-images/dribble.png" alt="" className = "bg-gray-700 p-2 rounded-full"/></a>
                    <a href="#"><img src="/footer-images/twitter.png" alt="" className = "bg-gray-700 p-2 rounded-full"/></a>
                    <a href="#"><img src="/footer-images/youtube.png" alt="" className = "bg-gray-700 p-2 rounded-full"/></a>
                </div>
            </div>


            <div className = "flex md:flex-row md:gap-[100px] flex-col gap-[60px] px-[50px]">
                <div>
                    <h3  className = "text-white font-[600] text-[20px] mb-5">Company</h3>
                    <ul>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">About Us</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Blog</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Contact Us</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Pricing</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className = "text-white font-[600] text-[20px] mb-5">Support</h3>
                    <ul>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Help Center</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Terms of Service</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Legal</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Privacy Policy</a></li>
                        <li className = "mb-2"><a href="#" className = "font-[400] text-[14px] text-gray-300">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className = "text-white font-[600] text-[20px] mb-5">Stay up to date</h3>
                    <form action="" className = "bg-gray-700 flex items-center w-[360px] rounded-lg">
                        <input type="email" placeholder = "Your Email Address" className = "bg-gray-700 w-80 h-10 outline-none border-none text-white ml-4" id = "email" />
                        <button className = "mr-4"><img src="/footer-images/paper plane.png" alt="" /></button>
                    </form>
                </div>
            </div>

        </div>
    );
}
 
export default MainFooter;