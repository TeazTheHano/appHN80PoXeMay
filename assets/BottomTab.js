// system imports
import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

// screen import
import Home from '../screens/Home';

// ____________________END OF IMPORT_______________________

function Tab({ navigation }) {
    const Tab = createBottomTabNavigator();
    const tabBarIcon = (iconXml, focused) => {
        const fill = focused ? colorStyle.main4 : 'none';
        return (
            <SvgXml
                xml={iconXml}
                fill={fill} // Set the fill color based on whether the tab is focused or not
            />
        );
    };
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: [
                    {
                        display: "flex",
                        // paddingTop: vw(4),
                        // marginBottom: 0,
                        // alignContent: "center",
                        // alignItems: "center",
                    },
                    null
                ]
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            `<svg width=${vw(10)} height=${vw(10)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_509_514" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_509_514)">
                                <path d="M11.8 20.025C11.25 20.025 10.7792 19.825 10.3875 19.425C9.99582 19.025 9.79999 18.55 9.79999 18C9.79999 17.45 9.99582 16.9792 10.3875 16.5875C10.7792 16.1958 11.25 16 11.8 16L12.4 15.425C12.5333 15.2917 12.6875 15.1875 12.8625 15.1125C13.0375 15.0375 13.2167 15 13.4 15C13.7833 15 14.1125 15.1417 14.3875 15.425C14.6625 15.7083 14.8 16.0417 14.8 16.425V16.85C14.8 17.1833 14.9083 17.4583 15.125 17.675C15.3417 17.8917 15.6167 18 15.95 18C16.2 18 16.425 17.925 16.625 17.775C16.825 17.625 16.9667 17.4333 17.05 17.2L17.35 16.375C17.5 15.975 17.7417 15.6458 18.075 15.3875C18.4083 15.1292 18.7917 15 19.225 15C19.4083 14.5333 19.5542 14.05 19.6625 13.55C19.7708 13.05 19.825 12.5333 19.825 12C19.825 10.5167 19.4542 9.1625 18.7125 7.9375C17.9708 6.7125 17 5.75 15.8 5.05V6C15.8 6.55 15.6042 7.02083 15.2125 7.4125C14.8208 7.80417 14.35 8 13.8 8H12.8V10C12.8 10.2833 12.7042 10.5208 12.5125 10.7125C12.3208 10.9042 12.0833 11 11.8 11H10.8V12.7C10.8 13.0667 10.675 13.375 10.425 13.625C10.175 13.875 9.86665 14 9.49999 14C9.26665 14 9.05415 13.95 8.86249 13.85C8.67082 13.75 8.51665 13.6083 8.39999 13.425L6.79999 11H5.79999V12C5.79999 12.5167 5.62499 12.9583 5.27499 13.325C4.92499 13.6917 4.50832 13.9083 4.02499 13.975C4.45832 15.7083 5.39582 17.15 6.83749 18.3C8.27915 19.45 9.93332 20.025 11.8 20.025ZM13.8 14C13.5167 14 13.2792 13.9042 13.0875 13.7125C12.8958 13.5208 12.8 13.2833 12.8 13C12.8 12.7167 12.8958 12.4792 13.0875 12.2875C13.2792 12.0958 13.5167 12 13.8 12H14.8C15.0833 12 15.3208 12.0958 15.5125 12.2875C15.7042 12.4792 15.8 12.7167 15.8 13C15.8 13.2833 15.7042 13.5208 15.5125 13.7125C15.3208 13.9042 15.0833 14 14.8 14H13.8ZM16.125 11C15.7917 11 15.5292 10.8708 15.3375 10.6125C15.1458 10.3542 15.1 10.0667 15.2 9.75L15.575 8.65C15.6417 8.45 15.7583 8.29167 15.925 8.175C16.0917 8.05833 16.275 8 16.475 8C16.8083 8 17.0708 8.12917 17.2625 8.3875C17.4542 8.64583 17.5 8.93333 17.4 9.25L17.025 10.35C16.9583 10.55 16.8417 10.7083 16.675 10.825C16.5083 10.9417 16.325 11 16.125 11ZM11.8 22C10.4167 22 9.11665 21.7375 7.89999 21.2125C6.68332 20.6875 5.62499 19.975 4.72499 19.075C3.82499 18.175 3.11249 17.1167 2.58749 15.9C2.06249 14.6833 1.79999 13.3833 1.79999 12C1.79999 10.6167 2.06249 9.31667 2.58749 8.1C3.11249 6.88333 3.82499 5.825 4.72499 4.925C5.62499 4.025 6.68332 3.3125 7.89999 2.7875C9.11665 2.2625 10.4167 2 11.8 2C13.1833 2 14.4833 2.2625 15.7 2.7875C16.9167 3.3125 17.975 4.025 18.875 4.925C19.775 5.825 20.4875 6.88333 21.0125 8.1C21.5375 9.31667 21.8 10.6167 21.8 12C21.8 13.3833 21.5375 14.6833 21.0125 15.9C20.4875 17.1167 19.775 18.175 18.875 19.075C17.975 19.975 16.9167 20.6875 15.7 21.2125C14.4833 21.7375 13.1833 22 11.8 22Z" fill="${focused ? '#498EBF' : 'black'}"/>
                                </g>
                                </svg>
                                `
                            ,), 
                }} />
        </Tab.Navigator>
    );
}
export default Tab;

