import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface SignUpProps {
    navigation: NavigationProp<any>; 
}

interface LoginState {
    username?: string;
    email?: string;
    password?: string;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [login, setLogin] = useState<LoginState>({});

    const onChangeHandler = (name: keyof LoginState, value: string) => {
        setLogin({ ...login, [name]: value });
        console.warn(login);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/background.png")} style={{ flex: 1 }} resizeMode="cover">
                <ScrollView>
                    <View style={{ marginTop: 90 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 50, fontWeight: "bold" }}>Welcome</Text>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 22, fontWeight: "bold" }}>Sign Up</Text>
                    </View>
                    <View style={{ marginTop: 60 }}>
                        <TextInput
                            placeholder="Username"
                            onChangeText={(text) => onChangeHandler('username', text)}
                            placeholderTextColor={"white"}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Email"
                            onChangeText={(text) => onChangeHandler('email', text)}
                            placeholderTextColor={"white"}
                            style={[styles.input, { marginTop: 30 }]}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => onChangeHandler('password', text)}
                            placeholderTextColor={"white"}
                            style={[styles.input, { marginTop: 30 }]}
                        />
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <TouchableHighlight style={styles.createAccountButton}>
                            <Text style={styles.createAccountText}>Create an Account</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.googleButton}>
                            <View style={styles.googleButtonContent}>
                                <Image source={require('../../assets/google.png')} style={styles.googleIcon} />
                                <Text style={styles.googleButtonText}>Sign in with Google</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.forgotPasswordButton}>
                            <Text style={styles.forgotPasswordText}>
                                <Text style={{ color: "skyblue" }}>Forgot your Password?</Text> | Click Here
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => props.navigation.navigate("signin")} style={styles.signInButton}>
                            <Text style={styles.signInText}>Have an account? | Sign In</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 35,
        paddingVertical: 15,
    },
    createAccountButton: {
        paddingVertical: 15,
        marginHorizontal: 50,
        backgroundColor: "#930038",
        borderRadius: 10,
    },
    createAccountText: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    googleButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 25,
    },
    googleButtonContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 14,
    },
    googleIcon: {
        width: 30,
        height: 30,
    },
    googleButtonText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    forgotPasswordButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 25,
        borderRadius: 10,
    },
    forgotPasswordText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    signInButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 25,
        marginTop: 40,
        borderRadius: 10,
        marginBottom: 20,
    },
    signInText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default SignUp;
