import React from "react";

const Event = ({ name, location, url, startDate, endDate }) => {
    return (
        <div>
            <h1>
                {name} ({location})
            </h1>
            <p>
                {startDate} to {endDate}
            </p>
            <p>
                Website: <a href={url}>{url}</a>
            </p>
        </div>
    );
};

export default Event;
