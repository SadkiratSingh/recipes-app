import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";

const Star = ({selected = False,onselect= f=>f }) =>(
    <FaStar color = {selected ? "red" : "grey"} onClick = {onselect}/>
)

export default function StarRating({totalStars = 5}){
    const createArray = (length) => [...Array(length)];
    const [selectedStars,setSelectedStars] = useState(3);
    return (
        <>
            {createArray(totalStars).map((n,i)=>
                <Star 
                    key={i} 
                    selected={selectedStars > i} 
                    onselect = {()=>setSelectedStars(i+1)}
                />
            )}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </>
    )
}