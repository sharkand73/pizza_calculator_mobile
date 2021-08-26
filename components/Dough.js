import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const Dough = () => {
    const [doughWeight, setDoughWeight] = useState(1000);
    return (
        <View>
            <View>
                <Text>
                Weight of dough?
                </Text>
                <NumericInput value = {doughWeight} 
                onChange = {value => setDoughWeight(value)}
                />
            </View>
        </View>
    )
}