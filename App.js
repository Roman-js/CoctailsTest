import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FiltersCocktails} from "./03-ui/FiltersCocktails";
import {Provider} from "react-redux";
import store from "./01-bll/store";
import {BrowserRouter} from "react-router-dom";
import {Cocktails} from "./03-ui/Cocktails";

export default function App() {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <Cocktails/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
}


