import React from "react";

export default function FilterByPopulation({ handleFilterByPopulation }){
    return(
        <div>
            <label htmlFor="population">Orden por población: </label>
            <select onChange={ (e) => handleFilterByPopulation(e.target.value)} name="population" id="population">
                <option value="max">menor - mayor</option>
                <option value="min">mayor - menor</option>
            </select>
        </div>
    )
}