import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LineChart } from "react-native-gifted-charts";
import styles from './stylesheet';
import { vw } from 'react-native-expo-viewport-units';
import { NotoReg10 } from './Class';
import Data from './Data';

export default function Chart() {
    const [chartData, setChartData] = useState(Data())

    function putValueToChart(dataSetRecieved) {
        const dataSet = []
        dataSetRecieved.slice(-10).forEach((item) => {
            // dataSetRecieved.forEach((item) => {
            dataSet.push({ value: item })
        })

        return dataSet;
    }

    function findYMinOffset(set1, ...rest) {
        let newArr = [];
        newArr = (set1.concat(...rest));
        let min = Math.min(...newArr);
        return min - 10 < 0 ? 0 : min - 10;
    }

    function findYMaxOffset(set1, ...rest) {
        let newArr = [];
        newArr = (set1.concat(...rest));
        let max = Math.max(...newArr);
        return max + 10;
    }

    return (
        <View style={[styles.flexColCenter, styles.gap4vw,]}>
            <View style={[styles.paddingH2vw, styles.paddingV4vw, styles.gap4vw, styles.w90vw, styles.alignSelfCenter, styles.borderRadius20, styles.flexColCenter, { backgroundColor: 'white', }]}>
                <View style={[styles.flexRowEvenlyCenter, styles.w100]}>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'red' }}></View>
                        <NotoReg10>Nhiệt độ (˚C)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'blue' }}></View>
                        <NotoReg10>Độ ẩm (%)</NotoReg10>
                    </View>
                </View>
                <LineChart
                    scrollToEnd={true}
                    isAnimated
                    backgroundColor={'white'}
                    initialSpacing={vw(5)}
                    thickness={3}
                    spacing={vw(7)}
                    color1="red"
                    data={putValueToChart(chartData.emissions[0].data)}
                    color2='blue'
                    data2={putValueToChart(chartData.emissions[1].data)}
                    width={vw(72)}
                    xAxisLabelTexts={chartData.labels.slice(-10)}
                    xAxisLabelTextStyle={{ fontSize: vw(2.5), transform: [{ rotate: '-45deg' }], color: 'black' }}
                    showValuesAsDataPointsText={true}
                    yAxisOffset={findYMinOffset(chartData.emissions[0].data.slice(-10), chartData.emissions[1].data.slice(-10))}
                    maxValue={findYMaxOffset(chartData.emissions[0].data.slice(-10), chartData.emissions[1].data.slice(-10))}
                />
            </View>

            <View style={[styles.paddingH2vw, styles.paddingV4vw, styles.gap4vw, styles.w90vw, styles.alignSelfCenter, styles.borderRadius20, styles.flexColCenter, { backgroundColor: 'white', }]}>
                <View style={[styles.flexRowEvenlyCenter, styles.w100]}>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(121,27,128)' }}></View>
                        <NotoReg10>CO (ppm)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(59,129,39)' }}></View>
                        <NotoReg10>SO2 (ppm)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(243,178,80)' }}></View>
                        <NotoReg10>LPG (ppm)</NotoReg10>
                    </View>
                </View>
                <LineChart
                    scrollToEnd={true}
                    isAnimated
                    backgroundColor={'white'}
                    initialSpacing={vw(5)}
                    thickness={3}
                    spacing={vw(7)}
                    color1="rgb(121,27,128)"
                    data={putValueToChart(chartData.emissions[2].data)}
                    color2='rgb(59,129,39)'
                    data2={putValueToChart(chartData.emissions[3].data)}
                    color3='rgb(243,178,80)'
                    data3={putValueToChart(chartData.emissions[4].data)}
                    width={vw(72)}
                    xAxisLabelTexts={chartData.labels.slice(-10)}
                    xAxisLabelTextStyle={{ fontSize: vw(2.5), transform: [{ rotate: '-45deg' }], color: 'black' }}
                    showValuesAsDataPointsText={true}
                    yAxisOffset={findYMinOffset(chartData.emissions[2].data.slice(-10), chartData.emissions[3].data.slice(-10), chartData.emissions[4].data.slice(-10))}
                    maxValue={findYMaxOffset(chartData.emissions[2].data.slice(-10), chartData.emissions[3].data.slice(-10), chartData.emissions[4].data.slice(-10))}
                />
            </View>

            <View style={[styles.paddingH2vw, styles.paddingV4vw, styles.gap4vw, styles.w90vw, styles.alignSelfCenter, styles.borderRadius20, styles.flexColCenter, { backgroundColor: 'white', }]}>
                <View style={[styles.flexRowEvenlyCenter, styles.w100]}>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(121,27,128)' }}></View>
                        <NotoReg10>PM 2.5 (ppm)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(59,129,39)' }}></View>
                        <NotoReg10>PM 1.0 (ppm)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(243,178,80)' }}></View>
                        <NotoReg10>PM 10 (ppm)</NotoReg10>
                    </View>
                </View>
                <LineChart
                    scrollToEnd={true}
                    isAnimated
                    backgroundColor={'white'}
                    initialSpacing={vw(5)}
                    thickness={3}
                    spacing={vw(7)}
                    color1="rgb(121,27,128)"
                    data={putValueToChart(chartData.emissions[5].data)}
                    color2='rgb(59,129,39)'
                    data2={putValueToChart(chartData.emissions[6].data)}
                    color3='rgb(243,178,80)'
                    data3={putValueToChart(chartData.emissions[7].data)}
                    width={vw(72)}
                    xAxisLabelTexts={chartData.labels.slice(-10)}
                    xAxisLabelTextStyle={{ fontSize: vw(2.5), transform: [{ rotate: '-45deg' }], color: 'black' }}
                    showValuesAsDataPointsText={true}
                    yAxisOffset={findYMinOffset(chartData.emissions[5].data.slice(-10), chartData.emissions[6].data.slice(-10), chartData.emissions[7].data.slice(-10))}
                    maxValue={findYMaxOffset(chartData.emissions[5].data.slice(-10), chartData.emissions[6].data.slice(-10), chartData.emissions[7].data.slice(-10))}
                />
            </View>

            <View style={[styles.paddingH2vw, styles.paddingV4vw, styles.gap4vw, styles.w90vw, styles.alignSelfCenter, styles.borderRadius20, styles.flexColCenter, { backgroundColor: 'white', }]}>
                <View style={[styles.flexRowEvenlyCenter, styles.w100]}>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'rgb(243,178,80)' }}></View>
                        <NotoReg10>CO2 (ppm)</NotoReg10>
                    </View>
                    <View style={[styles.flexRowCenter, styles.gap2vw]}>
                        <View style={{ width: vw(6), height: vw(3), backgroundColor: 'pink' }}></View>
                        <NotoReg10>NO (ppm)</NotoReg10>
                    </View>
                </View>
                <LineChart
                    scrollToEnd={true}
                    isAnimated
                    backgroundColor={'white'}
                    initialSpacing={vw(5)}
                    thickness={3}
                    spacing={vw(7)}
                    color1="rgb(243,178,80)"
                    data={putValueToChart(chartData.emissions[8].data)}
                    color2='pink'
                    data2={putValueToChart(chartData.emissions[9].data)}
                    width={vw(72)}
                    xAxisLabelTexts={chartData.labels.slice(-10)}
                    xAxisLabelTextStyle={{ fontSize: vw(2.5), transform: [{ rotate: '-45deg' }], color: 'black' }}
                    showValuesAsDataPointsText={true}
                    yAxisOffset={findYMinOffset(chartData.emissions[8].data.slice(-10), chartData.emissions[9].data.slice(-10))}
                    maxValue={findYMaxOffset(chartData.emissions[8].data.slice(-10), chartData.emissions[9].data.slice(-10))}
                />
            </View>
        </View>
    )
}