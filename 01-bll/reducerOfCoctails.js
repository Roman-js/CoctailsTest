import {cocktailApi} from "../02-dal/api";

const GET_COCKTAILS_LIST = 'GET-COCKTAILS-LIST';
const SET_ERROR = 'SET-ERROR';


const initialState = {
    categories: [{}],
    error: null
};

const reducerOfCocktails = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case GET_COCKTAILS_LIST: {
            return {
                ...state, categories: action.categories
            }
        }
        case SET_ERROR:
            return {
            ...state, error: action.error
        };

        default: return state
    }

};
export default reducerOfCocktails
//actionCreators
const getCocktailsListSuccess = (categories) => ({
    type: GET_COCKTAILS_LIST, categories
});
const setErrorSuccess = (error) => ({
    type: SET_ERROR, error
});

//thunks
export const getCocktailsList = () => async (dispatch, getState) => {

    try {
        let res = await cocktailApi.getListCategories();
        dispatch(getCocktailsListSuccess(res))
    } catch (e) {
        dispatch(setErrorSuccess('some error'))
    }
};


