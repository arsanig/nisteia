import { type TextProps, Text, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

export type ThemedListTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: "fast" | "date";
};

export function ThemedListText({ style, lightColor, darkColor, type, ...rest }: ThemedListTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return (
        <Text
            style={[
                { color },
                type === "fast" ? styles.fast : undefined,
                type === "date" ? styles.date : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    fast: {
        fontSize: 20,
        paddingBottom: 14,
        fontFamily: "Barlow400",
    },
    date: {
        fontSize: 14,
        fontFamily: "Barlow400",
    },
});
