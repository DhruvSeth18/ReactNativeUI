import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image } from "react-native";
import signInStyle from "./styles";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

const SignIn = (props) => {
    const [login, setLogin] = useState({});
    const onChangeHandler = (name, value) => {
        setLogin({ ...login, [name]: value });
        console.warn(login);
    };
    return (<>
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/background.png")} style={{ flex: 1 }} resizeMode="cover">
                <ScrollView>
                    <View style={{ marginTop: 90, }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 40, fontWeight: "bold" }}>Welcome Back</Text>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold" }}>Sign In</Text>
                    </View>
                    <View style={{ marginTop: 110 }}>
                        <TextInput placeholder="Email" onChangeText={(text) => onChangeHandler('email', text)} placeholderTextColor={"white"} style={{ color: "white", borderBottomWidth: 1, borderBottomColor: "white", fontSize: 20, fontWeight: "bold", marginHorizontal: 15, paddingVertical: 15 }} />
                        <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => onChangeHandler('password', text)} placeholderTextColor={"white"} style={{ color: "white", borderBottomWidth: 1, borderBottomColor: "white", fontSize: 20, fontWeight: "bold", marginHorizontal: 15, paddingVertical: 15, marginTop: 30 }} />
                    </View>
                    <View style={{ marginTop: 115 }}>
                        <TouchableHighlight style={{ paddingVertical: 15, marginHorizontal: 20, backgroundColor: "#930038", borderRadius: 10 }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 25, fontWeight: "bold" }}>Sign In</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ paddingVertical: 15, paddingHorizontal: 20, marginHorizontal: 20, backgroundColor: "white", borderRadius: 10, marginTop: 25 }}>
                            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <View style={{ display: "flex", flexDirection: "row", gap: 30 }} >
                                    <Image source={require('../../assets/google.png')} style={{ width: 30, height: 30 }} />
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sign in with Google</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={{ paddingVertical: 15, paddingHorizontal: 20, marginHorizontal: 25, borderRadius: 10 }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontWeight: "bold" }}> <Text style={{color:"skyblue"}}>  Forgot your Password? </Text>| Click Here</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight  onPress={()=>props.navigation.navigate("signup")} style={{ paddingVertical: 15, paddingHorizontal: 20, marginHorizontal: 25,marginTop:50, borderRadius: 10 ,marginBottom:20}}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Don’t have an account? | Sign Up</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    </>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SignIn;