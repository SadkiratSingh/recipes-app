// because we are using JSX
import React from "react"

// export default is used when exporting single entity
export default function Recipe({name,ingredients,steps}){
    return(
        <section id='baked-salmon'>
            <h1>{name}</h1>
            <ul className = 'ingredients'>
                {ingredients.map((item,index)=>(
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <section className='instructions'>
                {steps.map((step,index)=>(
                    <p key={index}>{step}</p>
                ))}
            </section>
        </section>
    )
}