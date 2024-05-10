import React from "react";

const Customer = () => {
    return (  
        <div className = "bg-gray-100 flex items-center justify-center py-5 xl:flex-row xl:gap-40 flex-col gap-7">
            <div>
                <img src="/body-images/pods.png" alt="" />
            </div>

            <div className = "flex flex-col">
                <p className = "leading-7 lg:w-[748px] pb-5 text-gray-700 md:w-[550px] sm:w-[370px] lg:px-5 w-[370px] lg:text-[20px] smallest:max-[440px]:w-[350px]">
                    Maecenas dignissim justo eget nulla rutrum molestie. 
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt 
                    ullamcorper. Proin eu enim metus. Vivamus sed libero 
                    ornare, tristique quam in, gravida enim. Nullam ut molestie 
                    arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
                    nec molestie mi blandit. Suspendisse cursus tellus sed augue 
                    ultrices, quis tristique nulla sodales. Suspendisse eget lorem 
                    eu turpis vestibulum pretium. Suspendisse potenti. Quisque 
                    malesuada enim sapien, vitae placerat ante feugiat eget. 
                    Quisque vulputate odio neque, eget efficitur libero condimentum 
                    id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h5 className = "text-green-600 leading-7 lg:w-[748px] md:w-[550px] sm:w-[370px] lg:px-5 sm:text-[18px]">Tim Smith</h5>
                <p className = "text-gray-500 leading-6 pb-8 lg:w-[748px] md:w-[550px] sm:w-[370px] lg:px-5 sm:text-[18px]">British Dragon Boat Racing Association</p>

                <div className = "flex gap-[41px] lg:w-[748px] md:w-[550px] sm:w-[370px] lg:px-5 lg:flex-row flex-col">
                    <div className="flex lg:gap-[41px] gap-[30px]">
                        <img src="/body-images/Logo 1.png" alt="" className = "w-8 h-7"/>
                        <img src="/body-images/Logo 2.png" alt="" className = "w-8 h-7"/>
                        <img src="/body-images/Logo 3.png" alt="" className = "w-8 h-7"/>
                        <img src="/body-images/Logo 4.png" alt="" className = "w-8 h-7"/>
                        <img src="/body-images/Logo 5.png" alt="" className = "w-8 h-7"/>
                        <img src="/body-images/Logo 6.png" alt="" className = "w-8 h-7"/>
                    </div>
                    <div>
                        <p className = "text-green-600 font-[600] text-[20px]">Meet all Customers &rarr;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Customer;