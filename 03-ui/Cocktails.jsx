import View from "react-native-web/dist/exports/View";
import {FiltersCocktails} from "./FiltersCocktails";
import React from 'react';
import {CocktailsList} from "./CocktailsList";
import {Route} from "react-router-dom";


export const Cocktails = () => {
    return (
        <View>
            <FiltersCocktails/>
            <View>
                <Route path='/cocktailsList/' render={() => <CocktailsList />}/>
                <Route path='/filters/' render={() => <FiltersCocktails />}/>
            </View>
        </View>
    )
};
