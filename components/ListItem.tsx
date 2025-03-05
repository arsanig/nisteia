import { View, StyleSheet, useColorScheme } from "react-native";
import { ThemedListText } from "./ThemedListText";

type ListItemProps = { title: string; date: string };

export function ListItem({ title, date }: ListItemProps) {
    return (
        <View style={styles.item}>
            <ThemedListText type="fast">{title}</ThemedListText>
            <ThemedListText type="date">{date}</ThemedListText>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 30,
    },
});
