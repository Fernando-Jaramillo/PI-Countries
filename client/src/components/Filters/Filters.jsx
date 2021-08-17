import React from "react";
import FContinent from "../FilterByContinent/FilterByContinent";
import FActivity from "../FilterByActivity/FilterByActivity";
import FAlphabet from "../FilterByAlphabet/FilterByAlphabet";
import FPopulation from "../FilterByPopulation/FilterByPopulation";

export default function Filters({
  handleFilterByContinent,
  handleFilterByAlphabet,
  handleFilterByPopulation,
  handleFilterByActivity,
}) {
  return (
    <div>
      <FContinent handleFilterByContinent={handleFilterByContinent} />
      <FAlphabet handleFilterByAlphabet={handleFilterByAlphabet} />
      <FPopulation handleFilterByPopulation={handleFilterByPopulation} />
      <FActivity handleFilterByActivity={handleFilterByActivity} />
    </div>
  );
}
