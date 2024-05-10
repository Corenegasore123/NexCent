import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return ( 
        <header className="bg-gray-100 z-[1000]">
            <nav className="flex items-center justify-between py-6 mx-auto px-8">
                <div className="flex gap-2 items-center">
                    <img src="/home-images/logo.png" alt="NexCent Logo" className="w-11 h-7"/>
                    <p className="text-[#263238] font-bold text-3xl">NexCent</p>
                </div>

                <div className={`xl:static absolute bg-gray-100 xl:min-h-fit min-h-[38vh] ${isMenuOpen ? 'left-0' : 'left-[-340px]'} top-[70px] xl:w-auto w-20% flex items-center px-5 transition-all duration-300`}>
                    <ul className="flex xl:flex-row flex-col xl:items-center xl:gap-5 gap-8">
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">Home</a></li>
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">Service</a></li>
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">Feature</a></li>
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">Product</a></li>
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">Testimonial</a></li>
                        <li className="font-[500] text-[24] hover:opacity-50"><a href="#">FAQ</a></li>
                    </ul>
                </div>


                <div className="flex items-center gap-[2px]">
                    <button className="bg-transparent text-green-600 px-6 py-3 smallest:max-sm:py-3">Login</button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded smallest:max-sm:hidden">Sign Up</button>
                    <div className="block xl:hidden">
                        <ion-icon onClick={toggleMenu}  name={isMenuOpen ? 'close' : 'menu'} className= "cursor-pointer" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
