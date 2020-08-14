import {ScrollView, StyleSheet, Text, View} from "react-native";

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilteredCocktails} from "../01-bll/reducerOfCoctails";


export const CocktailsList = () => {

    const cocktails = useSelector(state => state.page.cocktails);
    const [numOfLine, setNumOfLine] = useState(1);

    const filter = useSelector(state => state.page.filters);
    const dispatch = useDispatch();

    const handleScroll = (event) => {


        const position = event.nativeEvent.contentOffset.y;
        let maxHeight = event.nativeEvent.contentSize.height - 1000;

        if(position > maxHeight && numOfLine<=filter.length -1)
        {dispatch(getFilteredCocktails(filter[numOfLine]));
            setNumOfLine(numOfLine + 1);}

    };


    return (
        <View style={styles.container} >

        <ScrollView
            onScroll={handleScroll}
            scrollEnabled={true}
            /*scrollEventThrottle={16}*/
        >
                {cocktails.map(cocktail => {
                        return typeof (cocktail) === "object"
                            ? <View key={cocktail.idDrink}
                                    style={styles.cocktailItem}>
                                <View style={styles.cocktailName}>
                                    <Text style={{color: '#7E7E7E', fontSize: '16px'}}>
                                        {cocktail.strDrink}
                                    </Text>
                                </View>

                                <img src={cocktail.strDrinkThumb}
                                     style={{width: '100px', minWidth: '100px', height: '100px', padding: '20px'}}/>
                            </View>
                            :
                            <View style={styles.title} key={Math.floor(Math.random() * 100)}>
                                <Text style={{color: '#7E7E7E', fontSize: '18px'}}>{cocktail}</Text>
                            </View>
                    }
                )}

        </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '100px',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        height: '100vh'
    },
    cocktailItem: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end'
    },
    cocktailName: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '175px',
        minWidth: '100px',
        justifyContent: 'center',

    },
    title: {
        padding: '21px',
    }

});
