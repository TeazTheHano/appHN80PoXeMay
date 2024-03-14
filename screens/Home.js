import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../assets/stylesheet';

export default function Home({ route, navigation }) {
    const { accData } = route.params;
    console.log(accData);

    return (
        <SafeAreaView style={[styles.flex1]}>
            <Text>Home</Text>

            <TouchableOpacity onPress={() => { navigation.navigate('LogList') }}>
                <Text>Go to LogList</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('InfoScreen', { accData: accData }) }}>
                <Text>Go to InfoScreen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
