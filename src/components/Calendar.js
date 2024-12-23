import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import '../styles/Calendar.css';

function Calendar() {
    const [events, setEvents] = useState([
        { title: 'Meeting with Dev Team', start: '2024-12-20T09:00:00', end: '2024-12-20T10:00:00' },
        { title: 'Meeting with QA Team', start: '2024-12-20T12:00:00', end: '2024-12-20T13:00:00' },
        { title: 'Client Presentation', start: '2024-12-22T11:00:00', end: '2024-12-22T12:30:00' },
        { title: 'Year-End Review', start: '2024-12-23T15:00:00', end: '2024-12-23T16:30:00' },
    ]);

    return (
        <div className="calendar-container">
            <div className="header-middle">
                <h1>Calendar</h1>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                }}
                events={events}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventColor="#3788d8" // Custom event color
            />
        </div>
    );
}

export default Calendar;
