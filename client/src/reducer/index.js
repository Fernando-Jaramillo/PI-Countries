import { getActivities } from "../actions";

const initialSatate = {
    countries : [],
    allCountries: [],
    detail: [],
    activities: []
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
            };
        case "FILTER_BY_ALPHABET":
            let countriesToOrder = state.countries;
            let orderedCountries = countriesToOrder.sort(function(a, b){
                if(action.payload === "ascending"){
                    if(a.name < b.name){
                        return -1;
                    }else if(a.name > b.name){
                        return 1;
                    }else{
                        return 0;
                    }
                }else if(action.payload === "descending"){
                    if(a.name > b.name){
                        return -1;
                    }else if(a.name < b.name){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            })
            return {
                ...state,
                countries: orderedCountries
            };
        case "GET_SEARCH":
            return{
                ...state,
                countries: action.payload
            };
        case "GET_BY_POPULATION":
            let countriesToOrderByPopulation = state.countries;
            let filteredCountriesByPopulation = countriesToOrderByPopulation.sort(function(a, b){
                if(action.payload === "max"){
                    if(a.population < b.population){
                        return -1;
                    }else if(a.name > b.name){
                        return 1;
                    }else{
                        return 0;
                    }
                }else if(action.payload === "min"){
                    if(a.population > b.population){
                        return -1;
                    }else if(a.name < b.name){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            })
            return{
                ...state,
                countries: filteredCountriesByPopulation
            };
        case "POST_ACTIVITY":
            return state;
        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            }
        case "GET_ACTIVITIES":
            return{
                ...state,
                activities: action.payload
            }
        case "FILTER_BY_ACTIVITY":
            let countriesToOrderByAct = state.allCountries;
            let filteredByAct =[];
            for(let j = 0; j < countriesToOrderByAct.length; j++){
                if(countriesToOrderByAct[j].activities.length > 0){
                    // console.log(countriesToOrderByAct[j]);
                    for(let i = 0; i < countriesToOrderByAct[j].activities.length; i++){
                    console.log(countriesToOrderByAct[j].activities[i]);
                        if(countriesToOrderByAct[j].activities[i].name.toLowerCase() === action.payload.toLowerCase()){
                            filteredByAct.push(countriesToOrderByAct[j])
                        }
                    }
                }
            }
            return{
                ...state,
                countries: filteredByAct
            }
        default:
        return state;
    }
}

export default rootReducer;