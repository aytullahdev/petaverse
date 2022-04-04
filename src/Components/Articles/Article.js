import React from 'react';

const Article = ({tittle,text}) => {
    return (
        <div className='my-5 cursor-pointer'>
            <div>
                <h1 className='text-xl uppercase text-orange-500 font-semibold text-center'>{tittle}</h1>
            </div>
            <p className='text-xl py-5 bg-blue-700 text-white  text-left mt-3 px-2 '>
                {text}
            </p>
        </div>
    );
};

export default Article;