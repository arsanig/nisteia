import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Colors } from "../constants/Colors";
import Constants from "expo-constants";
import { getCurrentFastInfo } from "../helpers/getFastOrFeast";
import { getNoEatFish } from "../helpers/getNoEatFish";

const statusBarHeight = Constants.statusBarHeight;
const BANNER_HEIGHT = 200 + statusBarHeight;

const currentFast = getCurrentFastInfo();

export function Banner() {
    return (
        <ThemedView style={styles.background} lightColor={Colors.light.banner} darkColor={Colors.dark.banner}>
            <View style={styles.banner}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.topTitle}>{currentFast.tense}</Text>
                    <Text style={styles.fast}>{`${currentFast.fastOrFeast} ${
                        currentFast.description ? currentFast.description : ""
                    }`}</Text>
                    <Text style={styles.date}>
                        {currentFast.endDate
                            ? currentFast.startDate + " - " + currentFast.endDate
                            : currentFast.startDate}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={styles.bottomTitle}>{"Coptic Orthodox Fasts & Feasts"}</Text>
                        <Text style={styles.annual}>{`${currentFast.year} AD  |  ${currentFast.amYear} AM`}</Text>
                    </View>
                    {getNoEatFish() && (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 18 }}>{"👎"}</Text>
                            <Text style={{ fontSize: 26 }}>{"🐠"}</Text>
                        </View>
                    )}
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
