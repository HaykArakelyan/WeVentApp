import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view"

import { colors } from '../colors/colors';

import CustomInput from '../components/CustomInput.js';
import CustomButton from "../components/CustomButton.js";
import IconBoxes from '../components/IconBoxes';

function LoginScreen() {

    const [isHidden, setIsHidden] = useState(false);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleHidePassword = () => {
        setIsHidden(!isHidden)
    }

    const handleLoginPress = () => {
        if (login.length === 0 || password.length === 0) {
            return;
        }
        console.log({
            login,
            password,
        });
    }

    const handleIconPress = () => {
        console.log("Icon Press");
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.superContainer}
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <Text style={styles.subtitle}>
                        Please login to continue using the application
                    </Text>
                </View>
                <View>
                    <View style={styles.inputsContainer}>
                        <View>
                            <Text style={styles.inputTitle}>
                                Email
                            </Text>
                            <CustomInput
                                placehodler={"Input your email here"}
                                getText={setLogin}
                            />
                        </View>
                        <View>
                            <Text style={styles.inputTitle}>
                                Password
                            </Text>
                            <CustomInput
                                iconName={
                                    isHidden
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
                                placehodler={"Input your password here"}
                                handleIconPress={() => handleHidePassword()}
                                isPassword={!isHidden}
                                getText={setPassword}
                            />
                        </View>
                    </View>
                    <View
                        style={styles.recoverPassword}
                    >
                        <TouchableOpacity>
                            <Text style={styles.recoverPasswordText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <CustomButton
                            title={"Login"}
                            style={styles.button}
                            handleButtonPress={() => handleLoginPress()}
                        />
                    </View>
                    <View
                        style={styles.sectionDivider}
                    >
                        <Text style={styles.sectionDividerText}>
                            Or login using
                        </Text>
                    </View>

                    <View style={styles.loginAlt}>
                        <IconBoxes
                            title={"google"}
                            handleIconPress={() => handleIconPress()}
                            iconColor={"red"}
                        />
                        <IconBoxes
                            title={"apple1"}
                            handleIconPress={() => handleIconPress()}
                        />
                    </View>
                    <View style={styles.newAcc}>
                        <Text style={styles.newAccText}>
                            You dont have an account?
                        </Text>
                        <TouchableOpacity
                            style={{}}
                        >
                            <Text style={styles.newAccInnerText}> Register here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 15,
    },
    title: {
        color: colors.darkGrey,
        fontSize: 32,
        fontWeight: "700",
        paddingBottom: 10,
    },
    subtitle: {
        color: colors.veryLightGrey,
        paddingBottom: 40,
    },
    inputTitle: {
        color: colors.darkGrey,
        fontSize: 16,
        fontWeight: "400",
        paddingBottom: 5,
        paddingTop: 10,
    },
    recoverPassword: {
        alignItems: "flex-end",
        paddingVertical: 10,
    },
    recoverPasswordText: {
        color: colors.darkPink,
        fontSize: 16,
        fontWeight: "500",
    },
    button: {
        backgroundColor: colors.orange,
        color: colors.white,
    },
    sectionDivider: {
        alignItems: "center",
        backgroundColor: colors.veryLightGrey,
        height: 2,
        marginTop: 50,
        position: "relative",
    },
    sectionDividerText: {
        backgroundColor: colors.white,
        color: colors.veryLightGrey,
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: "absolute",
        top: -15,
    },
    loginAlt: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 120,
        paddingVertical: 40,
    },
    newAcc: {
        flexDirection: "row",
        justifyContent: "center",
    },
    newAccText: {
        color: colors.darkGrey,
    },
    newAccInnerText: {
        color: colors.darkPink,
    }
})

export default LoginScreen;