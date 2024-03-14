import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Data() {
    const [chartData, setChartData] = useState({
        "id": "1",
        "location": [106.1929714, 21.2800742],
        "labels": [
            "07:30",
            "07:30",
            "07:01",
            "07:30",
            "07:22",
            "07:30",
            "07:30",
            "07:30",
            "07:40",
            "07:41"
        ],
        "emissions": [
            {
                "data": [22, 20, 20, 20, 20, 40, 20, 50, 55, 80, 100, 120, 150, 3]
            },
            {
                "data": [66, 66, 66, 66, 66, 66, 66, 66, 66, 66]
            },
            {
                "data": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
            },
            {
                "data": [63, 63, 63, 63, 63, 63, 63, 63, 63, 63]
            },
            {
                "data": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
            },
            {
                "data": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
            },
            {
                "data": [75, 75, 75, 75, 75, 75, 75, 75, 75, 75]
            },
            {
                "data": [46, 46, 46, 46, 46, 46, 46, 46, 46, 46]
            },
            {
                "data": [32, 32, 32, 32, 32, 32, 32, 32, 32, 32]
            },
            {
                "data": [63, 63, 63, 63, 63, 63, 63, 63, 63, 63]
            }
        ],
        "alert": "0"
    })

    function randomChartData() {
        chartData.labels = [];
        chartData.emissions = [];
        for (let i = 0; i < 10; i++) { // to each category
            chartData.labels.push(`07:${i}0`);
            chartData.emissions[i] = { data: [] };
            for (let j = 0; j < 10; j++) { // to each time
                chartData.emissions[i].data.push(Math.floor(Math.random() * 1000));
            }
        }

        setChartData({ ...chartData })
    }

    function addOneNewDataToEachDataChart() {
        let date = new Date();
        chartData.labels.push(date.toLocaleTimeString().slice(0, 5));
        chartData.emissions.forEach((item) => {
            item.data.push(Math.floor(Math.random() * 100));
        })
        setChartData({ ...chartData })
    }

    useEffect(() => {
        randomChartData();
        setInterval(() => {
            addOneNewDataToEachDataChart();
        }, 3000)
    }
    , [])

    return chartData;
}