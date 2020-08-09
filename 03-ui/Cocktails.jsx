import View from "react-native-web/dist/exports/View";
import {FiltersCocktails} from "./FiltersCocktails";
import React from 'react';
import {CocktailsList} from "./CocktailsList";
import {Route} from "react-router-dom";
import Text from "react-native-web/src/exports/Text";
import Icon from 'react-native-vector-icons/FontAwesome/';
import {useSelector} from "react-redux";


export const Cocktails = () => {

    const headerSettings = useSelector(setting => setting.page.headerInformation)
    return (
        <View>
            {/*<FiltersCocktails/>*/}
            {!headerSettings
                ?<View style={{position: 'absolute', zIndex: 1, width: '100%', height: '70px', left: '0px', top: '0px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: '10px'}}>

                    <Text>
                        <h1 style={{position: 'absolute',
                            width: '86px',
                            height: '28px',
                            left: '14px',
                            top: '9px',

                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '24px',
                            lineHeight: '28px',

                            color: '#000000'}}> Drinks
                        </h1>
                    </Text>

                    <a href={'/filters'} style={{textDecoration: 'none'}}>
                        <Icon name='filter' size={30}/>
                    </a>
                </View>
                :<View style={{position: 'absolute', zIndex: 1, width: '100%', height: '70px', left: '0px', top: '0px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', paddingLeft: '10px'}}>
                    <Text>
                        <h1 style={{position: 'absolute',
                            width: '69px',
                            height: '28px',
                            left: '57px',
                            top: '4px',

                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '24px',
                            lineHeight: '28px',

                            color: '#000000'}}> Filters
                        </h1>
                    </Text>
                    <a href={'/cocktailsList'} style={{textDecoration: 'none'}}>
                        <Icon name='long-arrow-left' size={30}/>
                    </a>
                </View>
            }


            <View>
                <Route path='/cocktailsList/' render={() => <CocktailsList />}/>
                <Route path='/filters/' render={() => <FiltersCocktails />}/>
            </View>
        </View>
    )
};
