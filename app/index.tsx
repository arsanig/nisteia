import { FlatList, StyleSheet, View } from "react-native";
import { Banner } from "../components/Banner";
import { ListItem } from "../components/ListItem";
import { fastsAndFeasts } from "../constants/FastsAndFeasts";
import { ThemedView } from "../components/ThemedView";
import Constants from "expo-constants";

export default function Home() {
    return (
        <ThemedView>
            <Banner />
            <FlatList
                contentContainerStyle={styles.listContentContainer}
                data={fastsAndFeasts.events}
                renderItem={({ item }) => <ListItem title={item.event} date={item.date} />}
                keyExtractor={(item) => item.id}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    listContentContainer: {
        //Banner height + statusBarHeight + some extra
        paddingBottom: 200 + Constants.statusBarHeight + 25,
    },
});
