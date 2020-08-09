import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducerOfCocktails from "./reducerOfCoctails";


const rootReducer = combineReducers({
    page: reducerOfCocktails
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
