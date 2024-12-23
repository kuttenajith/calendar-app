import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <input type="text" placeholder="Search..." className="search-bar" />
            <div className="header-left">
                <i className="icon">🏠</i>
                <i className="icon">⭐</i>
                <i className="icon">📅</i>
            </div>
            <div className="header-right">
                <i className="icon">💬</i>
                <i className="icon">🔔</i>
                <div className="profile">
                    <img src="https://via.placeholder.com/30" alt="Profile" className="profile-pic" />
                    <span>Jacob Botssh</span>
                </div>
            </div>
        </header>
    );
}

export default Header;