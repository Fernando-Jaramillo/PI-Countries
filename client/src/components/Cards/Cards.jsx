import React from "react";
import Card from "../Card/Card"

export default function Cards({allCountries, indexOfLastCountry, indexofFirstCountry}) {
    const countriesPage = allCountries.slice(indexofFirstCountry, indexOfLastCountry);
    return (
        <div>
            <h2>Cards conteins:</h2>
            {allCountries && countriesPage.map((c) => 
                <Card key={c.id} name={c.name} continent={c.continent} image={c.imagenFlag} />
            )}
        </div>
    );
}