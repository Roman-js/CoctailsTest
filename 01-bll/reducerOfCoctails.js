import {cocktailApi} from "../02-dal/api";

const GET_COCKTAILS_LIST = 'GET-COCKTAILS-LIST';
const SET_ERROR = 'SET-ERROR';
const GET_FILTERED_COCKTAILS = 'GET-FILTERED-COCKTAILS';


const initialState = {
    categories: [{}],
    cocktails: [],
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
        case GET_FILTERED_COCKTAILS: {
            return {
                ...state, cocktails: [...state.cocktails, ...action.listOfCocktails]
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
const getFilteredCocktailsSuccess = (listOfCocktails) =>({
    type: GET_FILTERED_COCKTAILS, listOfCocktails
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

export const getFilteredCocktails = (filters) => async (dispatch, getState) => {
  debugger
    try {
      filters.map(async(filter) =>{
          let res = await cocktailApi.getFilteredCocktails(filter);
          dispatch(getFilteredCocktailsSuccess(res))
          }
      )
    } catch (e) {
        dispatch(setErrorSuccess('some error'))
    }
};


