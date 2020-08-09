import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Cards} from "./03-ui/Cards";
import {Provider} from "react-redux";
import store from "./01-bll/store";
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <Cards/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
