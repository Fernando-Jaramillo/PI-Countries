import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./cards.css"

export default function Cards({allCountries, indexOfLastCountry, indexofFirstCountry}) {
    const countriesPage = allCountries.slice(indexofFirstCountry, indexOfLastCountry);
    return (
        <div className="container-cards">
            {allCountries &&
            countriesPage.map((c) => (
                <Link to={`/home/${c.id || c.alpha3Code}`} style={{ textDecoration: 'none' }}><Card
                key={c.id || c.alpha3Code}
                name={c.name}
                continent={c.continent || c.region}
                image={c.imagenFlag || c.flag}
                /></Link>
            ))}
        </div>
    );
}