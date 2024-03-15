import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../assets/stylesheet';
import { NotoBold24, NotoSemiBold16 } from '../assets/Class';
import { vw } from 'react-native-expo-viewport-units';
import colorStyle from '../assets/componentStyleSheet';

export default function Home({ route, navigation }) {
    const { accData } = route.params;
    console.log(accData);

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main }]}>
            <ImageBackground source={require('../assets/images/loginPattem.png')} style={[styles.flex1, styles.flexColEvenlyCenter, { objectFit: 'cover' }]} >
                <View style={[styles.paddingV4vw, styles.paddingH8vw, styles.borderRadius20, styles.w90, { backgroundColor: colorStyle.white }]}>
                    <Image source={require('../assets/images/hn80poLogo.png')} style={[styles.alignSelfCenter, styles.w20vw, styles.h20vw, styles.marginVertical6vw]} />
                    <NotoBold24 style={[styles.textCenter, { lineHeight: vw(7), fontSize: vw(5) }]}>Thiết bị hỗ trợ kiểm soát khí thải đầu ra xe máy</NotoBold24>
                </View>

                <TouchableOpacity
                    style={[styles.paddingV4vw, styles.paddingH8vw, styles.borderRadius20, styles.w60vw, styles.flexColCenter, styles.gap4vw, { backgroundColor: colorStyle.white }]}
                    onPress={() => { navigation.navigate('InfoScreen', { accData: accData }) }}>
                    <Image source={require('../assets/images/chart.jpg')} style={[styles.w80, styles.h20vw, styles.objectFitContain, styles.borderRadius10, styles.overflowHidden]} />
                    <NotoSemiBold16>Thông tin chỉ số</NotoSemiBold16>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.paddingV4vw, styles.paddingH8vw, styles.borderRadius20, styles.w60vw, styles.flexColCenter, styles.gap4vw, { backgroundColor: colorStyle.white }]}
                    onPress={() => { navigation.navigate('LogList') }}>
                    <Image source={require('../assets/images/xemay.jpg')} style={[styles.w80, styles.h20vw, styles.objectFitContain, styles.borderRadius10, styles.overflowHidden]} />
                    <NotoSemiBold16>Lịch sử bảo dưỡng</NotoSemiBold16>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}
