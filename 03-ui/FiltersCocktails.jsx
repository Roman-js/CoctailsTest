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
            {/*<StatusBar style="auto"/>*/}
            {filtersList.length > 1 ? filtersList.map(categoryName =>
                <View key={categoryName.strCategory} style={{paddingTop: '20px'}}>

                    <Text style={styles.titles}>
                        {categoryName.strCategory}
                    </Text>
                    <View style={{display: 'flex', alignItems: 'flex-end', paddingRight: '20px'}}>
                        <input type={'checkbox'}
                               checked={filters.includes(categoryName.strCategory)}
                               onChange={(e)=> addFilters(categoryName.strCategory, e.currentTarget.checked)}/>
                    </View>

                </View>) : null}
            <NavLink to={'/cocktailsList'} style={{textDecoration: 'none', color: '#FFF'}}>
                <View style={{ display: 'flex', alignItems: 'center', padding: '27px'}}>
            <button onClick={showChooseCocktails} style={{ backgroundColor: '#272727', maxWidth: '360px', width: '100%', height: '53px', border: '0', color: '#FFF'}}>
                    APPLY
            </button>
                </View>
            </NavLink>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       /* alignItems: 'center',*/
        position: 'absolute',
        width: '100%',
        minHeight: '100vh',
        left: '0',
        top: '96px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    titles: {
        position: 'absolute',
        width: '200px',
        height: '835px',
        left: '30px',

    },

});
