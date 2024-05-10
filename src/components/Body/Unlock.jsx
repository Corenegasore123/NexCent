import React from "react";

const Unlock = () => {
    return (  
        <div className = "my-28 flex justify-center items-center xl:flex-row xl:gap-40 flex-col gap-10 px-10" >
            <div>
                <img src="/body-images/unlock.png" alt=""/>
            </div>
            <div className="sm:px-0 px-20">
                <h3 className = "text-[25px] font-[600] sm:text-gray-900 sm:font-[600] sm:text-[36px] sm:w-[600px] sm:leading-10 mb-5">The unseen of spending three years at PixelGrade</h3>
                <p className = "w-[100px]sm:text-gray-700 sm:w-[600px] sm:leading-7 mb-10 lg:text-[20px] smallest:max-sm: w-[300px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sit amet justo ipsum. Sed accumsan quam vitae est 
                    varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus 
                    pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, 
                    tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className = "bg-green-600 text-white px-6 py-3 rounded">Learn More</button>
            </div>
        </div>
    );
}
 
export default Unlock;