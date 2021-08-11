const initialSatate = {
    countries : []
}
function rootReducer(state = initialSatate, action){
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
            ...state,
            countries: action.payload,
            };
        default:
        return state;
    }
}

export default rootReducer;