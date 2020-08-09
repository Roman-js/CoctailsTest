import {cocktailApi} from "../02-dal/api";

const GET_COCKTAILS_LIST = 'GET-COCKTAILS-LIST';
const SET_ERROR = 'SET-ERROR';
const GET_FILTERED_COCKTAILS = 'GET-FILTERED-COCKTAILS';
const SETTINGS_OF_HEADER = 'SETTINGS-OF-HEADER';


const initialState = {
    categories: [{}],
    cocktails: [],
    error: null,
    headerInformation: false,
    TitleOfCategory: ''
};

const reducerOfCocktails = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case GET_COCKTAILS_LIST: {
            return {
                ...state, categories: action.categories
            }
        }
        case GET_FILTERED_COCKTAILS: {
            return {
                ...state,
                cocktails: [...state.cocktails, ...action.listOfCocktails],
                TitleOfCategory: action.NameOfCategory
            }
        }
        case SET_ERROR: {
            return {
                ...state, error: action.error
            }
        }
        case SETTINGS_OF_HEADER: {
            return {
                ...state, headerInformation: action.headerSettings
            }
        }

        default:
            return state
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
const getFilteredCocktailsSuccess = (listOfCocktails, NameOfCategory) => ({
    type: GET_FILTERED_COCKTAILS, listOfCocktails, NameOfCategory
});
const setHeaderSettings = (headerSettings) => ({
    type: SETTINGS_OF_HEADER, headerSettings
});

//thunks
export const getCocktailsList = () => async (dispatch, getState) => {

    try {
        let res = await cocktailApi.getListCategories();
        dispatch(getCocktailsListSuccess(res))
        dispatch(setHeaderSettings(true))
    } catch (e) {
        dispatch(setErrorSuccess('some error'))
    }
};

export const getFilteredCocktails = (filters) => async (dispatch, getState) => {
    try {
        filters.map(async (filter) => {
                let res = await cocktailApi.getFilteredCocktails(filter);
                dispatch(getFilteredCocktailsSuccess(res, filter));
                dispatch(setHeaderSettings(false))
            }
        )
    } catch (e) {
        dispatch(setErrorSuccess('some error'))
    }
};


