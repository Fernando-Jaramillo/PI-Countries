const initialSatate = {
    countries : [],
    allCountries: []
    
}
function rootReducer(state = initialSatate, action){
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
        case "FILTER_BY_CONTINENT":
            let countries = state.countries;
            let filteredCountriesByContinent = action.payload === "todos"? 
                state.allCountries 
                : 
                state.allCountries.filter(c => c.continent === action.payload)
            return{
                ...state,
                countries: filteredCountriesByContinent
            }
        case "FILTER_BY_ALPHABET":
            let countries2 = state.countries;
            if (action.payload === "ascending"){
                countries2 = countries2.sort((a, b) => a.name - b.name);
            }else if (action.payload === "descending"){
                countries2 = countries2.sort((a, b) => b.name - a.name);
            }
            return{
                ...state,
                countries: countries2
            }
        default:
        return state;
    }
}

export default rootReducer;