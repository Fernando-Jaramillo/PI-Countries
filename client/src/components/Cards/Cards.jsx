import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Cards({allCountries, indexOfLastCountry, indexofFirstCountry}) {
    const countriesPage = allCountries.slice(indexofFirstCountry, indexOfLastCountry);
    return (
        <div>
            <h2>Cards conteins:</h2>
            {allCountries &&
            countriesPage.map((c) => (
                <Link to={`/home/${c.id || c.alpha3Code}`}><Card
                key={c.id || c.alpha3Code}
                name={c.name}
                continent={c.continent}
                image={c.imagenFlag || c.flag}
                /></Link>
            ))}
        </div>
    );
}