import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './stylesheet'
import { vw } from "react-native-expo-viewport-units";
import Data from './Data';

export default function Map() {
  const data = Data()
  const [latitude, setLatitude] = useState(data.location[1])
  const [longitude, setLongitude] = useState(data.location[0])

  useEffect(() => {
    setLatitude(data.location[1])
    setLongitude(data.location[0])
  }, [data.location[0], data.location[1]])

  return (
    <View style={[styles.w90vw, styles.h60vh, styles.alignSelfCenter, styles.shadowW0H05Black, styles.borderRadius20,]}>
      <View style={[styles.borderRadius20, { overflow: 'hidden' }]}>
        <MapView
          style={[styles.w100, styles.h100, styles.shadowW0H1Black]}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    </View>
  )
}
