import React, { useState } from 'react';
import './Student.css'; // Import the CSS file for styling

const Student = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="student-container">
      <div className="sidebar">
        <div
          className={`sidebar-item ${selectedTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabClick('dashboard')}
        >
          Dashboard
        </div>
        <div
          className={`sidebar-item ${selectedTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </div>
        <div
          className={`sidebar-item ${selectedTab === 'calendar' ? 'active' : ''}`}
          onClick={() => handleTabClick('calendar')}
        >
          Calendar
        </div>
        <div
          className={`sidebar-item ${selectedTab === 'courses' ? 'active' : ''}`}
          onClick={() => handleTabClick('courses')}
        >
          Courses
        </div>
      </div>

      {/* Content based on selected tab */}
      <div className="content">
        {selectedTab === 'dashboard' && (
          <div>
            {/* Dashboard Content */}
            <h2>Dashboard</h2>
            {/* Add dashboard information here */}
          </div>
        )}
        {selectedTab === 'profile' && (
          <div>
            {/* Profile Content */}
            <h2>Profile</h2>
            {/* Add profile information here */}
          </div>
        )}
        {selectedTab === 'calendar' && (
          <div>
            {/* Calendar Content */}
            <h2>Calendar</h2>
            {/* Add calendar component or information here */}
          </div>
        )}
        {selectedTab === 'courses' && (
          <div>
            {/* Courses Content */}
            <h2>Courses</h2>
            {/* Add course list or component here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
