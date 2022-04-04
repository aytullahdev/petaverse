import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
           <div className='center py-5'>
               <h1 className='text-4xl md:text-5xl  uppercase text-blue-600'>Photo Review Site</h1>
               <span className='text-md md:text-xl py-5 block uppercase text-orange-700'>WE give Rating of your Clicked Photos</span>
               <p className='text-left py-2 px-5 text-justify text-lg md:text-xl mb-4'>
                   We are the company to provide true ratting of your personal shared photos, 
                   Photo reviews provided by our expert. They have World Class skilled and 
                   exparences to provide perfect reviews.
               </p>
               <div>
               <Link to="/showdata">
                   <button className='bg-blue-600 hover:bg-blue-400 py-3 px-3 text-white rounded-lg'>SHOW DATA</button>
                </Link>
               </div>
           </div>
           <div>
               <img src="https://picsum.photos/id/1002/4312/2868" className='w-3/4 h-full shadow rounded-lg mx-auto md:ml-auto' alt="" />
           </div>
        </div>
        <div className='w-full mt-5'>
            <h1 className='text-4xl uppercase py-4 text-center font-semibold '>Customer Reviews</h1>
           
               <Reviews len={4}/>
                
           
            <div>
               <Link
                to='/reviews'
               >
                    <button className='text-xl py-2 uppercase hover:bg-orange-500 px-2 bg-orange-400 text-white rounded shadow-lg mt-4'>Show all Reviews</button>
               </Link>
            </div>

        </div>
        </div>
    );
};

export default Home;