export const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { month: "long", day: "2-digit", timeZone: "UTC" });
};
