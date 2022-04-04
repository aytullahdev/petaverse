/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import {HouseFill, GraphUp, FilePerson, BlockquoteRight, Flower1} from 'react-bootstrap-icons'
import Customlink from '../Customlink/Customlink'
const Header = () => {
    const [slide,setSlide]= useState(true);
   return(
       
       <div className=''>
          {/* nav section */}
          <div className={`duration-500 h-screen bg-blue-700 relative slider ${slide?'w-20':'w-52'} sticky top-0 left-0`}>
           {/* slider btn */}
          <img src="./assets/control.png" className={` absolute cursor-pointer top-6 -right-4 duration-500 ${slide?'rotate-180':'rotate-0'}`} onClick={()=>{
              setSlide(!slide)
          }} />

              {/* logo and img */}
              <div className='flex gap-x-4 items-center overflow-hidden pl-2 py-5'>
                  <img src="./assets/logo.png"  className={`cursor-pointer duration-700  ${slide?'rotate-180':'rotate-0'}`} alt="" />
                  <h1 className='text-white uppercase text-xl origin-left'>Petaverse</h1>
              </div>
              <Customlink
                icon={<HouseFill className=' w-10 h-10'/>}
                name='home'
                to=''
                >

              </Customlink>
              <Customlink
                icon={<GraphUp className=' w-10 h-10'/>}
                name='Dashboard'
                to='/dashboard'
                >

              </Customlink>
              <Customlink
                icon={<BlockquoteRight className=' w-10 h-10'/>}
                name='Reviews'
                to='/reviews'
                >

              </Customlink>
              <Customlink
                icon={<Flower1 className=' w-10 h-10'/>}
                name='Blogs'
                to='/Blogs'
                >

              </Customlink>
              <Customlink
                icon={<FilePerson className=' w-10 h-10'/>}
                name='About'
                to='/about'
                >

              </Customlink>
              
          </div>
       </div>
   );
};

export default Header;