import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        try{
            let json = await axios.get("http://localhost:3001/countries");
            return dispatch({
                type: 'GET_COUNTRIES',
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
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

export function getSearch (text){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/countries?name=${text}`);   
            return dispatch({
                type: "GET_SEARCH",
                payload: json.data
        })
        }catch(err){
            console.log(err)
        }
    }
}

export function getByPopulation(edge){
    return{
        type: "GET_BY_POPULATION",
        payload: edge
    }
}

export function postActivity(actBody){
    console.log(actBody)
    return async function(dispatch){
        try{
            let json = await axios.post("http://localhost:3001/activity/", actBody);
            return json;
        }catch(err){
            console.log(err)
        }
    }   
}