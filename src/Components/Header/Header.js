import React from 'react';
import { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid'

const Header = () => {
    const [slider, setSlider] = useState(true);
    function slide(){
        setSlider(!slider);
        document.querySelector('.sliderbtn').classList.toggle('rotate-180')
        document.querySelector('.logo').classList.toggle('rotate-180')
    }
    return (
        <div>
           <div className="flex">
        <div className={` w-20 duration-500 h-screen bg-blue-700 relative slideer ${slider?'w-72':'w-20'}`} >
            <img src="/assets/control.png" className="absolute cursor-pointer -right-5 top-9 w-7 border-2 border-blue-500 rotate-0 rounded-full duration-500 sliderbtn w-10 h-10" alt="" onClick={()=>slide()}/>
            <div className="flex gap-x-4 items-center overflow-hidden p-5">
                <img src="/assets/logo.png" className={`logo  cursor-pointer duration-500 mr-2 ${slider?'rotate-180':'rotate-0'}`}alt=""/>
                <h1 className="text-white origin-left font-medium text-xl duration-300 uppercase">Peteverse</h1>
            </div>
            <div className="flex gap-x-4 items-center overflow-hidden p-5 cursor-pointer hover:bg-blue-600">
                <div>
                <BeakerIcon className="w-[40px] h-[40px] mr-2 cursor-pointer text-white"/>
                </div>
             
                <h1 className="text-white origin-left font-medium text-xl duration-300">Home</h1>
            </div>
            <div className="flex gap-x-4 items-center overflow-hidden p-5 cursor-pointer hover:bg-blue-600">
                <img src="/assets/Chart.png" className="w-10 h-10 mr-2 rotate-0 cursor-pointer  duration-500" alt=""/>
                <h1 className="text-white origin-left font-medium text-xl duration-300">Chart</h1>
            </div>
            <div className="flex gap-x-4 cursor-pointer hover:bg-blue-600 items-center overflow-hidden p-5">
                <img src="/assets/Chat.png" className="w-10 h-10 mr-2 rotate-0 cursor-pointer  duration-500" alt=""/>
                <h1 className="text-white origin-left font-medium text-xl duration-300">Chat</h1>
            </div>
            <div className="flex cursor-pointer hover:bg-blue-600  gap-x-4 items-center overflow-hidden p-5">
                <img src="/assets/Setting.png" className="w-10 h-10 mr-2 rotate-0 cursor-pointer  duration-500" alt=""/>
                <h1 className="text-white origin-left font-medium text-xl duration-300">Setting</h1>
            </div>
        </div>
        <div className="p-7 text-2xl font-semibold bg-white w-full flex-1 h-screen">
            <h1>Home page</h1>
        </div>
    </div>
        </div>
    );
};

export default Header;