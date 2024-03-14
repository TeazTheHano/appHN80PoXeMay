import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import InfoScreen from './screens/InfoScreen';
import LogDetail from './screens/LogDetail';
import LogList from './screens/LogList';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: { 
          
        } 
      }}>
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="LogDetail" component={LogDetail} />
        <Stack.Screen name="LogList" component={LogList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
