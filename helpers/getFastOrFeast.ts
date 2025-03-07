import { fastsAndFeasts } from "../constants/FastsAndFeasts";
import { convertDateString } from "./date";

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
const today = new Date("2025-04-22").toISOString();

export const filterEvents = () => {
    const events = fastsAndFeasts.events.filter((event) => {
        const start = new Date(convertDateString(`${event.startDate} ${fastsAndFeasts.year}`)).toISOString();

        if (today === start) {
            return event;
        }

        if (event.endDate) {
            const end = new Date(convertDateString(`${event.endDate} ${fastsAndFeasts.year}`)).toISOString();
            if (today >= start && today <= end) {
                return event;
            }
        }
    });
    return events;
};

const getNextClosestEvent = () => {
    let nextEvent = null;
    let minDiff = Infinity;

    for (const event of fastsAndFeasts.events) {
        const eventDate = new Date(convertDateString(`${event.startDate} ${fastsAndFeasts.year}`)).toISOString();

        const diff = (new Date(eventDate).getTime() - new Date(today).getTime()) / 1000 / 60;

        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            nextEvent = event;
        }
    }

    return nextEvent;
};

export const getCurrentFastInfo = (): CurrentFastSchema => {
    const events = filterEvents();
    let currentFastOrFeast = undefined;

    if (events.length == 1) {
        currentFastOrFeast = events[0];
    } else if (events.length > 1) {
        currentFastOrFeast = events?.find((event) => {
            const start = new Date(convertDateString(`${event?.startDate} ${fastsAndFeasts.year}`)).toISOString();
            return today === start;
        });
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
