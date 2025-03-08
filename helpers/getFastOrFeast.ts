import { fastsAndFeasts } from "../constants/FastsAndFeasts";

export type CurrentFastSchema = {
    tense: "today" | "next fast" | "next feast";
    year: string;
    amYear: string;
    fastOrFeast: string | undefined;
    description?: string;
    startDate: string | undefined;
    endDate?: string;
    noFish: boolean;
};

let tense: CurrentFastSchema["tense"] = "today";
const today = new Date().toISOString();

export const filterEvents = () => {
    const events = fastsAndFeasts.events.filter((e) => {
        if (today === e.startDate || (today >= e.startDate && today <= e.endDate)) {
            return e;
        }
    });
    return events;
};

const getNextClosestEvent = () => {
    let nextEvent = undefined;
    let minDiff = Infinity;

    fastsAndFeasts.events.forEach((e) => {
        const diff = (new Date(e.startDate).getTime() - new Date(today).getTime()) / 1000 / 60;

        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            nextEvent = e;
        }
    });

    return nextEvent;
};

export const getCurrentFastInfo = (): CurrentFastSchema => {
    const events = filterEvents();
    let currentFastOrFeast = undefined;

    if (events.length == 1) {
        currentFastOrFeast = events[0];
    } else if (events.length > 1) {
        currentFastOrFeast = events?.find((e) => today === e.startDate);
    }

    if (currentFastOrFeast === undefined) {
        currentFastOrFeast = getNextClosestEvent() ?? undefined;
        tense = currentFastOrFeast?.type === "fast" ? "next fast" : "next feast";
    }

    return {
        tense,
        year: fastsAndFeasts.year,
        amYear: fastsAndFeasts.amYear,
        fastOrFeast: currentFastOrFeast?.eventTitle,
        description: currentFastOrFeast?.description,
        startDate: currentFastOrFeast?.startDate,
        endDate: currentFastOrFeast?.endDate,
        noFish: currentFastOrFeast?.noFish ?? false,
    };
};
