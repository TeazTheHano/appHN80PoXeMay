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
        }, 15000)
    }
        , [])

    return chartData;
}

let x = { "type": "default", "status": 201, "ok": true, "statusText": "", "headers": { "map": { "connection": "keep-alive", "content-length": "7", "content-type": "text/html; charset=utf-8", "date": "Fri, 15 Mar 2024 09:20:14 GMT", "etag": "W/\"7-rM9AyJuqT6iOan/xHh+AW+7K/T8\"", "server": "nginx/1.24.0", "x-powered-by": "Express" } }, "url": "http://moitruongxanh.edu.vn/addUser", "bodyUsed": false, "_bodyInit": { "_data": { "size": 7, "offset": 0, "blobId": "a414b989-a8fd-4419-be57-d185876bf6ff", "__collector": {} } }, "_bodyBlob": { "_data": { "size": 7, "offset": 0, "blobId": "a414b989-a8fd-4419-be57-d185876bf6ff", "__collector": {} } } }
let y = { "type": "default", "status": 404, "ok": false, "statusText": "", "headers": { "map": { "connection": "keep-alive", "content-length": "1701", "content-type": "text/html; charset=utf-8", "date": "Fri, 15 Mar 2024 09:21:22 GMT", "etag": "W/\"6a5-SE3Qb7aWSEtRcIg0BDci/Yj3KN0\"", "server": "nginx/1.24.0", "x-powered-by": "Express" } }, "url": "http://moitruongxanh.edu.vn/adUser", "bodyUsed": false, "_bodyInit": { "_data": { "size": 1701, "offset": 0, "blobId": "cfcc0695-0e5a-4f8b-bf42-f55df9561b23", "__collector": {} } }, "_bodyBlob": { "_data": { "size": 1701, "offset": 0, "blobId": "cfcc0695-0e5a-4f8b-bf42-f55df9561b23", "__collector": {} } } }
let z = { "type": "default", "status": 409, "ok": false, "statusText": "", "headers": { "map": { "connection": "keep-alive", "content-length": "21", "content-type": "text/html; charset=utf-8", "date": "Fri, 15 Mar 2024 09:22:13 GMT", "etag": "W/\"15-PG7ruqkhyBIrDwsSdlTZ5cOIYwA\"", "server": "nginx/1.24.0", "x-powered-by": "Express" } }, "url": "http://moitruongxanh.edu.vn/addUser", "bodyUsed": false, "_bodyInit": { "_data": { "size": 21, "offset": 0, "blobId": "666e639a-b801-4027-940e-5cb4362cbddc", "__collector": {} } }, "_bodyBlob": { "_data": { "size": 21, "offset": 0, "blobId": "666e639a-b801-4027-940e-5cb4362cbddc", "__collector": {} } } }