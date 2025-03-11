import { View, type ViewProps } from "react-native";

import { useThemeColor } from "../hooks/useThemeColor";

type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

const ThemedView = ({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <View testID="themed-view" style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemedView;
