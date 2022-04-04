import React from 'react';
import useReviews from '../Hooks/ReviewsHook';
import Article from './Article';

const Articles = () => {
    const[data,setData]=useReviews('./Data/blogs.json');
    return (
        <div>
          { data.length>=0 && data.map(el=><Article tittle={el.tittle} text={el.text}/>)}
        </div>
    );
};

export default Articles;