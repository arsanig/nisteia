import { filterEvents } from "./getFastOrFeast";

export const getNoEatFish = (): boolean => {
    let noFish = false;
    const events = filterEvents();

    noFish = events.some((e) => e.noFish);
    return noFish;
};
