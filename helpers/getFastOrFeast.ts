import { fastsAndFeasts } from "../constants/FastsAndFeasts";

type FastOrFeastSchema = {
    id: string;
    eventTitle: string;
    description?: string;
    type: string;
    startDate: number;
    endDate: number;
    noFish: boolean;
};

export type CurrentFastSchema = {
    tense: "today" | "next fast" | "next feast";
    year: string;
    amYear: string;
    fastOrFeast: string | undefined;
    description?: string;
    startDate: number;
    endDate: number;
    noFish: boolean;
};

const today = Date.now();

export const filterEvents = () => {
    const events = fastsAndFeasts.events.filter((e) => today >= e.startDate && today <= e.endDate);
    return events;
};

const getNextClosestEvent = (events: FastOrFeastSchema[]): FastOrFeastSchema | undefined => {
    let nextEvent = undefined;
    let minDiff = Infinity;

    events.forEach((e) => {
        const diff = e.endDate - today;

        if (diff >= 0 && diff < minDiff) {
            minDiff = diff;
            nextEvent = e;
        }
    });

    return nextEvent;
};

export const getCurrentFastInfo = (): CurrentFastSchema => {
    let currentFastOrFeast = undefined;
    const events = filterEvents();
    currentFastOrFeast = getNextClosestEvent(events) ?? undefined;

    let tense: CurrentFastSchema["tense"] = "today";
    if (currentFastOrFeast) {
        if (today < currentFastOrFeast?.startDate || today > currentFastOrFeast?.endDate) {
            tense = currentFastOrFeast?.type === "fast" ? "next fast" : "next feast";
        }
    }

    return {
        tense,
        year: fastsAndFeasts.year,
        amYear: fastsAndFeasts.amYear,
        fastOrFeast: currentFastOrFeast?.eventTitle,
        description: currentFastOrFeast?.description,
        startDate: currentFastOrFeast?.startDate || today,
        endDate: currentFastOrFeast?.endDate || today,
        noFish: currentFastOrFeast?.noFish ?? false,
    };
};
