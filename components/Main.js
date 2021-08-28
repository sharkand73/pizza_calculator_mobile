import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dough from './Dough';
import Hydration from './Hydration';
import Home from './Home';

const Main = () => {
    const [startPressed, setStartPressed] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const pages = {
        home: <Home setCurrentPage={setCurrentPage} />,
        dough: <Dough setCurrentPage={setCurrentPage} />,
        hydration: <Hydration setCurrentPage={setCurrentPage} />
    }


    return (
        <>
        {pages[currentPage]}
        </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#00ee00',
        paddingTop: 20,
        height: '20%'
    },
    headerText: {
        color: '#FFD700',
        fontSize: 36,
        padding: 26,
        fontWeight: "500",
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '62%'
    },
    button: {
        padding: 15,
        backgroundColor: 'grey',
        borderRadius: 20
    },
    buttonText: {
        fontSize: 40,
        fontWeight: '500',
        color: '#FFD700'
    },
    footer: {
        backgroundColor: 'red',
        borderTopWidth: 10,
        borderTopColor: '#ff6666',
        height: '18%'    
    }
  });
  
  export default Main;