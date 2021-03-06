import React from 'react';
import ReactStars from "react-rating-stars-component";

const Review = ({name,rating,img,text}) => {
    return (
        <div className='shadow bg-gray-100 flex p-2 cursor-pointer '>
            <div className='py-2 px-2 flex items-center justify-center'>
                <img src={img} className='w-20 md:w-20 h-20  rounded-full ' alt="" />
            </div>
            <div className='flex flex-col text-left'>
                <div>
                     <span className='bg-gray-700 text-white py-2 rounded-lg px-3 mt-2 inline-block'>{name}</span>
                </div>
                <div className='text-sm uppercase my-3 font-semibold '>
                    {text.length<=2?"NO TEXT":text}
                </div>
                <div>
                   <ReactStars
                        size= {30}
                         value={rating}
                        edit={false}
                    ></ReactStars> 
                </div>
            </div>
        </div>
    );
};

export default Review;