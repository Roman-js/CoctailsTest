import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
});

export const cocktailApi = {

    getListCategories() {
        return instance.get('list.php?c=list')
            .then(res=> res.data.drinks)
    },

    getFilteredCocktails(filters) {
        debugger
        return instance.get(`filter.php?c=${filters}`)
            .then(res => res.data.drinks)

    }
};



