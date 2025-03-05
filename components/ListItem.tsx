import { View, StyleSheet, useColorScheme } from "react-native";
import { ThemedListText } from "./ThemedListText";

type ListItemProps = { title: string; description?: string; startDate: string; endDate?: string };

export function ListItem({ title, description, startDate, endDate }: ListItemProps) {
    return (
        <View style={styles.item}>
            <ThemedListText type="fast">{title}</ThemedListText>
            {description && <ThemedListText type="description">{description}</ThemedListText>}
            <ThemedListText type="date">{`${startDate}${endDate ? ` - ${endDate}` : ""}`}</ThemedListText>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 30,
    },
});
