import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const Oil = ({setCurrentPage, values, handleChange}) => {
    const [oil, setOil] = useState(values.oil);

    const nextPage = () => {
        handleChange('oil', oil);
        setCurrentPage('results');
    }

    const previousPage = () => {
        handleChange('oil', oil);
        setCurrentPage('salt');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.labelText}>
                Oil (%)?
                </Text>
                <NumericInput value = {oil} 
                onChange = {value => setOil(value)}
                minValue = {0}
                maxValue = {10}
                rounded 
                valueType = 'real'
                step = {0.1}
                rightButtonBackgroundColor='#aaa'
                leftButtonBackgroundColor='#aaa'
                />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}
                    onPress = {previousPage}>
                        <Text style={styles.buttonText}>&lt;&lt; Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calculate}
                    onPress = {nextPage}>
                        <Text style={styles.buttonText}>Calculate &gt;&gt;</Text>
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
        color: '#777',
        fontSize: 36,
        padding: 26,
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
    calculate: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'green',
        borderRadius: 20,
        margin: 30
    },
    footer: {
        backgroundColor: 'red',
        borderTopWidth: 10,
        borderTopColor: '#ff6666',
        height: '18%'    
    }
  });

export default Oil;