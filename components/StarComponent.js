import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";

const Star = ({selected = False}) =>(
    <FaStar color = {selected ? "red" : "grey"} />
)

export default function StarRating({totalStars = 5}){
    const createArray = (length) => [...Array(length)];
    const [selectedStars] = useState(3);
    return (
        <>
        {createArray(totalStars).map((n,i)=><Star key={i} selected={selectedStars > i} />)}
        </>
    )
}