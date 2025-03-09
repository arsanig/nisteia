export const formatDate = (epoch: number): string => {
    return new Date(epoch).toLocaleDateString("en-US", { month: "long", day: "numeric" });
};
