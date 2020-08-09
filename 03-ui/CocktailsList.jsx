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
            <View style={styles.container}>
                {cocktails.map(cocktail =>
                    <View key={cocktail.id}>
                        <Text>
                            {cocktail.strDrink}
                            <img src={cocktail.strDrinkThumb} style={{width: '150px', height: '150px'}}/>
                        </Text>
                    </View>
                )}

            </View>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        position: 'absolute',
        width: '349px',
        height: '100%',
        top: '20px',
        backgroundColor: 'darkgreen'
    },
    eachCocktail: {
        width: '100%',
        height: '150px'
    }

});
