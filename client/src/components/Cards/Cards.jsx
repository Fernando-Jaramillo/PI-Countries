import React from "react";
import Card from "../Card/Card"

export default function Cards({allCountries}) {
    return (
        <div>
            <h2>Cards conteins:</h2>
            {allCountries && allCountries.map((c) => 
                <Card key={c.id} name={c.name} continent={c.continent} image={c.imagenFlag} />
            )}
        </div>
    );
}