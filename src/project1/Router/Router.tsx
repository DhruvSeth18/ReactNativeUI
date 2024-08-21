import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView,StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.safeArea}>
                <Stack.Navigator>
                    <Stack.Screen name="signin" options={{headerShown:false}} component={SignIn} />
                    <Stack.Screen name="signup" options={{headerShown:false}} component={SignUp} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1, // Ensure the SafeAreaView takes up the entire screen
    },
  });
  
export default Router;