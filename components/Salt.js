import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const Salt = ({setCurrentPage, values, handleChange}) => {
    const [salt, setSalt] = useState(values.salt);

    const nextPage = () => {
        handleChange('salt', salt);
        setCurrentPage('oil');
    }

    const previousPage = () => {
        handleChange('salt', salt);
        setCurrentPage('yeast');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.labelText}>
                Salt (%)?
                </Text>
                <NumericInput value = {salt} 
                onChange = {value => setSalt(value)}
                minValue = {0}
                maxValue = {4}
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
                    <TouchableOpacity style={styles.button}
                    onPress = {nextPage}>
                        <Text style={styles.buttonText}>Next &gt;&gt;</Text>
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
    footer: {
        backgroundColor: 'red',
        borderTopWidth: 10,
        borderTopColor: '#ff6666',
        height: '18%'    
    }
  });

export default Salt;