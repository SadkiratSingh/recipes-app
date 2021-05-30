// because we are using JSX
import React from "react";
import Ingredient from "./Ingredients";

export default function IngredientsList({list}){
    return(
        <ul className = 'ingredients'>
            {list.map((item,index)=>(
                <Ingredient key={index} {...item} />
            ))}
        </ul>
    )
}