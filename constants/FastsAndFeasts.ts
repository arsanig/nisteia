export const fastsAndFeasts = {
    year: "2025",
    amYear: "1741 – 1742",
    events: [
        {
            id: "0",
            eventTitle: "The Holy Nativity Feast",
            description: "",
            type: "Feast",
            startDate: "January 7",
            endDate: "",
        },
        {
            id: "1",
            eventTitle: "The Circumcision Feast",
            description: "",
            type: "Feast",
            startDate: "January 14",
            endDate: "",
        },
        {
            id: "2",
            eventTitle: "The Holy Epiphany",
            description: "",
            type: "Fast",
            startDate: "January 19",
            endDate: "",
        },
        {
            id: "3",
            eventTitle: "Feast of the Wedding of Cana of Galilee",
            description: "",
            type: "Feast",
            startDate: "January 21",
            endDate: "",
        },
        {
            id: "4",
            eventTitle: "Jonah's Fast",
            description: "(Nineveh)",
            type: "Fast",
            startDate: "February 10",
            endDate: "February 12",
        },
        {
            id: "5",
            eventTitle: "Jonah's Feast",
            description: "(Nineveh)",
            type: "Feast",
            startDate: "February 13",
            endDate: "",
        },
        {
            id: "6",
            eventTitle: "Presentation of the Lord into the Temple",
            description: "",
            type: "Fast",
            startDate: "February 15",
            endDate: "",
        },
        {
            id: "7",
            eventTitle: "Holy Great Fast",
            description: "",
            type: "Fast",
            startDate: "February 24",
            endDate: "April 11",
        },
        {
            id: "8",
            eventTitle: "The Feast of the Cross",
            description: "",
            type: "Feast",
            startDate: "March 19",
            endDate: "",
        },
        {
            id: "9",
            eventTitle: "Annunciation Feast",
            description: "",
            type: "Feast",
            startDate: "April 7",
            endDate: "",
        },
        {
            id: "10",
            eventTitle: "Lazarus Saturday",
            description: "",
            type: "Fast",
            startDate: "April 12",
            endDate: "",
        },
        {
            id: "11",
            eventTitle: "Entry of our Lord into Jerusalem",
            description: "(Hosanna Sunday)",
            type: "Fast",
            startDate: "April 13",
            endDate: "",
        },
        {
            id: "12",
            eventTitle: "Holy Pascha",
            description: "",
            type: "Fast",
            startDate: "April 14",
            endDate: "April 16",
        },
        {
            id: "13",
            eventTitle: "Covenant Thursday",
            description: "",
            type: "Fast",
            startDate: "April 17",
            endDate: "",
        },
        {
            id: "14",
            eventTitle: "Good Friday",
            description: "",
            type: "Fast",
            startDate: "April 18",
            endDate: "",
        },
        {
            id: "15",
            eventTitle: "Glorious Feast of the Resurrection",
            description: "",
            type: "Feast",
            startDate: "April 20",
            endDate: "",
        },
        {
            id: "16",
            eventTitle: "Thomas’ Sunday",
            description: "",
            type: "Fast",
            startDate: "April 27",
            endDate: "",
        },
        {
            id: "17",
            eventTitle: "Martyrdom of St. Mark the Evangelist",
            description: "",
            type: "Fast",
            startDate: "May 8",
            endDate: "",
        },
        {
            id: "18",
            eventTitle: "The Holy Feast of Ascension",
            description: "",
            type: "Feast",
            startDate: "May 29",
            endDate: "",
        },
        {
            id: "19",
            eventTitle: "Entry of the Lord into Egypt",
            description: "",
            type: "Fast",
            startDate: "June 1",
            endDate: "",
        },
        {
            id: "20",
            eventTitle: "The Holy Pentecost Feast",
            description: "",
            type: "Feast",
            startDate: "June 8",
            endDate: "",
        },
        {
            id: "21",
            eventTitle: "The Apostles' Fast",
            description: "",
            type: "Fast",
            startDate: "June 9",
            endDate: "July 11",
        },
        {
            id: "22",
            eventTitle: "The Apostles' Feast",
            description: "(Martyrdom of St. Peter & St. Paul)",
            type: "Feast",
            startDate: "July 12",
            endDate: "",
        },
        {
            id: "23",
            eventTitle: "St. Mary's Fast",
            description: "",
            type: "Fast",
            startDate: "August 7",
            endDate: "August 21",
        },
        {
            id: "24",
            eventTitle: "Transfiguration Feast",
            description: "",
            type: "Feast",
            startDate: "August 19",
            endDate: "",
        },
        {
            id: "25",
            eventTitle: "Assumption of St. Mary's Body",
            description: "",
            type: "Fast",
            startDate: "August 22",
            endDate: "",
        },
        {
            id: "26",
            eventTitle: "The Nayrouz Feast",
            description: "(Coptic New Year)",
            type: "Feast",
            startDate: "September 11",
            endDate: "",
        },
        {
            id: "27",
            eventTitle: "The Feast of the Cross",
            description: "(Three days)",
            type: "Feast",
            startDate: "September 27",
            endDate: "September 29",
        },
        {
            id: "28",
            eventTitle: "The Holy Nativity Fast",
            description: "",
            type: "Fast",
            startDate: "November 25",
            endDate: "January 6",
        },
    ],
};

type CurrentFastSchema = {
    tense: "today" | "next fast" | "next feast";
    year: string;
    amYear: string;
    fastOrFeast: string | undefined;
    description?: string;
    startDate: string | undefined;
    endDate?: string;
};

// Needa write this to filter for current fast or feast
export const getCurrentFastInfo = (): CurrentFastSchema => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to remove time differences

    let currentFastOrFeast = fastsAndFeasts.events.find((event) => {
        const start = new Date(convertDateString(`${event.startDate} ${fastsAndFeasts.year}`));
        start.setHours(24, 0, 0, 0); // Normalize start date

        if (event.endDate) {
            const end = new Date(convertDateString(`${event.endDate} ${fastsAndFeasts.year}`));
            end.setHours(47, 59, 59, 999); // Ensure full day inclusion
            return today >= start && today <= end;
        }

        return today.getDate() === start.getDate();
    });

    let tense = "today" as const;
    if (!currentFastOrFeast) {
        tense = "next fast";
        currentFastOrFeast = getNextClosestEvent() ?? undefined;
    }

    return {
        tense,
        year: fastsAndFeasts.year,
        amYear: fastsAndFeasts.amYear,
        fastOrFeast: currentFastOrFeast?.eventTitle,
        description: currentFastOrFeast?.description,
        startDate: currentFastOrFeast?.startDate,
        endDate: currentFastOrFeast?.endDate,
    };
};

function convertDateString(dateStr: string) {
    const months = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12",
    };

    const [month, day, year] = dateStr.split(" "); // Split into parts
    const formattedDay = day.padStart(2, "0"); // Ensure two-digit day

    return `${year}-${months[month]}-${formattedDay}`;
}

function getNextClosestEvent() {
    const today = new Date();

    // Find the next closest event
    let nextEvent = null;
    let minDiff = Infinity;

    for (const event of fastsAndFeasts.events) {
        const eventDate = new Date(convertDateString(`${event.startDate} ${fastsAndFeasts.year}`));
        eventDate.setHours(24, 0, 0, 0); // Normalize start date
        const diff = eventDate - today;

        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            nextEvent = event;
        }
    }

    return nextEvent;
}
