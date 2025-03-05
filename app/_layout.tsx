import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    const [loaded] = useFonts({
        NotoSerif400: require("../assets/fonts/noto/noto-serif-latin-400-normal.ttf"),
        NotoSerif700: require("../assets/fonts/noto/noto-serif-latin-700-normal.ttf"),
        Barlow400: require("../assets/fonts/barlow/barlow-latin-400-normal.ttf"),
        Barlow700: require("../assets/fonts/barlow/barlow-latin-700-normal.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            // SplashScreen.hideAsync();
        }
    }, [loaded]);

    // if (!loaded) {
    //     return null;
    // }

    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="calendar/index" />
            </Stack>
            <StatusBar style="light" />
        </ThemeProvider>
    );
}
