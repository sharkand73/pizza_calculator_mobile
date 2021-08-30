import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import calculateWeights from '../helpers/functions';

const Results = ({setCurrentPage, values, resetValues}) => {

    const results = calculateWeights(values);



    const nextPage = () => {
        resetValues();
        setCurrentPage('home');
    }

    const previousPage = () => {
        setCurrentPage('oil');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <View>
                    <Text style={styles.labelText}>Flour: {results.flourWeight}g</Text>
                    <Text style={styles.labelText}>Water: {results.waterWeight}g</Text>
                    <Text style={styles.labelText}>Yeast: {results.yeastWeight}g</Text>
                    <Text style={styles.labelText}>Salt: {results.saltWeight}g</Text>
                    <Text style={styles.labelText}>Oil: {results.oilWeight}g</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}
                    onPress = {previousPage}>
                        <Text style={styles.buttonText}>&lt;&lt; Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress = {nextPage}>
                        <Text style={styles.buttonText}>Start Over &gt;&gt;</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}></View>
        </View>
    )
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
    labelText: {
        color: 'black',
        fontSize: 36,
        padding: 2,
        fontWeight: "500",
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '62%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'grey',
        borderRadius: 20,
        margin: 30
    },
    buttonText: {
        fontSize: 26,
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

export default Results;