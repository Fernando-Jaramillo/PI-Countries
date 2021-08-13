import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function filterByContinent(payload){
    return{
        type: "FILTER_BY_CONTINENT",
        payload
    }
}

export function orderByAlphabet (payload) {
    return{
        type: "FILTER_BY_ALPHABET",
        payload
    }
}