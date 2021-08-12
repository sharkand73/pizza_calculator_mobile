import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>App loaded!</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: 'blue'      
    }
  });
  
  export default Main;