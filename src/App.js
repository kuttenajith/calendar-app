import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Calendar />
      </div>
    </div>
  );
}

export default App;