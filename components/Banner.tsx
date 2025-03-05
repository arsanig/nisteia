import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Colors } from "../constants/Colors";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const BANNER_HEIGHT = 200 + statusBarHeight;

export function Banner() {
    return (
        <ThemedView style={styles.background} lightColor={Colors.light.banner} darkColor={Colors.dark.banner}>
            <View style={styles.banner}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.topTitle}>{"today"}</Text>
                    <Text style={styles.fast}>{"Holy Great Fast"}</Text>
                    {/* <Text style={styles.fastDescription}>{""}</Text> */}
                    <Text style={styles.date}>{"February 24 - April 11"}</Text>
                </View>
                <View>
                    <Text style={styles.bottomTitle}>{"Coptic Orthodox Fasts & Feasts"}</Text>
                    <Text style={styles.annual}>{"2025 AD  |  1741 - 1742 AM"}</Text>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    background: {
        height: BANNER_HEIGHT,
    },
    banner: {
        backgroundColor: "transparent",
        marginTop: statusBarHeight,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: BANNER_HEIGHT - statusBarHeight,
        flexDirection: "column",
        justifyContent: "center",
    },
    topTitle: {
        color: Colors.sand,
        fontFamily: "Barlow700",
        fontSize: 16,
        textTransform: "uppercase",
    },
    fast: {
        color: Colors.dark.text,
        fontFamily: "NotoSerif700",
        fontSize: 28,
        marginVertical: 4,
    },
    fastDescription: {
        color: Colors.dark.text,
        fontFamily: "NotoSerif700",
        fontSize: 18,
    },
    date: {
        color: Colors.dark.text,
        fontFamily: "NotoSerif700",
        fontSize: 14,
    },
    bottomTitle: {
        color: Colors.sand,
        fontFamily: "Barlow400",
        fontSize: 14,
    },
    annual: {
        color: Colors.dark.text,
        fontFamily: "Barlow400",
        fontSize: 17,
        marginTop: 4,
    },
});
