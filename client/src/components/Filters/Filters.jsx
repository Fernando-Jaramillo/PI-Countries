import FContinent from "../FilterByContinent/FilterByContinent";
import FActivity from "../FilterByActivity/FilterByActivity";
import FAlphabet from "../FilterByAlphabet/FilterByAlphabet";
import FPopulation from "../FilterByPopulation/FilterByPopulation";

export default function Filters({ handleFilterByContinent, handleFilterByAlphabet }) {
    return (
        <div>
            <FContinent handleFilterByContinent={handleFilterByContinent} />
            <FAlphabet handleFilterByAlphabet={handleFilterByAlphabet}/>
        </div>
    )

}