import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
});

export const cocktailApi = {

    getListCategories() {
        return instance.get('list.php?c=list')
            .then(res=> res.data.drinks)
    }

};

/*
const instance = axios.create({
    // baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})
export const CocktailApi = {
    getCategoriesList() {
        return instance.get(`list.php?c=list`)
            .then(res => res.data.drinks.map(d => d.strCategory))
    },
    getCocktails(category) {
        debugger
        return instance.get(`filter.php?c=${category}`)
            .then(res => res.data.drinks)
    },
    //todo: remove..
    // getCocktails2(cocktail) {
    //     return instance.get(`filter.php?c=${cocktail}`)
    //         .then(res => res.data.drinks)
    //
    // }
}*/

