import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsList, setFilters} from "../01-bll/reducerOfCoctails";
import {NavLink} from "react-router-dom";


export const FiltersCocktails = () => {

    const filtersList = useSelector(state => state.page.categories);
    const dispatch = useDispatch();
    const [filters, setLocalFilters] = useState([]);


    useEffect(() => {
        dispatch(getCocktailsList())
    }, []);

    const showChooseCocktails = () => {
       /* dispatch(getFilteredCocktails(filters))*/
        dispatch(setFilters(filters))

    };
    const addFilters = (categoryName, isChecked) => {
        setLocalFilters(
            isChecked
                ? [...filters, categoryName]
                : filters.filter(category => category !== categoryName)
        );

    };
    return (

        <View style={styles.container}>
            {filtersList.length > 1
                ? filtersList.map(categoryName => {

                    return <View key={categoryName.strCategory} style={{paddingTop: '20px'}}>

                        <Text style={styles.titles}>
                            {categoryName.strCategory}
                        </Text>
                        <View style={styles.checkBoxes}>
                            <input type={'checkbox'}
                                   checked={filters.includes(categoryName.strCategory)}
                                   onChange={(e) => addFilters(categoryName.strCategory, e.currentTarget.checked)}/>
                        </View>
                    </View>
                })

                : null

            }

            <View style={styles.buttonBlock}>
                <NavLink to={'/cocktailsList'} style={{
                    textDecoration: 'none', color: '#FFF', maxWidth: '360px',
                    width: '100%',
                }}>
                    <button onClick={showChooseCocktails} disabled={!filters.length} style={{
                        backgroundColor: '#272727',
                        maxWidth: '360px',
                        width: '100%',
                        height: '53px',
                        border: '0',
                        color: '#FFF'
                    }}>
                        APPLY
                    </button>
                </NavLink>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        left: '30px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#7E7E7E'
    },
    checkBoxes: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: '20px'
    },
    buttonBlock: {
        display: 'flex',
        alignItems: 'center',
        padding: '27px'
    },
});
