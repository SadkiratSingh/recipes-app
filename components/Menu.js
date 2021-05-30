// because we are using JSX
import React from "react";
import Recipe from "./Recipe";

function Menu({recipes}){
    return (
        <article>
            <header>
                <h1>Delicious Recipies</h1>
            </header>
            <div className = 'recipes'>
                {recipes.map((recipe,index)=>(
                    <Recipe key={index} {...recipe} />
                ))}
            </div>
        </article>
    )
}

export default Menu