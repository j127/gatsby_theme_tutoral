// TODO: date formatting isn't right, but it isn't the important part of the
// tutorial, so I'm not going to debug. See this page:
// https://www.gatsbyjs.com/tutorial/building-a-theme/#style-and-format-dates-in-react
import React from "react";

const getDate = (date, { day = true, month = true, year = true } = {}) => {
    const result = date.toLocaleDateString("en-US", {
        day: day ? "numeric" : undefined,
        month: month ? "long" : undefined,
        year: year ? "numeric" : undefined,
    });

    console.log("date (input)", date);
    console.log("result", result);

    return result;
};

const EventDate = ({ startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const isOneDay = start.toDateString() === end.toDateString();
    console.log("isOneDay", isOneDay);

    return (
        <>
            <time dateTime={start.toISOString()}>
                {getDate(start, { year: isOneDay })}
            </time>
            {!isOneDay && (
                <>
                    -
                    <time dateTime={end.toISOString()}>
                        {getDate(end, {
                            month: start.getMonth() !== end.getMonth(),
                        })}
                    </time>
                </>
            )}
        </>
    );
};

const Event = ({ name, location, url, startDate, endDate }) => {
    return (
        <div>
            <h1>
                {name} ({location})
            </h1>
            <p>
                <EventDate startDate={startDate} endDate={endDate} />
            </p>
            <p>
                Website: <a href={url}>{url}</a>
            </p>
        </div>
    );
};

export default Event;
