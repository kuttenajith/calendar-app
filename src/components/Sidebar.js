import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
    const events = [
        { id: 1, name: 'Event-1', time: '10:00 AM', profilePic: '../images/event-1.jpg' },
        { id: 2, name: 'Event-2', time: '11:00 AM', profilePic: '../images/event-2.jpg' },
        { id: 3, name: 'Event-3', time: '12:00 PM', profilePic: '../images/event-3.jpg' },
        { id: 4, name: 'Event-4', time: '01:00 PM', profilePic: '../images/event-4.jpg' },
        { id: 5, name: 'Event-5', time: '02:00 PM', profilePic: '../images/event-2.jpg' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h2>Home</h2>
            </div>
            <div className="sidebar-section">
                <h2>Academi</h2>
                <ul>
                    <li>Academi Calendar</li>
                    <li>My Calendar</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h2>My Schedule</h2>
                <ul>
                    {events.map((event) => (
                        <li key={event.id} className="event-item">
                            <input type="checkbox" id={`event-${event.id}`} />
                            <label htmlFor={`event-${event.id}`}>{event.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-section">
                <h2>Upcoming Events</h2>
                <ul className='event-list'>
                    {events.map((event) => (
                        <li key={event.id} className="upcoming-event-item">
                            <div className="event-info">
                                <img src={event.profilePic} alt="Profile" className="event-profile-pic" />
                            </div>
                            <div className='event-details'>
                                <p>{event.name}</p>
                                <div className='event-description'>
                                    <span>Description</span>
                                    <span>{event.time}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;