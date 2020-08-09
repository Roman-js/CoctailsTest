import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsList, getFilteredCocktails} from "../01-bll/reducerOfCoctails";
import Button from "react-native-web/dist/exports/Button";
import {useAppState} from "react-native-hooks";
import {NavLink} from "react-router-dom";


export const FiltersCocktails = () => {

    const filtersList = useSelector(state => state.page.categories);
    const dispatch = useDispatch();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        dispatch(getCocktailsList())
    }, []);

    const showChooseCocktails = () => {
        dispatch(getFilteredCocktails(filters))

    };
    const sendOnFilters = () => {

    };
    const addFilters = (categoryName, isChecked) => {
        setFilters(
                isChecked
                ?[...filters, categoryName]
                :filters.filter(category => category !== categoryName)
        );
        console.log(filters)
    };
    return (
        <View style={styles.container}>
            <Text>Test task CoCtAiLs</Text>
            <StatusBar style="auto"/>
            {filtersList.length > 1 ? filtersList.map(categoryName =>
                <View key={categoryName.strCategory}>
                    <Text style={styles.titles}>
                        {categoryName.strCategory}
                    </Text>
                    <input type={'checkbox'}
                           checked={filters.includes(categoryName.strCategory)}
                    onChange={(e)=> addFilters(categoryName.strCategory, e.currentTarget.checked)}/>
                </View>) : null}
            <button onClick={showChooseCocktails} ><NavLink to={'/cocktailsList'}>APPLY</NavLink></button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        width: '349px',
        height: '839px',
        left: '30px',
        top: '96px',
        backgroundColor: 'darkgreen'
    },
    titles: {
        position: 'absolute',
        width: '146px',
        height: '835px',
        left: '30px',

    },
    /*checkbox: {
        position: 'absolute',
        width: '25px',
        height: '348px',
        left: '354px',
        top: '96px'
    }*/
});
