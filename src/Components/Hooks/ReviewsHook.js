import { useState, useEffect } from "react";
const useReviews=(url)=>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviews(data))
        
    },[url])
    return [reviews,setReviews];
}
export default useReviews;