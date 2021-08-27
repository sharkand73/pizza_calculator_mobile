import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const Dough = ({setStartPressed}) => {
    const [doughWeight, setDoughWeight] = useState(1000);
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.labelText}>
                Weight of dough (g)?
                </Text>
                <NumericInput value = {doughWeight} 
                onChange = {value => setDoughWeight(value)}
                />
                <TouchableOpacity style={styles.button}
                onPress = {() => setStartPressed(false)}>
                <Text style={styles.buttonText}>Next &gt;&gt;</Text>
            </TouchableOpacity>
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
    button: {
        padding: 15,
        backgroundColor: 'grey',
        borderRadius: 20
    },
    buttonText: {
        fontSize: 32,
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

export default Dough;