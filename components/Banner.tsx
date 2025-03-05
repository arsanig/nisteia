import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { Colors } from "../constants/Colors";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const BANNER_HEIGHT = 200 + statusBarHeight;

export function Banner() {
    return (
        <ThemedView style={styles.banner} lightColor={Colors.light.banner} darkColor={Colors.dark.banner}></ThemedView>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: BANNER_HEIGHT,
    },
});
