import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/stylesheet'
import { vw } from 'react-native-expo-viewport-units'
import { NotoBlack20, NotoDPBlack20, NotoSemiBold16, NotoSemiBold18 } from '../assets/Class'
import colorStyle from '../assets/componentStyleSheet'
import Chart from '../assets/Chart'
import Map from '../assets/Map'
import { marginBottomForScrollView } from '../assets/component'
// import { LineChart } from 'react-native-gifted-charts'

export default function InfoScreen() {
  const [isShowChart, setIsShowChart] = useState(false)

  // const chartApp = () => {
  //   const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }]
  //   return <LineChart data={data} />;
  // }

  return (
    <SafeAreaView style={{ backgroundColor: colorStyle.sec2, flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../assets/images/loginPattem.png')} style={[styles.h100vh, { objectFit: 'cover' }]} >
        <View style={[styles.w100, styles.h15vw, styles.flexRowEvenlyCenter, styles.shadowW0H1Black, { zIndex: 10, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), backgroundColor: colorStyle.white }]}>
          <TouchableOpacity onPress={() => { setIsShowChart(true) }}>
            {isShowChart ? <NotoBlack20 style={{ color: colorStyle.orange }}>Thông số</NotoBlack20> : <NotoSemiBold18>Thông số</NotoSemiBold18>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIsShowChart(false) }}>
            {!isShowChart ? <NotoBlack20 style={{ color: colorStyle.orange }}>Bản đồ</NotoBlack20> : <NotoSemiBold18>Bản đồ</NotoSemiBold18>}
          </TouchableOpacity>
        </View>
        <ScrollView style={[styles.flex1,]}>
          {marginBottomForScrollView()}
          {isShowChart ? <Chart /> : <Map />}
          {marginBottomForScrollView()}
          {marginBottomForScrollView()}
          {marginBottomForScrollView()}
          {marginBottomForScrollView()}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}