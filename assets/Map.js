import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './stylesheet'
import { vw } from "react-native-expo-viewport-units";
import { useRoute } from '@react-navigation/native';
// import Data from './Data';

export default function Map() {
  // const data = Data()
  const route = useRoute();
  const { accData } = route.params;
  const [latitude, setLatitude] = useState(accData.location[1])
  const [longitude, setLongitude] = useState(accData.location[0])

  useEffect(() => {
    setLatitude(accData.location[1])
    setLongitude(accData.location[0])
  }, [accData.location[0], accData.location[1]])

  useEffect(() => {
    setInterval(() => {
      try {
        fetch(`http://moitruongxanh.edu.vn/get-data-to-render/${accData.id}`)
          .then((response) => response.json())
          .then((json) => {
            setLatitude(json.location[1])
            setLongitude(json.location[0])
          })
      }
      catch (error) {
        // console.log(error);
      }
    }, 15000)
  }, [])

  return (
    <View style={[styles.w90vw, styles.h60vh, styles.alignSelfCenter, styles.shadowW0H05Black, styles.borderRadius20, { backgroundColor: 'white' }]}>
      <View style={[styles.borderRadius20, { overflow: 'hidden' }]}>
        <MapView
          style={[styles.w100, styles.h100]}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        // onRegionChange={(region) => {
        //   setLatitude(region.latitude)
        //   setLongitude(region.longitude)
        // }}
        >
          <Marker
            key={1}
            coordinate={{ latitude: latitude, longitude: longitude }}
            title='hehehe'
            description='hohoho'

          />
        </MapView>
      </View>
    </View>
  )
}
