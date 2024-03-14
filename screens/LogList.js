import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function LogList() {
  const [chartData1, setChartData1] = useState({})

  function randomChartData1() {
    chartData1.labels = [];
    chartData1.emissions = [];
    for (let i = 0; i < 10; i++) {
      chartData1.labels.push(`07:${i}0`);
      chartData1.emissions[i] = { data: [] };
      for (let j = 0; j < 10; j++) {
        chartData1.emissions[i].data.push(Math.floor(Math.random() * 100));
      }
    }

    setChartData1({ ...chartData1 })
    console.log('1: ' + typeof chartData1.emissions);
    console.log('1: ' + typeof chartData1.emissions[0]);
    console.log('1: ' + typeof chartData1.emissions[0].data);
    console.log('1: ' + typeof chartData1.emissions[0].data[0]);
    console.log(chartData1);
    console.log(chartData1.emissions);
    console.log(chartData1.emissions[0]);
    console.log(chartData1.emissions[2].data);
    console.log(chartData1.emissions[0].data[0]);
    console.log(chartData1.emissions[0].data[1]);
    console.log(chartData1.emissions[0].data[2]);
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{randomChartData1()}}>
        <Text>LogList</Text>
      </TouchableOpacity>
      {/* render the object chartData1 to the screen */}
      <Text>{JSON.stringify(chartData1)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})