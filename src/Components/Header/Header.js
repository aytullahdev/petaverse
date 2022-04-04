/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';

const Header = () => {
    const [slide,setSlide]= useState(true);
   return(
       
       <div>
          {/* nav section */}
          <div className={`duration-500 h-screen bg-blue-700 relative slider ${slide?'w-20':'w-72'}`}>
          <img src="./assets/control.png" className={` absolute cursor-pointer top-10 -right-4 duration-500 ${slide?'rotate-180':'rotate-0'}`} onClick={()=>{
              setSlide(!slide)
          }} />
              {/* slider btn */}

              {/* logo and img */}

              {/* single link */}
          </div>
       </div>
   );
};

export default Header;