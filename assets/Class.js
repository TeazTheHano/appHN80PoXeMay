// system import
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, } from 'react-native';

// style import
import styles from './stylesheet';
import colorStyle, { comp } from './componentStyleSheet';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

// component import
import { marginBottomForScrollView } from '../assets/component';

// svg import
import { searchIcon } from '../assets/svgXml';

// ____________________END OF IMPORT_______________________

// FONT SECTION
export class NotoDPBlack32 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay-Black', fontSize: vw(8), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDPBlack28 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay-Black', fontSize: vw(7), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBlack20 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Black', fontSize: vw(5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBold24 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Bold', fontSize: vw(6), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoBold20 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Bold', fontSize: vw(5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDPBlack20 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay-Black', fontSize: vw(5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoDPBlack16 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSansDisplay-Black', fontSize: vw(4), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoReg16 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(4), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoReg14 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(3.5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoReg12 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(3), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoReg10 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Regular', fontSize: vw(2.5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoLight14 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-Light', fontSize: vw(3.5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoSemiBold16 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-SemiBold', fontSize: vw(4), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class NotoSemiBold18 extends Component {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'NotoSans-SemiBold', fontSize: vw(4.5), color:'black' }, style]}>
                {children}
            </Text>
        );
    }
}