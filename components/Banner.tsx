import { Text, StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Colors } from "../constants/Colors";
import Constants from "expo-constants";
import { getCurrentFastInfo } from "../helpers/getFastOrFeast";
import { getNoEatFish } from "../helpers/getNoEatFish";
import { formatDate } from "../helpers/date";
import { useEffect, useState } from "react";
import Midnight from "react-native-midnight";

const statusBarHeight = Constants.statusBarHeight;
const BANNER_HEIGHT = 200 + statusBarHeight;

export const Banner = () => {
    const [currentFast, setCurrentFast] = useState(getCurrentFastInfo);
    // const currentFast = getCurrentFastInfo();
    const startDate = formatDate(currentFast.startDate);
    const endDate = formatDate(currentFast.endDate);

    useEffect(() => {
        const listener = Midnight.addListener(() => {
            setCurrentFast(getCurrentFastInfo());
        });
        return () => listener.remove();
    }, []);

    return (
        <ThemedView style={styles.background} lightColor={Colors.light.banner} darkColor={Colors.dark.banner}>
            <View style={styles.banner}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.topTitle}>{currentFast.tense}</Text>
                    <Text style={styles.fast}>{currentFast.fastOrFeast}</Text>
                    {currentFast.description && <Text style={styles.fastDescription}>{currentFast.description}</Text>}
                    <Text style={styles.date}>{endDate !== startDate ? startDate + " - " + endDate : startDate}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.bottomTitle}>{"Coptic Orthodox Fasts & Feasts"}</Text>
                        <Text style={styles.annual}>{`${currentFast.year} AD  |  ${currentFast.amYear} AM`}</Text>
                    </View>
                    {getNoEatFish() && (
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 18 }}>{"👎 "}</Text>
                            <Text style={{ fontSize: 24 }}>{"🍣"}</Text>
                        </View>
                    )}
                </View>
            </View>
        </ThemedView>
    );
};

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
        justifyContent: "space-evenly",
    },
    topTitle: {
        color: Colors.sand,
        fontFamily: "Barlow700",
        fontSize: 16,
        textTransform: "uppercase",
        paddingBottom: 7,
    },
    fast: {
        color: Colors.dark.text,
        fontFamily: "NotoSerif700",
        fontSize: 32,
    },
    fastDescription: {
        color: Colors.dark.text,
        fontFamily: "NotoSerif700",
        fontSize: 22,
        paddingBottom: 7,
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
