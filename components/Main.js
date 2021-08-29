import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './Home';
import Dough from './Dough';
import Hydration from './Hydration';
import Yeast from './Yeast';
import Salt from './Salt';
import Oil from './Oil';

const Main = () => {
    const defaultValues = {
        doughWeight: 1000,
        hydration: 60,
        yeast: 2.0,
        salt: 2.5,
        oil: 4.0
    }

    const [values, setValues] = useState(defaultValues);
    const [currentPage, setCurrentPage] = useState('home');

    const handleChange = function(key, value){
        const tempValues = values;
        tempValues[key] = value;
        setValues[tempValues];
    } 

    const resetValues = () => {
        setValues(defaultValues);
    }

    const pages = {
        home: <Home setCurrentPage={setCurrentPage} />,
        dough: <Dough setCurrentPage={setCurrentPage} values={values} handleChange={handleChange} />,
        hydration: <Hydration setCurrentPage={setCurrentPage} values={values} handleChange={handleChange} />,
        yeast: <Yeast setCurrentPage={setCurrentPage} values={values} handleChange={handleChange} />,
        salt: <Salt setCurrentPage={setCurrentPage} values={values} handleChange={handleChange} />,
        oil: <Oil setCurrentPage={setCurrentPage} values={values} handleChange={handleChange} />
    }

    return (
        <>
        {pages[currentPage]}
        </>
    );
}

export default Main;