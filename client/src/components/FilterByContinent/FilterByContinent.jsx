import React from "react";

export default function FilterByContinent({handleFilterByContinent}){
    return (
        <div>
            <label htmlFor="continent">Continente: </label>
            <select name="continent" id="continent" onChange={(e)=> handleFilterByContinent(e.target.value)}>
                <option value="todos">Todos</option>
                <option value="Asia">Asia</option>
                <option value="Africa">África</option>
                <option value="Oceania">Oceanía</option>
                <option value="Americas">América</option>
                <option value="Polar">Antártida</option>
                <option value="Europe">Europa</option>
            </select>
        </div>
    );
}