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
                ? filtersList.map(categoryName =>

                     <View key={categoryName.strCategory} style={{paddingTop: '20px'}}>
                        <Text style={styles.titles} >
                            {categoryName.strCategory}
                        </Text>
                        <View style={styles.checkBoxes}>


                           { filters.includes(categoryName.strCategory)?
                               <View onClick={() => addFilters(categoryName.strCategory, false)}>
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.6339 0.686328C24.1458 0.198145 23.3544 0.198145 22.8661 0.686328L7.89035 15.6623L2.13391 9.90581C1.64578 9.41763 0.85437 9.41768 0.366138 9.90581C-0.122046 10.3939 -0.122046 11.1854 0.366138 11.6735L7.00647 18.3138C7.49446 18.8019 8.28645 18.8016 8.77424 18.3138L24.6339 2.4541C25.1221 1.96597 25.122 1.17451 24.6339 0.686328Z" fill="black"/>
                            </svg>
                               </View>:
                            <input type={'checkbox'}
                                   checked={filters.includes(categoryName.strCategory)}
                                   onChange={(e) => addFilters(categoryName.strCategory, e.currentTarget.checked)}/>
                            }

                        </View>
                    </View>
                ) : null
            }



            <View style={styles.buttonBlock}>
                <NavLink to={'/cocktailsList'} style={{
                    textDecoration: 'none', color: '#FFF', maxWidth: '360px',
                    width: '100%',
                }}>
                    <button onClick={showChooseCocktails} disabled={!filters.length}
                            style={{backgroundColor: '#272727', maxWidth: '360px', width: '100%', height: '53px',
                        border: '0', color: '#FFF'}}>
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
