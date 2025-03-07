import { View, StyleSheet, Text } from "react-native";
import { ThemedListText } from "./ThemedListText";

type ListItemProps = { title: string; description?: string; startDate: string; endDate?: string; noFish: boolean };

export function ListItem({ title, description, startDate, endDate, noFish }: ListItemProps) {
    return (
        <View style={styles.item}>
            <View style={{ maxWidth: "80%" }}>
                <ThemedListText type="fast">{title}</ThemedListText>
                {description && <ThemedListText type="description">{description}</ThemedListText>}
                <ThemedListText type="date">{`${startDate}${endDate ? ` - ${endDate}` : ""}`}</ThemedListText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>{noFish ? "👎 " : null}</Text>
                <Text style={{ fontSize: 26 }}>{noFish ? "🐠" : null}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 30,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
    },
});
