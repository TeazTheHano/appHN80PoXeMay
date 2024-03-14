import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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

    const loginForm = () => {
        return (
            <View style={[styles.w100, styles.flexCol, styles.gap2vw,]}>
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {userLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setLoginUser(text)}
                        value={loginUser}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        placeholder="Tên đăng nhập" style={[styles.flex1,]} placeholderTextColor={'gray'} />
                </View>
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setLoginPassword(text)}
                        value={loginPassword}
                        secureTextEntry={!isShowPassword}
                        ref={(input) => { this.secondTextInput = input; }}
                        placeholder="Mật khẩu" style={[styles.flex1,]} placeholderTextColor={'gray'} />
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
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {namecardLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterName(text)}
                        value={registerName}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                        placeholder="Tên người dùng" style={[styles.flex1,]} placeholderTextColor={'gray'} />
                </View>
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {userLoginIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterUser(text)}
                        value={registerUser}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                        ref={(input) => { this.secondTextInput = input; }}
                        placeholder="Tên đăng nhập" style={[styles.flex1,]} placeholderTextColor={'gray'} />
                </View>
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterPassword(text)}
                        value={registerPassword}
                        secureTextEntry={!isShowPassword}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.forthTextInput.focus(); }}
                        blurOnSubmit={false}
                        ref={(input) => { this.thirdTextInput = input; }}
                        placeholder="Mật khẩu" style={[styles.flex1,]} placeholderTextColor={'gray'} />
                    <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? visibilityIcon(vw(6), vw(6)) : inVisibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                </View>
                <View style={[styles.w100, styles.flexRow, styles.gap2vw, styles.alignItemsCenter, styles.paddingH2vw, styles.borderRadius10, { backgroundColor: colorStyle.sec3 }]}>
                    {passwordIcon(vw(6), vw(6))}
                    <TextInput
                        onChangeText={(text) => setRegisterPassword2(text)}
                        value={registerPassword2}
                        ref={(input) => { this.forthTextInput = input; }}
                        secureTextEntry={!isShowPassword}
                        placeholder="Nhập lại mật khẩu" style={[styles.flex1,]} placeholderTextColor={'gray'} />
                    <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? visibilityIcon(vw(6), vw(6)) : inVisibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const loginFnc = () => {
        alert(
            `Login
            ${loginPassword}
            ${typeof loginPassword}
            
            `
        )

    }

    const registerFnc = () => {
        if (registerPassword != registerPassword2) {
            alert('Mật khẩu không trùng khớp')
            return
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: colorStyle.main, flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={require('../assets/images/loginPattem.png')} style={[styles.h100vh, styles.centerByFlex, { objectFit: 'cover' }]} >
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
                                    onPress={()=>{loginFnc()}}
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
                                    onPress={()=>{registerFnc()}}
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