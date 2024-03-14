import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../assets/stylesheet';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[styles.flex1]}>
            <Text>Home</Text>

            <TouchableOpacity onPress={() => { navigation.navigate('LogList') }}>
                <Text>Go to LogList</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('InfoScreen') }}>
                <Text>Go to InfoScreen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}