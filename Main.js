import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pizza Calculator</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> &gt; Start &lt; </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>

            </View>
        </View>

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
        height: '70%'
    },
    button: {
        padding: 15,
        backgroundColor: 'grey',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 40,
        fontWeight: '500'
    },
    footer: {
        backgroundColor: 'red',
        borderTopWidth: 10,
        borderTopColor: '#cc0000',
        height: '10%'    
    }
  });
  
  export default Main;