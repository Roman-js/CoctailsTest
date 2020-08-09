import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCocktailsList} from "../01-bll/reducerOfCoctails";
import Button from "react-native-web/dist/exports/Button";
import {useAppState} from "react-native-hooks";


export const Cards = () => {
    const filtersList = useSelector(state => state.page.categories);
    const dispatch = useDispatch();
    const [state, setState] = useAppState({filters: ''});
    useEffect(() => {
        dispatch(getCocktailsList())
    }, [filtersList]);


    /*const getAllCocktails = () => {
        dispatch(getCocktailsList())
    };*/
    return (
        <View style={styles.container}>
            <Text>Test task CoCtAiLs</Text>
            <StatusBar style="auto"/>
            {filtersList.length > 1 ? filtersList.map(item =>
                <View>
                    <Text style={styles.titles}>
                        {item.strCategory}
                    </Text>
                    <input type={'checkbox'}/>

                </View>) : null}
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
