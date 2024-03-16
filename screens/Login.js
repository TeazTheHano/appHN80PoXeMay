import { ActivityIndicator, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import colorStyle, { componentStyleSheet } from '../assets/componentStyleSheet'
import styles from '../assets/stylesheet'
import { vh, vw } from 'react-native-expo-viewport-units'
import { NotoBold20, NotoBold24, NotoDPBlack20, NotoDPBlack28, NotoDPBlack32, NotoReg16, NotoSemiBold16 } from '../assets/Class'
import { inVisibilityIcon, namecardLoginIcon, passwordIcon, userLoginIcon, visibilityIcon } from '../assets/svgXml'

export default function Login() {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [loginUser, setLoginUser] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerUser, setRegisterUser] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPassword2, setRegisterPassword2] = useState('')
    const [registerName, setRegisterName] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [accData, setAccData] = useState({})

    const inputContainerStyle = [styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]
    const inputStyle = [styles.flex1, styles.paddingV2vw,]

    const navigation = useNavigation()

    const loginForm = () => {
        return (
            <View style={[styles.w100, styles.flexCol, styles.gap2vw,]}>
                <View style={inputContainerStyle}>
                    {userLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setLoginUser(text)}
                        value={loginUser}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        placeholder="Tên đăng nhập" style={inputStyle} placeholderTextColor={'gray'} />
                </View>
                <View style={inputContainerStyle}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setLoginPassword(text)}
                        value={loginPassword}
                        secureTextEntry={!isShowPassword}
                        ref={(input) => { this.secondTextInput = input; }}
                        autoCapitalize="none"
                        placeholder="Mật khẩu" style={inputStyle} placeholderTextColor={'gray'} />
                    <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? visibilityIcon(vw(6), vw(6)) : inVisibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const registerForm = () => {
        return (
            <View style={[styles.w100, styles.flexCol, styles.gap2vw,]}>
                <View style={inputContainerStyle}>
                    {namecardLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterName(text)}
                        value={registerName}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        placeholder="Tên người dùng" style={inputStyle} placeholderTextColor={'gray'} />
                </View>
                <View style={inputContainerStyle}>
                    {userLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterUser(text)}
                        value={registerUser}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        ref={(input) => { this.secondTextInput = input; }}
                        placeholder="Tên đăng nhập" style={inputStyle} placeholderTextColor={'gray'} />
                </View>
                <View style={inputContainerStyle}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterPassword(text)}
                        value={registerPassword}
                        secureTextEntry={!isShowPassword}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.forthTextInput.focus(); }}
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        ref={(input) => { this.thirdTextInput = input; }}
                        placeholder="Mật khẩu" style={inputStyle} placeholderTextColor={'gray'} />
                    <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? visibilityIcon(vw(6), vw(6)) : inVisibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                </View>
                <View style={inputContainerStyle}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterPassword2(text)}
                        value={registerPassword2}
                        ref={(input) => { this.forthTextInput = input; }}
                        secureTextEntry={!isShowPassword}
                        autoCapitalize="none"
                        placeholder="Nhập lại mật khẩu" style={inputStyle} placeholderTextColor={'gray'} />
                    <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? visibilityIcon(vw(6), vw(6)) : inVisibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const loginFnc = () => {
        if (loginUser == '' || loginPassword == '') {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
        else {
            setIsLoading(true)

            function fetchData(retries = 3) {
                fetch('http://moitruongxanh.edu.vn/controll', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        deviceType: 'mobile',
                        tenDangNhap: loginUser,
                        matKhau: loginPassword,
                    }),
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.id) {
                            setIsLoading(false)
                            console.log(json);
                            navigation.navigate('Home', { accData: json })
                        } else {
                            alert('Sai thông tin đăng nhập. Vui lòng thử lại.')
                            setIsLoading(false)
                        }
                    })
                    .catch((error) => {
                        console.error('Network request failed:', error);
                        if (retries > 0) {
                            setTimeout(() => fetchData(retries - 1), 5000); // retry after 5 seconds
                        } else {
                            alert('Network error. Please check your internet connection.');
                            setIsLoading(false)

                        }
                    });
            }

            try {
                fetchData();
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        }
    }

    const registerFnc = () => {
        if (registerUser == '' || registerPassword == '' || registerPassword2 == '' || registerName == '') {
            alert('Vui lòng nhập đầy đủ thông tin')

        } else if (registerPassword != registerPassword2) {
            alert('Mật khẩu không trùng khớp')
            return
        } else {
            setIsLoading(true)

            function registerData(retries = 3) {
                fetch('http://moitruongxanh.edu.vn/addUser', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userName: registerUser,
                        numberPhone: registerName,
                        address: 'Hà Nội',
                        password: registerPassword,
                        deviceType: 'mobile',
                    }),
                })
                    .then((response) => response.json())
                    .then((json) => {
                        setIsLoading(false)
                        if (json.ok) {
                            alert('Đăng ký thành công. Xin mời đăng nhập.')
                            setIsLoginForm(true)
                        } else {
                            alert('Đăng ký thất bại. Vui lòng thử lại.')
                        }
                    })
                    .catch((error) => {
                        console.error('Network request failed:', error);
                        if (retries > 0) {
                            setTimeout(() => registerData(retries - 1), 5000); // retry after 5 seconds
                        } else {
                            alert('Network error. Please check your internet connection.');
                            setIsLoading(false)
                        }
                    });
            }

            try {
                registerData();
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: colorStyle.main, flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            {isLoading ?
                <View style={[styles.w100vw, styles.h100vh, styles.positionAbsolute, styles.centerByFlex, { zIndex: 10, backgroundColor: 'rgba(0,0,0,0.6)' }]}>
                    <ActivityIndicator size="large" color="white" />
                </View>
                : null}
            <ImageBackground source={require('../assets/images/loginPattem.png')} style={[styles.flex1, styles.centerByFlex, { objectFit: 'cover' }]} >
                <View style={[styles.w90vw, styles.h80vh, styles.borderRadius20, styles.flexCol, styles.alignItemsCenter, styles.padding8vw, { backgroundColor: colorStyle.white, }]}>
                    <View style={[styles.flexCol, styles.alignItemsCenter, styles.gap4vw, styles.flex1, styles.justifyContentCenter]}>
                        <NotoDPBlack28>App quản lý</NotoDPBlack28>
                        <NotoBold24 style={[styles.textCenter, { lineHeight: vw(7), fontSize: vw(5) }]}>Thiết bị hỗ trợ kiểm soát khí thải đầu ra xe máy</NotoBold24>
                    </View>
                    {isLoginForm ? loginForm() : registerForm()}
                    <View style={[styles.w100, { paddingTop: vw(8), paddingBottom: vw(2) },]}>
                        {isLoginForm ?
                            <View>
                                <TouchableOpacity
                                    onPress={() => { loginFnc() }}
                                    style={[styles.w100, styles.paddingV2vw, styles.flexRowCenter, styles.borderRadius10, { backgroundColor: colorStyle.yellow }]}>
                                    <NotoBold20 style={{ lineHeight: vw(6) }}>Đăng nhập</NotoBold20>
                                </TouchableOpacity>
                                <View style={[styles.flexRowCenter, styles.paddingTop2vw]}>
                                    <NotoReg16>Chưa có tài khoản? </NotoReg16>
                                    <TouchableOpacity
                                        onPress={() => setIsLoginForm(false)}
                                        style={[styles.padding1vw]}>
                                        <NotoSemiBold16 style={{ color: colorStyle.orange }}>Đăng ký</NotoSemiBold16>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : <View>
                                <TouchableOpacity
                                    onPress={() => { registerFnc() }}
                                    style={[styles.w100, styles.paddingV2vw, styles.flexRowCenter, styles.borderRadius10, { backgroundColor: colorStyle.yellow }]}>
                                    <NotoBold20 style={{ lineHeight: vw(6) }}>Đăng ký</NotoBold20>
                                </TouchableOpacity>
                                <View style={[styles.flexRowCenter, styles.paddingTop2vw]}>
                                    <NotoReg16>Đã có tài khoản? </NotoReg16>
                                    <TouchableOpacity
                                        onPress={() => setIsLoginForm(true)}
                                        style={[styles.padding1vw]}>
                                        <NotoSemiBold16 style={{ color: colorStyle.orange }}>Đăng nhập</NotoSemiBold16>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}