// because we are using JSX
import React from "react"
import IngredientsList from "./IngredientsList"
import Instructions from "./Instructions"

// export default is used when exporting single entity
export default function Recipe({name,ingredients,steps}){
    return(
        <section id={name.toLowerCase().replace(/ /g)}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
            <Instructions title='Cooking Instructions' steps={steps} />
        </section>
    )
}