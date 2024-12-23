import React from 'react';
import '../styles/Calendar.css';

function EventCard({ event }) {
    return (
        <div
            className="event-card"
            style={{ backgroundColor: event.color }}
        >
            <strong>{event.name}</strong>
            <p>
                {event.start} - {event.end}
            </p>
        </div>
    );
}

export default EventCard;