import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Colors } from "../../constants/Colors";
import ThemedView from "../ThemedView";
import { useColorScheme } from "../../hooks/useColorScheme";

describe("<ThemedView />", () => {
    it("should render with light background in light mode", () => {
        (useColorScheme as jest.Mock).mockReturnValue("light");
        const snapshot = render(<ThemedView />);
        expect(snapshot).toMatchSnapshot();
        expect(screen.getByTestId("themed-view")).toHaveStyle({ backgroundColor: Colors.light.background });
    });

    /**
     * Need to fix this test case to mock dark properly
     */

    // it("should render with dark background in dark mode", () => {
    //     (useColorScheme as jest.Mock).mockReturnValue("dark");
    //     const snapshot = render(<ThemedView />);
    //     expect(snapshot).toMatchSnapshot();
    //     expect(screen.getByTestId("themed-view")).toHaveStyle({ backgroundColor: Colors.dark.background });
    // });
});
