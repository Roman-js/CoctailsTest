import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsList} from "../01-bll/reducerOfCoctails";
import Button from "react-native-web/dist/exports/Button";
import {useAppState} from "react-native-hooks";


export const CocktailsList = () => {

    const cocktails = useSelector(state => state.page.cocktails);
    console.log(cocktails);

        return(
            <View style={{paddingTop: '100px', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}>

                {cocktails.map(cocktail => typeof(cocktail) === "object" ?
                    <View key={cocktail.id} style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>

                        <Text style={{display:'flex', alignItems: 'center'}}>
                            {cocktail.strDrink}
                        </Text>
                        <img src={cocktail.strDrinkThumb} style={{width: '100px', height: '100px', padding: '20px'}}/>

                    </View>
                    :<Text><h1>{cocktail}</h1></Text>
                )}

            </View>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'flexStart',
        justifyContent: 'spaceBetween',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '20px',
        backgroundColor: 'darkgreen',

    },
    eachCocktail: {
        width: '100%',
        height: '150px'
    }

});
