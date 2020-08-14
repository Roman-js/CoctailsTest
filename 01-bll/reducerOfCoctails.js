import {cocktailApi} from "../02-dal/api";

const GET_COCKTAILS_LIST = 'GET-COCKTAILS-LIST';
const SET_ERROR = 'SET-ERROR';
const GET_FILTERED_COCKTAILS = 'GET-FILTERED-COCKTAILS';
const SETTINGS_OF_HEADER = 'SETTINGS-OF-HEADER';
const SET_PRELOADER = 'SET-PRELOADER';
const SET_FILTERS = 'SET-FILTERS';


const initialState = {
    categories: [{}],
    cocktails: [],
    filters: [],
    error: null,
    headerInformation: false,
    preloader: false
};

const reducerOfCocktails = (state = initialState, action) => {

    switch (action.type) {

        case GET_COCKTAILS_LIST: {
            return {
                ...state, categories: action.categories
            }
        }
        case GET_FILTERED_COCKTAILS: {
            return {
                ...state,
                cocktails: [...state.cocktails, action.NameOfCategory, ...action.listOfCocktails],

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
        case SET_PRELOADER: {
            return {
                ...state, preloader: action.preloader
            }
        }
        case SET_FILTERS: {
            return {
                ...state, filters: action.filters
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
const setPreloader = (preloader) => ({
    type: SET_PRELOADER, preloader
});
const setArrayFilters = (filters) => ({
    type: SET_FILTERS, filters
});

//thunks

export const getCocktailsList = () => async (dispatch, getState) => {
    dispatch(setPreloader(true));
    try {
        let res = await cocktailApi.getListCategories();
        dispatch(getCocktailsListSuccess(res));
        dispatch(setHeaderSettings(true));
        dispatch(setPreloader(false))
    } catch (e) {
        dispatch(setErrorSuccess('some error'));
        dispatch(setPreloader(false))
    }
};

export const getFilteredCocktails = (category) => async (dispatch, getState) => {
    dispatch(setPreloader(true));

    try {
        let res = await cocktailApi.getFilteredCocktails(category);
        dispatch(getFilteredCocktailsSuccess(res, category));
        dispatch(setHeaderSettings(false));
        dispatch(setPreloader(false))

    } catch (e) {
        dispatch(setErrorSuccess('some error'));
        dispatch(setPreloader(false))
    }
};

export const setFilters = (filters) => async (dispatch, getState) => {
    dispatch(setPreloader(true));
    dispatch(setArrayFilters(filters));
    try {
        await dispatch(getFilteredCocktails(filters[0]));
        dispatch(setPreloader(false))
    } catch (e) {
        dispatch(setErrorSuccess('some error'));
        dispatch(setPreloader(false))
    }
};


