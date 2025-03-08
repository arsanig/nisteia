import { filterEvents } from "./getFastOrFeast";

export const getNoEatFish = (): boolean => {
    const events = filterEvents();
    return events.some((e) => e.noFish);
};
