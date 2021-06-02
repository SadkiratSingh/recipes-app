import React from 'react';
import {FaStar} from "react-icons/fa";

export default function StarRating({totalStars = 5}){
    const createArray = (length) => [...Array(length)];
    return createArray(totalStars).map((n,i)=><FaStar key={i} />)
}