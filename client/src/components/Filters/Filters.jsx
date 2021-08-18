import React from "react";
import FContinent from "../FilterByContinent/FilterByContinent";
import FActivity from "../FilterByActivity/FilterByActivity";
import FAlphabet from "../FilterByAlphabet/FilterByAlphabet";
import FPopulation from "../FilterByPopulation/FilterByPopulation";
import Search from "../Search/Search"

export default function Filters({
  handleFilterByContinent,
  handleFilterByAlphabet,
  handleFilterByPopulation,
  handleFilterByActivity,
  handleGetSearch,
}) {
  return (
    <div>
      <Search handleGetSearch={handleGetSearch} />
      <FContinent handleFilterByContinent={handleFilterByContinent} />
      <FAlphabet handleFilterByAlphabet={handleFilterByAlphabet} />
      <FPopulation handleFilterByPopulation={handleFilterByPopulation} />
      <FActivity handleFilterByActivity={handleFilterByActivity} />
    </div>
  );
}
