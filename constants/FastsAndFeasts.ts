export const fastsAndFeasts = {
    year: "2025",
    amYear: "1741 – 1742",
    events: [
        { id: "0", event: "The Holy Nativity Feast", type: "Feast", date: "January 7" },
        { id: "1", event: "The Circumcision Feast", type: "Feast", date: "January 14" },
        { id: "2", event: "The Holy Epiphany", type: "Fast", date: "January 19" },
        { id: "3", event: "Feast of the Wedding of Cana of Galilee", type: "Feast", date: "January 21" },
        { id: "4", event: "Jonah's (Nineveh) Fast", type: "Fast", date: "February 10–12" },
        { id: "5", event: "Jonah's (Nineveh) Feast", type: "Feast", date: "February 13" },
        { id: "6", event: "Presentation of the Lord into the Temple", type: "Fast", date: "February 15" },
        { id: "7", event: "Holy Great Fast", type: "Fast", date: "February 24 – April 11" },
        { id: "8", event: "The Feast of the Cross", type: "Feast", date: "March 19" },
        { id: "9", event: "Annunciation Feast", type: "Feast", date: "April 7" },
        { id: "10", event: "Lazarus Saturday", type: "Fast", date: "April 12" },
        { id: "11", event: "Entry of our Lord into Jerusalem (Hosanna Sunday)", type: "Fast", date: "April 13" },
        { id: "12", event: "Holy Pascha", type: "Fast", date: "April 14–16" },
        { id: "13", event: "Covenant Thursday", type: "Fast", date: "April 17" },
        { id: "14", event: "Good Friday", type: "Fast", date: "April 18" },
        { id: "15", event: "Glorious Feast of the Resurrection", type: "Feast", date: "April 20" },
        { id: "16", event: "Thomas’ Sunday", type: "Fast", date: "April 27" },
        { id: "17", event: "Martyrdom of St. Mark the Evangelist", type: "Fast", date: "May 8" },
        { id: "18", event: "The Holy Feast of Ascension", type: "Feast", date: "May 29" },
        { id: "19", event: "Entry of the Lord into Egypt", type: "Fast", date: "June 1" },
        { id: "20", event: "The Holy Pentecost Feast", type: "Feast", date: "June 8" },
        { id: "21", event: "The Apostles' Fast", type: "Fast", date: "June 9 – July 11" },
        {
            id: "22",
            event: "The Apostles' Feast (Martyrdom of St. Peter & St. Paul)",
            type: "Feast",
            date: "July 12",
        },
        { id: "23", event: "St. Mary's Fast", type: "Fast", date: "August 7–21" },
        { id: "24", event: "Transfiguration Feast", type: "Feast", date: "August 19" },
        { id: "25", event: "Assumption of St. Mary's Body", type: "Fast", date: "August 22" },
        { id: "26", event: "The Nayrouz Feast (Coptic New Year)", type: "Feast", date: "September 11" },
        { id: "27", event: "The Feast of the Cross (Three days)", type: "Feast", date: "September 27–29" },
        { id: "28", event: "The Holy Nativity Fast", type: "Fast", date: "November 25 – January 6" },
    ],
};

type CurrentFastSchema = {
    tense: "today" | "next fast";
    year: string;
    amYear: string;
    fastOrFeast: string | undefined;
    date: string | undefined;
};

// Needa write this to filter for current fast or feast
export const getCurrentFastInfo = (): CurrentFastSchema => {
    const currentFastOrFeast = fastsAndFeasts.events.find((event) => {
        event.date;
    });
    return {
        tense: "today",
        year: fastsAndFeasts.year,
        amYear: fastsAndFeasts.amYear,
        fastOrFeast: currentFastOrFeast?.event,
        // description: currentFastOrFeast?.description,
        date: currentFastOrFeast?.date,
    };
};
