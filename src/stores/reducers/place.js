import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    value: action.placeName,
                    key: String(Math.random())
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return (place.key !== state.selectedPlace.key);
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: action.selectedPlace
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;