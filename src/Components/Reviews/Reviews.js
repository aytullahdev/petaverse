import useReviews from '../Hooks/ReviewsHook';
import Review from './Review';


const Reviews = ({len}) => {
    const [data] = useReviews('./Data/review.json');
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* we have to fixed this later */}
           {data.length>=1 && data.slice(0,len).map(el=>{return(<Review key={el.id} name={el.author} img={el.download_url} rating={parseInt(el.rating)} text={el.text}/>)})}
        </div>
    );
   
   
};
Reviews.defaultProps={
    len:10,
}

export default Reviews;