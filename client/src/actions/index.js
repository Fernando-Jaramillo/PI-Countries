import axios from "axios";

export function getCountries(){
    return async function(dispatch){
        let json = await axios.get("http://localgost:3001/countries",{

        });
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}